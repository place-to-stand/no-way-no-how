import Image from 'next/image'
import { linkClass } from '../../lib/link-styles'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
  sweepInk,
  tagline,
} from '../shared'

// Same white-fill link as Full bleed
const whiteLink = linkClass
  .replaceAll('from-neutral-950 to-neutral-950', 'from-white to-white')
  .replaceAll('hover:text-white', 'hover:text-neutral-950')
  .replaceAll('focus-visible:text-white', 'focus-visible:text-neutral-950')

// The cover logo from Poster, set on the left and spaced like the Faster &
// Faster cover: the lines nearly touch, and the y of "way" drops into the w of
// "how". The second line runs a touch wider so the w reaches past the y.
function Lines() {
  return (
    <>
      <span className='block tracking-[-0.045em]'>no way</span>
      <span className='block tracking-[-0.02em]'>no how</span>
    </>
  )
}

function CoverLogo() {
  return (
    <h1 className='relative pt-[0.2em] text-[13vw] leading-[0.54] font-thin text-[#f4f7fa] md:text-[9vw]'>
      <span
        aria-hidden='true'
        className='absolute inset-0 -translate-x-[0.1em] -translate-y-[0.07em] pt-[0.2em] opacity-40'
      >
        <Lines />
      </span>
      <span className='relative block'>
        <Lines />
      </span>
    </h1>
  )
}

// Rows fill black from the left on hover. The text stays put; only an arrow
// fades in.
const ease = 'duration-300 ease-out motion-reduce:transition-none'

export default function Mashup() {
  return (
    <div className='bg-neutral-950 text-white'>
      <section className='relative flex min-h-svh flex-col justify-between overflow-hidden p-6 md:p-10'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          fill
          unoptimized
          preload
          className='object-cover object-[60%_40%]'
        />
        <div className='absolute inset-0 bg-linear-to-b from-black/30 via-black/0 to-black/60' />
        <CoverLogo />
        <div className='relative flex flex-col justify-between gap-4 text-lg text-[#f4f7fa] md:flex-row md:items-end md:text-2xl'>
          <p className='max-w-md'>{tagline}</p>
          <p className='md:text-right'>
            Jason Desiderio &amp; friends
            <br />
            Austin, TX
          </p>
        </div>
      </section>

      <section className='bg-[#82A6CA] text-neutral-950'>
        {releases.map((r, i) => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className={`${sweepInk} group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-neutral-950/20 px-6 py-8 md:grid-cols-[6rem_1fr_auto_16rem] md:px-10`}
          >
            <span className='text-sm tabular-nums opacity-60'>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className='flex items-baseline gap-4 text-4xl font-light tracking-tight md:text-7xl'>
              {r.name}
              <span
                aria-hidden='true'
                className={`text-2xl opacity-0 transition-opacity md:text-4xl ${ease} group-hover:opacity-100 group-focus-visible:opacity-100`}
              >
                &#8599;
              </span>
            </span>
            <span className='col-start-2 text-xs tracking-widest uppercase opacity-70 md:col-start-auto'>
              {r.kind} / {r.released}
            </span>
            <div className='col-start-2 w-40 overflow-hidden md:col-start-auto md:w-64'>
              <Image
                src={r.cover}
                alt={`${r.name} cover art`}
                sizes='256px'
                quality={60}
                className={`aspect-square w-full object-cover transition-transform ${ease} motion-safe:group-hover:scale-[1.03]`}
              />
            </div>
          </a>
        ))}
      </section>

      <section className='flex flex-col gap-12 px-6 pt-16 pb-24 md:flex-row md:items-start md:justify-between md:px-10 md:pb-32'>
        <div className='flex flex-col gap-6 md:gap-8'>
          {allLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              {...external(l.href)}
              className='w-fit text-3xl font-semibold md:text-5xl'
            >
              <span className={whiteLink}>{l.label}</span>
            </a>
          ))}
        </div>
        <div className='w-full md:max-w-md'>
          <SpotifyEmbed />
        </div>
      </section>
    </div>
  )
}
