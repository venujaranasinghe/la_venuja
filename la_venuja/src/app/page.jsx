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
import ParticlesBackground from "@/components/ParticlesBackground"

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
      <ParticlesBackground />
      
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
            <FadeIn className="relative flex justify-center lg:justify-end">
              <figure className="relative group">
                {/* Animated rotating border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black via-gray-500 to-black p-1 animate-spin-slow">
                  <div className="h-full w-full rounded-full bg-white"></div>
                </div>
                {/* Main image container with hexagonal clip */}
                <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
                  {/* Hexagonal image */}
                  <div
                    className="w-full h-full bg-black transform rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <img
                      src="/profile.jpg"
                      alt="Venuja Ranasinghe - Computer Science Student and Full Stack Developer"
                      className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                      style={{
                        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      }}
                      loading="eager"
                    />
                  </div>
                </div>
                {/* Floating geometric elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-black transform rotate-45 animate-pulse" aria-hidden="true"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-black transform rotate-12 animate-bounce" aria-hidden="true"></div>
                <div className="absolute top-1/2 -left-12 w-8 h-8 border-2 border-gray-400 rounded-full animate-ping" aria-hidden="true"></div>
                {/* Professional grid overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, black 1px, transparent 1px),
                        linear-gradient(to bottom, black 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>
                {/* Stylish corner brackets */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-black" aria-hidden="true"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-black" aria-hidden="true"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-black" aria-hidden="true"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-black" aria-hidden="true"></div>
                {/* Professional shadow layers */}
                <div className="absolute inset-0 bg-black opacity-20 transform translate-x-4 translate-y-4 -z-10 rounded-full blur-xl" aria-hidden="true"></div>
                <div className="absolute inset-0 bg-gray-600 opacity-10 transform translate-x-8 translate-y-8 -z-20 rounded-full blur-2xl" aria-hidden="true"></div>
              </figure>
            </FadeIn>
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
        I&apos;m currently available to take on new projects, so feel free to send me a message about anything that
        you want me to work on. You can contact anytime.
      </Testimonials>

      <Services />
      <Education />
      <ContactSection />
    </main>
  )
}
