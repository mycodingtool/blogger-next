import { getPostsByLabel } from "../../../lib/blogger"
import Link from "next/link"

export default async function LabelPage({ params }) {
  const posts = await getPostsByLabel(params.label)

  return (
    <main>
      <h1>Posts under "{params.label}"</h1>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </main>
  )
}
