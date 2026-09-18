import './style.css';
import { PORTFOLIO_DATA } from './data/portfolioData.js';
import { sound } from './services/soundService.js';
import { JarvisHologram } from './three/jarvisHologram.js';

import { createHeader } from './components/header.js';
import { createHero } from './components/hero.js';
import { createMarquee } from './components/marquee.js';
import { createProjectsContainer } from './components/projectsContainer.js';
import { createGithubCard } from './components/githubCard.js';
import { createLinkedinCard } from './components/linkedinCard.js';
import { createSkillsMatrix } from './components/skillsMatrix.js';
import { createFooter } from './components/footer.js';

class App {
  constructor() {
    this.appEl = document.getElementById('app');
    this.hologram = null;
    this.activeProjectTab = 'jarvis';
    this.initTheme();
    this.render();
    this.initHologram();
    this.attachEventListeners();
    this.handleInitialRoute();
  }

  initTheme() {
    const savedTheme = localStorage.getItem('af_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('af_theme', next);

    const iconEl = document.getElementById('theme-icon');
    if (iconEl) {
      iconEl.textContent = next === 'dark' ? '☾' : '☀';
    }
    sound.playBeep(next === 'dark' ? 500 : 750, 0.05, 'triangle', 0.04);
    this.showToast(`Modo Neo-Brutalista: ${next === 'dark' ? 'Cyber-Dark' : 'Daylight'}`);
  }

  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>⚡</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  async copyToClipboard(text, label = 'Copiado al portapapeles') {
    try {
      await navigator.clipboard.writeText(text);
      sound.playBeep(920, 0.08, 'sine', 0.05);
      this.showToast(`${label}`);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      this.showToast(`${label}`);
    }
  }

  render() {
    this.appEl.innerHTML = '';

    // 1. Header
    this.appEl.appendChild(createHeader());

    // 2. Hero Section
    this.appEl.appendChild(createHero());

    // 3. Marquee Banner
    this.appEl.appendChild(createMarquee());

    // 4. Featured Projects System (JARVIS & EQUILIBRIO)
    this.appEl.appendChild(createProjectsContainer());

    // 5. Connectivity Section (GitHub & LinkedIn Cards)
    const connectSection = document.createElement('section');
    connectSection.className = 'connect-section';
    connectSection.id = 'connect';
    connectSection.innerHTML = `
      <div class="container">
        <div class="section-header-tag">
          <span>⚡ CONEXIÓN & REDES PROFESIONALES</span>
        </div>
        <h2 class="section-title">GITHUB & LINKEDIN NETWORK</h2>
        <p class="section-subtitle">
          Integración en tiempo real con mi ecosistema de código y presencia profesional.
        </p>
        <div class="connect-grid" id="connect-grid-root"></div>
      </div>
    `;
    this.appEl.appendChild(connectSection);

    const connectGrid = connectSection.querySelector('#connect-grid-root');
    connectGrid.appendChild(createGithubCard());
    connectGrid.appendChild(createLinkedinCard());

    // 6. Skills & Architectural Matrix
    this.appEl.appendChild(createSkillsMatrix());

    // 7. Footer
    this.appEl.appendChild(createFooter());

    // Sync initial theme icon
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☾' : '☀';
    }

    // Sync initial sound icon
    const soundIcon = document.getElementById('sound-icon');
    if (soundIcon) {
      soundIcon.textContent = sound.enabled ? '🔊' : '🔇';
    }
  }

  initHologram() {
    try {
      this.hologram = new JarvisHologram('canvas-container');
    } catch (err) {
      console.warn('[HologramEngine] Could not initialize Three.js:', err);
    }
  }

