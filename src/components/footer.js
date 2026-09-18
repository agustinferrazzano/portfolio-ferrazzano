import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.id = 'contact';

  const { developer, social } = PORTFOLIO_DATA;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">${developer.name}</div>
          <p class="footer-bio">
            ${developer.role}. Desarrollando sistemas de software de alto impacto visual y solvencia arquitectónica. Disponible para nuevos retos y colaboraciones técnicas.
          </p>

          <div class="footer-contact-actions">
            <button class="brutal-btn" id="footer-copy-email-btn" data-email="${developer.email}">
              <span>${developer.email}</span>
              <span>📋</span>
            </button>

            <a href="${social.github.url}" target="_blank" rel="noopener noreferrer" class="brutal-btn outline">
              <span>GITHUB ↗</span>
            </a>

            <a href="${social.linkedin.url}" target="_blank" rel="noopener noreferrer" class="brutal-btn cyan">
              <span>LINKEDIN ↗</span>
            </a>
          </div>
        </div>

        <div>
          <div class="footer-meta-block">
            <div style="font-weight: 800; color: var(--accent-pink); margin-bottom: 0.5rem;">[RUNTIME TELEMETRY]</div>
            <div>STATUS: ONLINE & OPTIMIZED</div>
            <div>STACK: VANILLA ES6+ / THREE.JS / MODERN CSS</div>
            <div>DEVELOPER: AGUSTÍN FERRAZZANO</div>
            <div>BASE: ARGENTINA (UTC-3)</div>
            <div>SECURITY: ZERO TRACKERS / ZERO BLOAT</div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© ${new Date().getFullYear()} Agustín Ferrazzano. Todos los derechos reservados.</div>
        <div>ESTILO NEO-BRUTALISTA // HIGH-CONTRAST INTERFACE</div>
      </div>
    </div>
  `;

  return footer;
}
