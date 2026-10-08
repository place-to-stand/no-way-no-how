import { ContentPage, pageMetadata } from '../components/content-page'
import { privacy } from '../lib/content'

export const metadata = pageMetadata(privacy)

export default function Page() {
  return <ContentPage page={privacy} />
}
