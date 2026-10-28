export function SpotifyEmbed({ height = 352 }: { height?: number }) {
  return (
    <iframe
      title='no way no how on Spotify'
      style={{ borderRadius: '12px' }}
      src='https://open.spotify.com/embed/artist/0Hhn7jlCTbqNyAOrI458SR?utm_source=generator'
      width='100%'
      height={height}
      frameBorder='0'
      allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      loading='lazy'
    />
  )
}