  switchProjectTab(tabId) {
    const pillJarvis = document.getElementById('pill-jarvis');
    const pillEquilibrio = document.getElementById('pill-equilibrio');
    const panelJarvis = document.getElementById('panel-jarvis');
    const panelEquilibrio = document.getElementById('panel-equilibrio');

    if (!panelJarvis || !panelEquilibrio) return;

    if (tabId === 'jarvis') {
      pillJarvis?.classList.add('active');
      pillEquilibrio?.classList.remove('active');
      panelJarvis.style.display = 'block';
      panelEquilibrio.style.display = 'none';
      this.activeProjectTab = 'jarvis';
      sound.playBeep(640, 0.06, 'triangle', 0.04);
      if (this.hologram) {
        window.dispatchEvent(new Event('resize'));
      }
    } else if (tabId === 'equilibrio') {
      pillEquilibrio?.classList.add('active');
      pillJarvis?.classList.remove('active');
      panelJarvis.style.display = 'none';
      panelEquilibrio.style.display = 'block';
      this.activeProjectTab = 'equilibrio';
      sound.playBeep(780, 0.06, 'triangle', 0.04);
    }
  }

  handleInitialRoute() {
    const hash = window.location.hash;
    if (hash === '#equilibrio') {
      this.switchProjectTab('equilibrio');
    } else if (hash === '#jarvis') {
      this.switchProjectTab('jarvis');
    }
  }

