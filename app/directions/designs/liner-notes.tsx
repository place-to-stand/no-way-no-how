import Image from 'next/image'
import { mono } from '../fonts'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
  tagline,
} from '../shared'

export default function LinerNotes() {
  return (
    <div className='bg-[#0d1117] text-[#d7e1ec]'>
      <header
        className={`${mono.className} flex justify-between border-b border-white/10 px-6 py-4 text-xs uppercase md:px-10`}
      >
        <span>no way no how</span>
        <span className='opacity-50'>Austin, TX</span>
      </header>

      <section className='grid gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24'>
        <div className='flex flex-col justify-between gap-10 md:col-span-5'>
          <h1 className='text-6xl leading-[0.9] font-semibold tracking-tight md:text-8xl'>
            no way
            <br />
            no how
          </h1>
          <p className='max-w-sm text-lg text-[#d7e1ec]/80'>{tagline}</p>
        </div>
        <div className='relative aspect-[4/3] md:col-span-7'>
          <Image
            src={JasonGuitar}
            alt='Jason Desiderio of no way no how playing electric guitar'
            fill
            unoptimized
            preload
            className='object-cover grayscale-[40%] hue-rotate-[170deg] saturate-[60%] sepia-[20%]'
          />
        </div>
      </section>

      <section className='border-t border-white/10'>
        {releases.map((r, i) => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className='group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-white/10 px-6 py-8 transition-colors hover:bg-white/5 md:grid-cols-[6rem_1fr_auto_16rem] md:px-10'
          >
            <span className={`${mono.className} text-sm opacity-50`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className='text-4xl font-semibold tracking-tight md:text-7xl'>
              {r.name}
            </span>
            <span
              className={`${mono.className} col-start-2 text-xs uppercase opacity-60 md:col-start-auto`}
            >
              {r.kind} / {r.datePublished}
            </span>
            <Image
              src={r.cover}
              alt={`${r.name} cover art`}
              sizes='256px'
              quality={60}
              className='col-start-2 aspect-square w-40 object-cover opacity-80 transition group-hover:opacity-100 md:col-start-auto md:w-64'
            />
          </a>
        ))}
      </section>

      <section className='grid gap-10 px-6 py-20 md:grid-cols-12 md:px-10'>
        <div className='md:col-span-5'>
          <SpotifyEmbed />
        </div>
        <ul
          className={`${mono.className} flex flex-col text-sm md:col-span-5 md:col-start-8`}
        >
          {allLinks.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                {...external(l.href)}
                className='flex justify-between border-b border-white/10 py-3 uppercase transition-colors hover:bg-white/5 hover:text-[#82A6CA]'
              >
                <span>{l.label}</span>
                <span aria-hidden='true'>&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
