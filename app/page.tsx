import Image from 'next/image'
import { SpotifyEmbed } from './components/spotify-embed'
import {
  email,
  listenLinks,
  profileLinks,
  siteUrl,
  socialLinks,
  tracks,
} from './lib/content'
import { mono } from './lib/fonts'
import { external } from './lib/utils'
import BuildOurHome from './covers/build-our-home.jpg'
import FasterAndFaster from './covers/faster-and-faster.jpg'
import JasonGuitar from './jason-guitar.jpg'

const covers = {
  'Faster & Faster': FasterAndFaster,
  'Build Our Home': BuildOurHome,
}

const releases = tracks.map(t => ({
  ...t,
  cover: covers[t.name as keyof typeof covers],
}))

const tagline =
  'Melancholic indie rock for anyone who’s moved cities or tried to slow down.'

const allLinks = [
  ...listenLinks,
  ...socialLinks,
  { label: 'Email', href: `mailto:${email}` },
]

const groupId = `${siteUrl}/#band`

// One graph so search engines and AI tools tie the site, the band, and the
// releases to a single entity. The name is also a common phrase, so
// alternateName and disambiguatingDescription help them tell us apart.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'no way no how',
      inLanguage: 'en-US',
      about: { '@id': groupId },
      publisher: { '@id': groupId },
    },
    {
      '@type': 'MusicGroup',
      '@id': groupId,
      name: 'no way no how',
      alternateName: ['No Way No How', 'No Way, No How', 'nowaynohow'],
      disambiguatingDescription:
        'Indie rock band from Austin, Texas, led by Jason Desiderio. Not the phrase "no way, no how" or any other artist or song with that title.',
      url: `${siteUrl}/`,
      image: `${siteUrl}/og-image.jpg`,
      logo: `${siteUrl}/icon.png`,
      description:
        "Melancholic indie rock from Austin-based musician Jason Desiderio, for anyone who's moved cities or tried to slow down.",
      genre: ['Indie Rock', 'Alternative'],
      foundingLocation: {
        '@type': 'Place',
        name: 'Austin, Texas',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Austin',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
      },
      member: {
        '@type': 'Person',
        name: 'Jason Desiderio',
        url: 'https://jasondesiderio.com/',
        jobTitle: 'Musician and songwriter',
        description:
          'Austin, TX musician who writes and records no way no how with friends.',
        sameAs: ['https://jasondesiderio.com/'],
      },
      email: email,
      sameAs: [...listenLinks, ...socialLinks, ...profileLinks].map(
        l => l.href
      ),
      track: tracks.map(t => ({
        '@type': 'MusicRecording',
        name: t.name,
        url: t.href,
        datePublished: t.datePublished,
        byArtist: { '@id': groupId },
      })),
    },
  ],
}

type Release = (typeof releases)[number]

// Phones held upright: one column (cover, then number + title, then details)
// on the fluid page padding. From 640 (phones turned sideways, small tablets):
// text block left, a smaller cover right, so one cover never fills a short
// screen. Tablet and laptop: the same with a bigger cover. From 1280: the
// four-column strip.
//
// --t is the title size, stepped per layout: the largest that fits on one
// line at the narrowest width of each step (40px phone from 360 wide, 52px
// tablet, 72px from 1024). The number, details and gaps scale with it at
// their desktop proportions (16, 14, 16 and 24 against 72), floored at 14px.
// The four-column strip from 1280 uses the 24px grid gap after the number.
const rowGrid =
  'grid grid-cols-1 gap-3 px-(--px) py-(--py) [--t:40px] sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 md:gap-10 md:px-10 md:py-8 md:[--t:52px] lg:[--t:72px] xl:grid-cols-[auto_1fr_auto_16rem] xl:gap-6'

function ReleaseRow({
  r,
  i,
  decorative,
}: {
  r: Release
  i: number
  decorative?: boolean
}) {
  return (
    <>
      {/* Number + title share a line, details below. From 1280 up both
          wrappers dissolve so each piece takes its own grid column. */}
      <span className='flex flex-col gap-[calc(var(--t)/2)] lg:gap-[calc(var(--t)/3)] xl:contents'>
        <span className='flex items-center gap-[calc(var(--t)*2/9)] xl:contents'>
          <span
            className={`${mono.className} text-[max(14px,calc(var(--t)*2/9))] font-medium opacity-60 [text-box:trim-both_cap_alphabetic]`}
          >
            {String(releases.length - i).padStart(2, '0')}
          </span>
          <span className='text-(length:--t) leading-none font-semibold tracking-tight [text-box:trim-both_cap_alphabetic]'>
            {r.name}
          </span>
        </span>
        <span
          className={`${mono.className} text-[max(14px,calc(var(--t)*7/36))] font-medium uppercase opacity-70 [text-box:trim-both_cap_alphabetic]`}
        >
          {r.kind} / {r.datePublished}
        </span>
      </span>
      <Image
        src={r.cover}
        alt={decorative ? '' : `${r.name} cover art`}
        sizes='(min-width: 640px) 256px, 100vw'
        quality={60}
        className='order-first mb-3 aspect-square w-full object-cover sm:order-none sm:mb-0 sm:w-48 md:w-60 xl:w-64'
      />
    </>
  )
}

