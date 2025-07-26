export const metadata = {
  title: "My Work & Projects",
  description: "Explore Venuja Ranasinghe's portfolio of web development projects including React applications, full-stack solutions, 3D portfolios, and innovative web experiences. See live demos and source code.",
  keywords: ["portfolio", "web development projects", "React projects", "full-stack development", "Venuja Ranasinghe projects"],
  openGraph: {
    title: "My Work & Projects - Venuja Ranasinghe Portfolio",
    description: "Discover innovative web development projects by Venuja Ranasinghe, featuring React apps, full-stack solutions, and creative web experiences.",
    url: "https://la-venuja.vercel.app/work",
    images: [
      {
        url: "/1.png", // Featured project image
        width: 1200,
        height: 630,
        alt: "Venuja Ranasinghe Portfolio Projects",
      },
    ],
  },
};

export default function WorkLayout({ children }) {
  return children;
}
