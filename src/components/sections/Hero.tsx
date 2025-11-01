export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Olá, eu sou <span className="text-blue-600">Wesley</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Desenvolvedor Full Stack | Analista de Dados | Especialista em Automação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#sobre"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Conheça meu trabalho
            </a>
            <a
              href="#contato"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
