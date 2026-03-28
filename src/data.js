export const roadmapData = [
    {
        phase: "Fase 1: Meses 1 a 3 - Fundamentos Absolutos & IA como Tutor (Módulos 1 ao 5)",
        strategy: {
            title: "Estratégia de Estudo: O Tutor 24/7",
            description: "Usar ChatGPT/Claude para explicar conceitos (como 'flexbox' ou 'promises') com analogias do mundo real, pedir 5 exercícios curtos e usar para debugar (Acelera o aprendizado em 10x)."
        },
        topics: [
            { id: "1-1", title: "A Essência da Web", description: "Entender HTTP/HTTPS, Cliente vs Servidor, DNS e a natureza stateless da web.", type: "theory" },
            { id: "1-2", title: "Ferramentas do Ofício (M1 e M2)", description: "Dominar a CLI (Terminal Linux), Git e GitHub. Configurar IDE (VS Code/Cursor) com Prettier e Linters.", type: "practice" },
            { id: "1-3", title: "Inspeção Profunda", description: "Dominar as Browser Dev Tools (Chrome) para debugar layouts, redes e console.", type: "practice" },
            { id: "1-4", title: "Frontend Core: Estrutura & Estilo (M3 e M4)", description: "Dominar HTML5 e CSS3 do básico ao avançado para layouts responsivos.", type: "practice" },
            { id: "1-5", title: "Frontend Core: Interatividade (M5)", description: "JavaScript puro. Manipulação de arrays, objetos e DOM. Objetivo: Construir sites dinâmicos e operações CRUD básicas.", type: "practice" },
            { id: "1-6", title: "Visão Geral Server-Side", description: "Compreender que o JS rodará tanto no client quanto no server (Node.js).", type: "theory" }
        ]
    },
    {
        phase: "Fase 2: Meses 4 a 6 - Ecossistema Frontend, Frameworks & AI IDE (Módulo 6)",
        strategy: {
            title: "Estratégia de Estudo: O Copiloto Ágil",
            description: "Mudar para uma AI IDE nativa (Cursor/Zed). Deixar a IA gerar boilerplate, refatorar em lotes e explicar erros complexos no contexto inteiro do projeto."
        },
        topics: [
            { id: "2-1", title: "O Ambiente Nativo de IA", description: "Transição total para o Cursor IDE ou Zed. Configurar agentes de contexto no projeto.", type: "ai" },
            { id: "2-2", title: "Tipagem Vital (M6)", description: "TypeScript 100%. Exigência vital para que a IA gere códigos de alta qualidade e sem erros de runtime.", type: "practice" },
            { id: "2-3", title: "O Framework Web Core", description: "ReactJS e Next.js. Focar prioritariamente no Pages Router no início (evitar App Router/RSC misturado com backend prematuramente).", type: "theory" },
            { id: "2-4", title: "Segurança e Qualidade Oculta", description: "ZOD (validação de dados em runtime) -> Crucial para segurança.", type: "theory" },
            { id: "2-5", title: "Gestão Avançada de Estado", description: "Zustand (estado global limpo centralizado) e Immer.js (atualizações de estado aninhadas 'limpas').", type: "practice" },
            { id: "2-6", title: "Dados e UI Ágil (M6)", description: "TanStack Query (React Query) para requests sem useEffect, Tailwind CSS (classes utilitárias) e Componentes base (ShadCN, Radix UI).", type: "practice" },
            { id: "2-7", title: "Animação e Computação Pesada", description: "Motion (Framer Motion) e conceitos básicos de WebAssembly para alta performance.", type: "practice" }
        ]
    },
    {
        phase: "Fase 3: Meses 7 a 9 - Backend, Bancos de Dados e o Pensamento Dev (Módulos 7 e 8)",
        strategy: {
            title: "Estratégia de Estudo: A Arquitetura Oculta",
            description: "A IA escreve rápido, mas gera lixo. Seu trabalho é auditar a arquitetura e limpar o código da IA usando refatoração guiada e Dev Thinking."
        },
        topics: [
            { id: "3-1", title: "O 'Pensamento Dev'", description: "Focar intensamente em Refatoração (limpar código ruim) e Padrões de Design de arquitetura (aprender os 3 a 5 principais: MVC, Facade).", type: "theory" },
            { id: "3-2", title: "Servidores Reais", description: "Programação de Shell e Linux em profundidade (Sistemas de arquivos, memória).", type: "theory" },
            { id: "3-3", title: "A Máquina Node.js (M7)", description: "Entender Event Loop, Microtask Queues e Promises. Por que Node NÃO resolve gargalos de CPU (multi-threading ausente/limitado).", type: "theory" },
            { id: "3-4", title: "Fluxo de Dados: Streams", description: "Estudar readable/writable streams (Fundamental para grandes uploads e stream de texto de LLMs).", type: "practice" },
            { id: "3-5", title: "Construção de APIs REST (M8)", description: "Dominar API REST completa com Node.js (se sobrar tempo, introduzir noções de Rust ou Go para rotas críticas).", type: "practice" },
            { id: "3-6", title: "Os Cofres de Dados", description: "PostgreSQL/MySQL (Índices, planners), Redis (Cache e memória avançada), SQLite (Arquivo local para protótipos velozes).", type: "theory" },
            { id: "3-7", title: "A Era da IA no Backend", description: "Vector Databases (PG Vector, AWS S3 Vector). Integração nativa com LLMs usando o Vercel AI SDK.", type: "ai" },
            { id: "3-8", title: "Confiabilidade", description: "Testes automatizados. Unit Testing, Integration Testing, End-to-End (E2E com Playwright ou Vest) e TestSprite.", type: "practice" }
        ]
    },
    {
        phase: "Fase 4: Meses 10 a 12 - DevOps, Nuvem, Real-Time e O Mercado Global (Módulo 9)",
        strategy: {
            title: "Estratégia de Estudo: Construir e Lucrar",
            description: "A IA tornou o cross-language fácil e o low-code obrigatório para produtividade. Faça escolhas tecnológicas maduras."
        },
        topics: [
            { id: "4-1", title: "Baixo Esforço, Alto Impacto", description: "Dominar ferramentas Low-Code / No-Code (WordPress, Laravel, Webflow, Zapier). Regra: 'Não reinvente a roda, apenas conecte-a'.", type: "theory" },
            { id: "4-2", title: "Containerização Total (M9)", description: "Dominar o Docker para todos os ambientes.", type: "practice" },
            { id: "4-3", title: "Segurança de Código IA", description: "Sandboxing com Firecracker para isolar operações de IA em máquinas virtuais ultra rápidas.", type: "ai" },
            { id: "4-4", title: "Infraestrutura como Código", description: "Terraform ou Pulumi para mapear a infra inteira. GitHub Actions para automação de CI pipelines.", type: "practice" },
            { id: "4-5", title: "Nuvem Moderna & Edge", description: "AWS/GCP/Azure (tradicional) ou Railway/Vercel (serverless). Armazenamento seguro de blobs no S3. CDNs e Edge Computing com Cloudflare.", type: "theory" },
            { id: "4-6", title: "Interatividade em Tempo Real", description: "Server-Sent Events (SSE - crucial para stream de Chatbots), WebSockets, WebRTC. Sincronização offline-first com Convex.", type: "practice" },
            { id: "4-7", title: "IA First & Agents", description: "RAG (Retrieval-Augmented Generation) com sua base de dados. Desenvolver bots autônomos por trás de chats/voz via Prompt Engineering refinado.", type: "ai" },
            { id: "4-8", title: "O Teste Final: Portfólio Vencedor", description: "Criar 3 projetos full-stack MASSIVOS e polidos. Usar IA para gerar os *Case Studies*. Fazer networking em eventos. Iniciar freelances globais.", type: "project" }
        ]
    }
];
