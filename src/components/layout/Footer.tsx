export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wesley Oliveira Maia</h3>
            <p className="text-gray-400">
              Desenvolvedor Full Stack & Analista de Dados
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
              <li><a href="#web" className="hover:text-white">Projetos Web</a></li>
              <li><a href="#dados" className="hover:text-white">Análise de Dados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:maia.weol@gmail.com" className="hover:text-white">
                  maia.weol@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/Wesley-Maia" className="hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/wesley-om" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
