import { useEffect } from 'react';

const ProjectStructuredData = ({ projects }) => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Venuja Ranasinghe's Portfolio Projects",
      "description": "A collection of web development projects showcasing full-stack development skills",
      "itemListElement": projects.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "url": project.projectUrl,
        "codeRepository": project.githubUrl,
        "creator": {
          "@type": "Person",
          "name": "Venuja Ranasinghe"
        },
        "programmingLanguage": project.tags,
        "image": project.imageUrl,
        "dateCreated": "2024", // You can make this dynamic based on actual creation dates
        "keywords": project.tags.join(", ")
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [projects]);

  return null;
};

export default ProjectStructuredData;
