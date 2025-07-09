"use client"

import ContactSection from "@/components/ContactSection"
import PageIntro from "@/components/PageIntro"
import { motion } from "framer-motion"
import Image from "next/image"
import Values from "@/components/Values"
import { ExternalLink, Award, Calendar, Hash } from "lucide-react"
import ParticlesBackground from "@/components/ParticlesBackground"

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-gray-200 transition-all duration-500"
    >
      <ParticlesBackground />
      <div className="lg:flex">
        <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50 z-10"></div>
          <Image
            src={certificate.imageUrl || "/placeholder.svg"}
            alt={certificate.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <Award className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        <div className="p-8 lg:w-3/5 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-black-600 transition-colors duration-300">
                {certificate.title}
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-800">Issued by:</span>
                <span className="ml-2 text-gray-700">{certificate.issuer}</span>
              </div>

              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                <span className="font-medium text-gray-800">Date:</span>
                <span className="ml-2 text-gray-700">{certificate.date}</span>
              </div>

              {certificate.credentialId && (
                <div className="flex items-center text-gray-600">
                  <Hash className="w-4 h-4 mr-3 text-blue-500" />
                  <span className="font-medium text-gray-800">Credential ID:</span>
                  <span className="ml-2 text-gray-700 font-mono text-sm bg-gray-50 px-2 py-1 rounded">
                    {certificate.credentialId}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <a
              href={certificate.verifyUrl || certificate.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-900 text-white font-medium rounded-xl hover:from-gray-800 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"

            >
              View Certificate
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>

            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                Certificate #{certificate.id}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProcessPage = () => {
  const certificates = [
    {
      id: 1,
      title: "Computer Science (Undergraduate)",
      issuer: "SLIIT",
      date: "June 2023",
      credentialId: "",
      verifyUrl: "https://aws.amazon.com/verification",
      imageUrl: "/images.jpg",
    },
    {
      id: 2,
      title: "Fundamentals of DevOps On AWS",
      issuer: "SimpliLearn",
      date: "January 2025",
      credentialId: "7807177",
      verifyUrl: "https://coursera.org/verify/GA123456789",
      imageUrl: "/c1.png",
    },
    {
      id: 3,
      title: "Python for Beginners",
      issuer: "CODL-UOM",
      date: "December 2024",
      credentialId: "OR5BIOdVUJ",
      verifyUrl: "https://learn.microsoft.com/verify",
      imageUrl: "/c2.png",
    },
    {
      id: 4,
      title: "AI/ML Engineer - Stage 1",
      issuer: "SLIIT",
      date: "November 2024",
      credentialId: "cxxkska4dc",
      verifyUrl: "https://coursera.org/verify/REACT123456",
      imageUrl: "/c4.png",
    },
    {
      id: 5,
      title: "AI/ML Engineer - Stage 2",
      issuer: "SLIIT",
      date: "December 2024",
      credentialId: "wt5gx3gucq",
      verifyUrl: "https://coursera.org/verify/REACT123456",
      imageUrl: "/c5.png",
    },
    {
      id: 6,
      title: "Web Design for Beginners",
      issuer: "CODL-UOM",
      date: "January 2025",
      credentialId: "oDWpAZVnPQ",
      verifyUrl: "https://coursera.org/verify/REACT123456",
      imageUrl: "/c4.png",
    },
    {
      id: 7,
      title: "Completion of Full Stack Project",
      issuer: "GreatStack",
      date: "December 2024",
      credentialId: "",
      verifyUrl: "https://coursera.org/verify/REACT123456",
      imageUrl: "/c7.png",
    },
    {
      id: 8,
      title: "Artificial Intelligence Foundations: ML",
      issuer: "LinkedIn Learning",
      date: "January 2025",
      credentialId: "",
      verifyUrl: "https://coursera.org/verify/REACT123456",
      imageUrl: "/c8.png",
    },
    {
      id: 9,
      title: "Artificial Intelligence Foundations: Neural Networks",
      issuer: "LinkedIn Learning",
      date: "January 2025",
      credentialId: "",
      verifyUrl: "https://coursera.org/verify/REACT123456",
      imageUrl: "/c9.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <PageIntro eyebrow="Education & Certificates" title="Academic Journey and Professional Certifications">
        <p className="text-lg text-gray-600 leading-relaxed">
          I'm currently pursuing a Bachelor's degree in Computer Science, where I've gained a strong foundation in
          programming, software development, algorithms, and system design. My academic journey has been complemented by
          these professional certifications that validate my technical expertise and commitment to continuous learning.
        </p>
      </PageIntro>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="text-3xl font-bold text-gray-600 mb-2">{certificates.length}</div>
              <div className="text-gray-600 font-medium">Total Certificates</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
              <div className="text-3xl font-bold text-gray-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Learning Platforms</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
              <div className="text-3xl font-bold text-gray-600 mb-2">2024-2025</div>
              <div className="text-gray-600 font-medium">Active Learning Period</div>
            </div>
          </motion.div>

          {/* Certificates Grid */}
          <div className="space-y-8">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      <Values />
      <ContactSection />
    </>
  )
}

export default ProcessPage
