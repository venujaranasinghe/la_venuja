// Sample blog data - replace with your actual data source
const blogPosts = [
    {
      slug: "building-scalable-react-applications",
      title: "Building Scalable React Applications: Lessons Learned",
      excerpt:
        "Exploring best practices and architectural patterns that have helped me build maintainable React applications at scale.",
      content: `
        <p>Building scalable React applications requires careful consideration of architecture, state management, and component design. Over the years, I've learned several key principles that have made my applications more maintainable and performant.</p>
        
        <h2>Component Architecture</h2>
        <p>One of the most important aspects of scalable React applications is having a well-thought-out component architecture. I've found that following the principle of composition over inheritance leads to more flexible and reusable components.</p>
        
        <h3>Container vs Presentational Components</h3>
        <p>Separating concerns between container components (that handle logic and state) and presentational components (that focus on UI) has been crucial for maintainability. This pattern makes components easier to test and reason about.</p>
        
        <h2>State Management</h2>
        <p>Choosing the right state management solution depends on your application's complexity. For smaller applications, React's built-in useState and useContext might be sufficient. For larger applications, consider Redux Toolkit or Zustand.</p>
        
        <h3>Performance Optimization</h3>
        <p>Performance optimization should be done strategically. Use React.memo for expensive components, implement proper key props for lists, and consider code splitting for large applications.</p>
        
        <p>These practices have helped me build applications that scale well with team size and feature complexity. The key is to start with good foundations and refactor as you learn more about your application's needs.</p>
      `,
      category: "React",
      date: "2024-01-15",
      formattedDate: "January 15, 2024",
      author: "Your Name",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
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
  