import Image from 'next/image'
import JasonGuitar from './jason-guitar.jpg'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-8 text-center md:gap-16 md:px-8'>
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
      </div>
      <div className='grid w-full max-w-[900px] gap-6 md:grid-cols-2'>
        <iframe
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
          alt='Jason Desiderio'
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
            href='http://music.apple.com/us/artist/no-way-no-how/1738953726'
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
