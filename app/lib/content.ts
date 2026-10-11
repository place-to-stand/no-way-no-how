// Single source of truth for site copy. Pages render it as HTML, and proxy.ts
// serves it as Markdown to agents that send `Accept: text/markdown`.

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

export const tracks = [
  { name: 'Faster & Faster', released: '2025', kind: 'Single' },
  { name: 'Build Our Home', released: '2024', kind: 'Single' },
]

export const pageLinks: Link[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
]

export type Section = { heading: string; paragraphs: string[]; links?: Link[] }

export type Page = {
  path: string
  title: string
  description: string
  sections: Section[]
}

export const about: Page = {
  path: '/about',
  title: 'About no way no how',
  description:
    'no way no how is the indie rock project of Austin, TX musician Jason Desiderio, recorded with friends.',
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        'no way no how is the indie rock project of Jason Desiderio, a musician based in Austin, Texas. Jason writes the songs and records them with a rotating group of friends, which is why every release is credited to "Jason Desiderio & friends."',
        'The music is melancholic, guitar-driven indie rock and alternative. The songs are for anyone who has packed up and moved to a new city, or who has tried, and maybe failed, to slow their life down a little.',
      ],
    },
    {
      heading: 'Releases',
      paragraphs: [
        '"Build Our Home" came out as a single in April 2024. "Faster & Faster" followed as a single on May 2, 2025, and is the latest release. Both are streaming everywhere listed below.',
      ],
      links: listenLinks,
    },
    {
      heading: 'More from Jason',
      paragraphs: [
        'Jason also writes about his other work on his personal site. For anything related to the band, the contact page is the fastest way to reach us.',
      ],
      links: [
        { label: 'jasondesiderio.com', href: 'https://jasondesiderio.com/' },
        { label: 'Contact no way no how', href: '/contact' },
      ],
    },
  ],
}

export const contact: Page = {
  path: '/contact',
  title: 'Contact no way no how',
  description:
    'How to reach no way no how, the Austin, TX indie rock project of Jason Desiderio.',
  sections: [
    {
      heading: 'Email',
      paragraphs: [
        `Email ${email} about shows, press, playlists, licensing a song, or collaborating. A sentence or two about who you are and what you have in mind helps.`,
      ],
      links: [{ label: email, href: `mailto:${email}` }],
    },
    {
      heading: 'Elsewhere',
      paragraphs: [
        'no way no how is based in Austin, Texas. You can also send a message on Instagram, or buy music and leave a note on Bandcamp.',
      ],
      links: [...socialLinks, listenLinks[0]],
    },
  ],
}

export const privacy: Page = {
  path: '/privacy',
  title: 'Privacy policy',
  description: 'What nowayno.how collects, which is very little.',
  sections: [
    {
      heading: 'The short version',
      paragraphs: [
        'nowayno.how has no accounts, forms, mailing list, or ads. We do not sell or share personal information.',
      ],
    },
    {
      heading: 'What is collected',
      paragraphs: [
        "Vercel hosts the site and runs its cookie-free analytics, which count page views by page, referrer, country, browser, and device. The Spotify player on the homepage is covered by Spotify's own privacy policy.",
      ],
    },
    {
      heading: 'Questions',
      paragraphs: [
        `To ask about your data or request deletion, email ${email}.`,
      ],
      links: [{ label: email, href: `mailto:${email}` }],
    },
  ],
}

export const pages = [about, contact, privacy]

function absolute(href: string) {
  return href.startsWith('/') ? `${siteUrl}${href}` : href
}

function linkList(links: Link[]) {
  return links.map(l => `- [${l.label}](${absolute(l.href)})`).join('\n')
}

export function pageToMarkdown(page: Page) {
  const sections = page.sections.map(s =>
    [
      `## ${s.heading}`,
      ...s.paragraphs,
      ...(s.links ? [linkList(s.links)] : []),
    ].join('\n\n')
  )
  return [`# ${page.title}`, `> ${page.description}`, ...sections].join('\n\n')
}

export const homeDescription =
  "Melancholic indie rock for anyone who's moved cities or tried to slow down."

export function homeMarkdown() {
  return [
    '# no way no how',
    '> Indie rock by Jason Desiderio & friends in Austin, TX.',
    homeDescription,
    '## Songs',
    tracks.map(t => `- "${t.name}" (${t.kind}, ${t.released})`).join('\n'),
    '## Listen',
    linkList(listenLinks),
    '## Follow',
    linkList(socialLinks),
    '## Contact',
    `Email [${email}](mailto:${email}) about shows, press, licensing, or anything else.`,
    '## More',
    linkList([...pageLinks, { label: 'llms.txt', href: '/llms.txt' }]),
  ].join('\n\n')
}

export function notFoundMarkdown(path: string) {
  return [
    '# 404: Page not found',
    `There is no page at \`${path}\` on nowayno.how.`,
    `Try the [homepage](${siteUrl}/), the [llms.txt index](${siteUrl}/llms.txt), or the [sitemap](${siteUrl}/sitemap.xml).`,
  ].join('\n\n')
}
