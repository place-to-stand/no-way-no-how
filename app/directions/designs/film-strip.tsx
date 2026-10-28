import Image from 'next/image'
import { linkClass } from '../../lib/link-styles'
import { JasonGuitar, allLinks, external, releases, tagline } from '../shared'

export default function FilmStrip() {
  return (
    <div className='flex min-h-svh flex-col bg-[#1b1b1b] text-white'>
      <header className='flex flex-col gap-3 px-6 pt-12 pb-10 md:flex-row md:items-end md:justify-between md:px-10'>
        <h1 className='text-5xl font-semibold md:text-7xl'>no way no how</h1>
        <p className='max-w-sm text-white/70'>{tagline}</p>
      </header>

      {/* One row of big frames that scrolls sideways and snaps. The scroll
          padding keeps each snapped frame on the page's left margin. */}
      <div className='flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-12 md:scroll-px-10 md:gap-6 md:px-10 [&::-webkit-scrollbar]:hidden'>
        <figure className='relative aspect-[1600/1060] h-[62svh] shrink-0 snap-start'>
          <Image
            src={JasonGuitar}
            alt='Jason Desiderio of no way no how playing electric guitar'
            fill
            unoptimized
            preload
            className='object-cover'
          />
        </figure>
        {releases.map(r => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className='group relative aspect-square h-[62svh] shrink-0 snap-start'
          >
            <Image
              src={r.cover}
              alt={`${r.name} cover art`}
              fill
              sizes='62vh'
              quality={60}
              className='object-cover'
            />
            <span className='absolute -bottom-7 left-0 text-sm'>
              <span className='font-semibold'>{r.name}</span>
              <span className='text-white/60'>
                {' '}
                &middot; {r.kind}, {r.released}
              </span>
            </span>
          </a>
        ))}
        {/* Trailing spacer so the last frame can snap with a right margin */}
        <div aria-hidden='true' className='w-px shrink-0' />
      </div>

      <section className='mx-6 mt-4 mb-20 bg-[#82A6CA] p-8 text-neutral-950 md:mx-10 md:p-12'>
        <ul className='flex flex-wrap justify-between gap-x-8 gap-y-2'>
          {allLinks.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                {...external(l.href)}
                className='text-3xl font-semibold md:text-4xl'
              >
                <span className={linkClass}>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
