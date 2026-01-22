export async function getPosts() {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts?key=${process.env.BLOGGER_API_KEY}&maxResults=500`,
    { cache: "no-store" }
  )
  const data = await res.json()
  return data.items?.map(post => ({
    id: post.id,
    title: post.title,
    slug: post.url.split("/").pop(),
    content: post.content,
    labels: post.labels || [],
    published: post.published
  })) || []
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts/bypath?path=/${slug}&key=${process.env.BLOGGER_API_KEY}`,
    { cache: "no-store" }
  )
  return res.json()
}

export async function getPostsByLabel(label) {
  const posts = await getPosts()
  return posts.filter(post => post.labels?.includes(label))
}

export async function getAllLabels() {
  const posts = await getPosts()
  const allLabels = new Set()
  posts.forEach(post => post.labels?.forEach(l => allLabels.add(l)))
  return Array.from(allLabels)
}
