import type { Metadata, Viewport } from 'next'
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

const title = 'no way no how — indie rock band from Austin, TX'
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

// Tints the mobile browser UI (the band behind the status bar) to match the
// footer, neutral-950. Newer iOS Safari reads the body background instead,
// so that matches too.
export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'light',
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
          'min-h-screen bg-neutral-950 font-sans antialiased'
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
