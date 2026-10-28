import { Archivo, JetBrains_Mono } from 'next/font/google'

// Heading fonts to try next to Outfit, per the crit's font-pairing note
export const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap' })
export const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
})
