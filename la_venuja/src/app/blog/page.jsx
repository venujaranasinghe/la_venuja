import Link from "next/link"
import Image from "next/image"
import PageIntro from "@/components/PageIntro"
//import ParticlesBackground from "@/components/ParticlesBackground"
import SectionIntro from "@/components/SectionIntro";

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
    {
      slug: "ai-agent-capabilities",
      title: "How Do AI Agent Capabilities Scale from Simple Reflexes to Complex Learning",
      excerpt:
        "2025 is the most important year in the world of AI agents because there have been many announcements and updates...",
      image: "/blog3.jpg",
      mediumUrl: "https://venujaranasinghe.medium.com/how-do-ai-agent-capabilities-scale-from-simple-reflexes-to-complex-learning-b970b06ebb5f",
      readTime: "7 min read",
    },
    {
      slug: "ec2-vs-aws-lambda",
      title: "EC2 vs AWS Lambda: When Should You Use Which?",
      excerpt:
        "When starting with AWS, one of the most common questions is: Should I use...",
      image: "/blog4.jpg",
      mediumUrl: "https://venujaranasinghe.medium.com/ec2-vs-aws-lambda-when-should-you-use-which-4193a8dee159",
      readTime: "4 min read",
    },
    {
      slug: "design-patterns-made-simple",
      title: "Design Patterns Made Simple: Learning Software Design Through a Coffee Shop",
      excerpt:
        "When people hear the term design patterns, many assume it’s something highly theoretical or...",
      image: "/blog5.jpg",
      mediumUrl: "https://venujaranasinghe.medium.com/design-patterns-made-simple-learning-software-design-through-a-coffee-shop-45492ab7e912",
      readTime: "4 min read",
    },
    {
      slug: "reactjs-in-sinhala",
      title: "ReactJS තේරෙන සිංහලෙන්",
      excerpt:
        "අද කාලේ අපි use කරන almost හැම web application එකක්ම හරිම fast and interactive. මෙන්න මේකට...",
      image: "/blog6.jpg",
      mediumUrl: "https://venujaranasinghe.medium.com/reactjs-%E0%B6%AD%E0%B7%9A%E0%B6%BB%E0%B7%99%E0%B6%B1-%E0%B7%83%E0%B7%92%E0%B6%82%E0%B7%84%E0%B6%BD%E0%B7%99%E0%B6%B1%E0%B7%8A-fd1675309f23",
      readTime: "9 min read",
    },
  ]

  return (
    <>
    <SectionIntro
        eyebrow="Blog"
        title="The latest articles and news"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Thoughts, insights, and experiences from my journey in technology and development.
        </p>
      </SectionIntro>
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header
        <div className="text-center mb-16">
          <PageIntro eyebrow="Blog" title="The latest articles and news" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Thoughts, insights, and experiences from my journey in technology and development.
          </p>
        </div> */}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
    </>
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
