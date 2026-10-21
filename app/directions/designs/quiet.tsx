import Image from 'next/image'
import { linkClass } from '../../lib/link-styles'
import { fraunces } from '../fonts'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
  tagline,
} from '../shared'

// Scroll-driven fade-in where the browser supports it; elsewhere content
// just shows. Off for people who ask for reduced motion.
const reveal =
  'motion-safe:supports-[animation-timeline:view()]:animate-[reveal_linear_both] motion-safe:supports-[animation-timeline:view()]:[animation-timeline:view()] motion-safe:supports-[animation-timeline:view()]:[animation-range:entry_0%_entry_60%]'

export default function Quiet() {
  return (
    <div className='bg-[#fbfbf9] text-neutral-900'>
      <style>{`@keyframes reveal{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}`}</style>
      <section className='flex min-h-svh flex-col justify-center gap-6 px-6 md:px-[8vw]'>
        <h1 className={`${fraunces.className} text-5xl font-light md:text-8xl`}>
          no way no how
        </h1>
        <p className='max-w-md text-neutral-500'>{tagline}</p>
      </section>

      <figure className={`px-6 md:px-[8vw] ${reveal}`}>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          sizes='84vw'
          unoptimized
          className='w-full'
        />
      </figure>

      <section className='flex flex-col gap-[20vh] px-6 py-[25vh] md:px-[8vw]'>
        {releases.map((r, i) => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className={`group flex flex-col gap-6 md:w-[55%] ${i % 2 ? 'md:self-end' : ''} ${reveal}`}
          >
            <Image
              src={r.cover}
              alt={`${r.name} cover art`}
              sizes='(min-width: 768px) 46vw, 90vw'
              quality={60}
              className='aspect-square w-full object-cover'
            />
            <p className='flex items-baseline justify-between'>
              <span
                className={`${fraunces.className} text-3xl font-light md:text-4xl`}
              >
                {r.name}
              </span>
              <span className='text-sm text-neutral-500'>
                {r.kind}, {r.released}
              </span>
            </p>
          </a>
        ))}
      </section>

      <section
        className={`grid gap-12 px-6 pb-40 md:grid-cols-2 md:px-[8vw] ${reveal}`}
      >
        <SpotifyEmbed />
        <ul className='flex flex-col gap-3 text-lg md:pl-16'>
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
