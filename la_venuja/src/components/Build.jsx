import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/IMG_4654.jpg";
//import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="A Computer Science Undergraduate, Web Developer & Machine Learning Enthusiast" image={{ src: imageLaptop, shape: 0 }}>
      <div className="space-y-6 text-base text-neutral-600">
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
      {/* <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        Studio_clone were so regular with their progress updates we almost began
        to think they were automated!
      </Blockquote> */}
    </Section>
  );
};

export default Build;