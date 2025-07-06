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
import WhatsAppButtonAdvanced from "@/components/whatsapp-button-advanced"
import LiveClock from "@/components/live-clock"
import ParticlesBackground from "@/components/ParticlesBackground"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <main className="text-black relative overflow-hidden">
      {/* Enhanced Background with Geometric Patterns */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
        {/* Geometric overlay patterns */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, black 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, black 1px, transparent 1px),
                linear-gradient(45deg, transparent 49%, rgba(0,0,0,0.1) 50%, transparent 51%)
              `,
              backgroundSize: "60px 60px, 40px 40px, 80px 80px",
            }}
          />
        </div>
      </div>

      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <div className="relative z-10">
          {/* Hero Section with Enhanced Design */}
          <Container className="mt-24 sm:mt-32 relative">
            {/* Floating geometric decorations */}
            <div className="absolute -top-20 -left-20 w-40 h-40 border border-black/10 rounded-full animate-spin-slow" />
            <div className="absolute -top-10 right-20 w-20 h-20 bg-black/5 transform rotate-45 animate-pulse" />

            <div className="relative">
              <LiveClock />

              {/* Main content grid */}
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center mt-12">
                {/* Text Content */}
                <FadeIn className="max-w-3xl relative">
                  {/* Background accent */}
                  <div className="absolute -inset-8 bg-gradient-to-br from-black/5 to-transparent rounded-3xl -z-10" />

                  {/* Main heading with enhanced styling */}
                  <div className="relative">
                    <h1 className="font-display text-6xl lg:text-8xl font-black tracking-tight text-black [text-wrap:balance] leading-none">
                      <div className="relative inline-block">
                        <TypingAnimation />
                        {/* Animated underline */}
                        <div className="absolute -bottom-4 left-0 w-0 h-2 bg-black animate-expand-width" />
                      </div>
                      <br />
                      <span className="relative">
                        {"I'm"}{" "}
                        <span className="relative inline-block">
                          Venuja
                          {/* Highlight effect */}
                          <div className="absolute inset-0 bg-black/10 transform -skew-x-12 -z-10" />
                        </span>
                      </span>
                    </h1>

                    {/* Decorative elements */}
                    <div className="absolute -right-8 top-8 w-4 h-4 bg-black rounded-full animate-ping" />
                    <div className="absolute -left-4 bottom-8 w-8 h-1 bg-black transform rotate-45" />
                  </div>

                  {/* Enhanced description */}
                  <div className="mt-8 relative">
                    <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-black to-transparent" />
                    <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light pl-8">
                      An undergraduate{" "}
                      <span className="font-semibold text-black relative">
                        computer science student
                        <div className="absolute -bottom-1 left-0 w-full h-px bg-black/30" />
                      </span>{" "}
                      at SLIIT with a passion for building{" "}
                      <span className="font-semibold text-black">innovative projects</span> and solving real-world
                      problems through technology.
                    </p>
                  </div>

                  {/* Enhanced CTA button */}
                  <div className="mt-12 relative">
                    <a
                      href="/assets/Venuja_Ranasinghe_Resume.pdf"
                      download
                      className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-bold tracking-wide uppercase transition-all duration-500 hover:bg-white hover:text-black border-2 border-black overflow-hidden"
                    >
                      {/* Button background animation */}
                      <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                      <span className="relative z-10 flex items-center gap-3">
                        Download CV
                        <svg
                          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2"
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
                      </span>

                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-current opacity-50" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-current opacity-50" />
                    </a>
                  </div>
                </FadeIn>

                {/* Enhanced Profile Image Section */}
                <FadeIn className="relative flex justify-center lg:justify-end">
                  <div className="relative group">
                    {/* Multiple rotating borders */}
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black via-gray-400 to-black p-1 animate-spin-slow">
                        <div className="h-full w-full rounded-full bg-white" />
                      </div>
                      <div className="absolute inset-2 rounded-full bg-gradient-to-l from-gray-600 via-black to-gray-600 p-1 animate-spin-reverse">
                        <div className="h-full w-full rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Main image container */}
                    <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
                      {/* Enhanced hexagonal image */}
                      <div
                        className="w-full h-full bg-black transform transition-all duration-700 group-hover:rotate-0 group-hover:scale-110 shadow-2xl"
                        style={{
                          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                          transform: "rotate(12deg)",
                        }}
                      >
                        <img
                          src="/profile.jpg"
                          alt="Venuja Ranasinghe - Computer Science Student"
                          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                          style={{
                            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                          }}
                        />

                        {/* Image overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    {/* Enhanced floating elements */}
                    <div className="absolute -top-12 -left-12 w-20 h-20 border-4 border-black transform rotate-45 animate-pulse opacity-60" />
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-black transform rotate-12 animate-bounce opacity-80" />
                    <div className="absolute top-1/2 -left-16 w-12 h-12 border-4 border-gray-400 rounded-full animate-ping opacity-40" />
                    <div className="absolute top-1/4 -right-12 w-8 h-8 bg-gray-600 transform rotate-45 animate-pulse" />

                    {/* Enhanced corner brackets */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-l-4 border-t-4 border-black opacity-60" />
                    <div className="absolute -top-6 -right-6 w-12 h-12 border-r-4 border-t-4 border-black opacity-60" />
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-4 border-b-4 border-black opacity-60" />
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-4 border-b-4 border-black opacity-60" />

                    {/* Professional shadow layers */}
                    <div className="absolute inset-0 bg-black opacity-30 transform translate-x-6 translate-y-6 -z-10 rounded-full blur-2xl" />
                    <div className="absolute inset-0 bg-gray-800 opacity-20 transform translate-x-12 translate-y-12 -z-20 rounded-full blur-3xl" />

                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, black 1px, transparent 1px),
                            linear-gradient(to bottom, black 1px, transparent 1px)
                          `,
                          backgroundSize: "15px 15px",
                        }}
                      />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>

          {/* Enhanced WhatsApp Button */}
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

          {/* Enhanced Sections with Dividers */}
          <div className="relative mt-32">
            {/* Section divider */}
            <div className="flex items-center justify-center mb-24">
              <div className="w-32 h-px bg-black" />
              <div className="mx-4 w-3 h-3 bg-black rounded-full" />
              <div className="w-32 h-px bg-black" />
            </div>

            <Clients />

            <div className="flex items-center justify-center my-24">
              <div className="w-24 h-px bg-gray-400" />
              <div className="mx-4 w-2 h-2 bg-gray-400 rounded-full" />
              <div className="w-24 h-px bg-gray-400" />
            </div>

            <Testimonials className="mt-24 sm:mt-32 lg:mt-40" client={{ name: "la_Venuja", logo: logoPhobiaDark }}>
              {"I'm"} currently available to take on new projects, so feel free to send me a message about anything that
              you want me to work on. You can contact anytime.
            </Testimonials>

            <div className="flex items-center justify-center my-24">
              <div className="w-24 h-px bg-gray-400" />
              <div className="mx-4 w-2 h-2 bg-gray-400 rounded-full" />
              <div className="w-24 h-px bg-gray-400" />
            </div>

            <Services />

            <div className="flex items-center justify-center my-24">
              <div className="w-32 h-px bg-black" />
              <div className="mx-4 w-3 h-3 bg-black rounded-full" />
              <div className="w-32 h-px bg-black" />
            </div>

            <ContactSection />
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes expand-width {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        
        .animate-expand-width {
          animation: expand-width 2s ease-out 1s forwards;
        }
      `}</style>
    </main>
  )
}
