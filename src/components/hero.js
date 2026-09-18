import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export function createHero() {
  const section = document.createElement('section');
  section.className = 'hero-section';
  section.id = 'hero';

  const { developer, social } = PORTFOLIO_DATA;

  section.innerHTML = `
    <div class="container">
      <div class="hero-grid">
        <div class="hero-intro">
          <div class="hero-tagline-top">
            <span>⚡</span>
            <span>SENIOR FULL STACK & AI SYSTEMS ARCHITECT</span>
          </div>

          <h1 class="hero-title">
            AGUSTÍN FERRAZZANO<br />
            <span class="highlight-yellow">SISTEMAS ROBUSTOS</span> & <span class="highlight-cyan">IA LOCAL</span>
          </h1>

          <p class="hero-description">
            ${developer.heroDescription}
          </p>

          <div class="hero-cta-group">
            <a href="#jarvis" class="brutal-btn" id="hero-cta-jarvis">
              <span>EXPLORAR J.A.R.V.I.S.</span>
              <span>⚡</span>
            </a>

            <a href="${social.github.url}" target="_blank" rel="noopener noreferrer" class="brutal-btn outline" id="hero-cta-github">
              <span>GITHUB</span>
              <span>↗</span>
            </a>

            <a href="${social.linkedin.url}" target="_blank" rel="noopener noreferrer" class="brutal-btn cyan" id="hero-cta-linkedin">
              <span>LINKEDIN</span>
              <span>↗</span>
            </a>

            <button class="brutal-btn pink" id="hero-copy-email-btn" data-email="${developer.email}">
              <span>COPIAR EMAIL</span>
              <span>✉</span>
            </button>
          </div>

          <div class="hero-stickers">
            <span class="hero-sticker" style="transform: rotate(-1.5deg);">🐍 PYTHON 3.10+</span>
            <span class="hero-sticker" style="transform: rotate(2deg);">🌐 THREE.JS R128</span>
            <span class="hero-sticker" style="transform: rotate(-1deg);">🧠 GEMMA 4 E2B LOCAL</span>
            <span class="hero-sticker" style="transform: rotate(1.5deg);">🏛 CLEAN ARCHITECTURE</span>
            <span class="hero-sticker" style="transform: rotate(-2deg);">💾 CHROMA RAG</span>
            <span class="hero-sticker" style="transform: rotate(1deg);">⚡ OFFLINE-FIRST</span>
          </div>
        </div>

        <div class="hero-side">
          <div class="hero-box">
            <div class="window-chrome">
              <span>SYSTEM_PROFILE.SYS</span>
              <div class="window-dots">
                <span class="window-dot red"></span>
                <span class="window-dot yellow"></span>
                <span class="window-dot green"></span>
              </div>
            </div>

            <div class="hero-box-content">
              <div class="profile-badge-header">
                <img 
                  src="https://avatars.githubusercontent.com/u/135985034?v=4" 
                  alt="Agustín Ferrazzano" 
                  class="profile-avatar"
                  id="hero-avatar"
                />
                <div class="profile-meta">
                  <h3>${developer.name}</h3>
                  <p>Full Stack & AI Engineer</p>
                  <span class="brutal-badge green" style="margin-top: 0.4rem;">DISPONIBLE PARA PROYECTOS</span>
                </div>
              </div>

              <div class="stat-rows">
                <div class="stat-item">
                  <span class="label">UBICACIÓN</span>
                  <span class="val">${developer.location}</span>
                </div>
                <div class="stat-item">
                  <span class="label">ENFOQUE TÉCNICO</span>
                  <span class="val">IA Local, 3D & Clean Arch</span>
                </div>
                <div class="stat-item">
                  <span class="label">GITHUB HANDLE</span>
                  <span class="val">@${social.github.username}</span>
                </div>
                <div class="stat-item">
                  <span class="label">PROYECTO ACTIVO</span>
                  <span class="val" style="color: var(--accent-pink);">J.A.R.V.I.S. (Open Source)</span>
                </div>
              </div>

              <a href="#jarvis" class="brutal-btn outline" style="width: 100%;">
                VER DEMO INTERACTIVA 3D ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
