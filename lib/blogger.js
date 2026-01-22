export async function getPosts() {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts?key=${process.env.BLOGGER_API_KEY}`,
    { cache: "no-store" }
  )
  return res.json()
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts/bypath?path=/${slug}&key=${process.env.BLOGGER_API_KEY}`,
    { cache: "no-store" }
  )
  return res.json()
}
