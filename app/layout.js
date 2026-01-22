export const metadata = {
  title: "My Blogger Blog",
  description: "Blog powered by Blogger API and Next.js"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

