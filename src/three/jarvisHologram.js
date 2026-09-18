/**
 * Three.js Hologram Engine for J.A.R.V.I.S. Showcase
 * Inspired by Agustin Ferrazzano's actual desktop assistant HUD.
 */

import * as THREE from 'three';

export class JarvisHologram {
  constructor(canvasContainerId) {
    this.container = document.getElementById(canvasContainerId);
    if (!this.container) return;

    this.currentState = 'reposo';
    this.clock = new THREE.Clock();
    this.mouse = { x: 0, y: 0 };
    this.targetTilt = { x: 0, y: 0 };
    this.currentTilt = { x: 0, y: 0 };
    this.animationFrameId = null;

    this.stateConfigs = {
      reposo: {
        color: new THREE.Color(0x00f0ff),
        coreColor: new THREE.Color(0x008ca8),
        speed: 0.8,
        pulseSpeed: 1.0,
        distortion: 0.04
      },
      escuchando: {
        color: new THREE.Color(0xff3344),
        coreColor: new THREE.Color(0xb32626),
        speed: 1.4,
        pulseSpeed: 3.2,
        distortion: 0.12
      },
      pensando: {
        color: new THREE.Color(0xffb800),
        coreColor: new THREE.Color(0xb87e00),
        speed: 2.8,
        pulseSpeed: 4.5,
        distortion: 0.09
      },
      hablando: {
        color: new THREE.Color(0x00ffff),
        coreColor: new THREE.Color(0x00e5ff),
        speed: 1.6,
        pulseSpeed: 2.6,
        distortion: 0.16
      }
    };

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 360;
    const height = this.container.clientHeight || 360;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 4.2;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // Group
    this.holoGroup = new THREE.Group();
    this.scene.add(this.holoGroup);

    // Build geometry
    this.buildCore();
    this.buildWireframe();
    this.buildRings();
    this.buildParticles();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    this.pointLight = new THREE.PointLight(0x00f0ff, 2.5, 10);
    this.scene.add(this.pointLight);

    // Bindings
    this.onResize = this.onResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    window.addEventListener('resize', this.onResize);
    this.container.addEventListener('mousemove', this.onMouseMove);
    this.container.addEventListener('mouseleave', () => {
      this.targetTilt.x = 0;
      this.targetTilt.y = 0;
    });

    this.animate();
  }

  buildCore() {
    const geom = new THREE.SphereGeometry(0.7, 32, 32);
    this.coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x008ca8,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    this.coreMesh = new THREE.Mesh(geom, this.coreMaterial);
    this.holoGroup.add(this.coreMesh);

    // Inner bright point
    const innerGeom = new THREE.SphereGeometry(0.25, 16, 16);
    this.innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85
    });
    this.innerMesh = new THREE.Mesh(innerGeom, this.innerMaterial);
    this.holoGroup.add(this.innerMesh);
  }

  buildWireframe() {
    const geom = new THREE.IcosahedronGeometry(1.25, 2);
    this.wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    this.wireMesh = new THREE.Mesh(geom, this.wireframeMaterial);
    this.holoGroup.add(this.wireMesh);

    // Store original vertex positions for wave deformation
    this.originalPositions = geom.attributes.position.clone();
  }

  buildRings() {
    this.rings = [];
    const ringRadii = [1.5, 1.75, 1.95];

    ringRadii.forEach((radius, i) => {
      const ringGeom = new THREE.RingGeometry(radius, radius + 0.02, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35 - i * 0.08
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = (Math.PI / 3) * i;
      ringMesh.rotation.y = (Math.PI / 4) * i;
      this.holoGroup.add(ringMesh);
      this.rings.push({ mesh: ringMesh, axis: i });
    });
  }

  buildParticles() {
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.4 + Math.random() * 0.9;

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.04,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, this.particleMaterial);
    this.holoGroup.add(this.particles);
  }

  onMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    this.targetTilt.x = y * 0.35;
    this.targetTilt.y = x * 0.35;
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  setState(stateId) {
    if (!this.stateConfigs[stateId]) return;
    this.currentState = stateId;
    const config = this.stateConfigs[stateId];

    // Smooth color change
    this.wireframeMaterial.color.set(config.color);
    this.coreMaterial.color.set(config.coreColor);
    this.particleMaterial.color.set(config.color);
    this.pointLight.color.set(config.color);

    this.rings.forEach((r) => {
      r.mesh.material.color.set(config.color);
    });
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();
    const config = this.stateConfigs[this.currentState];

    // Smooth tilt interpolation
    this.currentTilt.x += (this.targetTilt.x - this.currentTilt.x) * 0.08;
    this.currentTilt.y += (this.targetTilt.y - this.currentTilt.y) * 0.08;

    this.holoGroup.rotation.x = this.currentTilt.x;
    this.holoGroup.rotation.y = this.currentTilt.y + elapsed * (0.3 * config.speed);

    // Pulse core
    const pulse = 1 + Math.sin(elapsed * config.pulseSpeed * 2) * 0.08;
    this.coreMesh.scale.set(pulse, pulse, pulse);

    // Spin rings
    this.rings.forEach((r, idx) => {
      r.mesh.rotation.z += (idx % 2 === 0 ? 0.01 : -0.012) * config.speed;
    });

    // Swarm particles
    if (this.particles) {
      this.particles.rotation.y -= 0.004 * config.speed;
      this.particles.rotation.x += 0.002 * config.speed;
    }

    // Vertex wave deformation on wireframe
    if (this.wireMesh && this.originalPositions) {
      const positionAttr = this.wireMesh.geometry.attributes.position;
      const orig = this.originalPositions;
      const distortion = config.distortion;

      for (let i = 0; i < positionAttr.count; i++) {
        const ox = orig.getX(i);
        const oy = orig.getY(i);
        const oz = orig.getZ(i);

        const wave = Math.sin(elapsed * config.pulseSpeed * 3 + ox * 3 + oy * 2) * distortion;
        positionAttr.setXYZ(i, ox * (1 + wave), oy * (1 + wave), oz * (1 + wave));
      }
      positionAttr.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onResize);
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.remove();
    }
  }
}
