import { getPostBySlug } from "../../lib/blogger"
import Link from "next/link"

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug)

  return (
    <main>
      <h1>{post.title}</h1>
      <p>Published: {new Date(post.published).toLocaleDateString()}</p>
      <p>Labels: {post.labels?.map(label => (
        <Link key={label} href={`/label/${label}`} style={{ marginRight: 5 }}>
          {label}
        </Link>
      )) || "None"}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  )
}
