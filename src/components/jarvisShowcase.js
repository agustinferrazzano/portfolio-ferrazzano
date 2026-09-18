import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export function createJarvisShowcase() {
  const section = document.createElement('section');
  section.className = 'jarvis-section';
  section.id = 'jarvis';

  const { featuredProject } = PORTFOLIO_DATA;

  section.innerHTML = `
    <div class="container">
      <div class="section-header-tag">
        <span>★ PROYECTO DESTACADO // SHOWCASE EXCLUSIVO</span>
      </div>

      <h2 class="section-title">
        J.A.R.V.I.S. — NEURAL INTERFACE
      </h2>

      <p class="section-subtitle">
        Asistente de escritorio de alta fidelidad con inteligencia artificial local (Gemma 4), síntesis de voz neuronal, renderizador holográfico 3D en tiempo real (Three.js) y widget transparente frameless.
      </p>

      <div class="jarvis-window">
        <div class="window-chrome">
          <span>JARVIS_SYSTEM_V1.4.EXE — ARCHITECTURE & RUNTIME</span>
          <div class="window-dots">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
          </div>
        </div>

        <div class="jarvis-window-body">
          <!-- Left Column: Architectural Specs -->
          <div class="jarvis-specs-pane">
            <div class="jarvis-meta-badge">
              <span class="brutal-badge cyan">OPEN SOURCE</span>
              <span class="brutal-badge yellow">PYTHON 3.10+</span>
              <span class="brutal-badge pink">THREE.JS R128</span>
              <span class="brutal-badge green">LOCAL OFFLINE AI</span>
            </div>

            <h3 class="jarvis-heading">
              ${featuredProject.fullName}
            </h3>

            <p class="jarvis-summary">
              ${featuredProject.description}
            </p>

            <div class="pillars-grid">
              ${featuredProject.pillars
                .map(
                  (p) => `
                <div class="pillar-card">
                  <div class="pillar-icon">${p.icon}</div>
                  <h4>${p.title}</h4>
                  <p>${p.desc}</p>
                </div>
              `
                )
                .join('')}
            </div>

            <div class="jarvis-tech-tags">
              ${featuredProject.tags
                .map(
                  (t) => `
                <span class="brutal-badge dark">${t}</span>
              `
                )
                .join('')}
            </div>

            <div class="clone-box">
              <span class="clone-code">${featuredProject.cloneCommand}</span>
              <button class="clone-btn" id="jarvis-clone-btn" data-command="${featuredProject.cloneCommand}">
                COPIAR 📋
              </button>
            </div>

            <div class="jarvis-actions">
              <a 
                href="${featuredProject.githubRepo}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="brutal-btn"
                id="jarvis-github-btn"
              >
                <span>VER CÓDIGO EN GITHUB</span>
                <span>↗</span>
              </a>

              <a 
                href="${featuredProject.githubRepo}/archive/refs/heads/main.zip" 
                class="brutal-btn outline"
                id="jarvis-download-btn"
              >
                <span>DESCARGAR .ZIP</span>
                <span>📦</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Hologram & Monospace Sandbox -->
          <div class="jarvis-interactive-pane">
            <div class="hologram-stage-header">
              <span>● 3D HOLOGRAM RENDERER (THREE.JS)</span>
              <span id="current-state-indicator">ESTADO: REPOSO (0x00F0FF)</span>
            </div>

            <div id="canvas-container" title="Arrastra el cursor para mover el ángulo parallax del holograma"></div>

            <div class="hologram-state-bar">
              <div class="state-bar-label">PROBAR MÁQUINA DE ESTADOS REACTIVA:</div>
              <div class="state-selector-btns">
                <button class="state-chip active" data-state="reposo" id="btn-state-reposo">REPOSO</button>
                <button class="state-chip" data-state="escuchando" id="btn-state-escuchando">ESCUCHA</button>
                <button class="state-chip" data-state="pensando" id="btn-state-pensando">PENSANDO</button>
                <button class="state-chip" data-state="hablando" id="btn-state-hablando">HABLANDO</button>
              </div>
            </div>

            <!-- Terminal HUD Sandbox -->
            <div class="terminal-hud">
              <div class="terminal-logs" id="terminal-logs">
                <span class="log-out">J.A.R.V.I.S. Core Terminal v1.4.2 [Online]</span>
                <span class="log-out">Escribe 'help' o presiona los comandos rápidos:</span>
                <div style="display: flex; gap: 0.4rem; margin-block: 0.4rem; flex-wrap: wrap;">
                  <button class="brutal-badge" style="cursor: pointer;" data-cmd="status">status</button>
                  <button class="brutal-badge" style="cursor: pointer;" data-cmd="specs">specs</button>
                  <button class="brutal-badge" style="cursor: pointer;" data-cmd="arch">arch</button>
                  <button class="brutal-badge" style="cursor: pointer;" data-cmd="run">run</button>
                </div>
              </div>

              <form class="terminal-input-bar" id="terminal-form">
                <span class="terminal-prompt-prefix">jarvis@desktop:~$</span>
                <input 
                  type="text" 
                  id="terminal-input" 
                  class="terminal-input" 
                  placeholder="Escribe 'help', 'status', 'arch'..." 
                  autocomplete="off"
                  spellcheck="false"
                />
                <button type="submit" class="terminal-send-btn">ENVIAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
