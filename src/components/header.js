import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.id = 'site-header';

  header.innerHTML = `
    <div class="container header-container">
      <a href="#" class="brand-logo" id="brand-logo-btn" title="Agustín Ferrazzano">
        <span>[AF]</span>
        <span>FERRAZZANO.DEV</span>
      </a>

      <div class="header-actions">
        <div class="status-pill" title="Estado profesional actual">
          <span class="status-indicator"></span>
          <span>DISPONIBLE // OPEN TO WORK</span>
        </div>

        <button class="icon-toggle-btn" id="sound-toggle-btn" title="Sonido interactivo (Web Audio)">
          <span id="sound-icon">🔇</span>
        </button>

        <button class="icon-toggle-btn" id="theme-toggle-btn" title="Alternar Modo Neo-Brutalista Claro/Oscuro">
          <span id="theme-icon">☾</span>
        </button>
      </div>
    </div>
  `;

  return header;
}
