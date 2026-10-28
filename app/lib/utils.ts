import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Open outside links in a new tab; leave mailto: links alone
export function external(href: string) {
  return href.startsWith('mailto:')
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' }
}
