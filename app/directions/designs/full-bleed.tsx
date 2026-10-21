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

export default function FullBleed() {
  return (
    <div className='bg-neutral-950 text-white'>
      <section className='relative h-svh w-full overflow-hidden'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          fill
          unoptimized
          preload
          className='object-cover object-[60%_40%]'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0' />
        <div className='absolute right-0 bottom-0 left-0 flex flex-col gap-2 p-6 md:flex-row md:items-end md:justify-between md:p-10'>
          <h1 className='text-2xl font-semibold md:text-3xl'>no way no how</h1>
          <p className='max-w-sm text-sm text-white/80 md:text-right'>
            {tagline}
          </p>
        </div>
      </section>

      <section className='grid md:grid-cols-2'>
        {releases.map(r => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className='group block'
          >
            <div className='relative aspect-square overflow-hidden'>
              <Image
                src={r.cover}
                alt={`${r.name} cover art`}
                fill
                sizes='(min-width: 768px) 50vw, 100vw'
                quality={60}
                className='scale-[1.07] object-cover transition duration-700 ease-out motion-safe:group-hover:scale-[1.1]'
              />
            </div>
            <div className='px-6 py-4 text-sm md:px-10'>
              <span className='font-semibold'>{r.name}</span>
              <span className='text-white/70'>
                {' '}
                &middot; {r.kind}, {r.released}
              </span>
            </div>
          </a>
        ))}
      </section>

      <section className='grid gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:px-10 md:py-32'>
        <div className='flex flex-col gap-3 text-lg'>
          {allLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              {...external(l.href)}
              className='w-fit text-3xl font-semibold md:text-5xl'
            >
              <span
                className={`${linkClass} from-white to-white hover:text-neutral-950`}
              >
                {l.label}
              </span>
            </a>
          ))}
        </div>
        <SpotifyEmbed height={452} />
      </section>
    </div>
  )
}
