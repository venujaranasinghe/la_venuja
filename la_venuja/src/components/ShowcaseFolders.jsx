"use client"

import React from "react"
import Container from "@/components/Container"
import SectionIntro from "@/components/SectionIntro"
import GlassFolder from "@/components/ui/glass-folder-cards"

const PROJECT_FILES = [
  {
    name: "Renal Unit Database",
    meta: "Next.js · AWS DynamoDB",
    image: "/ss2.png",
    href: "/work",
  },
  {
    name: "Serene Blooms",
    meta: "React · ASP.NET · Azure",
    image: "/ss1.png",
    href: "/work",
  },
  {
    name: "The Glaze Bakery",
    meta: "React · Spring Boot · MongoDB",
    image: "/ss4.png",
    href: "/work",
  },
  {
    name: "Blogify Full-Stack",
    meta: "Next.js · MongoDB · Tailwind",
    image: "/ss3.png",
    href: "/work",
  },
]

const BLOG_FILES = [
  {
    name: "80/20 Rule for Productivity",
    meta: "Medium · 5 min read",
    image: "/Blog1.png",
    href: "https://medium.com/@venuja12345/how-i-apply-the-80-20-rule-to-maximize-my-productivity-as-an-undergrad-cd0be726e6da",
  },
  {
    name: "What I Wish I Knew in CS",
    meta: "Medium · 4 min read",
    image: "/blog2.jpg",
    href: "https://medium.com/@venuja12345/what-i-wish-i-knew-before-starting-computer-science-64746d4654e6",
  },
  {
    name: "AI Agent Capabilities Scale",
    meta: "Medium · 7 min read",
    image: "/blog3.jpg",
    href: "https://venujaranasinghe.medium.com/how-do-ai-agent-capabilities-scale-from-simple-reflexes-to-complex-learning-b970b06ebb5f",
  },
  {
    name: "EC2 vs AWS Lambda Guide",
    meta: "Medium · 4 min read",
    image: "/blog4.jpg",
    href: "https://venujaranasinghe.medium.com/ec2-vs-aws-lambda-when-should-you-use-which-4193a8dee159",
  },
]

const CERTIFICATE_FILES = [
  {
    name: "DevOps On AWS",
    meta: "AWS Training & Certification",
    image: "/c1.png",
    href: "/process",
  },
  {
    name: "Python for Beginners",
    meta: "Python Institute",
    image: "/c2.png",
    href: "/process",
  },
  {
    name: "AI/ML Engineer - Stage 1",
    meta: "Machine Learning Credential",
    image: "/c4.png",
    href: "/process",
  },
  {
    name: "Python Essentials",
    meta: "Cisco Networking Academy",
    image: "/c5.png",
    href: "/process",
  },
]

export default function ShowcaseFolders() {
  const handleFileSelect = (file) => {
    if (file?.href) {
      if (file.href.startsWith("http")) {
        window.open(file.href, "_blank", "noopener,noreferrer")
      } else {
        window.location.href = file.href
      }
    }
  }

  return (
    <section aria-label="Interactive Showcase" className="relative w-full overflow-hidden py-24 sm:py-32">
      <SectionIntro
        eyebrow="Interactive Vault"
        title="Explore My Work, Insights & Credentials"
        className="mb-14 sm:mb-20"
      >
        <p>
          Click or hover on any frosted glass folder to inspect files, review key architectural projects, 
          read technical publications, and verify certifications.
        </p>
      </SectionIntro>

      <Container className="relative">
        {/* Subtle patterned background accent for frosted glass refraction */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(#18181b 1.2px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="grid grid-cols-1 items-end justify-items-center gap-x-10 gap-y-16 pt-10 pb-14 md:grid-cols-2 xl:grid-cols-3">
          {/* Projects Folder */}
          <div className="flex flex-col items-center">
            <GlassFolder
              label="Projects"
              image="/ss2.png"
              seed={5}
              appearDelay={0}
              files={PROJECT_FILES}
              action="more"
              labelPlacement="bottom-left"
              onFileSelect={handleFileSelect}
              menu={[
                {
                  label: "View all projects (/work)",
                  onSelect: () => (window.location.href = "/work"),
                },
                {
                  label: "GitHub Profile",
                  onSelect: () => window.open("https://github.com/Venuja-R", "_blank"),
                },
              ]}
            />
            <span className="mt-4 font-mono text-xs tracking-wider text-neutral-500 uppercase">
              Featured Works
            </span>
          </div>

          {/* Blogs Folder */}
          <div className="flex flex-col items-center">
            <GlassFolder
              label="Tech Blogs"
              image="/Blog1.png"
              seed={18}
              tone="light"
              appearDelay={120}
              files={BLOG_FILES}
              action="more"
              labelPlacement="top-left"
              onFileSelect={handleFileSelect}
              menu={[
                {
                  label: "Visit Blog Page (/blog)",
                  onSelect: () => (window.location.href = "/blog"),
                },
                {
                  label: "Read on Medium",
                  onSelect: () => window.open("https://medium.com/@venuja12345", "_blank"),
                },
              ]}
            />
            <span className="mt-4 font-mono text-xs tracking-wider text-neutral-500 uppercase">
              Articles & Guides
            </span>
          </div>

          {/* Certifications Folder */}
          <div className="flex flex-col items-center">
            <GlassFolder
              label="Certificates"
              tone="dark"
              image="/c1.png"
              seed={27}
              appearDelay={240}
              files={CERTIFICATE_FILES}
              action="more"
              labelPlacement="bottom-left"
              onFileSelect={handleFileSelect}
              menu={[
                {
                  label: "All Credentials (/process)",
                  onSelect: () => (window.location.href = "/process"),
                },
              ]}
            />
            <span className="mt-4 font-mono text-xs tracking-wider text-neutral-500 uppercase">
              Verified Badges
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-center">
          <p className="font-mono text-xs tracking-[0.18em] text-neutral-400 uppercase">
            Hover to lean · Click folder to open files · Click any card to view
          </p>
        </div>
      </Container>
    </section>
  )
}