  attachEventListeners() {
    // Hash Routing
    window.addEventListener('hashchange', () => {
      this.handleInitialRoute();
    });

    // Project Tabs Switcher
    const pillJarvis = document.getElementById('pill-jarvis');
    const pillEquilibrio = document.getElementById('pill-equilibrio');

    pillJarvis?.addEventListener('click', () => this.switchProjectTab('jarvis'));
    pillEquilibrio?.addEventListener('click', () => this.switchProjectTab('equilibrio'));

    // Sound Toggle
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const enabled = sound.toggle();
        const icon = document.getElementById('sound-icon');
        if (icon) icon.textContent = enabled ? '🔊' : '🔇';
        this.showToast(enabled ? 'Efectos de audio activados' : 'Efectos de audio silenciados');
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Click sound for all interactive buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.brutal-btn') || e.target.closest('.state-chip') || e.target.closest('.project-pill-btn')) {
        sound.playClick();
      }
    });

    // Copy Email Buttons
    document.querySelectorAll('[data-email]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const email = btn.getAttribute('data-email');
        this.copyToClipboard(email, `Email copiado: ${email}`);
      });
    });

    // Copy Clone Command Buttons (JARVIS & Equilibrio)
    const jarvisCloneBtn = document.getElementById('jarvis-clone-btn');
    if (jarvisCloneBtn) {
      jarvisCloneBtn.addEventListener('click', () => {
        const cmd = jarvisCloneBtn.getAttribute('data-command');
        this.copyToClipboard(cmd, 'Comando git clone JARVIS copiado');
      });
    }

    const eqCloneBtn = document.getElementById('equilibrio-clone-btn');
    if (eqCloneBtn) {
      eqCloneBtn.addEventListener('click', () => {
        const cmd = eqCloneBtn.getAttribute('data-command');
        this.copyToClipboard(cmd, 'Comando git clone Equilibrio copiado');
      });
    }

    // JARVIS Hologram State Switcher
    const stateChips = document.querySelectorAll('.state-chip');
    const stateIndicator = document.getElementById('current-state-indicator');

    stateChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const targetState = chip.getAttribute('data-state');
        stateChips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');

        if (this.hologram) {
          this.hologram.setState(targetState);
        }
        sound.playHologramShift(targetState);

        const stateInfo = PORTFOLIO_DATA.featuredProjects.jarvis.hologramStates.find((s) => s.id === targetState);
        if (stateIndicator && stateInfo) {
          stateIndicator.textContent = `ESTADO: ${stateInfo.name.toUpperCase()} (${stateInfo.color})`;
          stateIndicator.style.color = stateInfo.color;
        }

        this.appendTerminalLog(`> hologram state --set=${targetState}`, `[HOLO] Transición completada a modo '${targetState}'.`);
      });
    });

    // JARVIS Terminal HUD
    const terminalForm = document.getElementById('terminal-form');
    const terminalInput = document.getElementById('terminal-input');

    if (terminalForm && terminalInput) {
      terminalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cmd = terminalInput.value.trim().toLowerCase();
        if (!cmd) return;
        terminalInput.value = '';
        this.handleTerminalCommand(cmd);
      });
    }

    // JARVIS Quick Command Badges
    document.querySelectorAll('[data-cmd]').forEach((badge) => {
      badge.addEventListener('click', () => {
        const cmd = badge.getAttribute('data-cmd');
        this.handleTerminalCommand(cmd);
      });
    });

    // ==========================================
    // EQUILIBRIO INTERACTIVE SIMULATOR LOGIC
    // ==========================================
    const assetCards = document.querySelectorAll('.asset-card');
    const selectedAssetInfo = document.getElementById('selected-asset-info');
    const financeTotalVal = document.getElementById('finance-total-val');

    assetCards.forEach((card) => {
      card.addEventListener('click', () => {
        assetCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        sound.playBeep(880, 0.04, 'sine', 0.03);

        const assetId = card.getAttribute('data-asset-id');
        const asset = PORTFOLIO_DATA.featuredProjects.equilibrio.samplePortfolio.assets.find((a) => a.id === assetId);

        if (asset && selectedAssetInfo) {
          selectedAssetInfo.textContent = `${asset.name.toUpperCase()} (${asset.allocation}%) - $${asset.value.toLocaleString()} USD`;
          this.appendEquilibrioLog(
            `equilibrio@monorepo:~$ asset inspect --ticker=${asset.ticker}`,
            `[ASSET] ${asset.name} (${asset.ticker}): Asignación ${asset.allocation}% | Valor: $${asset.value.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD | Rendimiento: ${asset.change}`
          );
        }
      });
    });

    // Simulate Transaction Button (AddTransactionUseCase)
    let dynamicBalance = PORTFOLIO_DATA.featuredProjects.equilibrio.samplePortfolio.totalBalance;
    const btnSimulateTx = document.getElementById('btn-simulate-tx');

    if (btnSimulateTx) {
      btnSimulateTx.addEventListener('click', () => {
        dynamicBalance += 1930.00;
        if (financeTotalVal) {
          financeTotalVal.innerHTML = `$${dynamicBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })} <span class="currency">USD</span>`;
          financeTotalVal.style.color = 'var(--accent-green)';
          setTimeout(() => {
            financeTotalVal.style.color = '';
          }, 600);
        }

        sound.playBeep(1050, 0.08, 'sine', 0.06);
        this.showToast('Transacción simulada en @equilibrio/core (+0.02 BTC)');
        this.appendEquilibrioLog(
          'equilibrio@monorepo:~$ npx ts-node packages/core/src/useCases/AddTransactionUseCase.ts',
          `[TX_SUCCESS] Orden ejecutada: +0.02 BTC @ $96,500.00 USD\n[PORTFOLIO_CORE] Balance consolidado actualizado a $${dynamicBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD.`
        );
      });
    }

    // Rebalance Portfolio Button
    const btnRebalance = document.getElementById('btn-rebalance-portfolio');
    if (btnRebalance) {
      btnRebalance.addEventListener('click', () => {
        sound.playBeep(920, 0.05, 'triangle', 0.04);
        this.showToast('Cartera rebalanceada al objetivo 35% BTC / 30% SPY / 20% ETH / 15% USD');
        this.appendEquilibrioLog(
          'equilibrio@monorepo:~$ npx ts-node packages/core/src/services/RebalanceService.ts',
          '[REBALANCE_OK] Tolerancia óptima alcanzada: 35% BTC | 30% SPY | 20% ETH | 15% USD Cash. 0 desvíos.'
        );
      });
    }

    // EQUILIBRIO Terminal Form
    const eqTerminalForm = document.getElementById('equilibrio-terminal-form');
    const eqTerminalInput = document.getElementById('equilibrio-terminal-input');

    if (eqTerminalForm && eqTerminalInput) {
      eqTerminalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cmd = eqTerminalInput.value.trim().toLowerCase();
        if (!cmd) return;
        eqTerminalInput.value = '';
        this.handleEquilibrioCommand(cmd);
      });
    }

    // EQUILIBRIO Quick Command Badges
    document.querySelectorAll('[data-eq-cmd]').forEach((badge) => {
      badge.addEventListener('click', () => {
        const cmd = badge.getAttribute('data-eq-cmd');
        this.handleEquilibrioCommand(cmd);
      });
    });
  }

  handleTerminalCommand(rawCmd) {
    const cleanCmd = rawCmd.trim().toLowerCase();
    const { terminalCommands } = PORTFOLIO_DATA.featuredProjects.jarvis;

    sound.playBeep(700, 0.04, 'sine', 0.03);

    if (cleanCmd === 'clear') {
      const logsEl = document.getElementById('terminal-logs');
      if (logsEl) logsEl.innerHTML = '<span class="log-out">J.A.R.V.I.S. Core Terminal v1.4.2 [Online]</span>';
      return;
    }

    // Hologram state triggers via terminal
    const stateMatch = PORTFOLIO_DATA.featuredProjects.jarvis.hologramStates.find((s) => s.id === cleanCmd);
    if (stateMatch) {
      const chip = document.querySelector(`.state-chip[data-state="${cleanCmd}"]`);
      if (chip) chip.click();
      return;
    }

    const response = terminalCommands[cleanCmd] || `Comando '${cleanCmd}' no reconocido. Escribe 'help' para ver la lista de comandos disponibles.`;
    this.appendTerminalLog(`jarvis@desktop:~$ ${rawCmd}`, response);
  }

  appendTerminalLog(commandText, responseText) {
    const logsEl = document.getElementById('terminal-logs');
    if (!logsEl) return;

    const cmdEntry = document.createElement('div');
    cmdEntry.className = 'log-prompt';
    cmdEntry.textContent = commandText;

    const resEntry = document.createElement('div');
    resEntry.className = 'log-out';
    resEntry.textContent = responseText;

    logsEl.appendChild(cmdEntry);
    logsEl.appendChild(resEntry);
    logsEl.scrollTop = logsEl.scrollHeight;
  }

  handleEquilibrioCommand(rawCmd) {
    const cleanCmd = rawCmd.trim().toLowerCase();
    const { terminalCommands } = PORTFOLIO_DATA.featuredProjects.equilibrio;

    sound.playBeep(760, 0.04, 'sine', 0.03);

    if (cleanCmd === 'clear') {
      const logsEl = document.getElementById('equilibrio-terminal-logs');
      if (logsEl) logsEl.innerHTML = '<span class="log-out">Equilibrio Monorepo Engine v1.0.0 [Online]</span>';
      return;
    }

    const response = terminalCommands[cleanCmd] || `Comando '${cleanCmd}' no reconocido. Escribe 'help' o presiona 'monorepo', 'arch', 'core', 'test'.`;
    this.appendEquilibrioLog(`equilibrio@monorepo:~$ ${rawCmd}`, response);
  }

  appendEquilibrioLog(commandText, responseText) {
    const logsEl = document.getElementById('equilibrio-terminal-logs');
    if (!logsEl) return;

    const cmdEntry = document.createElement('div');
    cmdEntry.className = 'log-prompt';
    cmdEntry.textContent = commandText;

    const resEntry = document.createElement('div');
    resEntry.className = 'log-out';
    resEntry.textContent = responseText;

    logsEl.appendChild(cmdEntry);
    logsEl.appendChild(resEntry);
    logsEl.scrollTop = logsEl.scrollHeight;
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

