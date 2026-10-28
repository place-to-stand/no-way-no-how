// Homepage directions from the Oct 2026 design crit. Each one tries
// Eric's notes (wider, bigger media, small metadata, longer scroll) a
// different way. Preview only: these pages are noindexed and not linked from
// the live homepage.

export type Direction = {
  id: string
  name: string
  idea: string
}

export const directions: Direction[] = [
  {
    id: '1',
    name: 'Full bleed',
    idea: 'The photo fills the first screen. The name sits small in a corner. Both covers follow, shown whole and large.',
  },
  {
    id: '2',
    name: 'Poster',
    idea: 'The band name runs wide over a blue-tinted photo, like a gig poster. Releases sit in rows below.',
  },
  {
    id: '3',
    name: 'Split screen',
    idea: 'The photo stays pinned on the left half while releases and links scroll past on the right.',
  },
  {
    id: '6',
    name: 'Liner notes',
    idea: 'Dark and technical. Releases as big numbered rows with mono details, like the back of a record sleeve.',
  },
  {
    id: '7',
    name: 'Film strip',
    idea: 'The photo and covers sit in one sideways-scrolling strip of large frames, with links in a band below.',
  },
  {
    id: '11',
    name: 'Mashup',
    idea: 'The full-color photo from Full bleed with the cover logo from Poster on the left. Poster-style release rows with a quiet hover, and the Full bleed footer.',
  },
]
