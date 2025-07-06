"use client"

import { useState } from "react"
import Container from "./Container"
import FadeIn from "./FadeIn"
import FooterNavigation from "./FooterNavigation"
import Logo from "./Logo"
import Link from "next/link"

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
    </svg>
  )
}

const SparkleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0l2.4 7.2L22 12l-7.6 4.8L12 24l-2.4-7.2L2 12l7.6-4.8L12 0z" />
  </svg>
)

const SocialIcon = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-110 hover:shadow-lg"
    aria-label={label}
  >
    <Icon className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-white" />
    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 blur transition-opacity group-hover:opacity-20" />
  </Link>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle, loading, success, error
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success")
        setMessage("Thanks for subscribing! 🎉")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address")
      }

      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 3000)
    }, 1000)
  }

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 mb-4">
        <SparkleIcon className="h-5 w-5 text-purple-500" />
        <h2 className="font-display text-sm font-semibold tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Join the Newsletter
        </h2>
      </div>

      <p className="mt-4 text-sm text-neutral-700">
        Get exclusive design insights, resources, and inspiration delivered to your inbox.
      </p>

      <div className="relative mt-6 group">
        <input
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="block w-full rounded-2xl border border-neutral-300 bg-white/50 backdrop-blur-sm py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition-all duration-300 placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus:ring-purple-500/20 focus:bg-white group-hover:border-neutral-400 disabled:opacity-50"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            disabled={status === "loading" || !email}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === "loading" ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <ArrowIcon className="w-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </button>
        </div>
      </div>

      {message && (
        <FadeIn>
          <p className={`mt-3 text-sm font-medium ${status === "success" ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        </FadeIn>
      )}
    </form>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
    { href: "https://linkedin.com", icon: LinkedInIcon, label: "LinkedIn" },
    { href: "https://github.com", icon: GitHubIcon, label: "GitHub" },
  ]

  return (
    <Container as="footer" className="relative mt-24 w-full sm:mt-32 lg:mt-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative">
        <FadeIn>
          {/* Main content */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 mb-16">
            <FooterNavigation />
            <div className="flex lg:justify-end">
              <NewsletterForm />
            </div>
          </div>

          {/* Social links section */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-neutral-200">
              <span className="text-sm font-medium text-neutral-600">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.label} {...social} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12 pb-8">
            <Link href="/" aria-label="Home" className="group">
              <div className="flex items-center gap-3">
                <Logo className="h-8 transition-transform group-hover:scale-110" fillOnHover>
                  la_venuja
                </Logo>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-xs font-medium text-purple-700">
                  <SparkleIcon className="h-3 w-3" />
                  Creative Developer
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <p className="text-sm text-neutral-700">© Venuja Ranasinghe {currentYear}</p>
              <div className="flex items-center gap-1 text-xs text-neutral-500">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse">♥</span>
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export default Footer
