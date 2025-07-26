"use client"
import { useState } from "react"
import Container from "@/components/Container"
import FadeIn from "@/components/FadeIn"

const educationData = [
  {
    id: 1,
    institution: "Bachelor of Science in Computer Science",
    degree: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2022 - Present",
    status: "Undergraduate",
    description:
      "Specializing in software development, algorithms, and modern web technologies. Actively engaged in practical projects and innovative solutions.",
    logo: "🎓",
  },
  {
    id: 2,
    institution: "Secondary Education",
    degree: "Kingswood College, Kandy",
    period: "2019 - 2021",
    status: "Completed",
    description: "Physical Science Stream",
    logo: "📚",
  },
  {
    id: 3,
    institution: "Primary Education",
    degree: "Kingswood College, Kandy",
    period: "2008 - 2018",
    status: "Completed",
    description: "",
    logo: "🏫",
  },
]

export default function Education() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section className="mt-16 sm:mt-24 lg:mt-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
                Educational Journey
              </h2>
              <p className="mt-4 text-lg text-neutral-600 sm:mt-6 sm:text-xl">
                My academic path has been focused on building a strong foundation in computer science and developing the
                skills needed to create innovative technological solutions.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 sm:mt-16">
          <div className="relative">
            {/* Timeline line - responsive positioning */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-950 via-neutral-400 to-transparent sm:left-6 lg:left-8"></div>

            <div className="space-y-8 sm:space-y-12">
              {educationData.map((education, index) => (
                <FadeIn key={education.id} className="relative">
                  <div
                    className={`group cursor-pointer transition-all duration-300 ${
                      activeCard === education.id ? "transform scale-[1.02] sm:scale-105" : ""
                    }`}
                    onMouseEnter={() => setActiveCard(education.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {/* Timeline dot - responsive positioning */}
                    <div className="absolute left-2 w-4 h-4 bg-neutral-950 rounded-full border-4 border-white shadow-lg z-10 group-hover:bg-neutral-600 transition-colors duration-300 sm:left-4 lg:left-6"></div>

                    {/* Education card - responsive margins and padding */}
                    <div className="ml-10 bg-white rounded-xl border border-neutral-200 p-4 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-neutral-300 sm:ml-16 sm:p-6 lg:ml-20 lg:p-8 lg:rounded-2xl">
                      {/* Header section - responsive layout */}
                      <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="text-2xl sm:text-3xl lg:text-4xl flex-shrink-0">{education.logo}</div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-700 transition-colors sm:text-xl leading-tight">
                              {education.institution}
                            </h3>
                            <p className="text-base text-neutral-600 font-medium mt-1 sm:text-lg">{education.degree}</p>
                          </div>
                        </div>

                        {/* Status and period - responsive positioning */}
                        <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:items-end sm:text-right">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 sm:text-sm ${
                              education.status === "Undergraduate"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {education.status}
                          </span>
                          <p className="text-xs text-neutral-500 font-medium sm:text-sm sm:mt-2">{education.period}</p>
                        </div>
                      </div>

                      {/* Description - responsive text */}
                      {education.description && (
                        <p className="text-sm text-neutral-600 leading-relaxed sm:text-base sm:mb-6 mb-4">
                          {education.description}
                        </p>
                      )}

                      {/* Hover effect gradient */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none lg:rounded-2xl"></div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
