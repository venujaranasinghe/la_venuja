// Sample blog data - replace with your actual data source
const blogPosts = [
    {
      slug: "blog-1",
      title: "How I Apply the 80/20 Rule to Maximize My Productivity as a Undergraduate",
      excerpt:
        "As a third-year computer science undergraduate, here’s how I use the 80/20 rule to study smarter, live better, and grow faster:",
      content: `
        <p>You’ve probably heard of the 80/20 rule, also known as the Pareto Principle—the idea that 80% of results come from 20% of efforts. Over time, I’ve found this principle to be one of the most practical mental models for improving focus and output—not just in academics, but in everyday life.</p>

        <h2>Studying Smart, Not Just Hard</h2>

        <p>In any subject, not all topics carry equal weight. I identify the core 20%—the foundational concepts or high-probability exam content—and double down on those.</p> 
        <p>Instead of reading everything once, I focus on active recall, use spaced repetition, and revisit the high-impact material regularly. It’s helped me prepare faster and retain more.</p>

        <h2>Time Management</h2>

        <p>I used to fill my day with task after task. But most of them didn’t really move the needle. Now, I ask myself: What 20% of actions will create 80% of the progress?</p>
        <p>This mindset helps me focus on things that matter—like final-year projects, personal portfolio development, or high-impact assignments—while letting go of perfectionism in low-value tasks.</p>

        <h2>Relationships and Social Life</h2>

        <p>As someone who values deep connections, I focus on the few relationships that truly energize me. I’ve learned that a handful of meaningful friendships provide most of the support, motivation, and joy in my life.</p>
        <p>On social media, I apply the same filter—I follow only the most insightful creators who help me grow technically, mentally, or creatively.</p>

        <h2>Skill Building and Projects</h2>

        <p>Rather than jumping from one course to another, I choose projects that combine multiple learning outcomes.</p>
        <p>For instance, a recent web app I built allowed me to improve my skills in Spring Boot, REST APIs, frontend integration, and even basic DevOps deployment.</p>
        <p>I also prioritize learning tools that are relevant in the real world—even if that means letting go of topics that seem interesting but don’t add immediate value.</p>

        <h2>Final Thought</h2>
        <p>The 80/20 rule has become more than just a productivity hack—it’s a way of thinking. By focusing on the vital few rather than the trivial many, I’ve found more clarity, less stress, and better results.</p>
        <p>Whether you're a student, developer, or just trying to do more with less, I highly recommend trying this mindset shift. You'll be surprised how powerful it is.</p>
      `,
      category: "Life",
      date: "2025-05-11",
      formattedDate: "May 11, 2025",
      author: "Venuja Ranasinghe",
      readTime: "8 min read",
      image: "/Blog1.png",
    },
  ]
  
  export function getAllPosts() {
    return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  
  export function getPostBySlug(slug) {
    return blogPosts.find((post) => post.slug === slug)
  }
  
  export function getPostsByCategory(category) {
    return blogPosts.filter((post) => post.category === category)
  }
  