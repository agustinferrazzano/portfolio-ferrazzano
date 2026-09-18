import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export function createLinkedinCard() {
  const card = document.createElement('div');
  card.className = 'connect-card';
  card.id = 'linkedin-card';

  const { social, developer } = PORTFOLIO_DATA;

  card.innerHTML = `
    <div class="window-chrome">
      <span>NETWORKING_PROTOCOL: LINKEDIN_AUTH.SYS</span>
      <div class="window-dots">
        <span class="window-dot red"></span>
        <span class="window-dot yellow"></span>
        <span class="window-dot green"></span>
      </div>
    </div>

    <div class="connect-card-content">
      <div class="connect-card-header">
        <div class="connect-platform-title">
          <div class="platform-icon linkedin">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
            </svg>
          </div>
          <div>
            <div class="platform-name">LinkedIn Profile</div>
            <span class="brutal-badge cyan">● PERFIL PROFESIONAL</span>
          </div>
        </div>

        <span class="brutal-badge green">OPEN TO WORK</span>
      </div>

      <p class="connect-desc">
        Disponible para posiciones de Senior Full Stack Developer, liderazgo técnico, desarrollo de productos de IA local y consultoría arquitectónica.
      </p>

      <div class="linkedin-perks">
        <div class="linkedin-perk">
          <span>💼</span>
          <span>Desarrollo Full Stack de Alto Impacto (Python / TS)</span>
        </div>
        <div class="linkedin-perk">
          <span>🧠</span>
          <span>Ingeniería de Sistemas de IA & RAG Local Privado</span>
        </div>
        <div class="linkedin-perk">
          <span>🚀</span>
          <span>Arquitectura Limpia & Rendimiento Sin Bloat</span>
        </div>
      </div>

      <div style="margin-top: auto; display: flex; gap: 0.8rem; flex-wrap: wrap;">
        <a 
          href="${social.linkedin.url}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="brutal-btn cyan"
          id="linkedin-profile-btn"
          style="flex: 1;"
        >
          <span>CONECTAR EN LINKEDIN</span>
          <span>↗</span>
        </a>

        <button 
          class="brutal-btn yellow" 
          id="linkedin-email-btn"
          data-email="${developer.email}"
        >
          <span>CONTACTO DIRECTO</span>
          <span>✉</span>
        </button>
      </div>
    </div>
  `;

  return card;
}
