# 💼 Portfólio Profissional

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

> Portfólio profissional moderno e responsivo, desenvolvido com Next.js 14, TypeScript e Tailwind CSS. Apresenta projetos de desenvolvimento web, análise de dados e automação.

## 🌟 Características

- ⚡ **Performance otimizada** com Next.js 14 e App Router
- 🎨 **Design moderno** e responsivo com Tailwind CSS
- 📱 **Mobile-first** com menu hambúrguer interativo
- 🖼️ **Otimização de imagens** com next/image
- ♿ **Acessível** seguindo as melhores práticas
- 🔍 **SEO otimizado** com metadata apropriada
- 🚀 **Deploy fácil** na Vercel

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) 18.0 ou superior
- [Git](https://git-scm.com/)
- Um editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone git@github.com:Wesley-Maia/portfolio-web-wom.git
cd portfolio-web-wom
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto

```
meu-portfolio/
├── public/
│   └── images/              # Imagens dos projetos
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página inicial
│   │   └── globals.css      # Estilos globais
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx   # Cabeçalho com navegação
│       │   └── Footer.tsx   # Rodapé
│       ├── sections/
│       │   ├── Hero.tsx     # Seção hero/apresentação
│       │   ├── About.tsx    # Sobre mim e skills
│       │   ├── WebProjects.tsx         # Projetos web
│       │   ├── DataProjects.tsx        # Análise de dados
│       │   └── AutomationProjects.tsx  # Automação
│       └── ui/
│           └── ProjectCard.tsx         # Card de projeto
├── next.config.js           # Configuração Next.js
├── tailwind.config.js       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── package.json
```

## 🎨 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos com suas informações:

**`src/components/layout/Header.tsx`** - Nome no logo
**`src/components/sections/Hero.tsx`** - Nome e título
**`src/components/sections/About.tsx`** - Biografia, formação e skills
**`src/components/layout/Footer.tsx`** - Links de contato

### 2. Adicionar Projetos

Edite os arrays de projetos nos arquivos:

**Projetos Web**: `src/components/sections/WebProjects.tsx`
```typescript
const webProjects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição breve do projeto',
    image: '/images/projeto.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://projeto.com',
    githubUrl: 'https://github.com/usuario/projeto',
  },
  // Adicione mais projetos...
];
```

**Análise de Dados**: `src/components/sections/DataProjects.tsx`

**Automação**: `src/components/sections/AutomationProjects.tsx`

### 3. Adicionar Imagens

Coloque as imagens dos seus projetos em `public/images/` e referencie-as:

```
public/
└── images/
    ├── projeto1.jpg
    ├── projeto2.png
    └── projeto3.avif
```

### 4. Personalizar Cores

Edite `tailwind.config.js` para alterar o tema de cores:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',  // Azul
        secondary: '#6366f1', // Índigo
        // Adicione suas cores...
      },
    },
  },
}
```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa linter ESLint |

## 📦 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [Vercel](https://vercel.com)
3. Importe o repositório
4. Configure e faça deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/meu-portfolio)

### Outras Plataformas

O projeto também pode ser hospedado em:
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)

## 🔧 Tecnologias Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Otimização de Imagens**: next/image
- **Ícones**: SVG inline
- **Deploy**: [Vercel](https://vercel.com/)

## 📝 Histórico de Commits

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Alterações em documentação
- `style:` - Formatação, ponto e vírgula faltando, etc
- `refactor:` - Refatoração de código
- `chore:` - Atualização de tarefas, configurações, etc

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

**Wesley Maia** - [maia.weol@gmail.com](mailto:maia.weol@gmail.com)

- 🌐 Website: [portfolio-web-wom.vercel.app](https://portfolio-web-wom.vercel.app/)
- 💼 LinkedIn: [linkedin.com/in/wesley-om](https://www.linkedin.com/in/wesley-om)
- 🐙 GitHub: [@Wesley-Maia](https://github.com/Wesley-Maia)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

**Desenvolvido com ❤️ usando Next.js e Tailwind CSS**
