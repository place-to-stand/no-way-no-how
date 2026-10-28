import { notFound } from 'next/navigation'
import { DirectionNav } from '../shared'
import { directions } from '../list'
import FullBleed from '../designs/full-bleed'
import Poster from '../designs/poster'
import SplitScreen from '../designs/split-screen'
import LinerNotes from '../designs/liner-notes'
import FilmStrip from '../designs/film-strip'
import Mashup from '../designs/mashup'

const designs: Record<string, React.ComponentType> = {
  '1': FullBleed,
  '2': Poster,
  '3': SplitScreen,
  '6': LinerNotes,
  '7': FilmStrip,
  '11': Mashup,
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
