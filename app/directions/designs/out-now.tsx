import Image from 'next/image'
import { listenLinks } from '../../lib/content'
import { JasonGuitar, allLinks, external, releases, tagline } from '../shared'

export default function OutNow() {
  const [latest, ...older] = releases
  return (
    <div className='bg-neutral-900 text-white'>
      <section className='relative flex min-h-svh flex-col items-center justify-center gap-8 overflow-hidden px-6 py-20'>
        {/* Blurred copy of the cover as a backdrop, so the page takes its color */}
        <Image
          src={latest.cover}
          alt=''
          fill
          sizes='100vw'
          quality={60}
          className='scale-125 object-cover opacity-50 blur-3xl'
        />
        <p className='relative text-sm tracking-[0.3em] uppercase'>
          New single &middot; out now
        </p>
        <a
          href={latest.href}
          data-release={latest.name}
          {...external(latest.href)}
          className='relative w-full max-w-[min(80vw,70svh)]'
        >
          <Image
            src={latest.cover}
            alt={`${latest.name} cover art`}
            sizes='(min-width: 768px) 70vh, 80vw'
            quality={60}
            preload
            className='aspect-square w-full object-cover shadow-2xl'
          />
        </a>
        <div className='relative flex flex-wrap justify-center gap-3'>
          {listenLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              {...external(l.href)}
              className='rounded-full bg-white px-6 py-3 font-semibold text-neutral-950 transition hover:bg-[#82A6CA]'
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      <section className='grid items-center gap-10 px-6 py-24 md:grid-cols-2 md:px-16'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          sizes='(min-width: 768px) 50vw, 100vw'
          quality={60}
          className='w-full object-cover'
        />
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-semibold md:text-7xl'>no way no how</h1>
          <p className='max-w-md text-lg text-white/80'>{tagline}</p>
          <p className='text-sm text-white/60'>
            Jason Desiderio &amp; friends, Austin, TX
          </p>
        </div>
      </section>

      <section className='px-6 pb-32 md:px-16'>
        <h2 className='mb-6 text-sm tracking-[0.3em] text-white/60 uppercase'>
          Earlier
        </h2>
        {older.map(r => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className='group flex items-center gap-6'
          >
            <Image
              src={r.cover}
              alt={`${r.name} cover art`}
              sizes='320px'
              quality={60}
              className='aspect-square w-40 object-cover md:w-80'
            />
            <div>
              <p className='text-3xl font-semibold group-hover:underline md:text-5xl'>
                {r.name}
              </p>
              <p className='text-sm text-white/60'>
                {r.kind}, {r.released}
              </p>
            </div>
          </a>
        ))}
        <div className='mt-24 flex flex-wrap gap-x-6 gap-y-2 text-white/80'>
          {allLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              {...external(l.href)}
              className='hover:text-white'
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
