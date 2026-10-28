import Image from 'next/image'
import { archivo, mono } from '../fonts'
import {
  JasonGuitar,
  SpotifyEmbed,
  allLinks,
  external,
  releases,
  tagline,
} from '../shared'

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
        {/* Wide but light: lowercase like the brand, regular weight */}
        <h1
          className={`${archivo.className} relative text-[15vw] leading-[0.85] font-normal tracking-tight text-[#e8eef5] [font-stretch:112%] md:text-[13vw]`}
        >
          no way
          <br />
          no how
        </h1>
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
            className='group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-neutral-950/20 px-6 py-8 transition-colors hover:bg-white/15 md:grid-cols-[6rem_1fr_auto_16rem] md:px-10'
          >
            <span className={`${mono.className} text-sm opacity-60`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`${archivo.className} text-4xl tracking-tight [font-stretch:112%] md:text-7xl`}
            >
              {r.name}
            </span>
            <span
              className={`${mono.className} col-start-2 text-xs uppercase opacity-70 md:col-start-auto`}
            >
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
        <ul
          className={`${mono.className} flex flex-col text-sm md:col-span-5 md:col-start-8`}
        >
          {allLinks.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                {...external(l.href)}
                className='flex justify-between border-b border-neutral-950/20 py-3 uppercase transition-colors hover:bg-white/15'
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
