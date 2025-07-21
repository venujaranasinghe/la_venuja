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
    period: "2029 - 2021",
    status: "Completed",
    description:
      "Physical Science Stream",
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
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Educational Journey
              </h2>
              <p className="mt-6 text-xl text-neutral-600">
                My academic path has been focused on building a strong foundation in computer science and developing the
                skills needed to create innovative technological solutions.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-950 via-neutral-400 to-transparent"></div>

            <div className="space-y-12">
              {educationData.map((education, index) => (
                <FadeIn key={education.id} className="relative">
                  <div
                    className={`group cursor-pointer transition-all duration-300 ${
                      activeCard === education.id ? "transform scale-105" : ""
                    }`}
                    onMouseEnter={() => setActiveCard(education.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-neutral-950 rounded-full border-4 border-white shadow-lg z-10 group-hover:bg-neutral-600 transition-colors duration-300"></div>

                    {/* Education card */}
                    <div className="ml-20 bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-neutral-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{education.logo}</div>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-neutral-950 group-hover:text-neutral-700 transition-colors">
                              {education.institution}
                            </h3>
                            <p className="text-lg text-neutral-600 font-medium">{education.degree}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                              education.status === "Undergraduate"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {education.status}
                          </span>
                          <p className="mt-2 text-sm text-neutral-500 font-medium">{education.period}</p>
                        </div>
                      </div>

                      <p className="text-neutral-600 mb-6 leading-relaxed">{education.description}</p>

                      {/* Hover effect gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neutral-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Skills gained section
        <FadeIn className="mt-16">
          <div className="rounded-2xl bg-neutral-950 p-8 text-white">
            <h3 className="font-display text-2xl font-semibold mb-6">Skills & Knowledge Gained</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Data Structures & Algorithms",
                "Web Development",
                "Database Management",
                "Software Engineering",
                "Object-Oriented Programming",
                "Mobile App Development",
                "Machine Learning Basics",
                "Project Management",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors duration-300 cursor-default"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn> */}
      </Container>
    </section>
  )
}
