export function createMarquee() {
  const marquee = document.createElement('div');
  marquee.className = 'marquee-section';

  const items = [
    'AGUSTÍN FERRAZZANO',
    'SENIOR FULL STACK DEVELOPER',
    'LOCAL AI ARCHITECTURES',
    'THREE.JS REALTIME 3D',
    'CLEAN ARCHITECTURE',
    'PYTHON 3.10+ ASYNCIO',
    'OFFLINE-FIRST NEURAL SYSTEMS',
    'J.A.R.V.I.S. DESKTOP ASSISTANT',
    'HIGH PERFORMANCE'
  ];

  const content = items
    .map(
      (item) => `
      <span class="marquee-item">
        <span>${item}</span>
        <span class="marquee-separator">★</span>
      </span>
    `
    )
    .join('');

  marquee.innerHTML = `
    <div class="marquee-track">
      ${content}
      ${content}
    </div>
  `;

  return marquee;
}
