import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Services",
    links: [
      { title: "Web", href: "/work/amazonclone" },
      { title: "ML", href: "/work/bazar" },
      { title: "BE", href: "/work/blog101" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Who am I",
    links: [
      { title: "About Me", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact Me", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];