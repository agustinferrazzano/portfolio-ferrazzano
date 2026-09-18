import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { githubService } from '../services/githubService.js';

export function createGithubCard() {
  const card = document.createElement('div');
  card.className = 'connect-card';
  card.id = 'github-card';

  const { social } = PORTFOLIO_DATA;

  card.innerHTML = `
    <div class="window-chrome">
      <span>API_CLIENT: GITHUB_CONNECTOR.JSON</span>
      <div class="window-dots">
        <span class="window-dot red"></span>
        <span class="window-dot yellow"></span>
        <span class="window-dot green"></span>
      </div>
    </div>

    <div class="connect-card-content">
      <div class="connect-card-header">
        <div class="connect-platform-title">
          <div class="platform-icon github">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </div>
          <div>
            <div class="platform-name">GitHub Network</div>
            <span class="brutal-badge green" id="github-sync-badge">● API SINCRONIZADA</span>
          </div>
        </div>

        <span class="brutal-badge">@${social.github.username}</span>
      </div>

      <p class="connect-desc">
        Repositorios de código abierto, implementaciones de software robusto, arquitecturas distribuidas y proyectos experimentales de IA.
      </p>

      <div class="github-live-box">
        <div class="github-live-header">
          <img 
            src="https://avatars.githubusercontent.com/u/135985034?v=4" 
            alt="GitHub Profile" 
            class="github-user-avatar"
            id="gh-avatar-preview"
          />
          <div>
            <div style="font-weight: 800; font-size: 1rem;" id="gh-user-name">Agustín Ferrazzano</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);" id="gh-user-bio">Full Stack & AI Systems Developer</div>
          </div>
        </div>

        <div class="github-stats-chips">
          <div class="stat-chip">
            <span class="val" id="gh-repos-count">2+</span>
            <span class="lbl">Repositorios</span>
          </div>
          <div class="stat-chip">
            <span class="val" id="gh-followers-count">1</span>
            <span class="lbl">Seguidores</span>
          </div>
          <div class="stat-chip">
            <span class="val" id="gh-stars-count">★ 5</span>
            <span class="lbl">Estrellas</span>
          </div>
        </div>
      </div>

      <div style="margin-top: auto; display: flex; gap: 0.8rem; flex-wrap: wrap;">
        <a 
          href="${social.github.url}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="brutal-btn"
          id="github-visit-profile-btn"
          style="flex: 1;"
        >
          <span>EXPLORAR GITHUB</span>
          <span>↗</span>
        </a>

        <a 
          href="${PORTFOLIO_DATA.featuredProject.githubRepo}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="brutal-btn cyan"
          id="github-visit-jarvis-btn"
        >
          <span>REPO JARVIS</span>
          <span>⭐</span>
        </a>
      </div>
    </div>
  `;

  // Asynchronously hydrate with live GitHub data
  setTimeout(async () => {
    try {
      const profile = await githubService.getUserProfile();
      if (profile) {
        const avatarEl = card.querySelector('#gh-avatar-preview');
        const nameEl = card.querySelector('#gh-user-name');
        const reposEl = card.querySelector('#gh-repos-count');
        const followersEl = card.querySelector('#gh-followers-count');

        if (avatarEl && profile.avatar_url) avatarEl.src = profile.avatar_url;
        if (nameEl && profile.name) nameEl.textContent = profile.name;
        if (reposEl && profile.public_repos !== undefined) reposEl.textContent = profile.public_repos;
        if (followersEl && profile.followers !== undefined) followersEl.textContent = profile.followers;
      }
    } catch {
      // Fallback already in place
    }
  }, 100);

  return card;
}
