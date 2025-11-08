import ProjectCard from '../ui/ProjectCard';

const webProjects = [
  {
    title: 'Occupational Health Landing',
    description: 'Plataforma de e-commerce com carrinho, pagamento e painel administrativo.',
    image: '/images/health_occupational.avif',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
    // liveUrl: 'https://exemplo.com',
    githubUrl: 'https://github.com/Wesley-Maia/occupational-health-landing',
  },
];

export default function WebProjects() {
  return (
    <section id="web" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Projetos Web</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Aplicações web modernas e responsivas, desenvolvidas com as melhores práticas e tecnologias atuais.
        </p>
        {

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        }
      </div>
    </section>
  );
}
