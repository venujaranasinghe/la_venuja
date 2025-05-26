import React from "react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-lg font-medium text-gray-900">
          {project.projectUrl ? (
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true" className="absolute inset-0" />
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-sm text-gray-500">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;