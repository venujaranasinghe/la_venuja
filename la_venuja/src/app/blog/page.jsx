import Link from "next/link"
import Image from "next/image"
import PageIntro from "@/components/PageIntro"

export default function BlogPage() {
  // Blog posts data
  const posts = [
    {
      slug: "getting-started-with-react",
      title: "How I Apply the 80/20 Rule to Maximize My Productivity as a Undergraduate",
      excerpt:
        "You've probably heard of the 80/20 rule, also known as the Pareto Principle—the idea that 80% of results come from 20% of effort...",
      image: "/Blog1.png",
      mediumUrl: "https://medium.com/@venuja12345/how-i-apply-the-80-20-rule-to-maximize-my-productivity-as-an-undergrad-cd0be726e6da",
      readTime: "5 min read",
    },
    {
      slug: "javascript-best-practices",
      title: "What I Wish I Knew Before Starting Computer Science",
      excerpt:
        "When I first chose Computer Science as my degree, my image in my head was that I would have to code a lot, build web...",
      image: "/blog2.jpg",
      mediumUrl: "https://medium.com/@venuja12345/what-i-wish-i-knew-before-starting-computer-science-64746d4654e6",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <PageIntro eyebrow="Blog" title="The latest articles and news" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Thoughts, insights, and experiences from my journey in technology and development.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <Link href={post.mediumUrl} target="_blank" rel="noopener noreferrer" className="group block">
      <article className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
        {/* Featured Image */}
        <div className="aspect-video bg-gray-100 overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg?height=240&width=400"}
            alt={post.title}
            width={400}
            height={240}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
            {post.title}
          </h2>

          {post.excerpt && <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>}

          {/* Meta Information */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            {post.readTime && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.readTime}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
