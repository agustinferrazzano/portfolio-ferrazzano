import { createJarvisShowcase } from './jarvisShowcase.js';
import { createEquilibrioShowcase } from './equilibrioShowcase.js';

export function createProjectsContainer() {
  const container = document.createElement('div');
  container.className = 'projects-system-wrapper';
  container.id = 'projects';

  container.innerHTML = `
    <div class="container">
      <div class="project-tabs-header-box">
        <div class="tabs-tag">
          <span>⚡ ECOSYSTEM SPOTLIGHT // PROYECTOS PRINCIPALES</span>
        </div>
        <div class="tabs-nav-bar">
          <div class="tabs-intro-text">
            <h2 class="tabs-main-title">ARQUITECTURAS EN PRODUCCIÓN</h2>
            <p class="tabs-main-subtitle">Selecciona un proyecto para inspeccionar su stack, arquitectura limpia y entorno interactivo:</p>
          </div>
          <div class="project-nav-pills">
            <button class="project-pill-btn active" data-tab="jarvis" id="pill-jarvis">
              <span class="pill-number">01</span>
              <span class="pill-name">J.A.R.V.I.S.</span>
              <span class="pill-badge cyan">IA LOCAL & 3D</span>
            </button>
            <button class="project-pill-btn" data-tab="equilibrio" id="pill-equilibrio">
              <span class="pill-number">02</span>
              <span class="pill-name">EQUILIBRIO</span>
              <span class="pill-badge yellow">MONOREPO FULL STACK</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mount points for both showcases -->
    <div class="project-panel" id="panel-jarvis"></div>
    <div class="project-panel" id="panel-equilibrio" style="display: none;"></div>
  `;

  const jarvisMount = container.querySelector('#panel-jarvis');
  const equilibrioMount = container.querySelector('#panel-equilibrio');

  jarvisMount.appendChild(createJarvisShowcase());
  equilibrioMount.appendChild(createEquilibrioShowcase());

  return container;
}
