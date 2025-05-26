"use client"; // Add this directive at the top

import PageIntro from "@/components/PageIntro";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project, controls }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="mb-12 last:mb-0"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 rounded-full text-xs font-medium bg-black text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center  text-black hover:text-gray-400 transition-colors duration-300"
            >
              View Project
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const WorkPage = () => {
  const projects = [
    {
      id: 1,
      title: "React Vite Portfolio",
      description: "Built with React.js and Vite, highlights my projects, skills, and experience through a fast, responsive, and modern design.",
      tags: ["React", "CSS"],
      imageUrl: "/1.png",
      projectUrl: "https://venujaranasinghe.github.io/portfolio-react/",
    },
    {
      id: 2,
      title: "Floral Shop Admin Dashboard",
      description: "A comprehensive admin dashboard for a floral shop, built with Spring Boot, enabling order management, inventory tracking, and customer interactions.",
      tags: ["Java", "Thymleaf", "Springboot"],
      imageUrl: "/3.png",
      projectUrl: "https://github.com/venujaranasinghe/OOAD-Group-Assignment",
    },
    {
      id: 3,
      title: "MERN Blog App Admin Dashboard",
      description: "An intuitive admin dashboard for the blog app, providing efficient post management, user controls, and analytics for streamlined content moderation.",
      tags: ["React", "MongoDB", "NodeJS", "Tailwind"],
      imageUrl: "/4.png",
      projectUrl: "https://github.com/venujaranasinghe/FullStack-Blog/tree/main/backend"
    },
    {
      id: 4,
      title: "Full-Stack Blogging Platform",
      description: "A feature-rich blog app built with Next.js and MongoDB, offering seamless content management, dynamic posts, and a smooth user experience.",
      tags: ["Next", "MongoDB", "Tailwind"],
      imageUrl: "/5.png",
      projectUrl: "https://github.com/venujaranasinghe/FullStack-Blog"
    },
    {
      id: 5,
      title: "3D Animated Portfolio",
      description: "A visually engaging portfolio with smooth 3D animations, built using React.js and Framer Motion for an immersive experience.",
      tags: ["React", "ThreeJs", "Tailwind"],
      imageUrl: "/7.png",
      projectUrl: "https://github.com/venujaranasinghe/3d-animated-portfolio"
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <PageIntro
        eyebrow="My work"
        title="Explore my recent work and projects."
      >
        <p>
          Here's a selection of projects I've worked on recently. Each one represents
          a unique challenge and solution, showcasing my skills and approach to development.
        </p>
      </PageIntro>

      <section ref={ref} className="py-12 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          className="space-y-20"
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              controls={{ opacity: 1, y: 0 }}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default WorkPage;