import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";
import Build from "@/components/Build";
import Deliver from "@/components/Deliver";
import ParticlesBackground from "@/components/ParticlesBackground";

const AboutPage = () => {
  return (
    <>
      <ParticlesBackground />
      <PageIntro eyebrow="About me" title="Who Am I">
        
        {/* <p>A Computer Science Undergraduate, Web Developer & Machine Learning Enthusiast</p> */}
        {/* <div className="mt-10 flex flex-col lg:flex-row lg:gap-12 lg:items-start">
          <div className="max-w-2xl space-y-6 text-base lg:flex-1">
            <p>
              As an undergraduate student of Computer Science at SLIIT, I possess a robust foundation in various
              programming languages, including C, Python, and Java. Additionally, I have expertise in web development,
              database management, and a strong interest in machine learning, which allows me to explore innovative
              approaches to solving complex problems. I am particularly drawn to the potential of machine learning in
              driving data-driven decision-making and developing intelligent systems.
            </p>
            <p>
              My proficiency in designing and analyzing algorithms, combined with my passion for machine learning,
              enables me to tackle challenging real-world problems effectively. I aim to continuously enhance my skills
              in this transformative field and contribute to impactful projects that leverage the power of AI and
              machine learning.
            </p>
          </div>
          
        </div> */}
        
      </PageIntro>
      {/* Build */}
      <Build />
      {/* Deliver */}
      <Deliver />
      <Container className="mt-16">
        <StatList>
          <StatListItem value="7+" label="Projects Completed" />
          <StatListItem value="2+" label="Happy Clients" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  )
}

export default AboutPage
