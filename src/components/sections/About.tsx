const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Python", "Ruby on Rails", "PostgreSQL", "MongoDB"],
  data: ["Python", "Pandas", "Power BI", "SQL", "Excel Avançado"],
  automation: [
    "Siemens TIA Portal",
    "Schneider Electric",
    "Codesys",
    "Elipse SCADA",
    "GE iFIX",
  ],
};

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Mim</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Perfil Profissional</h3>
            <p className="text-gray-700 mb-4">
              Desenvolvedor Full Stack com experiência em criar aplicações web
              modernas e escaláveis. Especializado em análise de dados e
              automação de processos, com foco em entregar soluções eficientes e
              de alto impacto.
            </p>
            <p className="text-gray-700">
              Apaixonado por tecnologia e sempre em busca de novos desafios que
              permitam aplicar minhas habilidades técnicas para resolver
              problemas complexos.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Formação</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">
                    Trybe
                </h4>
                <p className="text-gray-600">
                    Desenvolvedor Web Full-Stack | 2021 - 2022
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">
                    Mestrado em Engenharia Elétrica
                </h4>
                <p className="text-gray-600">
                    Pontifícia Universidade Católica de Minas Gerais | 2009 - 2012
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">
                    Engenharia Eletrônica e de Telecomunicação
                </h4>
                <p className="text-gray-600">
                    Pontifícia Universidade Católica de Minas Gerais | 2003 - 2008
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Hard Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 capitalize">
                  {category === "frontend" && "Frontend"}
                  {category === "backend" && "Backend"}
                  {category === "data" && "Análise de Dados"}
                  {category === "automation" && "Automação"}
                </h4>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
