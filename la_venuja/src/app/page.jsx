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
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {!showSplash && (
        <>
          <Container className="mt-24 sm:mt-32">
            <FadeIn className="max-w-3xl">
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                <TypingAnimation />
                <br />
                I'm Venuja
              </h1>
              <p className="mt-6 text-xl text-neutral-600">
                An undergraduate computer science student at SLIIT with a passion for building innovative projects and
                solving real-world problems through technology.
              </p>
              <a
                href="/assets/sample-cv.pdf"
                download
                className="mt-8 inline-block rounded-full px-6 py-3 text-sm font-medium text-white bg-neutral-950 hover:bg-neutral-800 transition-colors"
              >
                Download CV
              </a>
            </FadeIn>
          </Container>
          <Clients />
          <Testimonials className="mt-24 sm:mt-32 lg:mt-40" client={{ name: "la_Venuja", logo: logoPhobiaDark }}>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you
            want me to work on. You can contact anytime.
          </Testimonials>
          <Services />
          <ContactSection />
        </>
      )}
    </main>
  )
}
