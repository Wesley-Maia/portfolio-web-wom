'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  detailedDescription?: string;
  features?: string[];
  technologies?: { name: string; description: string; }[];
  challenges?: string[];
  results?: string[];
}

export default function ProjectCardWithModal(project: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="h-64 bg-gray-200 relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Ver Detalhes →
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Demo →
              </a>
            )}
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
}
