"use client"

import PageIntro from "@/components/PageIntro"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Code, ArrowRight } from "lucide-react"

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}>
        {/* Project Image */}
        <div className="lg:w-3/5 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
          </div>

          {/* Floating Project Number */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Project Content */}
        <div className="lg:w-2/5 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Featured Project</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
              {project.title}
            </h3>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Code className="w-4 h-4" />
              <span className="font-medium">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 hover:text-gray-900 transition-all duration-300 border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            )}
          </div>
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
      imageUrl: "/1.png",
      projectUrl: "https://venujaranasinghe.github.io/portfolio-react/",
      githubUrl: "https://github.com/venujaranasinghe/portfolio-react",
    },
    {
      id: 2,
      title: "Floral Shop Admin Dashboard",
      description:
        "A comprehensive admin dashboard for a floral shop, built with Spring Boot, enabling order management, inventory tracking, and customer interactions with real-time analytics.",
      tags: ["Java", "Thymeleaf", "Spring Boot", "MySQL"],
      imageUrl: "/3.png",
      projectUrl: "https://github.com/venujaranasinghe/OOAD-Group-Assignment",
      githubUrl: "https://github.com/venujaranasinghe/OOAD-Group-Assignment",
    },
    {
      id: 3,
      title: "MERN Blog App Admin Dashboard",
      description:
        "An intuitive admin dashboard for the blog app, providing efficient post management, user controls, and analytics for streamlined content moderation with modern UI/UX.",
      tags: ["React", "MongoDB", "Node.js", "Express", "Tailwind"],
      imageUrl: "/4.png",
      projectUrl: "https://full-stack-blog-lake.vercel.app/login",
      githubUrl: "https://github.com/venujaranasinghe/FullStack-Blog",
    },
    {
      id: 4,
      title: "Full-Stack Blogging Platform",
      description:
        "A feature-rich blog app built with Next.js and MongoDB, offering seamless content management, dynamic posts, and a smooth user experience with server-side rendering.",
      tags: ["Next.js", "MongoDB", "Tailwind", "Vercel"],
      imageUrl: "/5.png",
      projectUrl: "https://github.com/venujaranasinghe/FullStack-Blog",
      githubUrl: "https://github.com/venujaranasinghe/FullStack-Blog",
    },
    {
      id: 5,
      title: "3D Animated Portfolio",
      description:
        "A visually engaging portfolio with smooth 3D animations, built using React.js and Three.js for an immersive experience. Features interactive 3D models and particle systems.",
      tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
      imageUrl: "/7.png",
      projectUrl: "https://venuja-ranasinghe.vercel.app/",
      githubUrl: "https://github.com/venujaranasinghe/3d-animated-portfolio",
    },
    {
      id: 6,
      title: "The Book I Never Wrote",
      description:
        "This is the book I never plan to write in a amazing web experience",
      tags: ["React", "Springboot"],
      imageUrl: "/8.png",
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
        staggerChildren: 0.3,
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
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
            <div className="text-3xl font-bold text-gray-800 mb-2">{projects.length}+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="text-3xl font-bold text-gray-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Technologies Used</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <div className="text-3xl font-bold text-gray-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
            <div className="text-3xl font-bold text-gray-600 mb-2">2024</div>
            <div className="text-gray-600 font-medium">Active Development</div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section ref={ref} className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-32">
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
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we
            can bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
