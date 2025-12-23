import ProjectCardWithModal from '../ui/ProjectCardWithModal';

const automationProjects = [
  {
    title: 'Automação de Autoclave (Estudo de Caso)',
    description: 'Sistema completo de automação para controle de autoclave com interface HMI, monitoramento de temperatura, pressão e ciclos de esterilização.',
    image: '/images/css-autoclave.jpg',
    tags: ['PLC Siemens S7', 'TIA Portal', 'IHM KTP700', 'Ladder/SCL'],
    detailedDescription: `Este projeto consiste em um estudo de caso para o desenvolvimento de competências em automação industrial utilizando o TIA Portal, tendo como aplicação prática o controle de uma autoclave industrial. 

A solução está sendo desenvolvida com PLC Siemens S7-1200 e interface HMI KTP700 Basic, com foco na implementação progressiva das principais funcionalidades do processo, permitindo a evolução do sistema em etapas bem definidas.

Nesta fase do projeto, o objetivo principal é estruturar a lógica de controle do ciclo, a máquina de estados, e a integração básica entre PLC e IHM, simulando um cenário real de aplicação industrial.`,
    features: [
      'Implementação da máquina de estados do ciclo da autoclave (Idle, Aquecimento, Esterilização, Resfriamento e Finalização)',
      'Controle dos atuadores principais: HEATER (resistência de aquecimento); STEAM_VALVE (válvula de vapor); VENT_VALVE (válvula de resfriamento)',
      'Definição e carregamento de receitas de processo via IHM, com envio dos parâmetros para o PLC',
      'IControle de temperatura, pressão e tempo baseado em setpoints definidos pela receita',
      'Interface HMI funcional para operação e acompanhamento do ciclo',
      'Estrutura inicial para bloqueio de edição de receitas durante o ciclo',
    ],
    technologies: [
      {
        name: 'PLC Siemens S7-1200',
        description: 'Controlador lógico programável para automação do processo',
      },
      {
        name: 'TIA Portal V18',
        description: 'Ambiente de desenvolvimento integrado para programação',
      },
      {
        name: 'IHM KTP700 Basic',
        description: 'Interface homem-máquina touchscreen de 7 polegadas',
      },
      {
        name: 'Ladder / SCL',
        description: 'Linguagens de programação utilizadas',
      },
    ],
    challenges: [
      'Estruturar a máquina de estados do processo de forma clara e confiável',
      'Integrar corretamente PLC e IHM, garantindo a troca consistente de dados',
      'Implementar a gestão de receitas, com carregamento seguro dos parâmetros no PLC',
      'Preparar a base lógica para evoluções futuras, como controle PID avançado, intertravamentos adicionais e rastreabilidade',
    ],
    results: [
      'Consolidação de uma arquitetura funcional de controle de autoclave, adequada para fins educacionais e de simulação',
      'Implementação bem-sucedida da máquina de estados, permitindo a execução ordenada do ciclo de esterilização',
      'Integração eficiente entre PLC e IHM, com troca consistente de dados e operação estável',
      'Implementação inicial da gestão de receitas, possibilitando a seleção e carregamento de parâmetros de processo',
    ],
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
            <ProjectCardWithModal key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
