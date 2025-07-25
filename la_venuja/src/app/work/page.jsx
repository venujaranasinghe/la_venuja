"use client"

import PageIntro from "@/components/PageIntro"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Code, ArrowRight } from "lucide-react"

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-all duration-500 ease-out"
    >
      {/* Project Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img
          src={project.imageUrl || "/placeholder.svg?height=240&width=360&query=abstract project screenshot"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
        {/* Floating Project Number */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-md shadow-lg z-20">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Featured Project</span>
        </div>
        <h3 className="text-2xl font-bold text-black leading-tight group-hover:text-gray-700 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-gray-700 leading-relaxed text-base">{project.description}</p>
        </div>
        {/* Tech Stack */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Code className="w-4 h-4" />
            <span className="font-medium">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const WorkPage = () => {
  const projects = [
    {
      id: 1,
      title: "React Vite Portfolio",
      description:
        "Built with React.js and Vite, highlights my projects, skills, and experience through a fast, responsive, and modern design. Features smooth animations and optimized performance.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      imageUrl: "/images/project-1.png",
      projectUrl: "https://venujaranasinghe.github.io/portfolio-react/",
      githubUrl: "https://github.com/venujaranasinghe/portfolio-react",
    },
    {
      id: 2,
      title: "Floral Shop Admin Dashboard",
      description:
        "A comprehensive admin dashboard for a floral shop, built with Spring Boot, enabling order management, inventory tracking, and customer interactions with real-time analytics.",
      tags: ["Java", "Thymeleaf", "Spring Boot", "MySQL"],
      imageUrl: "/images/project-2.png",
      projectUrl: "https://github.com/venujaranasinghe/OOAD-Group-Assignment",
      githubUrl: "https://github.com/venujaranasinghe/OOAD-Group-Assignment",
    },
    {
      id: 3,
      title: "MERN Blog App Admin Dashboard",
      description:
        "An intuitive admin dashboard for the blog app, providing efficient post management, user controls, and analytics for streamlined content moderation with modern UI/UX.",
      tags: ["React", "MongoDB", "Node.js", "Express", "Tailwind"],
      imageUrl: "/images/project-3.png",
      projectUrl: "https://full-stack-blog-lake.vercel.app/login",
      githubUrl: "https://github.com/venujaranasinghe/FullStack-Blog",
    },
    {
      id: 4,
      title: "Full-Stack Blogging Platform",
      description:
        "A feature-rich blog app built with Next.js and MongoDB, offering seamless content management, dynamic posts, and a smooth user experience with server-side rendering.",
      tags: ["Next.js", "MongoDB", "Tailwind", "Vercel"],
      imageUrl: "/images/project-4.png",
      projectUrl: "https://github.com/venujaranasinghe/FullStack-Blog",
      githubUrl: "https://github.com/venujaranasinghe/FullStack-Blog",
    },
    {
      id: 5,
      title: "3D Animated Portfolio",
      description:
        "A visually engaging portfolio with smooth 3D animations, built using React.js and Three.js for an immersive experience. Features interactive 3D models and particle systems.",
      tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
      imageUrl: "/images/project-5.png",
      projectUrl: "https://venuja-ranasinghe.vercel.app/",
      githubUrl: "https://github.com/venujaranasinghe/3d-animated-portfolio",
    },
    {
      id: 6,
      title: "The Book I Never Wrote",
      description: "This is the book I never plan to write in a amazing web experience",
      tags: ["React", "Springboot"],
      imageUrl: "/images/project-6.png",
      projectUrl: "https://the-book-i-never-wrote.vercel.app/",
      githubUrl: "https://github.com/venujaranasinghe/",
    },
  ]

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced stagger for grid
      },
    },
  }

  return (
    <>
      <PageIntro eyebrow="My Work" title="Crafting Digital Experiences Through Code">
        <p className="text-lg text-gray-600 leading-relaxed">
          Here's a curated selection of projects I've worked on recently. Each one represents a unique challenge and
          solution, showcasing my skills in full-stack development, modern frameworks, and user-centered design
          principles.
        </p>
      </PageIntro>

      {/* Stats Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-black mb-2">{projects.length}+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-black mb-2">10+</div>
            <div className="text-gray-700 font-medium">Technologies Used</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-black mb-2">2024</div>
            <div className="text-gray-700 font-medium">Active Development</div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section ref={ref} className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-black mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we
            can bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </section>
    </>
  )
}

export default WorkPage
