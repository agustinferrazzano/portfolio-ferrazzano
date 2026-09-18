/**
 * GitHub API Service with Resilient Fallback & Memory Cache
 * Connects to Agustín Ferrazzano's GitHub profile & JARVIS repository.
 */

const GITHUB_USERNAME = 'agustinferrazzano';

// Preloaded real fallback snapshot to guarantee 100% uptime regardless of API rate-limits
const FALLBACK_PROFILE = {
  login: 'agustinferrazzano',
  name: 'Agustín Ferrazzano',
  avatar_url: 'https://avatars.githubusercontent.com/u/135985034?v=4',
  html_url: 'https://github.com/agustinferrazzano',
  public_repos: 2,
  followers: 1,
  following: 1,
  bio: 'Full Stack & AI Systems Developer',
  created_at: '2023-05-18T00:00:00Z',
  updated_at: '2026-09-18T19:00:00Z'
};

const FALLBACK_JARVIS_REPO = {
  name: 'JARVIS',
  full_name: 'agustinferrazzano/JARVIS',
  html_url: 'https://github.com/agustinferrazzano/JARVIS',
  description: 'Asistente de escritorio con Three.js 3D, Edge-TTS, Google Gemma 4 local y arquitectura limpia.',
  stargazers_count: 5,
  forks_count: 0,
  language: 'Python',
  default_branch: 'main',
  pushed_at: '2026-09-18T18:59:47Z'
};

class GitHubService {
  constructor() {
    this.cachedUser = null;
    this.cachedRepos = null;
  }

  async getUserProfile() {
    if (this.cachedUser) return this.cachedUser;

    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this.cachedUser = data;
      return data;
    } catch {
      // Return guaranteed fallback snapshot
      return FALLBACK_PROFILE;
    }
  }

  async getJarvisRepo() {
    try {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/JARVIS`, {
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch {
      return FALLBACK_JARVIS_REPO;
    }
  }

  async getAllRepos() {
    if (this.cachedRepos) return this.cachedRepos;
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`, {
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this.cachedRepos = data;
      return data;
    } catch {
      return [FALLBACK_JARVIS_REPO];
    }
  }
}

export const githubService = new GitHubService();
