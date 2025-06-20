import { client } from '@/lib/sanity.client'
import { PAGE_QUERY } from '@/lib/queries'
import { PortableText } from '@portabletext/react'

export default async function HomePage() {
  const data = await client.fetch(PAGE_QUERY, { slug: 'index' })

  return (
    <main className="prose mx-auto p-8">
      <h1>{data?.title}</h1>
      {data?.body && <PortableText value={data.body} />}
    </main>
  )
}
