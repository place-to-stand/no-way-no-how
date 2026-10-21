import Image from 'next/image'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
  tagline,
} from '../shared'

// The hero stands in for a looping live clip. Swap the <Image> for a muted,
// autoplaying <video> once there is footage.
export default function VideoSlot() {
  return (
    <div className='bg-[#0f1a26] text-white'>
      <section className='relative h-svh overflow-hidden'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          fill
          unoptimized
          preload
          className='object-cover grayscale motion-safe:animate-[kenburns_24s_ease-in-out_infinite_alternate]'
        />
        {/* Brand-blue duotone: one color treatment for every photo */}
        <div className='absolute inset-0 bg-[#82A6CA] mix-blend-multiply' />
        <div className='absolute inset-0 bg-[#0f1a26]/30' />
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center'>
          <h1 className='text-5xl font-semibold md:text-8xl'>no way no how</h1>
          <p className='max-w-md text-white/85'>{tagline}</p>
        </div>
        <span className='absolute top-4 right-4 rounded-full border border-white/40 px-3 py-1 text-xs text-white/80'>
          Video slot
        </span>
        <style>{`@keyframes kenburns{from{transform:scale(1.05) translate(0,0)}to{transform:scale(1.18) translate(-2%,-3%)}}`}</style>
      </section>

      <section className='grid md:grid-cols-2'>
        {releases.map(r => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className='group flex flex-col gap-6 p-6 md:p-16'
          >
            <div className='relative aspect-square overflow-hidden'>
              <Image
                src={r.cover}
                alt={`${r.name} cover art`}
                fill
                sizes='(min-width: 768px) 45vw, 90vw'
                quality={60}
                className='object-cover grayscale transition duration-500 group-hover:grayscale-0'
              />
              <div className='absolute inset-0 bg-[#82A6CA] mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0' />
            </div>
            <div className='flex items-baseline justify-between'>
              <span className='text-2xl font-semibold md:text-3xl'>
                {r.name}
              </span>
              <span className='text-sm text-white/60'>
                {r.kind}, {r.released}
              </span>
            </div>
          </a>
        ))}
      </section>

      <section className='mx-6 flex flex-col gap-10 border-t border-white/15 py-20 md:mx-16 md:flex-row'>
        <div className='md:w-1/2'>
          <SpotifyEmbed />
        </div>
        <ul className='flex flex-col gap-3 text-2xl md:text-4xl'>
          {allLinks.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                {...external(l.href)}
                className='hover:text-[#82A6CA]'
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
