import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Values"
        title="Combining reliability with curiosity"
      >
        <p>
          I believe in building software that's not only functional but thoughtfully crafted.
          I stay updated with emerging technologies while grounding my work in solid, proven practices.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            I pay close attention to detail in every line of code, from logic to UI.
            Clean, maintainable code is just as important to me as the final product.
          </GridListItem>
          <GridListItem title="Efficient">
            I focus on solving problems with optimized and practical solutions,
            ensuring time and resources are used wisely without compromising quality.
          </GridListItem>
          <GridListItem title="Adaptable">
            I'm quick to learn and adjust—whether it's a new framework, a design shift, or a team workflow.
            Each challenge is an opportunity to grow.
          </GridListItem>
          <GridListItem title="Honest">
            Transparency is key. I’m open about what I can do, how long it’ll take,
            and how I approach each project—communication builds trust.
          </GridListItem>
          <GridListItem title="Loyal">
            I value long-term collaboration and treat every project with commitment and care,
            whether it’s a one-time task or an ongoing partnership.
          </GridListItem>
          <GridListItem title="Innovative">
            I enjoy experimenting with new tools, frameworks, and ideas to find better ways of solving problems
            and creating meaningful digital experiences.
          </GridListItem>
        </GridList>
      </Container>

    </div>
  );
};

export default Values;