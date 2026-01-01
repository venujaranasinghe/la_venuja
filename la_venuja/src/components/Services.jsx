import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="How do I help"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src="/abb.png"
                width={719}
                height={680}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Front-End Development">
            I specialize in building modern, responsive, and user-friendly web interfaces using React, HTML5, CSS3, and JavaScript. My focus is on creating seamless user experiences that work flawlessly across devices and browsers.
            </ListItem>
            <ListItem title="Back-End Development">
            I develop robust and scalable server-side applications using technologies like Springboot and Django. I ensure efficient logic handling, secure data flow, and well-structured APIs to support smooth frontend-backend communication
            </ListItem>
            <ListItem title="Database Management">
            I design, implement, and maintain well-structured databases using MySQL and MongoDB. My approach emphasizes data integrity, optimized queries, and secure storage to ensure high performance and reliability in application data handling.
            </ListItem>
              <ListItem title="DevOps">
              I implement CI/CD pipelines, automate deployments, and manage infrastructure using tools like GitHub Actions, Jenkins, and Docker. My DevOps practices ensure rapid, reliable, and repeatable software delivery.
              </ListItem>
              <ListItem title="Cloud">
              I architect, deploy, and manage cloud solutions on AWS, Azure, and GCP. My expertise includes cloud migration, cost optimization, and leveraging cloud-native services for scalable and secure applications.
              </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;