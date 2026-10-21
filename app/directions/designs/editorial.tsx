import Image from 'next/image'
import { linkClass } from '../../lib/link-styles'
import { instrumentSerif } from '../fonts'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
} from '../shared'

export default function Editorial() {
  return (
    <div className='bg-[#f3efe7] text-neutral-900'>
      <header className='flex items-baseline justify-between px-6 py-6 text-sm md:px-12'>
        <span className='font-semibold'>no way no how</span>
        <span className='opacity-60'>Indie rock &middot; Austin, TX</span>
      </header>

      <section className='grid gap-10 px-6 pt-10 pb-24 md:grid-cols-12 md:px-12 md:pt-20'>
        <h1
          className={`${instrumentSerif.className} text-6xl leading-[0.95] md:col-span-9 md:text-[8.5vw]`}
        >
          Melancholic indie rock for anyone who&rsquo;s <em>moved cities</em> or
          tried to <em>slow down.</em>
        </h1>
        <p className='self-end text-sm md:col-span-3'>
          Songs by Jason Desiderio, recorded with friends. Latest single:
          &ldquo;Faster &amp; Faster&rdquo; (2025).
        </p>
      </section>

      <figure className='md:grid md:grid-cols-12'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          sizes='(min-width: 768px) 75vw, 100vw'
          unoptimized
          className='w-full object-cover md:col-span-9 md:col-start-4'
        />
        <figcaption className='px-6 pt-3 text-xs opacity-60 md:col-span-9 md:col-start-4 md:px-0'>
          Jason Desiderio
        </figcaption>
      </figure>

      <section className='grid gap-16 px-6 py-24 md:grid-cols-12 md:px-12 md:py-40'>
        {releases.map((r, i) => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className={`group flex flex-col gap-4 md:col-span-5 ${i === 1 ? 'md:col-start-8 md:mt-48' : 'md:col-start-1'}`}
          >
            <Image
              src={r.cover}
              alt={`${r.name} cover art`}
              sizes='(min-width: 768px) 40vw, 90vw'
              quality={60}
              className='aspect-square w-full object-cover'
            />
            <p
              className={`${instrumentSerif.className} text-4xl group-hover:italic md:text-5xl`}
            >
              {r.name}
            </p>
            <p className='text-xs tracking-widest uppercase opacity-60'>
              {r.kind} &middot; {r.released}
            </p>
          </a>
        ))}
      </section>

      <section className='grid gap-10 border-t border-neutral-900/20 px-6 py-20 md:grid-cols-12 md:px-12'>
        <h2
          className={`${instrumentSerif.className} text-5xl md:col-span-4 md:text-6xl`}
        >
          Listen
        </h2>
        <div className='md:col-span-5'>
          <SpotifyEmbed />
        </div>
        <ul className='flex flex-col gap-2 md:col-span-3'>
          {allLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} {...external(l.href)} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
