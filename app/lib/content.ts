// Single source of truth for site copy. Pages render it as HTML, and proxy.ts
// serves it as Markdown to agents that send `Accept: text/markdown`.

export const siteUrl = 'https://nowayno.how'
export const email = 'hello@thegoodfornothings.club'

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
        `The best way to reach no way no how is by email at ${email}. Jason reads every message himself. Write in about shows, press, playlists, licensing a song, collaborating, or just to say a track meant something to you.`,
        'Please include a little context about who you are and what you have in mind. There is no form on this site, and no mailing list to sign up for, so email is the one place to start a conversation.',
      ],
      links: [{ label: email, href: `mailto:${email}` }],
    },
    {
      heading: 'Elsewhere',
      paragraphs: [
        'You can also follow along and send a message on Instagram, or buy music and leave a note through Bandcamp. The band is based in Austin, Texas, United States.',
      ],
      links: [...socialLinks, listenLinks[0]],
    },
  ],
}

export const privacy: Page = {
  path: '/privacy',
  title: 'Privacy policy',
  description:
    'What nowayno.how collects (very little), the third-party services it uses, and how to reach us about your data.',
  sections: [
    {
      heading: 'The short version',
      paragraphs: [
        'nowayno.how is a single-page band website. It has no accounts, no sign-up forms, no mailing list, and no advertising. We do not sell or share personal information.',
      ],
    },
    {
      heading: 'Analytics',
      paragraphs: [
        'The site uses Vercel Web Analytics to count page views. It does not use cookies and does not track you across other websites. It records aggregate information such as the page visited, the referring site, country, browser, and device type, so we can see roughly how many people visit.',
      ],
    },
    {
      heading: 'Hosting',
      paragraphs: [
        'The site is hosted on Vercel. Like any web host, Vercel processes standard request data, such as your IP address and browser user agent, to deliver pages and protect against abuse.',
      ],
    },
    {
      heading: 'Embedded content',
      paragraphs: [
        "The homepage embeds a Spotify player. Spotify may set cookies or collect data when the player loads or when you press play, under Spotify's own privacy policy. Links to Bandcamp, Apple Music, Instagram, and other sites are governed by those sites' policies once you leave nowayno.how.",
      ],
    },
    {
      heading: 'Email',
      paragraphs: [
        `If you email ${email}, we keep your message only to reply and do not add you to any list. To ask a question about your data or request deletion, email us at the same address.`,
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
