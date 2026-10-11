import { NextResponse, type NextRequest } from 'next/server'
import { homeMarkdown, notFoundMarkdown } from './app/lib/content'

// Quality value for a media type in an Accept header, or 0 if absent.
function quality(accept: string, type: string) {
  for (const part of accept.split(',')) {
    const [mediaType, ...params] = part.trim().split(';')
    if (mediaType.trim().toLowerCase() !== type) continue
    const q = params.find(p => p.trim().startsWith('q='))
    return q ? Number(q.trim().slice(2)) || 0 : 1
  }
  return 0
}

function wantsMarkdown(accept: string | null) {
  if (!accept) return false
  const markdown = quality(accept, 'text/markdown')
  return markdown > 0 && markdown >= quality(accept, 'text/html')
}

export function proxy(request: NextRequest) {
  if (!wantsMarkdown(request.headers.get('accept'))) return NextResponse.next()

  const path = request.nextUrl.pathname.replace(/\/+$/, '') || '/'
  const isHome = path === '/'
  return new NextResponse(
    isHome ? homeMarkdown() : notFoundMarkdown(path.replace(/`/g, '')),
    {
      status: isHome ? 200 : 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        Vary: 'Accept',
      },
    }
  )
}

export const config = {
  // Page routes only: skip Next internals and anything with a file extension
  // (llms.txt, sitemap.xml, images, audio).
  matcher: '/((?!_next/|.*\\..*).*)',
}
