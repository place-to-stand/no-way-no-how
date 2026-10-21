import {
  Archivo,
  Fraunces,
  Instrument_Serif,
  JetBrains_Mono,
} from 'next/font/google'

// Heading fonts to try next to Outfit, per the crit's font-pairing note
export const fraunces = Fraunces({ subsets: ['latin'], display: 'swap' })
export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})
export const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap' })
export const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
})
