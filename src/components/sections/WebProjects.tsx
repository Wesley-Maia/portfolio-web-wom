import ProjectCard from '../ui/ProjectCard';

const webProjects = [
  {
    title: 'E-commerce Completo',
    description: 'Plataforma de e-commerce com carrinho, pagamento e painel administrativo.',
    image: '/images/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    liveUrl: 'https://exemplo.com',
    githubUrl: 'https://github.com/usuario/projeto',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para visualização de métricas e KPIs em tempo real.',
    image: '/images/dashboard.jpg',
    tags: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://exemplo.com',
    githubUrl: 'https://github.com/usuario/projeto',
  },
  {
    title: 'App de Gerenciamento',
    description: 'Sistema de gerenciamento de tarefas com autenticação e colaboração em equipe.',
    image: '/images/tasks.jpg',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'Auth.js'],
    liveUrl: 'https://exemplo.com',
    githubUrl: 'https://github.com/usuario/projeto',
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
        {/*

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
