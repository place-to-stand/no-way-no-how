import Link from 'next/link'
import { pageLinks } from '../lib/content'

export function SiteNav() {
  return (
    <nav aria-label='Site' className='flex justify-center gap-4 text-sm'>
      {pageLinks.map(l => (
        <Link
          key={l.href}
          href={l.href}
          className='underline underline-offset-2 hover:no-underline'
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}
