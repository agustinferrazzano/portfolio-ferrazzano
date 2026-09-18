import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export function createSkillsMatrix() {
  const section = document.createElement('section');
  section.className = 'skills-section';
  section.id = 'skills';

  const { skillsMatrix } = PORTFOLIO_DATA;

  section.innerHTML = `
    <div class="container">
      <div class="section-header-tag">
        <span>⚙ CAPACIDADES TÉCNICAS // SENIOR STACK</span>
      </div>

      <h2 class="section-title">
        MATRIZ DE ARQUITECTURA & TECNOLOGÍAS
      </h2>

      <p class="section-subtitle">
        Diseñado bajo la filosofía de máxima eficiencia computacional, separación de capas y cero dependencias superfluas.
      </p>

      <div class="matrix-grid">
        ${skillsMatrix
          .map(
            (group, idx) => `
          <div class="matrix-card">
            <h3 class="matrix-category-title">
              <span style="color: var(--accent-${idx % 2 === 0 ? 'cyan' : 'pink'});">#0${idx + 1}</span>
              <span>${group.category}</span>
            </h3>
            <div class="skills-pill-wrap">
              ${group.skills
                .map(
                  (skill) => `
                <span class="skill-pill">${skill}</span>
              `
                )
                .join('')}
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  return section;
}
