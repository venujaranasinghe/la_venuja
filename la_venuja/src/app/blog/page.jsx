import Link from "next/link"
import { getAllPosts } from "@/lib/blog-data"
import styles from "./blog.module.css"
import PageIntro from "@/components/PageIntro"

export default function BlogPage() {
  const posts = getAllPosts()

  return (


    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <PageIntro eyebrow="Blog" title="The latest articles and news">
          </PageIntro>
          <h1 className={styles.title}></h1>
          <p className={styles.subtitle}>
            Thoughts, insights, and experiences from my journey in technology and development.
          </p>
        </div>

        {/* Blog Grid */}
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        {/* Featured Image */}
        <div className={styles.imageContainer}>
          <img src={post.image || "/placeholder.svg"} alt={post.title} className={styles.image} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Category */}
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>

          {/* Title */}
          <h2 className={styles.cardTitle}>{post.title}</h2>

          {/* Excerpt */}
          <p className={styles.excerpt}>{post.excerpt}</p>

          {/* Meta */}
          <div className={styles.footer}>
            <time dateTime={post.date} className={styles.date}>
              {post.formattedDate}
            </time>
            <span className={styles.readMore}>Read more →</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
