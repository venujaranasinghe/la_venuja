import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import styles from "./blog-post.module.css"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Back Button */}
        <Link href="/blog" className={styles.backButton}>
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.authorMeta}>
            <time dateTime={post.date}>{post.formattedDate}</time>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          <p className={styles.excerpt}>{post.excerpt}</p>
        </header>

        {/* Featured Image */}
        <div className={styles.imageContainer}>
          <img src={post.image || "/placeholder.svg"} alt={post.title} className={styles.image} />
        </div>

        {/* Article Content */}
        <article className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Article Footer */}
        <footer className={styles.footer}>
          <Link href="/blog" className={styles.allPostsButton}>
            ← All Posts
          </Link>

          <div className={styles.shareSection}>
            <span className={styles.shareLabel}>Share:</span>
            <button className={styles.shareButton}>Twitter</button>
            <button className={styles.shareButton}>LinkedIn</button>
          </div>
        </footer>
      </div>
    </div>
  )
}
