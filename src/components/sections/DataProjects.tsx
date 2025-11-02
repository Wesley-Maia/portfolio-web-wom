import ProjectCard from '../ui/ProjectCard';

const dataProjects = [
  {
    title: 'Dashboard de Alarmes de Sistema de Filling',
    description: 'Dashboard completo com análise de alarmes, previsões e insights de processo.',
    image: '/images/sales.jpg',
    tags: ['Python', 'Pandas', 'Plotly', 'Jupyter'],
    githubUrl: 'https://github.com/Wesley-Maia/alarm-sensing-dashboard',
  },
  {
    title: 'Dashboard Interativo de Análise de E-commerce',
    description: 'Dashboard completo com análise de vendas, previsões e insights de negócio.',
    image: '/images/sales.jpg',
    tags: ['Python', 'Pandas', 'Plotly', 'Jupyter'],
    githubUrl: 'https://github.com/usuario/projeto',
  },
];

export default function DataProjects() {
  return (
    <section id="dados" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Análise de Dados</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Projetos de análise exploratória, visualização de dados e machine learning para insights de negócio.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
