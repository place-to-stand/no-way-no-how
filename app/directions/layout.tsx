import type { Metadata } from 'next'

// Design previews, not part of the public site
export const metadata: Metadata = {
  title: 'Homepage directions | no way no how',
  robots: { index: false, follow: false },
}

export default function DirectionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
