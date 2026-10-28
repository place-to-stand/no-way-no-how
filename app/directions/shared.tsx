import Link from 'next/link'
import { email, listenLinks, socialLinks, tracks } from '../lib/content'
import BuildOurHome from '../covers/build-our-home.jpg'
import FasterAndFaster from '../covers/faster-and-faster.jpg'
import JasonGuitar from '../jason-guitar.jpg'
import { directions } from './list'

export { JasonGuitar }

export const releases = tracks.map(t => ({
  ...t,
  cover: t.name === 'Faster & Faster' ? FasterAndFaster : BuildOurHome,
}))

export const tagline =
  'Melancholic indie rock for anyone who’s moved cities or tried to slow down.'

export const allLinks = [
  ...listenLinks,
  ...socialLinks,
  { label: 'Email', href: `mailto:${email}` },
]

export function external(href: string) {
  return href.startsWith('mailto:')
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' }
}

export function SpotifyEmbed({ height = 352 }: { height?: number }) {
  return (
    <iframe
      title='no way no how on Spotify'
      style={{ borderRadius: '12px' }}
      src='https://open.spotify.com/embed/artist/0Hhn7jlCTbqNyAOrI458SR?utm_source=generator'
      width='100%'
      height={height}
      frameBorder='0'
      allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      loading='lazy'
    />
  )
}

// Floating pill for flipping between directions while reviewing
export function DirectionNav({ id }: { id: string }) {
  const i = directions.findIndex(d => d.id === id)
  const prev = directions[(i - 1 + directions.length) % directions.length]
  const next = directions[(i + 1) % directions.length]
  return (
    <nav className='fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-neutral-950/85 px-4 py-2 text-sm whitespace-nowrap text-white shadow-lg backdrop-blur'>
      <Link href={`/directions/${prev.id}`} aria-label='Previous direction'>
        &larr;
      </Link>
      <Link href='/directions' className='underline-offset-4 hover:underline'>
        {directions[i].id} &middot; {directions[i].name}
      </Link>
      <Link href={`/directions/${next.id}`} aria-label='Next direction'>
        &rarr;
      </Link>
    </nav>
  )
}

// Hover fill that sweeps in from the left, with the label nudging right.
// Put `sweepLabel` on the row's text so it moves with the fill.
const sweepBase =
  'group/sweep relative isolate overflow-hidden before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-[cubic-bezier(.7,0,.2,1)] hover:before:scale-x-100 focus-visible:before:scale-x-100 motion-reduce:before:transition-none'
export const sweepBlue = `${sweepBase} before:bg-[#82A6CA] hover:text-neutral-950 focus-visible:text-neutral-950`
export const sweepInk = `${sweepBase} before:bg-neutral-950 hover:text-[#e8eef5] focus-visible:text-[#e8eef5]`
export const sweepLabel =
  'transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] motion-safe:group-hover/sweep:translate-x-2 motion-safe:group-focus-visible/sweep:translate-x-2'
