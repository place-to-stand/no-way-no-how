import Image from 'next/image'
import JasonGuitar from './jason-guitar.jpg'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'no way no how',
  url: 'https://nowayno.how/',
  image: 'https://nowayno.how/og-image.jpg',
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
  },
  email: 'hello@thegoodfornothings.club',
  sameAs: [
    'https://nowaynohow.bandcamp.com/',
    'https://open.spotify.com/artist/0Hhn7jlCTbqNyAOrI458SR',
    'https://music.apple.com/us/artist/no-way-no-how/1738953726',
    'https://www.instagram.com/nowaynohowband/',
  ],
  track: [
    {
      '@type': 'MusicRecording',
      name: 'Faster & Faster',
      datePublished: '2025-05-02',
      byArtist: { '@type': 'MusicGroup', name: 'no way no how' },
    },
    {
      '@type': 'MusicRecording',
      name: 'Build Our Home',
      datePublished: '2024-04',
      byArtist: { '@type': 'MusicGroup', name: 'no way no how' },
    },
  ],
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-8 text-center md:gap-16 md:px-8'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-4xl font-semibold md:text-6xl'>no way no how</h1>
        <div>
          music by{' '}
          <a
            href='https://jasondesiderio.com/'
            className='underline underline-offset-2 hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Jason Desiderio
          </a>{' '}
          & friends in Austin, TX
        </div>
        <p className='mt-2 max-w-xl text-balance'>
          Melancholic indie rock for anyone who&rsquo;s moved cities or tried to
          slow down. Latest single: &ldquo;Faster &amp; Faster&rdquo; (2025).
        </p>
      </div>
      <div className='grid w-full max-w-[900px] gap-6 md:grid-cols-2'>
        <iframe
          title='no way no how on Spotify'
          style={{ borderRadius: '12px' }}
          src='https://open.spotify.com/embed/artist/0Hhn7jlCTbqNyAOrI458SR?utm_source=generator'
          width='100%'
          height='352'
          frameBorder='0'
          allowFullScreen={false}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        />
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          sizes='(min-width: 768px) 438px, 100vw'
          quality={60}
          preload
          className='size-full rounded-xl object-cover'
        />
        <div>
          <a
            href='https://nowaynohow.bandcamp.com/'
            className='underline underline-offset-2 hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Bandcamp
          </a>{' '}
          &bull;{' '}
          <a
            href='https://open.spotify.com/artist/0Hhn7jlCTbqNyAOrI458SR?si=3CrQhwPhToiFOQFg1ivtFQ'
            className='underline underline-offset-2 hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Spotify
          </a>{' '}
          &bull;{' '}
          <a
            href='https://music.apple.com/us/artist/no-way-no-how/1738953726'
            className='underline underline-offset-2 hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Apple Music
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/nowaynohowband/'
            className='underline underline-offset-2 hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>{' '}
          &bull;{' '}
          <a
            href='mailto:hello@thegoodfornothings.club'
            className='underline underline-offset-2 hover:no-underline'
          >
            hello@thegoodfornothings.club
          </a>{' '}
        </div>
      </div>
    </main>
  )
}
