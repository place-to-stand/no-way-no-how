import { notFound } from 'next/navigation'
import { DirectionNav } from '../shared'
import { directions } from '../list'
import FullBleed from '../designs/full-bleed'
import Poster from '../designs/poster'
import SplitScreen from '../designs/split-screen'
import OutNow from '../designs/out-now'
import Editorial from '../designs/editorial'
import LinerNotes from '../designs/liner-notes'
import FilmStrip from '../designs/film-strip'
import VideoSlot from '../designs/video-slot'
import Collage from '../designs/collage'
import Quiet from '../designs/quiet'

const designs: Record<string, React.ComponentType> = {
  '1': FullBleed,
  '2': Poster,
  '3': SplitScreen,
  '4': OutNow,
  '5': Editorial,
  '6': LinerNotes,
  '7': FilmStrip,
  '8': VideoSlot,
  '9': Collage,
  '10': Quiet,
}

export function generateStaticParams() {
  return directions.map(d => ({ id: d.id }))
}

export default async function DirectionPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const Design = designs[id]
  if (!Design) notFound()
  return (
    <>
      <Design />
      <DirectionNav id={id} />
    </>
  )
}
