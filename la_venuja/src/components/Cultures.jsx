import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Services"
        title="How do I help"
        invert
      >
        <p>
          {/* We are a group of like-minded people who share the same core values. */}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Front-End Development" invert>
          Creating responsive, user-friendly interfaces with modern web technologies.
          <br/>
          Tools: HTML, CSS, REACT, NEXT, FIGMA
          </GridListItem>
          <GridListItem title="Back-End Development" invert>
          Building secure, scalable server-side logic and APIs.
          <br/>
          Tools: SPRINGBOOT, DJANGO
          </GridListItem>
          <GridListItem title="Database Management" invert>
          <br/>
          Tools: MYSQL, MONGODB, POSTRESQL
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;