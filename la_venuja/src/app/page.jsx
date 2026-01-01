"use client"

import { useState, useEffect } from "react"
import Clients from "@/components/Clients"
import ContactSection from "@/components/ContactSection"
import Container from "@/components/Container"
import FadeIn from "@/components/FadeIn"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Education from "@/components/Education"
import logoPhobiaDark from "@/images/clients/green-life/logo-dark.svg"
import TypingAnimation from "@/components/TypingAnimation"
import WhatsAppButtonAdvanced from "@/components/whatsapp-button-advanced"
import LiveClock from "@/components/live-clock"
//import ParticlesBackground from "@/components/ParticlesBackground"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide initial loader once React has loaded
    const hideInitialLoader = () => {
      const initialLoader = document.getElementById("initial-loader")
      if (initialLoader) {
        initialLoader.style.opacity = "0"
        setTimeout(() => {
          initialLoader.style.display = "none"
          setIsLoading(false)
        }, 500)
      }
    }

    // Check if page is already loaded
    if (document.readyState === "complete") {
      hideInitialLoader()
    } else {
      window.addEventListener("load", hideInitialLoader)
    }

    return () => {
      window.removeEventListener("load", hideInitialLoader)
    }
  }, [])

  // Don't render anything until initial loading is complete
  if (isLoading) {
    return null
  }

  return (
    <main className="text-black" role="main">

      {/* Hero Section */}
      <section aria-label="Introduction" className="relative">
        <Container className="mt-24 sm:mt-32">
          <LiveClock />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <FadeIn className="max-w-3xl">
              <header>
                <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  <TypingAnimation />
                  <br />
                  I&apos;m Venuja
                </h1>
                <p className="mt-6 text-xl text-neutral-600">
                  An undergraduate computer science student at SLIIT with a passion for building innovative projects and
                  solving real-world problems through technology.
                </p>
              </header>
              <a
                href="/assets/Venuja_Ranasinghe_Resume.pdf"
                download
                className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-opacity-90"
                aria-label="Download Venuja Ranasinghe's CV"
              >
                <span className="relative z-10">Download CV</span>
                <svg
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </FadeIn>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/newdp.jpg"
                alt="Venuja Ranasinghe - Computer Science Student and Full Stack Developer"
                style={{ maxWidth: "320px", height: "auto", display: "block" }}
                loading="eager"
              />
            </div>
          </div>
        </Container>
      </section>

      <WhatsAppButtonAdvanced
        phoneNumber="+94729847372"
        businessName="Venuja Ranasinghe"
        welcomeMessage="Hi! Thanks for visiting my portfolio. How can I help you?"
        quickMessages={[
          "I'd like to hire you for a project",
          "Can we discuss your services?",
          "I have a question about your work",
        ]}
      />

      <Clients />

      <Testimonials className="mt-24 sm:mt-32 lg:mt-40" client={{ name: "la_Venuja", logo: logoPhobiaDark }}>
        I believe great work comes from collaboration and curiosity. This portfolio is a window into what I’ve built—and a hint at what’s next. Ready to create something impactful?
      </Testimonials>


      <Services />
      <Education />
      <ContactSection />
    </main>
  )
}
