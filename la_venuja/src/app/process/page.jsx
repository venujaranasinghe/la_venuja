"use client";

import ContactSection from "@/components/ContactSection";
import PageIntro from "@/components/PageIntro";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Values from "@/components/Values";

const CertificateCard = ({ certificate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="md:flex">
        <div className="md:w-1/3 relative h-48 md:h-auto">
          <Image
            src={certificate.imageUrl}
            alt={certificate.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {certificate.title}
          </h3>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Issued by:</span> {certificate.issuer}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Date:</span> {certificate.date}
          </p>
          {certificate.credentialId && (
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Credential ID:</span> {certificate.credentialId}
            </p>
          )}
          <a
            href={certificate.verifyUrl || certificate.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            View Certificate
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessPage = () => {
    const certificates = [
        {
          id: 1,
          title: "Computer Science (Undergraduate)",
          issuer: "SLIIT",
          date: "June 2023",
          credentialId: "",
          verifyUrl: "https://aws.amazon.com/verification",
          imageUrl: "/images.jpg"
        },
        {
          id: 2,
          title: "Fundamentals of DevOps On AWS",
          issuer: "SimpliLearn",
          date: "January 2025",
          credentialId: "7807177",
          verifyUrl: "https://coursera.org/verify/GA123456789",
          imageUrl: "/c1.png"
        },
        {
          id: 3,
          title: "Python for Beginners",
          issuer: "CODL-UOM",
          date: "December 2024",
          credentialId: "OR5BIOdVUJ",
          verifyUrl: "https://learn.microsoft.com/verify",
          imageUrl: "/c2.png"
        },
        {
          id: 4,
          title: "AI/ML Engineer - Stage 1",
          issuer: "SLIIT",
          date: "November 2024",
          credentialId: "cxxkska4dc",
          verifyUrl: "https://coursera.org/verify/REACT123456",
          imageUrl: "/c4.png"
        },
        {
          id: 5,
          title: "AI/ML Engineer - Stage 2",
          issuer: "SLIIT",
          date: "December 2024",
          credentialId: "wt5gx3gucq",
          verifyUrl: "https://coursera.org/verify/REACT123456",
          imageUrl: "/c5.png"
        },
        {
          id: 6,
          title: "Web Design for Beginners",
          issuer: "CODL-UOM",
          date: "January 2025",
          credentialId: "oDWpAZVnPQ",
          verifyUrl: "https://coursera.org/verify/REACT123456",
          imageUrl: "/c4.png"
        },
        {
          id: 7,
          title: "Completion of Full Stack Project",
          issuer: "GreatStack",
          date: "December 2024",
          credentialId: "",
          verifyUrl: "https://coursera.org/verify/REACT123456",
          imageUrl: "/c7.png"
        },
        {
          id: 8,
          title: "Artificial Intelligence Foundations: ML",
          issuer: "LinkedIn Learning",
          date: "January 2025",
          credentialId: "",
          verifyUrl: "https://coursera.org/verify/REACT123456",
          imageUrl: "/c8.png"
        },
        {
          id: 9,
          title: "Artificial Intelligence Foundations: Neural Networks",
          issuer: "LinkedIn Learning",
          date: "January 2025",
          credentialId: "",
          verifyUrl: "https://coursera.org/verify/REACT123456",
          imageUrl: "/c9.png"
        }
      ];

  return (
    <>
      <PageIntro 
        eyebrow="Education & Certificates" 
        title="Academic Journey and Professional Certifications"
      >
        <p>
          I'm currently pursuing a Bachelor's degree in Computer Science, where I've gained a strong foundation in programming, software development, algorithms, and system design. My academic journey has been complemented by these professional certifications that validate my technical expertise.
        </p>
      </PageIntro>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          
          <div className="grid gap-8">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </motion.div>
      </section>
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;