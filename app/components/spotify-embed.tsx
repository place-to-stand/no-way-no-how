// Spotify rounds the player inside its own page, so the iframe can't be
// told to square it. Instead the iframe is drawn 4px bigger on each side and
// the wrapper clips that off. A 12px corner curves in only ~3.5px at its
// deepest, so a 4px trim cuts the curve away and leaves square corners.
const TRIM = 4

export function SpotifyEmbed({ height = 352 }: { height?: number }) {
  return (
    <div className='overflow-hidden' style={{ height }}>
      <iframe
        title='no way no how on Spotify'
        src='https://open.spotify.com/embed/artist/0Hhn7jlCTbqNyAOrI458SR?utm_source=generator'
        className='block max-w-none'
        style={{ margin: -TRIM, width: `calc(100% + ${TRIM * 2}px)` }}
        height={height + TRIM * 2}
        frameBorder='0'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      />
    </div>
  )
}
