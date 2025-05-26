import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/b.jpg";
//import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="My Journey So Far: From Curiosity to Code" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Born on January 15, 2003, I began my educational journey at Kingswood College,
         where I studied from Grade 1 through 13. It was during my school 
         years—especially while pursuing the Physical Science stream for 
         my A/Ls—that I discovered a growing curiosity about how systems work, 
         how technology shapes the world, and how logic can be used to solve 
         real-world problems.
        </p>
        <p>
        After completing school, I took the next step by enrolling in a 
        Computer Science degree program at SLIIT. It was a natural progression 
        for me, as I’ve always been fascinated by how technology works and how 
        it influences the world we live in.
        </p>
        <p>
        Since then, my curiosity has only grown stronger, and I continue 
        to explore new ideas and expand my understanding every day. 
        This journey has been one of growth, discovery, and passion — and 
        it's still only the beginning.
        </p>
      </div>
      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3> */}
      {/* <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
    </Section>
  );
};

export default Deliver;