import type { Metadata } from 'next'
import Link from 'next/link'
import { linkClass } from './lib/link-styles'

export const metadata: Metadata = {
  title: 'Page not found | no way no how',
}

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-8 text-center'>
      <h1 className='text-4xl font-semibold md:text-6xl'>Page not found</h1>
      <p className='max-w-xl text-balance'>
        There&rsquo;s nothing at this address. Try the{' '}
        <Link href='/' className={linkClass}>
          homepage
        </Link>{' '}
        to listen to no way no how.
      </p>
    </main>
  )
}
