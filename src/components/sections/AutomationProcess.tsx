import ProjectCard from "../ui/ProjectCard";

const dataProjects = [
  {
    title: "Pipeline de ETL",
    description:
      "Processo automatizado de extração (provenientes de logs sintéticos de sistema de formulação), transformação e carga de dados em banco de dados SQL.",
    image: "/images/etl.png",
    tags: ["Python", "SQLite", "Jupyter", "Docker"],
    githubUrl: "https://github.com/Wesley-Maia/etl-formulation-alarms",
  },
];

export default function AutomationProcess() {
  return (
    <section id="dados" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Automação de Processos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Soluções de automação para otimizar processos, economizar tempo e
          aumentar produtividade.
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
