"use client"

import React from "react"
import Container from "@/components/Container"
import SectionIntro from "@/components/SectionIntro"
import GlassFolder from "@/components/ui/glass-folder-cards"

const PROJECT_FILES = [
  {
    name: "Renal Unit Database",
    meta: "Next.js · AWS",
    art: "aurora",
    href: "/work",
  },
  {
    name: "Full-Stack Portfolio",
    meta: "Next.js · GSAP",
    art: "glacier",
    href: "/work",
  },
  {
    name: "AI Agent Orchestrator",
    meta: "Python · LangChain",
    art: "ember",
    href: "/work",
  },
  {
    name: "Skyline Visualizer",
    meta: "Three.js · React",
    art: "verdant",
    href: "/work",
  },
]

const BLOG_FILES = [
  {
    name: "80/20 Rule for Productivity",
    meta: "Medium · 5 min read",
    art: "dusk",
    href: "https://medium.com/@venuja12345/how-i-apply-the-80-20-rule-to-maximize-my-productivity-as-an-undergrad-cd0be726e6da",
  },
  {
    name: "What I Wish I Knew in CS",
    meta: "Medium · 4 min read",
    art: "ember",
    href: "https://medium.com/@venuja12345/what-i-wish-i-knew-before-starting-computer-science-64746d4654e6",
  },
  {
    name: "AI Agent Capabilities Scale",
    meta: "Medium · 7 min read",
    art: "aurora",
    href: "https://venujaranasinghe.medium.com/how-do-ai-agent-capabilities-scale-from-simple-reflexes-to-complex-learning-b970b06ebb5f",
  },
  {
    name: "EC2 vs AWS Lambda Guide",
    meta: "Medium · 4 min read",
    art: "glacier",
    href: "https://venujaranasinghe.medium.com/ec2-vs-aws-lambda-when-should-you-use-which-4193a8dee159",
  },
]

const CERTIFICATE_FILES = [
  {
    name: "DevOps on AWS",
    meta: "AWS Training · Cloud",
    art: "ember",
    href: "/process",
  },
  {
    name: "Python for Beginners",
    meta: "Python Institute",
    art: "verdant",
    href: "/process",
  },
  {
    name: "AI/ML Engineer - Stage 1",
    meta: "Machine Learning",
    art: "aurora",
    href: "/process",
  },
  {
    name: "Cloud Architecture",
    meta: "AWS Credential",
    art: "glacier",
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

        <div className="grid grid-cols-1 items-end justify-items-center gap-x-10 gap-y-16 pt-8 pb-12 md:grid-cols-2 xl:grid-cols-3">
          {/* Projects Folder */}
          <div className="flex flex-col items-center">
            <GlassFolder
              label="Projects"
              art="aurora"
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
              art="dusk"
              seed={18}
              tone="light"
              appearDelay={140}
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
              art="ember"
              seed={27}
              appearDelay={280}
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
