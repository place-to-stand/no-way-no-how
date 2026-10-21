// The ten homepage directions from the Oct 2026 design crit. Each one tries
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
    idea: 'The photo fills the first screen. The name sits small in a corner. Releases follow as two huge covers, edge to edge.',
  },
  {
    id: '2',
    name: 'Poster',
    idea: 'The band name runs the full width of the screen in giant type over the photo, like a gig poster.',
  },
  {
    id: '3',
    name: 'Split screen',
    idea: 'The photo stays pinned on the left half while releases and links scroll past on the right.',
  },
  {
    id: '4',
    name: 'Out now',
    idea: 'The latest single is the homepage. Its cover is the hero, with listen buttons right under it.',
  },
  {
    id: '5',
    name: 'Editorial',
    idea: 'A magazine layout: the tagline as a large serif pull quote, an off-center photo, and small sans captions.',
  },
  {
    id: '6',
    name: 'Liner notes',
    idea: 'Dark and technical. Releases as big numbered rows with mono metadata, like the back of a record sleeve.',
  },
  {
    id: '7',
    name: 'Film strip',
    idea: 'After the hero, everything sits in one sideways-scrolling strip of large frames.',
  },
  {
    id: '8',
    name: 'Video slot',
    idea: 'A full-screen hero with slow motion and a blue tint, standing in for a live clip until there is one.',
  },
  {
    id: '9',
    name: 'Collage',
    idea: 'Breaks the grid on purpose: the photo and covers overlap at different sizes and angles.',
  },
  {
    id: '10',
    name: 'Quiet',
    idea: 'Ultra minimal and white, with lots of space, large covers, and soft fade-ins as you scroll.',
  },
]
