import type { Metadata } from 'next'
import Link from 'next/link'
import type { Page } from '../lib/content'
import { SiteNav } from './site-nav'

export function pageMetadata(page: Page): Metadata {
  return {
    title: `${page.title} | no way no how`,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      url: page.path,
      title: page.title,
      description: page.description,
    },
  }
}

const linkClass = 'underline underline-offset-2 hover:no-underline'

export function ContentPage({ page }: { page: Page }) {
  return (
    <main className='mx-auto flex min-h-screen max-w-2xl flex-col gap-8 px-4 py-12 md:px-8'>
      <Link href='/' className={`${linkClass} self-start`}>
        &larr; no way no how
      </Link>
      <header className='flex flex-col gap-2'>
        <h1 className='text-4xl font-semibold md:text-5xl'>{page.title}</h1>
        <p className='text-balance'>{page.description}</p>
      </header>
      {page.sections.map(section => (
        <section key={section.heading} className='flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold'>{section.heading}</h2>
          {section.paragraphs.map(p => (
            <p key={p}>{p}</p>
          ))}
          {section.links && (
            <ul className='flex flex-wrap gap-x-4 gap-y-1'>
              {section.links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={linkClass}
                    {...(l.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <SiteNav />
    </main>
  )
}
