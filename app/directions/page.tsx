import Link from 'next/link'
import { linkClass } from '../lib/link-styles'
import { directions } from './list'

export default function DirectionsIndex() {
  return (
    <main className='mx-auto max-w-3xl px-6 py-16 md:py-24'>
      <h1 className='text-4xl font-semibold md:text-5xl'>
        Homepage directions
      </h1>
      <p className='mt-4 text-lg text-balance'>
        Ways to make the homepage wider, bigger and more visual, from the
        October design crit. Rough on purpose: pick the ones that excite you.
      </p>
      <ol className='mt-12 flex flex-col gap-8'>
        {directions.map(d => (
          <li key={d.id} className='flex gap-4'>
            <span className='w-8 shrink-0 text-lg tabular-nums opacity-60'>
              {d.id}
            </span>
            <div>
              <Link
                href={`/directions/${d.id}`}
                className={`${linkClass} text-xl font-semibold`}
              >
                {d.name}
              </Link>
              <p className='mt-1'>{d.idea}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  )
}
