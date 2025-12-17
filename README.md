# � Portfolio Moderno - Tonny Francis

Portfólio pessoal moderno e minimalista desenvolvido com Next.js 14, apresentando projetos, habilidades e experiência profissional de forma clean e responsiva.

## 📋 Sobre o Projeto

Este é um portfólio web com design moderno e minimalista, apresentando seções bem definidas para Hero/Sobre, Skills, Projetos, Experiência e Contato. O projeto foi desenvolvido com Next.js 14, React 18 e TypeScript, oferecendo uma experiência visual agradável e totalmente responsiva.

## ✨ Seções do Portfólio

### 🎯 Hero / Sobre Mim
- Nome e título profissional
- Breve descrição sobre formação acadêmica e experiência
- Botões CTA para navegação

### 💡 Skills / Habilidades
Organizadas por categoria em tags minimalistas:
- **Linguagens**: JavaScript, TypeScript, Go, Python
- **Frameworks**: React, Next.js, Angular, Express
- **Ferramentas**: Git, Docker, Kubernetes, Grafana, Rancher, Figma
- **Bancos de dados**: MySQL, PostgreSQL, DynamoDB, SQLite
- **Clouds**: AWS, Oracle Cloud

## 🚀 Projetos em Destaque
- **[Aivory](https://aivory.com.br)** - Plataforma AI em desenvolvimento
- **[Site da NexusOps](https://nexusops.com.br)** - Desenvolvimento completo do site da empresa com foco em responsividade e UX
- Terminal Portfolio - Portfólio interativo com interface de terminal
- Enterprise Solutions - Soluções empresariais robustas
- Regulatory Platform - Plataforma de compliance regulatório

### 💼 Experiência Profissional
- **[NexusOps](https://nexusops.com.br)** - CEO / Founder (2024 - Presente)
- Convem - Full-Stack Developer (2022 - Presente)
- Regulatório Mais - Full-Stack Developer (2024 - Presente)

### 📬 Contato
- Email, LinkedIn e GitHub com links diretos

## 🛠️ Tecnologias Utilizadas

- **Next.js 14.2.4** - Framework React para produção
- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Docker** - Containerização da aplicação
- **Kubernetes** - Orquestração de containers (configuração incluída)

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 20+ instalado
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Portfolio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Build para Produção

```bash
npm run build
npm start
```

## 🐳 Docker

O projeto inclui configuração Docker para facilitar o deploy:

```bash
docker run -p 3000:3000 portfolio
```

## ☸️ Kubernetes

Configurações de deployment para Kubernetes estão disponíveis em `/k8s/deployment.yaml`.

## 📁 Estrutura do Projeto

```
├── app/                    # Pasta principal do Next.js App Router
│   ├── globals.css        # Estilos globais com Tailwind
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial com todas as seções
├── src/
│   ├── components/        # Componentes React
│   │   ├── Hero.tsx       # Seção Hero/Sobre mim
│   │   ├── Skills.tsx     # Seção de habilidades
│   │   ├── Projects.tsx   # Seção de projetos
│   │   ├── Experience.tsx # Seção de experiência
│   │   ├── Contact.tsx    # Seção de contato
│   │   └── Footer.tsx     # Rodapé
│   ├── types/
│   │   └── types.ts       # Definições TypeScript
│   └── assets/            # Recursos estáticos
├── k8s/                   # Configurações Kubernetes
├── public/                # Arquivos públicos
└── scripts/               # Scripts utilitários
```

## 🎨 Características Técnicas

- **Design Minimalista**: Layout clean com cores suaves e espaçamento generoso
- **Responsivo**: Mobile-first, adapta-se perfeitamente a todos os dispositivos
- **Navegação Suave**: Scroll suave entre seções com anchors
- **Links Externos**: Abrem em nova aba com segurança (noopener noreferrer)
- **Tipagem Forte**: TypeScript para maior segurança e manutenibilidade
- **Performance**: Otimizado com Next.js 14 e React Server Components
- **Estilização Moderna**: Tailwind CSS para design profissional
- **Acessibilidade**: Semântica HTML correta e contraste adequado
- **Estilização Moderna**: Tailwind CSS para design limpo e profissional

## 👨‍💻 Desenvolvedor

**Tonny Francis**
- 📧 Email: tonnyfrancis161@poli.ufrj.br
- 🐙 GitHub: [Tonny-Francis](https://github.com/Tonny-Francis)
- 💼 LinkedIn: [tonny-francis](https://www.linkedin.com/in/tonny-francis/)

Estudante de Engenharia de Controle e Automação (UFRJ) e Análise e Desenvolvimento de Software (IBMR). CEO/Founder da NexusOps e Full-Stack Developer.

## 📄 Licença

Este projeto é privado.

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões e feedbacks são sempre bem-vindos!

---

Desenvolvido com ❤️ usando Next.js e TypeScript
