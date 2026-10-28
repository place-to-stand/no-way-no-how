// Site copy shared by the homepage, llms.txt, and the Markdown that proxy.ts
// serves to agents that send `Accept: text/markdown`.

export const siteUrl = 'https://nowayno.how'
export const email = 'jason@thegoodfornothings.club'

export type Link = { label: string; href: string }

export const listenLinks: Link[] = [
  { label: 'Bandcamp', href: 'https://nowaynohow.bandcamp.com/' },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/0Hhn7jlCTbqNyAOrI458SR',
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/artist/no-way-no-how/1738953726',
  },
]

export const socialLinks: Link[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/nowaynohowband/' },
]

// Music databases that search engines and AI tools use to identify the band.
export const profileLinks: Link[] = [
  {
    label: 'MusicBrainz',
    href: 'https://musicbrainz.org/artist/7dc39513-ace5-44d2-9bbb-ffec7601471b',
  },
]

export const tracks = [
  {
    name: 'Faster & Faster',
    released: '2025',
    datePublished: '2025-05-02',
    kind: 'Single',
    href: 'https://nowaynohow.bandcamp.com/track/faster-faster',
  },
  {
    name: 'Build Our Home',
    released: '2024',
    datePublished: '2024-04-12',
    kind: 'Single',
    href: 'https://nowaynohow.bandcamp.com/track/build-our-home',
  },
]

function absolute(href: string) {
  return href.startsWith('/') ? `${siteUrl}${href}` : href
}

function linkList(links: Link[]) {
  return links.map(l => `- [${l.label}](${absolute(l.href)})`).join('\n')
}

export const homeDescription =
  "Melancholic indie rock for anyone who's moved cities or tried to slow down."

export function homeMarkdown() {
  return [
    '# no way no how',
    '> Indie rock by Jason Desiderio & friends in Austin, TX.',
    homeDescription,
    '## Releases',
    tracks
      .map(t => `- [${t.name}](${t.href}) (${t.kind}, ${t.released})`)
      .join('\n'),
    '## Listen',
    linkList(listenLinks),
    '## Follow',
    linkList(socialLinks),
    '## Contact',
    `Email [${email}](mailto:${email}) about shows, press, licensing, or anything else.`,
    '## More',
    linkList([{ label: 'llms.txt', href: '/llms.txt' }]),
  ].join('\n\n')
}

export function notFoundMarkdown(path: string) {
  return [
    '# 404: Page not found',
    `There is no page at \`${path}\` on nowayno.how.`,
    `Try the [homepage](${siteUrl}/), the [llms.txt index](${siteUrl}/llms.txt), or the [sitemap](${siteUrl}/sitemap.xml).`,
  ].join('\n\n')
}
