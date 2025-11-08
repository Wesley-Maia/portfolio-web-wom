import ProjectCard from '../ui/ProjectCard';

const automationProjects = [
  {
    title: 'Web Scraper Avançado',
    description: 'Sistema de coleta automatizada de dados de múltiplos sites com agendamento.',
    image: '/images/scraper.jpg',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'MongoDB'],
    githubUrl: 'https://github.com/usuario/projeto',
  },
  {
    title: 'Bot de Automação RPA',
    description: 'Robô para automatizar processos repetitivos em sistemas corporativos.',
    image: '/images/rpa.jpg',
    tags: ['Python', 'Selenium', 'API Integration', 'Excel'],
    githubUrl: 'https://github.com/usuario/projeto',
  },
  {
    title: 'Pipeline de ETL',
    description: 'Processo automatizado de extração, transformação e carga de dados.',
    image: '/images/etl.jpg',
    tags: ['Python', 'Airflow', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/usuario/projeto',
  },
];

export default function AutomationProjects() {
  return (
    <section id="automacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Projetos de Automação</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Soluções de automação para otimizar processos, economizar tempo e aumentar produtividade.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
