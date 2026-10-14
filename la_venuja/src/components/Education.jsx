"use client";

import Timeline from "@/components/ui/timeline";
import SectionIntro from "./SectionIntro";

const educationTopData = [
  {
    id: "2008-january",
    year: "2008",
    month: "January",
    content: "Primary Education at Kingswood College, Kandy — beginning the foundational academic journey.",
  },
  {
    id: "2019-january",
    year: "2019",
    month: "January",
    content: "Physical Science Stream at Kingswood College (Combined Mathematics, Physics, Chemistry).",
  },
  {
    id: "2023-march",
    year: "2023",
    month: "March",
    content: "Core Computing at SLIIT — data structures, algorithms, and practical full-stack engineering.",
  },
  {
    id: "2026-may",
    year: "2026",
    month: "May",
    content: "BSc (Hons) in Computer Science — building modern, production-grade web systems and AI applications.",
  },
];

const educationBottomData = [
  {
    id: "2018-december",
    year: "2018",
    month: "December",
    content: "Completed G.C.E. Ordinary Level with distinction, igniting a passion for analytical problem solving.",
  },
  {
    id: "2022-february",
    year: "2022",
    month: "February",
    content: "Enrolled in BSc in Computer Science at SLIIT, embarking on professional software development.",
  },
  {
    id: "2024-october",
    year: "2024",
    month: "October",
    content: "Advanced Full-Stack Solutions — architecting cloud-native projects and intelligent web experiences.",
  },
];

export default function Education() {
  return (
    <div className="w-full">
      <SectionIntro
        eyebrow="Education"
        title="My Educational Journey"
        className="mt-24 sm:mt-32 lg:mt-40 mb-8 sm:mb-12"
      >
        <p>
          My academic path has been focused on building a strong foundation in computer science and developing the
          skills needed to create innovative technological solutions.
        </p>
      </SectionIntro>

      <Timeline
        title="Academic Journey"
        periodLabel="2008 — 2026"
        textColor="#0a0a0a"
        mutedTextColor="#52525b"
        activeColor="#ff5f00"
        backgroundColor="transparent"
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Venuja Ranasinghe Educational Journey"
        duration={1.4}
        topData={educationTopData}
        bottomData={educationBottomData}
      />
    </div>
  );
}
