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

  featuredProject: {
    id: 'jarvis',
    name: 'J.A.R.V.I.S.',
    fullName: 'J.A.R.V.I.S. — Neural Interface Desktop System',
    badge: 'PROYECTO ESTRELLA // OPEN SOURCE',
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

  skillsMatrix: [
    {
      category: 'Backend & System Architecture',
      skills: ['Python 3.10+', 'FastAPI / AsyncIO', 'Clean Architecture', 'pywebview / Native Bridging', 'IPC & WebSockets', 'RESTful API Design']
    },
    {
      category: 'AI & Computational Intelligence',
      skills: ['Local LLMs (Gemma, Llama)', 'RAG Pipelines & ChromaDB', 'ONNX Embeddings', 'Speech Synthesis (Edge-TTS)', 'Audio Streaming & STT', 'Function Calling & Tool Use']
    },
    {
      category: 'Frontend & 3D Interactive Graphics',
      skills: ['Three.js (PBR, Custom Shaders)', 'Vanilla JavaScript (ES6+ Modules)', 'Modern CSS3 & Neo-Brutalism', 'Canvas API', 'State Machines', 'Responsive UI & UX Accessibility']
    },
    {
      category: 'DevOps, Tooling & Workflow',
      skills: ['Git & GitHub Workflows', 'Vite & Modern Bundlers', 'Windows API / Hardware Telemetry', 'Unit & E2E Testing', 'Performance Profiling', 'CI/CD Automation']
    }
  ]
};
