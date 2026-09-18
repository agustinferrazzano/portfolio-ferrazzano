/**
 * Portfolio Data Configuration - Agustín Ferrazzano
 * Centralized data source for easy customization and maintenance.
 */

export const PORTFOLIO_DATA = {
  developer: {
    name: 'Agustín Ferrazzano',
    role: 'Senior Full Stack Developer & AI Architect',
    location: 'Argentina',
    email: 'agustin.ferrazzano123@gmail.com',
    status: 'DISPONIBLE // OPEN TO WORK & CONSULTING',
    heroTagline: 'Construyendo sistemas de IA de alto rendimiento, arquitecturas escalables y experiencias web brutales.',
    heroDescription: 'Desarrollador Full Stack con enfoque de ingeniería en sistemas distribuidos, modelos de lenguaje locales (LLMs) offline-first, interfaces 3D en tiempo real con Three.js y clean architecture en Python y JavaScript/TypeScript.'
  },

  social: {
    github: {
      username: 'agustinferrazzano',
      url: 'https://github.com/agustinferrazzano',
      label: 'github.com/agustinferrazzano'
    },
    linkedin: {
      url: 'https://linkedin.com/in/agustinferrazzano',
      label: 'linkedin.com/in/agustinferrazzano'
    }
  },

  featuredProject: null, // Will be set to jarvis below for backwards compatibility

  featuredProjects: {
    jarvis: {
      id: 'jarvis',
      name: 'J.A.R.V.I.S.',
      fullName: 'J.A.R.V.I.S. — Neural Interface Desktop System',
      badge: 'IA LOCAL // OPEN SOURCE',
      version: 'v1.4.2-neural',
      githubRepo: 'https://github.com/agustinferrazzano/JARVIS',
      cloneCommand: 'git clone https://github.com/agustinferrazzano/JARVIS.git',
      description: 'Asistente de escritorio interactivo de alta fidelidad inspirado en el universo Iron Man. Integra un renderizador holográfico 3D en tiempo real (Three.js), síntesis de voz neuronal británica (Edge-TTS), reconocimiento de voz continuo (STT) y procesamiento conversacional en streaming con el modelo local google/gemma-4-e2b (vía LM Studio / Ollama con API compatible OpenAI) sobre un widget nativo de escritorio transparente y frameless (pywebview + EdgeChromium/WebView2).',
      tags: [
        'Python 3.10+',
        'Three.js r128',
        'Local LLM (Gemma 4)',
        'Edge-TTS (Neural Voice)',
        'pywebview (WebView2)',
        'ChromaDB RAG',
        'Clean Architecture'
      ],
      pillars: [
        {
          icon: '🧠',
          title: 'Local Neural Brain',
          desc: 'Inferencia 100% privada con Google Gemma 4 e2b vía servidor compatible OpenAI local. Streaming token a token sin fuga de datos a nubes externas.'
        },
        {
          icon: '🌐',
          title: 'Holograma 3D PBR',
          desc: 'Esfera procedural y enjambre cuántico con Three.js r128, deformación senoidal por audio, parallax 3D y 4 estados reactivos sincronizados.'
        },
        {
          icon: '🏛',
          title: 'Clean Architecture',
          desc: 'Separación modular en 4 capas estrictas: Configuración desacoplada, Servicios de Negocio (Core), Puente de Comunicación (UI Bridge) y Presentación Web.'
        },
        {
          icon: '💾',
          title: 'Memoria Vectorial RAG',
          desc: 'Persistencia semántica a largo plazo mediante ChromaDB embebido y embeddings ONNX locales para recuerdos contextuales permanentes.'
        }
      ],
      hologramStates: [
        { id: 'reposo', name: 'Reposo', color: '#00F0FF', hex: 0x008ca8, desc: 'Rotación orbital suave en cian neón técnico' },
        { id: 'escuchando', name: 'Escuchando', color: '#FF3344', hex: 0xb32626, desc: 'Pulsación reactiva en alerta roja ante entrada de voz' },
        { id: 'pensando', name: 'Pensando', color: '#FFB800', hex: 0xb87e00, desc: 'Giro cinético de alta energía ámbar/oro mientras computa la IA' },
        { id: 'hablando', name: 'Hablando', color: '#00FFFF', hex: 0x00ffff, desc: 'Modulación de onda sónica reactiva al audio TTS en cian eléctrico' }
      ],
      terminalCommands: {
        help: 'Comandos disponibles: status, specs, arch, states, run, github, clear',
        status: 'SYSTEM STATUS: ONLINE\nAI CORE: google/gemma-4-e2b (Port 1234 - Connected)\nTTS ENGINE: en-GB-RyanNeural (Edge-TTS Synced)\nMEMORY: ChromaDB Vector Collection [OK]\nRENDER: Three.js PBR Transparent HUD [Active]',
        specs: 'STACK SPECIFICATIONS:\n• Backend: Python 3.10+ (AsyncIO, ThreadPoolExecutor, pywebview)\n• Frontend: HTML5 / Modern CSS / Three.js r128\n• Audio: Edge-TTS + Pygame Sound Buffer + PyAudio STT\n• AI: Local OpenAI-compatible streaming client\n• Platform: Windows 10/11 native frameless window',
        arch: 'CLEAN ARCHITECTURE:\nconfig/      -> Settings tipadas y logging centralizado\ncore/        -> Lógica de IA, memoria RAG, TTS, STT y ops del SO\nui/          -> Adaptador de enlace JS <-> Python (JarvisAPI)\nweb/         -> Widget HUD Cyberpunk transparente con Three.js\ntests/       -> Pruebas E2E y suites de subsistemas de audio',
        states: 'HOLOGRAPHIC STATES: reposo (0x008CA8), escuchando (0xB32626), pensando (0xB87E00), hablando (0x00FFFF)',
        run: '$ python run.py\n[INIT] Inicializando ventana transparente WebView2 (500x740)...\n[TTS] Inicializando cola de sintetizador de voz RyanNeural...\n[AI] Verificando endpoint local LM Studio en 127.0.0.1:1234...\n[READY] J.A.R.V.I.S. listo para recibir instrucciones.',
        github: 'Repositorio oficial: https://github.com/agustinferrazzano/JARVIS'
      }
    },

    equilibrio: {
      id: 'equilibrio',
      name: 'Equilibrio',
      fullName: 'Equilibrio — Investment & Portfolio Asset Management Monorepo',
      badge: 'FULL STACK // CLEAN ARCHITECTURE',
      version: 'v1.0.0-monorepo',
      githubRepo: 'https://github.com/agustinferrazzano/Equilibrio-app',
      cloneCommand: 'git clone https://github.com/agustinferrazzano/Equilibrio-app.git',
      description: 'Plataforma full-stack de alto rendimiento para la gestión, balanceo y visualización analítica de activos y transacciones de inversión. Construida con Clean Architecture en un monorepo TypeScript: interfaz web moderna en Next.js 16 (React 19, Tailwind CSS v4, Recharts), API REST modular en Express, base de datos SQLite persistente con better-sqlite3 y paquete de dominio compartido (@equilibrio/core) con contratos de repositorios, casos de uso puros y alertas de precio.',
      tags: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Express REST API',
        'Clean Architecture (DDD)',
        'Tailwind CSS v4',
        'Recharts Analytics',
        'SQLite (better-sqlite3)',
        'Docker Compose'
      ],
      pillars: [
        {
          icon: '📊',
          title: 'Portfolio Intelligence & Analytics',
          desc: 'Cálculo reactivo de balance de activos, resumen consolidado de cartera y visualizaciones analíticas interactivas con Recharts.'
        },
        {
          icon: '🏛',
          title: 'Clean Architecture & Core DDD',
          desc: 'Desacoplamiento estricto en @equilibrio/core con entidades puras (Asset, Transaction, PriceAlert), contratos de repositorios y casos de uso 100% testeables.'
        },
        {
          icon: '⚡',
          title: 'Next.js 16 & React 19 UI',
          desc: 'Frontend web de última generación con Server y Client Components, estilizado moderno con Tailwind CSS 4 y transacciones instantáneas.'
        },
        {
          icon: '💾',
          title: 'Express REST & SQLite Engine',
          desc: 'Backend en TypeScript sobre Node.js 20+, persistencia ágil con SQLite (better-sqlite3), migraciones y orquestación con Docker Compose.'
        }
      ],
      samplePortfolio: {
        totalBalance: 32450.00,
        unrealizedProfit: '+4,820.50 USD (+17.4%)',
        currency: 'USD',
        assets: [
          { id: 'btc', ticker: 'BTC', name: 'Bitcoin', type: 'Cripto', color: '#F7931A', allocation: 35, value: 11357.50, change: '+4.8%' },
          { id: 'eth', ticker: 'ETH', name: 'Ethereum', type: 'Cripto', color: '#627EEA', allocation: 20, value: 6490.00, change: '+2.1%' },
          { id: 'spy', ticker: 'SPY', name: 'S&P 500 ETF', type: 'Acciones', color: '#00F0FF', allocation: 30, value: 9735.00, change: '+0.9%' },
          { id: 'cash', ticker: 'USD', name: 'Liquidez USD', type: 'Cash', color: '#10B981', allocation: 15, value: 4867.50, change: '0.0%' }
        ]
      },
      terminalCommands: {
        help: 'Comandos disponibles: status, monorepo, arch, stack, run, core, test, github, clear',
        status: 'EQUILIBRIO SYSTEM STATUS: ONLINE\nMONOREPO: npm workspaces (apps/frontend, apps/backend, packages/core)\nAPI ENGINE: Express + TypeScript (Port 3001) [Ready]\nFRONTEND: Next.js 16 + React 19 (Port 3000) [Ready]\nDATABASE: SQLite (better-sqlite3) [Connected]\nDOMAIN CORE: @equilibrio/core [Compiled & Synced]',
        monorepo: 'MONOREPO WORKSPACES:\n• apps/frontend   -> Next.js 16, React 19, Tailwind 4, Recharts\n• apps/backend    -> API REST Express + TypeScript + SQLite (better-sqlite3)\n• packages/core   -> Modelos de dominio, contratos de repositorios y casos de uso',
        arch: 'HEXAGONAL / CLEAN ARCHITECTURE:\npackages/core/\n  ├── models/        -> Asset, Transaction, PriceAlert\n  ├── repositories/  -> IAssetRepository, ITransactionRepository\n  ├── services/      -> PortfolioCalculator, PriceService\n  └── useCases/      -> AddTransaction, GetPortfolioSummary',
        stack: 'FULL STACK TECH MATRIX:\n• Frontend: Next.js 16.x / React 19 / Tailwind CSS v4 / Recharts\n• Backend: Node.js 20+ / Express / TypeScript / better-sqlite3\n• Core: Clean Architecture / DDD / TypeScript\n• DevOps: Docker Compose / npm workspaces / Vitest',
        run: '$ npm run dev\n[CORE] Recompilando @equilibrio/core...\n[BACKEND] API REST lista en http://localhost:3001\n[FRONTEND] Servidor Next.js 16 escuchando en http://localhost:3000\n[DB] Conexión SQLite (better-sqlite3) activa y migrada.',
        core: 'CORE DOMAIN ENTITIES:\n- Asset: ID, ticker, name, assetType, currentPrice\n- Transaction: ID, assetId, type (BUY/SELL), quantity, price, timestamp\n- PriceAlert: ID, assetId, targetPrice, condition, status',
        test: '$ npm test\n> @equilibrio/core test\n✓ AddTransactionUseCase: registra compras y actualiza ponderación\n✓ GetPortfolioSummaryUseCase: calcula balance total y PnL correctamente\nTests: 2 passed, 2 total',
        github: 'Repositorio oficial: https://github.com/agustinferrazzano/Equilibrio-app'
      }
    }
  },

  skillsMatrix: [
    {
      category: 'Backend & System Architecture',
      skills: ['Python 3.10+', 'FastAPI / AsyncIO', 'Express / Node.js 20+', 'Clean Architecture / DDD', 'SQLite / better-sqlite3', 'pywebview / Native Bridging', 'RESTful API Design']
    },
    {
      category: 'Frontend & Interactive Web UI',
      skills: ['Next.js 16 / React 19', 'TypeScript (Strict)', 'Three.js (PBR, Custom Shaders)', 'Tailwind CSS v4', 'Recharts & Financial Data Viz', 'Modern CSS3 Neo-Brutalism', 'State Machines']
    },
    {
      category: 'AI & Computational Intelligence',
      skills: ['Local LLMs (Gemma, Llama)', 'RAG Pipelines & ChromaDB', 'ONNX Embeddings', 'Speech Synthesis (Edge-TTS)', 'Audio Streaming & STT', 'Function Calling & Tool Use']
    },
    {
      category: 'DevOps, Tooling & Monorepos',
      skills: ['Docker & Docker Compose', 'npm Workspaces & Monorepos', 'Git & GitHub Workflows', 'Vite & Next Bundlers', 'Unit Testing (Vitest/Jest)', 'Performance Profiling']
    }
  ]
};

// Backwards compatibility assignment
PORTFOLIO_DATA.featuredProject = PORTFOLIO_DATA.featuredProjects.jarvis;
