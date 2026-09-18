import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export function createEquilibrioShowcase() {
  const section = document.createElement('section');
  section.className = 'equilibrio-section';
  section.id = 'equilibrio';

  const project = PORTFOLIO_DATA.featuredProjects.equilibrio;
  const portfolio = project.samplePortfolio;

  section.innerHTML = `
    <div class="container">
      <div class="section-header-tag">
        <span>★ PROYECTO FULL STACK // CLEAN ARCHITECTURE MONOREPO</span>
      </div>

      <h2 class="section-title">
        EQUILIBRIO — ASSET & PORTFOLIO ENGINE
      </h2>

      <p class="section-subtitle">
        Plataforma full-stack de alto rendimiento para gestión y balanceo analítico de inversiones. Monorepo TypeScript con Next.js 16, React 19, Tailwind CSS v4, Recharts, API REST en Express, base de datos SQLite y core de dominio con arquitectura limpia hexagonal.
      </p>

      <div class="jarvis-window equilibrio-window">
        <div class="window-chrome">
          <span>EQUILIBRIO_APP_V1.0.TSX — ARCHITECTURE & CORE RUNTIME</span>
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
              <span class="brutal-badge cyan">NEXT.JS 16 / REACT 19</span>
              <span class="brutal-badge yellow">TYPESCRIPT MONOREPO</span>
              <span class="brutal-badge green">EXPRESS + SQLITE</span>
              <span class="brutal-badge pink">CLEAN ARCHITECTURE</span>
            </div>

            <h3 class="jarvis-heading">
              ${project.fullName}
            </h3>

            <p class="jarvis-summary">
              ${project.description}
            </p>

            <div class="pillars-grid">
              ${project.pillars
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
              ${project.tags
                .map(
                  (t) => `
                <span class="brutal-badge dark">${t}</span>
              `
                )
                .join('')}
            </div>

            <div class="clone-box">
              <span class="clone-code">${project.cloneCommand}</span>
              <button class="clone-btn" id="equilibrio-clone-btn" data-command="${project.cloneCommand}">
                COPIAR 📋
              </button>
            </div>

            <div class="jarvis-actions">
              <a 
                href="${project.githubRepo}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="brutal-btn"
                id="equilibrio-github-btn"
              >
                <span>VER CÓDIGO EN GITHUB</span>
                <span>↗</span>
              </a>

              <a 
                href="${project.githubRepo}/archive/refs/heads/main.zip" 
                class="brutal-btn outline"
                id="equilibrio-download-btn"
              >
                <span>DESCARGAR .ZIP</span>
                <span>📦</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Portfolio Dashboard & Monospace Sandbox -->
          <div class="jarvis-interactive-pane">
            <div class="hologram-stage-header">
              <span>● INTERACTIVE PORTFOLIO ENGINE (SIMULADOR EN VIVO)</span>
              <span id="equilibrio-profit-indicator" style="color: var(--accent-green);">PnL: +17.4% (+$4,820 USD)</span>
            </div>

            <!-- Financial Portfolio Interactive Dashboard -->
            <div class="finance-dashboard-box" id="finance-dashboard">
              <div class="finance-header-row">
                <div>
                  <div class="finance-balance-label">VALOR CONSOLIDADO TOTAL</div>
                  <div class="finance-balance-amount" id="finance-total-val">$32,450.00 <span class="currency">USD</span></div>
                </div>
                <div class="finance-status-badge">
                  <span>● CORE SYNCED</span>
                </div>
              </div>

              <!-- Visual Asset Allocation Bar -->
              <div class="allocation-bar-label">
                <span>DISTRIBUCIÓN DE ACTIVOS (RECHART SIMULATOR):</span>
                <span id="selected-asset-info">TODOS LOS ACTIVOS</span>
              </div>
              
              <div class="multi-allocation-bar" id="allocation-bar">
                <div class="alloc-segment btc" style="width: 35%;" data-asset="btc" title="Bitcoin: 35% ($11,357.50)"></div>
                <div class="alloc-segment spy" style="width: 30%;" data-asset="spy" title="S&P 500 ETF: 30% ($9,735.00)"></div>
                <div class="alloc-segment eth" style="width: 20%;" data-asset="eth" title="Ethereum: 20% ($6,490.00)"></div>
                <div class="alloc-segment cash" style="width: 15%;" data-asset="cash" title="USD Cash: 15% ($4,867.50)"></div>
              </div>

              <!-- Interactive Asset Cards Grid -->
              <div class="asset-cards-grid">
                ${portfolio.assets
                  .map(
                    (a) => `
                  <div class="asset-card" data-asset-id="${a.id}" id="asset-card-${a.id}">
                    <div class="asset-card-top">
                      <span class="asset-ticker" style="border-left: 3px solid ${a.color}; padding-left: 4px;">${a.ticker}</span>
                      <span class="asset-change ${a.change.startsWith('+') ? 'pos' : ''}">${a.change}</span>
                    </div>
                    <div class="asset-card-name">${a.name}</div>
                    <div class="asset-card-val">$${a.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                    <div class="asset-card-pct">${a.allocation}% de cartera</div>
                  </div>
                `
                  )
                  .join('')}
              </div>

              <!-- Interactive Action Bar -->
              <div class="finance-cta-row">
                <button class="brutal-btn cyan" id="btn-simulate-tx" style="padding: 0.5rem 0.9rem; font-size: 0.8rem;">
                  <span>+ SIMULAR TRANSACCIÓN (AddTransactionUseCase)</span>
                </button>
                <button class="brutal-btn outline" id="btn-rebalance-portfolio" style="padding: 0.5rem 0.9rem; font-size: 0.8rem;">
                  <span>⚖ REBALANCEAR CARTERA</span>
                </button>
              </div>
            </div>

            <!-- Terminal Monorepo HUD Sandbox -->
            <div class="terminal-hud">
              <div class="terminal-logs" id="equilibrio-terminal-logs">
                <span class="log-out">Equilibrio Monorepo Engine v1.0.0 [Workspaces Loaded]</span>
                <span class="log-out">apps: [frontend, backend] | packages: [@equilibrio/core]</span>
                <span class="log-out">Escribe 'help' o presiona los accesos rápidos:</span>
                <div style="display: flex; gap: 0.4rem; margin-block: 0.4rem; flex-wrap: wrap;">
                  <button class="brutal-badge" style="cursor: pointer;" data-eq-cmd="status">status</button>
                  <button class="brutal-badge" style="cursor: pointer;" data-eq-cmd="monorepo">monorepo</button>
                  <button class="brutal-badge" style="cursor: pointer;" data-eq-cmd="arch">arch</button>
                  <button class="brutal-badge" style="cursor: pointer;" data-eq-cmd="core">core</button>
                  <button class="brutal-badge" style="cursor: pointer;" data-eq-cmd="test">test</button>
                  <button class="brutal-badge" style="cursor: pointer;" data-eq-cmd="run">run</button>
                </div>
              </div>

              <form class="terminal-input-bar" id="equilibrio-terminal-form">
                <span class="terminal-prompt-prefix">equilibrio@monorepo:~$</span>
                <input 
                  type="text" 
                  id="equilibrio-terminal-input" 
                  class="terminal-input" 
                  placeholder="Escribe 'help', 'status', 'arch', 'monorepo'..." 
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