// White-fill link like Full bleed, but the fill leaves equal space above the
// capitals and below the descenders
// A link inside a sentence: a real text underline just under the letters,
// exactly as wide as the word, that brightens and thickens on hover
const inlineLink =
  'underline decoration-white/60 decoration-1 underline-offset-[0.22em] transition-[text-decoration-color] duration-200 ease-out hover:decoration-white hover:decoration-2 focus-visible:decoration-white focus-visible:decoration-2'

const whiteLink =
  '-mx-1 box-decoration-clone bg-linear-to-r from-white to-white bg-size-[100%_1px] bg-bottom bg-no-repeat px-1 pb-[0.15em] transition-[background-size,color] duration-200 ease-out hover:bg-size-[100%_calc(100%_-_0.1em)] hover:text-neutral-950 focus-visible:bg-size-[100%_calc(100%_-_0.1em)] focus-visible:text-neutral-950'

// The cover logo from Poster, set on the left. The line height matches the
// Faster & Faster cover, where the two lines nearly touch. Trimmed to the
// x-height and pushed down by the ghost's offset, so the ghost's letter tops
// sit one padding from the top, matching the bottom text's baseline gap.
function CoverLogo() {
  return (
    <h1 className='relative mt-[0.07em] text-[max(76px,8.83vw+1.5rem)] leading-[0.68] font-thin tracking-[-0.04em] text-[#f4f7fa] [text-box:trim-both_ex_alphabetic]'>
      <span
        aria-hidden='true'
        className='absolute inset-0 -translate-x-[0.1em] -translate-y-[0.07em] opacity-40 [text-box:trim-both_ex_alphabetic]'
      >
        no way
        <br />
        no how
      </span>
      <span className='relative'>
        no way
        <br />
        no how
      </span>
    </h1>
  )
}

export default function Home() {
  return (
    <main className='bg-neutral-950 text-white [--px:clamp(24px,1.524vw+18.06px,40px)] [--py:clamp(38.4px,2.438vw+28.89px,64px)]'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {/* A screen tall, capped at 1200px so it doesn't fill very tall
          monitors. The gap between the logo and the text below it never
          closes, so on short screens (phones turned sideways) the content
          sets the height and the hero grows past the screen. */}
      <section className='relative flex min-h-[min(100svh,1200px)] flex-col justify-between gap-[calc(var(--py)*2)] overflow-hidden px-(--px) py-(--py)'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          fill
          unoptimized
          preload
          className='object-cover object-[60%_40%]'
        />
        <div className='absolute inset-0 bg-linear-to-b from-black/30 via-black/0 to-black/60' />
        <CoverLogo />
        <div className='relative flex flex-col justify-between gap-(--py) text-lg font-semibold text-[#f4f7fa] md:text-2xl lg:flex-row lg:items-end'>
          <p className='max-w-md [text-box:trim-both_cap_alphabetic]'>
            {tagline}
          </p>
          <p className='[text-box:trim-both_cap_alphabetic] lg:text-right'>
            <a
              href='https://jasondesiderio.com/'
              {...external('https://jasondesiderio.com/')}
              className={inlineLink}
            >
              Jason Desiderio
            </a>{' '}
            &amp; friends
            <br />
            Austin, TX
          </p>
        </div>
      </section>

      {/* On hover a dark copy of the row is wiped in from the left, so each
          letter's colour always matches the background behind it, even if
          the pointer leaves mid-sweep. The fill and the divider both match
          the footer black, so the divider blends into a hovered row. */}
      <section
        aria-labelledby='releases'
        className='divide-y divide-neutral-950 bg-[#82A6CA] text-neutral-950'
      >
        <h2 id='releases' className='sr-only'>
          Releases
        </h2>
        {releases.map((r, i) => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className={`group relative block ${rowGrid}`}
          >
            <ReleaseRow r={r} i={i} />
            <div
              aria-hidden='true'
              className={`${rowGrid} pointer-events-none absolute inset-0 bg-neutral-950 text-[#e8eef5] transition-[clip-path] duration-500 ease-[cubic-bezier(.7,0,.2,1)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0)] group-focus-visible:[clip-path:inset(0)] motion-reduce:transition-none`}
            >
              <ReleaseRow r={r} i={i} decorative />
            </div>
          </a>
        ))}
      </section>

      {/* Links left, Spotify player right from 640, like the singles, so a
          sideways phone doesn't stack them. Side by side, the gap doubles, so
          the player narrows as the page nears the width where they stack. */}
      <section className='flex flex-col-reverse gap-(--py) border-t border-white/15 px-(--px) py-(--py) sm:flex-row sm:items-start sm:justify-between sm:gap-[calc(var(--py)*2)]'>
        <div className='ml-1 flex flex-col gap-[31px] md:gap-[34px] sm:[&>a:first-child]:mt-[0.224em] max-sm:[&>a:last-child]:mb-[0.4167em]'>
          {allLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              {...external(l.href)}
              className='w-fit text-3xl font-bold whitespace-nowrap [text-box:trim-both_cap_alphabetic] md:text-4xl'
            >
              <span className={whiteLink}>{l.label}</span>
            </a>
          ))}
        </div>
        <div className='w-full sm:max-w-sm sm:min-w-0 sm:flex-1 lg:max-w-md'>
          <SpotifyEmbed />
        </div>
      </section>
    </main>
  )
}
