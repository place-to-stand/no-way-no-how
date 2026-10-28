import Image from 'next/image'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
  sweepInk,
  sweepLabel,
  tagline,
} from '../shared'

// The band name as it appears on the Faster & Faster cover: thin, lowercase,
// with a faint copy set slightly up and to the left
function CoverLogo() {
  return (
    <h1 className='relative text-right text-[17vw] leading-[0.82] font-thin tracking-tight text-[#f4f7fa] md:text-[13vw]'>
      <span
        aria-hidden='true'
        className='absolute inset-0 -translate-x-[0.06em] -translate-y-[0.05em] opacity-40'
      >
        no way
        <br />
        no how
      </span>
      <span className='relative'>
        no way
        <br />
        no how
      </span>
    </h1>
  )
}

export default function Poster() {
  return (
    <div className='bg-[#82A6CA] text-neutral-950'>
      <section className='relative flex min-h-svh flex-col justify-between overflow-hidden p-6 md:p-10'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          fill
          unoptimized
          preload
          className='object-cover opacity-90 mix-blend-multiply grayscale'
        />
        <CoverLogo />
        <div className='relative flex flex-col justify-between gap-4 text-sm text-[#e8eef5] md:flex-row md:items-end'>
          <p className='max-w-xs'>{tagline}</p>
          <p className='md:text-right'>
            Jason Desiderio &amp; friends
            <br />
            Austin, TX
          </p>
        </div>
      </section>

      <section className='border-t border-neutral-950/20'>
        {releases.map((r, i) => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className={`${sweepInk} group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-neutral-950/20 px-6 py-8 transition-colors md:grid-cols-[6rem_1fr_auto_16rem] md:px-10`}
          >
            <span className='text-sm tabular-nums opacity-60'>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`${sweepLabel} text-4xl font-light tracking-tight md:text-7xl`}
            >
              {r.name}
            </span>
            <span className='col-start-2 text-xs tracking-widest uppercase opacity-70 md:col-start-auto'>
              {r.kind} / {r.released}
            </span>
            <Image
              src={r.cover}
              alt={`${r.name} cover art`}
              sizes='256px'
              quality={60}
              className='col-start-2 aspect-square w-40 object-cover md:col-start-auto md:w-64'
            />
          </a>
        ))}
      </section>

      <section className='grid gap-10 px-6 py-20 md:grid-cols-12 md:px-10'>
        <div className='md:col-span-5'>
          <SpotifyEmbed />
        </div>
        <ul className='flex flex-col md:col-span-6 md:col-start-7'>
          {allLinks.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                {...external(l.href)}
                className={`${sweepInk} flex items-center justify-between border-b border-neutral-950/20 px-4 py-4 text-2xl transition-colors md:text-3xl`}
              >
                <span className={sweepLabel}>{l.label}</span>
                <span aria-hidden='true'>&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
