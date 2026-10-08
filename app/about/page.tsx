import { ContentPage, pageMetadata } from '../components/content-page'
import { about } from '../lib/content'

export const metadata = pageMetadata(about)

export default function Page() {
  return <ContentPage page={about} />
}
