'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    detailedDescription?: string;
    features?: string[];
    technologies?: { name: string; description: string; }[];
    challenges?: string[];
    results?: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Imagem */}
          <div className="relative h-64 bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Conteúdo */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-700 text-lg mb-6">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Descrição detalhada */}
            {project.detailedDescription && (
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-3">Sobre o Projeto</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              </section>
            )}

            {/* Funcionalidades */}
            {project.features && project.features.length > 0 && (
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-3">Funcionalidades</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tecnologias */}
            {project.technologies && project.technologies.length > 0 && (
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-3">Tecnologias Utilizadas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Desafios */}
            {project.challenges && project.challenges.length > 0 && (
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-3">Desafios Técnicos</h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-orange-50 border-l-4 border-orange-500 p-4">
                      <p className="text-gray-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Resultados */}
            {project.results && project.results.length > 0 && (
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-3">Resultados</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4">
                      <p className="text-gray-700 font-semibold">{result}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-6 border-t">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver Demo ao Vivo →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
