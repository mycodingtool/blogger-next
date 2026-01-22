import { getPostBySlug } from "../../lib/blogger"

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug)

  return (
    <main>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  )
}
