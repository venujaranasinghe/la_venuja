"use client"

import ContactSection from "@/components/ContactSection"
import PageIntro from "@/components/PageIntro"
import { motion } from "framer-motion"
import Image from "next/image"
import Values from "@/components/Values"

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-gray-200 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={certificate.imageUrl || "/placeholder.svg"}
          alt={certificate.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
    </motion.div>
  )
}

const ProcessPage = () => {
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
      imageUrl: "/c4.png",
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
