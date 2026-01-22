import { getPosts, getAllLabels } from "../lib/blogger"
import Link from "next/link"

export default async function Home() {
  const posts = await getPosts()
  const labels = await getAllLabels()

  return (
    <main>
      <h1>My Blogger Blog</h1>

      <section>
        <h2>Labels</h2>
        {labels.map(label => (
          <Link key={label} href={`/label/${label}`}>
            <span style={{ marginRight: 10 }}>{label}</span>
          </Link>
        ))}
      </section>

      <section>
        <h2>All Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <Link href={`/${post.slug}`}>{post.title}</Link>
            <p>Labels: {post.labels?.join(", ") || "None"}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
