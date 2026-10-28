import Image from 'next/image'
import { mono } from '../fonts'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
  sweepInk,
  tagline,
} from '../shared'

// White-fill link like Full bleed, but the fill leaves equal space above the
// capitals and below the descenders
const whiteLink =
  '-mx-1 box-decoration-clone bg-linear-to-r from-white to-white bg-size-[100%_1px] bg-bottom bg-no-repeat px-1 pb-[0.15em] transition-[background-size,color] duration-200 ease-out hover:bg-size-[100%_calc(100%_-_0.1em)] hover:text-neutral-950 focus-visible:bg-size-[100%_calc(100%_-_0.1em)] focus-visible:text-neutral-950'

// The cover logo from Poster, set on the left. The line height matches the
// Faster & Faster cover, where the two lines nearly touch.
function CoverLogo() {
  return (
    <h1 className='relative pt-[0.2em] text-[13vw] leading-[0.6] font-thin tracking-[-0.04em] text-[#f4f7fa] md:text-[9vw]'>
      <span
        aria-hidden='true'
        className='absolute inset-0 -translate-x-[0.1em] -translate-y-[0.07em] pt-[0.2em] opacity-40'
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
        <div className='relative flex flex-col justify-between gap-4 text-lg font-semibold text-[#f4f7fa] md:flex-row md:items-end md:text-2xl'>
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
            <span
              className={`${mono.className} text-sm font-medium opacity-60`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className='text-4xl font-semibold tracking-tight md:text-7xl'>
              {r.name}
            </span>
            <span
              className={`${mono.className} col-start-2 text-xs font-medium uppercase opacity-70 md:col-start-auto`}
            >
              {r.kind} / {r.datePublished}
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

      <section className='flex flex-col gap-12 px-6 pt-16 pb-24 md:flex-row md:items-start md:justify-between md:px-10 md:pb-32'>
        <div className='flex flex-col gap-4 md:gap-5'>
          {allLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              {...external(l.href)}
              className='w-fit text-3xl font-bold md:text-5xl'
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
