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
    {
      slug: "modern-css-techniques",
      title: "Modern CSS Techniques Every Developer Should Know",
      excerpt:
        "A comprehensive guide to modern CSS features that can improve your styling workflow and create better user experiences.",
      content: `
        <p>CSS has evolved significantly in recent years, introducing powerful new features that make styling more efficient and maintainable. Let's explore some modern techniques that every developer should have in their toolkit.</p>
        
        <h2>CSS Grid and Flexbox</h2>
        <p>CSS Grid and Flexbox have revolutionized how we approach layout design. Grid is perfect for two-dimensional layouts, while Flexbox excels at one-dimensional arrangements.</p>
        
        <h3>CSS Custom Properties</h3>
        <p>CSS custom properties (variables) allow for more maintainable and dynamic stylesheets. They're particularly useful for theming and responsive design.</p>
        
        <h2>Container Queries</h2>
        <p>Container queries represent a major shift in responsive design, allowing components to respond to their container's size rather than the viewport size.</p>
        
        <h3>Modern Pseudo-selectors</h3>
        <p>New pseudo-selectors like :has(), :is(), and :where() provide more powerful and flexible ways to select elements.</p>
        
        <p>These modern CSS techniques enable us to write more maintainable, performant, and flexible stylesheets. The key is understanding when and how to use each technique effectively.</p>
      `,
      category: "CSS",
      date: "2024-01-08",
      formattedDate: "January 8, 2024",
      author: "Your Name",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "javascript-performance-optimization",
      title: "JavaScript Performance Optimization: A Practical Guide",
      excerpt: "Practical techniques and strategies for optimizing JavaScript performance in modern web applications.",
      content: `
        <p>JavaScript performance optimization is crucial for creating fast, responsive web applications. This guide covers practical techniques that can significantly improve your application's performance.</p>
        
        <h2>Memory Management</h2>
        <p>Understanding how JavaScript manages memory is essential for preventing memory leaks and optimizing performance. Proper cleanup of event listeners and avoiding global variables are key practices.</p>
        
        <h3>Efficient DOM Manipulation</h3>
        <p>DOM operations are expensive. Batch DOM updates, use document fragments, and minimize reflows and repaints to improve performance.</p>
        
        <h2>Asynchronous Programming</h2>
        <p>Proper use of async/await, Promises, and Web Workers can prevent blocking the main thread and improve user experience.</p>
        
        <h3>Code Splitting and Lazy Loading</h3>
        <p>Breaking your code into smaller chunks and loading them on demand can significantly reduce initial bundle size and improve load times.</p>
        
        <h2>Profiling and Monitoring</h2>
        <p>Use browser dev tools and performance monitoring tools to identify bottlenecks and measure the impact of your optimizations.</p>
        
        <p>Performance optimization is an ongoing process. Start with measuring, identify the biggest bottlenecks, and optimize incrementally while monitoring the results.</p>
      `,
      category: "JavaScript",
      date: "2024-01-01",
      formattedDate: "January 1, 2024",
      author: "Your Name",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "nextjs-app-router-guide",
      title: "Next.js App Router: A Complete Guide",
      excerpt:
        "Everything you need to know about Next.js App Router, from basic concepts to advanced patterns and best practices.",
      content: `
        <p>Next.js App Router represents a significant evolution in how we build React applications. This comprehensive guide covers everything from basic concepts to advanced patterns.</p>
        
        <h2>Understanding the App Directory</h2>
        <p>The app directory introduces a new file-system based router that's more powerful and flexible than the pages directory. It supports layouts, nested routing, and server components out of the box.</p>
        
        <h3>Server and Client Components</h3>
        <p>One of the biggest changes is the distinction between Server and Client Components. Server Components run on the server and can directly access databases and APIs, while Client Components run in the browser and handle interactivity.</p>
        
        <h2>Data Fetching Patterns</h2>
        <p>App Router introduces new patterns for data fetching, including async Server Components and the new fetch API with built-in caching and revalidation.</p>
        
        <h3>Layouts and Templates</h3>
        <p>Layouts allow you to share UI between routes while preserving state, while templates create new instances for each route. Understanding when to use each is crucial for optimal performance.</p>
        
        <h2>Migration Strategies</h2>
        <p>Migrating from Pages Router to App Router can be done incrementally. Start with new features in the app directory while keeping existing pages in the pages directory.</p>
        
        <p>The App Router opens up new possibilities for building performant, scalable Next.js applications. Take time to understand the new concepts and patterns to make the most of this powerful framework.</p>
      `,
      category: "Next.js",
      date: "2023-12-20",
      formattedDate: "December 20, 2023",
      author: "Your Name",
      readTime: "12 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "web-accessibility-fundamentals",
      title: "Web Accessibility Fundamentals: Building Inclusive Experiences",
      excerpt:
        "A practical introduction to web accessibility principles and techniques for creating inclusive digital experiences.",
      content: `
        <p>Web accessibility ensures that websites and applications are usable by everyone, including people with disabilities. This guide covers fundamental principles and practical techniques for building inclusive experiences.</p>
        
        <h2>The Four Principles of Accessibility</h2>
        <p>WCAG (Web Content Accessibility Guidelines) is built on four principles: Perceivable, Operable, Understandable, and Robust. These form the foundation of accessible design.</p>
        
        <h3>Semantic HTML</h3>
        <p>Using semantic HTML elements correctly is the foundation of accessibility. Proper heading structure, form labels, and ARIA attributes help screen readers understand your content.</p>
        
        <h2>Keyboard Navigation</h2>
        <p>Ensure all interactive elements are keyboard accessible. This includes proper focus management, skip links, and logical tab order.</p>
        
        <h3>Color and Contrast</h3>
        <p>Maintain sufficient color contrast ratios and don't rely solely on color to convey information. This helps users with visual impairments and color blindness.</p>
        
        <h2>Testing and Tools</h2>
        <p>Use automated testing tools like axe-core, but remember that manual testing and user feedback are equally important for ensuring true accessibility.</p>
        
        <p>Accessibility is not a feature to be added later—it should be considered from the beginning of the design and development process. Building accessible experiences benefits everyone and is often required by law.</p>
      `,
      category: "Accessibility",
      date: "2023-12-10",
      formattedDate: "December 10, 2023",
      author: "Your Name",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "typescript-best-practices",
      title: "TypeScript Best Practices for Large Applications",
      excerpt:
        "Essential TypeScript patterns and practices that help maintain code quality and developer productivity in large codebases.",
      content: `
        <p>TypeScript has become essential for building large-scale JavaScript applications. This guide covers best practices that help maintain code quality and developer productivity as your codebase grows.</p>
        
        <h2>Type Safety Strategies</h2>
        <p>Strict TypeScript configuration is crucial for large applications. Enable strict mode and gradually increase type safety by addressing any violations.</p>
        
        <h3>Effective Type Definitions</h3>
        <p>Create reusable type definitions and interfaces. Use utility types like Pick, Omit, and Partial to create variations of existing types without duplication.</p>
        
        <h2>Generic Programming</h2>
        <p>Generics allow you to write reusable, type-safe code. They're particularly useful for utility functions, API clients, and component libraries.</p>
        
        <h3>Module Organization</h3>
        <p>Organize your types and interfaces in dedicated files. Use barrel exports to create clean import paths and maintain a consistent module structure.</p>
        
        <h2>Error Handling</h2>
        <p>Implement proper error handling with discriminated unions and Result types. This makes error states explicit and easier to handle.</p>
        
        <h3>Performance Considerations</h3>
        <p>Be mindful of compilation performance. Use project references for large monorepos and avoid overly complex type computations.</p>
        
        <p>TypeScript's power lies in its ability to catch errors at compile time and improve developer experience. Following these practices will help you harness that power effectively in large applications.</p>
      `,
      category: "TypeScript",
      date: "2023-11-25",
      formattedDate: "November 25, 2023",
      author: "Your Name",
      readTime: "9 min read",
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
  