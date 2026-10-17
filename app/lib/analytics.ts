// PostHog behind a dynamic import. posthog-js is ~95 KB gzipped, and a static
// import anywhere puts it in the page's initial JS. Loading it this way keeps
// it off the critical path: it downloads in parallel with hydration instead of
// ahead of it. Everything goes through this module, so nothing else should
// import "posthog-js" directly.
import type { PostHog } from 'posthog-js'

// Null when analytics is off (no key, or local dev), so calls below are
// no-ops. Resolves to null if posthog-js fails to load (e.g. a blocked chunk),
// which also makes them no-ops.
let client: Promise<PostHog | null> | null = null

// Outbound destinations, keyed by hostname, so reports group clicks by
// platform instead of by raw URL
const platforms: Record<string, string> = {
  'nowaynohow.bandcamp.com': 'Bandcamp',
  'open.spotify.com': 'Spotify',
  'music.apple.com': 'Apple Music',
  'www.instagram.com': 'Instagram',
  'jasondesiderio.com': 'Jason Desiderio',
}

/** Called once from instrumentation-client.ts, before hydration. */
export function initAnalytics() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  // Skip local dev so localhost sessions don't pollute analytics
  const isLocalhost = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(
    window.location.hostname
  )
  if (!key || isLocalhost || client) return

  client = import('posthog-js')
    .then(({ default: posthog }) => {
      // With `defaults: '2025-05-24'` the pageview is captured on init (for
      // the current URL, so loading late doesn't lose it)
      posthog.init(key, {
        // Same-origin proxy (see next.config.mjs rewrites) so ad blockers
        // don't drop events
        api_host: '/ingest',
        ui_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.posthog.com',
        capture_pageleave: true,
        person_profiles: 'identified_only',
        defaults: '2025-05-24',
      })
      return posthog
    })
    .catch(() => null)

  // Capture phase, so the click is seen even if something stops propagation.
  // Every outbound link opens in a new tab (or a mail client), so the page
  // stays alive long enough to send the event.
  document.addEventListener('click', trackOutboundClick, { capture: true })
}

export function capture(event: string, props?: Record<string, unknown>) {
  void client?.then(posthog => posthog?.capture(event, props))
}

function trackOutboundClick(event: MouseEvent) {
  const link =
    event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>('a[href]')
      : null
  if (!link) return

  const url = new URL(link.href, window.location.href)
  const isEmail = url.protocol === 'mailto:'
  if (!isEmail && url.origin === window.location.origin) return

  capture('outbound_link_click', {
    platform: isEmail
      ? 'Email'
      : (platforms[url.hostname] ?? url.hostname.replace(/^www\./, '')),
    // Drop the query string (e.g. Spotify's `si` share token)
    url: isEmail ? undefined : `${url.origin}${url.pathname}`,
    release: link.dataset.release,
  })
}
