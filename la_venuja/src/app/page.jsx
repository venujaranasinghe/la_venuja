"use client"

import { useState } from "react"
import Clients from "@/components/Clients"
import ContactSection from "@/components/ContactSection"
import Container from "@/components/Container"
import FadeIn from "@/components/FadeIn"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import logoPhobiaDark from "@/images/clients/green-life/logo-dark.svg"
import TypingAnimation from "@/components/TypingAnimation"
import SplashScreen from "@/components/SplashScreen"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <main className="text-black">
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          <Container className="mt-24 sm:mt-32">
            <FadeIn className="max-w-3xl">
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                <TypingAnimation />
                <br />
                I&apos;m Venuja
              </h1>
              <p className="mt-6 text-xl text-neutral-600">
                An undergraduate computer science student at SLIIT with a passion for building innovative projects and
                solving real-world problems through technology.
              </p>
              <a
                href="/assets/sample-cv.pdf"
                download
                className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-opacity-90"
              >
                <span className="relative z-10">Download CV</span>
                <svg
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
          </Container>

          <Clients />

          <Testimonials className="mt-24 sm:mt-32 lg:mt-40" client={{ name: "la_Venuja", logo: logoPhobiaDark }}>
            I&apos;m currently available to take on new projects, so feel free to send me a message about anything that
            you want me to work on. You can contact anytime.
          </Testimonials>

          <Services />

          <ContactSection />
        </>
      )}
    </main>
  )
}
