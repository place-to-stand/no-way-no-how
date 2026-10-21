import Image from 'next/image'
import { linkClass } from '../../lib/link-styles'
import { JasonGuitar, allLinks, external, releases, tagline } from '../shared'

export default function Collage() {
  const [faster, home] = releases
  return (
    <div className='overflow-hidden bg-[#82A6CA] text-neutral-950'>
      <section className='relative mx-auto min-h-[150svh] max-w-[1600px] px-6 py-16 md:min-h-[130vw] md:px-10 xl:min-h-[1900px]'>
        <h1 className='relative z-30 text-6xl leading-[0.85] font-semibold md:text-[11vw] xl:text-[170px]'>
          no way
          <br />
          <span className='md:pl-[18vw]'>no how</span>
        </h1>

        <div className='relative z-10 mt-8 w-[92%] -rotate-2 shadow-2xl md:absolute md:top-[22vw] md:left-[28%] md:mt-0 md:w-[60%] xl:top-[340px]'>
          <Image
            src={JasonGuitar}
            alt='Jason Desiderio of no way no how playing electric guitar'
            sizes='(min-width: 768px) 60vw, 92vw'
            unoptimized
            preload
            className='w-full'
          />
        </div>

        <a
          href={faster.href}
          data-release={faster.name}
          {...external(faster.href)}
          className='group relative z-20 mt-10 ml-auto block w-[70%] rotate-3 shadow-2xl transition motion-safe:hover:rotate-0 md:absolute md:top-[56vw] md:left-[4%] md:mt-0 md:w-[34%] xl:top-[880px]'
        >
          <Image
            src={faster.cover}
            alt={`${faster.name} cover art`}
            sizes='(min-width: 768px) 34vw, 70vw'
            quality={60}
            className='w-full'
          />
          <span className='absolute -bottom-7 left-0 text-sm'>
            {faster.name} &middot; {faster.kind}, {faster.released}
          </span>
        </a>

        <a
          href={home.href}
          data-release={home.name}
          {...external(home.href)}
          className='group relative z-20 mt-16 block w-[60%] -rotate-6 shadow-2xl transition motion-safe:hover:rotate-0 md:absolute md:top-[78vw] md:right-[6%] md:mt-0 md:w-[26%] xl:top-[1220px]'
        >
          <Image
            src={home.cover}
            alt={`${home.name} cover art`}
            sizes='(min-width: 768px) 26vw, 60vw'
            quality={60}
            className='w-full'
          />
          <span className='absolute -bottom-7 left-0 text-sm'>
            {home.name} &middot; {home.kind}, {home.released}
          </span>
        </a>

        <p className='relative z-30 mt-20 max-w-xs text-lg md:absolute md:top-[64vw] md:left-[48%] md:mt-0 xl:top-[1000px]'>
          {tagline}
        </p>

        <ul className='relative z-30 mt-20 flex flex-col gap-1 text-2xl font-semibold md:absolute md:bottom-16 md:left-10 md:mt-0 md:text-4xl'>
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
