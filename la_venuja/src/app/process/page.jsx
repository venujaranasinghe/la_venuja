"use client"

import ContactSection from "@/components/ContactSection"
import PageIntro from "@/components/PageIntro"
import { motion } from "framer-motion"
import Image from "next/image"
import Values from "@/components/Values"
import { useState } from "react"

const CertificateCard = ({ certificate, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-gray-200 transition-all duration-500 cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={certificate.imageUrl || "/placeholder.svg"}
          alt={certificate.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-white text-center text-sm font-medium">{certificate.title}</p>
        </div>
      </div>
    </motion.div>
  )
}

const ProcessPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    // {
    //   id: 1,
    //   title: "Computer Science (Undergraduate)",
    //   imageUrl: "/images.jpg",
    // },
    {
      id: 2,
      title: "Fundamentals of DevOps On AWS",
      imageUrl: "/c1.png",
    },
    {
      id: 3,
      title: "Python for Beginners",
      imageUrl: "/c2.png",
    },
    {
      id: 4,
      title: "AI/ML Engineer - Stage 1",
      imageUrl: "/c4.png",
    },
    {
      id: 5,
      title: "AI/ML Engineer - Stage 2",
      imageUrl: "/c5.png",
    },
    {
      id: 6,
      title: "Web Design for Beginners",
      imageUrl: "/c6.png",
    },
    {
      id: 7,
      title: "Completion of Full Stack Project",
      imageUrl: "/c7.png",
    },
    {
      id: 8,
      title: "Artificial Intelligence Foundations: ML",
      imageUrl: "/c8.png",
    },
    {
      id: 9,
      title: "Artificial Intelligence Foundations: Neural Networks",
      imageUrl: "/c9.png",
    },
    {
      id: 10,
      title: "Java for Beginners",
      imageUrl: "/c10.png",
    },
    {
      id: 11,
      title: "Introduction to SQL",
      imageUrl: "/c11.png",
    },
    {
      id: 11,
      title: "AWS Basics",
      imageUrl: "/kc1.png",
    },
    {
      id: 12,
      title: "Docker For Beginners",
      imageUrl: "/kc2.png",
    },
    {
      id: 13,
      title: "Kubernetes For Beginners",
      imageUrl: "/kc3.png",
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
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Certificates Grid - 4 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} onClick={() => setSelectedCertificate(certificate)} />
            ))}
          </div>

          {/* Certificate Modal */}
          {selectedCertificate && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedCertificate(null)}>
              <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setSelectedCertificate(null)} className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300">&times;</button>
                <img src={selectedCertificate.imageUrl} alt={selectedCertificate.title} className="w-full h-auto rounded-lg" />
              </div>
            </div>
          )}
        </motion.div>
      </section>

      <Values />
      <ContactSection />
    </>
  )
}

export default ProcessPage
