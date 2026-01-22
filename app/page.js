import { getPosts } from "../lib/blogger"
import Link from "next/link"

export default async function Home() {
  const data = await getPosts()

  return (
    <main>
      <h1>My Blogger Blog</h1>
      {data.items?.map(post => {
        const slug = post.url.split("/").pop()
        return (
          <div key={post.id}>
            <Link href={`/${slug}`}>{post.title}</Link>
          </div>
        )
      })}
    </main>
  )
}
