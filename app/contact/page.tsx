import { ContentPage, pageMetadata } from '../components/content-page'
import { contact } from '../lib/content'

export const metadata = pageMetadata(contact)

export default function Page() {
  return <ContentPage page={contact} />
}
