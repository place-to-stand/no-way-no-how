import Image from 'next/image'
import { archivo } from '../fonts'
import { JasonGuitar, allLinks, external, releases, tagline } from '../shared'

export default function Poster() {
  return (
    <div className='bg-[#82A6CA] text-neutral-950'>
      <section className='relative flex min-h-svh flex-col justify-between overflow-hidden p-4 md:p-8'>
        <Image
          src={JasonGuitar}
          alt='Jason Desiderio of no way no how playing electric guitar'
          fill
          unoptimized
          preload
          className='object-cover opacity-90 mix-blend-multiply grayscale'
        />
        <h1
          className={`${archivo.className} relative text-[19vw] leading-[0.8] font-black tracking-tighter text-[#e8eef5] uppercase [font-stretch:62%]`}
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

      <section className='px-4 py-16 md:px-8 md:py-28'>
        {releases.map(r => (
          <a
            key={r.name}
            href={r.href}
            data-release={r.name}
            {...external(r.href)}
            className='group grid items-center gap-6 border-t-2 border-neutral-950 py-8 md:grid-cols-[1fr_auto]'
          >
            <div>
              <p className='text-sm'>
                {r.kind} &middot; {r.released}
              </p>
              <h2
                className={`${archivo.className} text-[12vw] leading-[0.85] font-black tracking-tight uppercase [font-stretch:62%] transition-colors group-hover:text-white md:text-[9vw]`}
              >
                {r.name}
              </h2>
            </div>
            <Image
              src={r.cover}
              alt={`${r.name} cover art`}
              sizes='(min-width: 768px) 360px, 90vw'
              quality={60}
              className='aspect-square w-full object-cover md:w-[360px]'
            />
          </a>
        ))}
      </section>

      <footer className='flex flex-wrap gap-x-8 gap-y-2 border-t-2 border-neutral-950 px-4 py-10 md:px-8'>
        {allLinks.map(l => (
          <a
            key={l.label}
            href={l.href}
            {...external(l.href)}
            className={`${archivo.className} text-4xl font-black uppercase [font-stretch:62%] hover:text-white md:text-6xl`}
          >
            {l.label}
          </a>
        ))}
      </footer>
    </div>
  )
}
