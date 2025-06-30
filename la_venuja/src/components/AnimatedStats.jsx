"use client"

import { useState, useEffect, useRef } from "react"

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ projects: 0, clients: 0, experience: 0, skills: 0 })
  const sectionRef = useRef(null)

  const finalCounts = {
    projects: 25,
    clients: 15,
    experience: 3,
    skills: 20,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounts({
          projects: Math.floor(finalCounts.projects * progress),
          clients: Math.floor(finalCounts.clients * progress),
          experience: Math.floor(finalCounts.experience * progress),
          skills: Math.floor(finalCounts.skills * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounts(finalCounts)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    { label: "Projects Completed", value: counts.projects, suffix: "+" },
    { label: "Happy Clients", value: counts.clients, suffix: "+" },
    { label: "Years Experience", value: counts.experience, suffix: "" },
    { label: "Technologies", value: counts.skills, suffix: "+" },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-6xl font-bold mb-2 font-mono">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">{stat.label}</div>
              <div className="mt-2 h-0.5 bg-gray-800 group-hover:bg-white transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
