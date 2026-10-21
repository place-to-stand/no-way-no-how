import Image from 'next/image'
import { linkClass } from '../../lib/link-styles'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
  tagline,
} from '../shared'

export default function SplitScreen() {
  return (
    <div className='bg-[#dfe7ef] md:grid md:grid-cols-2'>
      <div className='relative h-[70svh] md:sticky md:top-0 md:h-svh'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          fill
          unoptimized
          preload
          className='object-cover object-[62%_50%]'
        />
      </div>

      <div className='flex flex-col gap-24 px-6 py-16 md:px-16 md:py-24'>
        <header className='flex flex-col gap-6'>
          <h1 className='text-6xl leading-none font-semibold md:text-8xl'>
            no way
            <br />
            no how
          </h1>
          <p className='max-w-md text-lg'>{tagline}</p>
          <p className='text-sm opacity-70'>
            Music by Jason Desiderio &amp; friends in Austin, TX
          </p>
        </header>

        {releases.map(r => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className='group flex flex-col gap-4'
          >
            <Image
              src={r.cover}
              alt={`${r.name} cover art`}
              sizes='(min-width: 768px) 40vw, 90vw'
              quality={60}
              className='aspect-square w-full object-cover shadow-xl transition duration-300 motion-safe:group-hover:-translate-y-1'
            />
            <div className='flex items-baseline justify-between text-sm'>
              <span className='text-2xl font-semibold'>{r.name}</span>
              <span className='opacity-70'>
                {r.kind}, {r.released}
              </span>
            </div>
          </a>
        ))}

        <SpotifyEmbed />

        <ul className='flex flex-wrap gap-x-6 gap-y-2 pb-16 text-lg'>
          {allLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} {...external(l.href)} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
