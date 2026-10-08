import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Outfit as FontSans } from 'next/font/google'
import { cn } from './lib/utils'
import './styles/globals.css'

// Fail the build if anything makes a route render per request
export const ensureStatic = 'navigation'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const title = 'no way no how — indie rock from Austin, TX'
const description =
  "Melancholic Austin, TX indie rock by Jason Desiderio, for anyone who's moved cities or tried to slow down. Stream on Spotify, Apple Music, or Bandcamp."

export const metadata: Metadata = {
  metadataBase: new URL('https://nowayno.how'),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'no way no how',
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jason Desiderio of no way no how playing electric guitar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          fontSans.variable,
          'min-h-screen bg-[#82A6CABB] font-sans antialiased'
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
