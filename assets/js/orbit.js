/**
 * PRUTHVI JADHAV — 3D ORBITAL SCULPTURE
 * Interactive Canvas 2D/3D orbital sphere, rings, particle field & project nodes
 */

(function () {
  'use strict';

  const cv = document.getElementById('orbit-canvas');
  const stage = document.getElementById('orbit-stage');
  if (!cv || !stage) return;

  const ctx = cv.getContext && cv.getContext('2d');
  if (!ctx) {
    stage.classList.add('no-canvas');
    return;
  }

  let W = 0, H = 0, dpr = 1, isVisible = true;
  let targetX = 0, targetY = 0, curX = 0, curY = 0, time = 0;
  let hoveredNode = -1;
  const hitPoints = [];

  const rings = [
    { a: 1.55, b: 0.62, tilt: 0.5, speed: 0.5, color: '168, 85, 247' },
    { a: 1.85, b: 0.80, tilt: -0.7, speed: -0.35, color: '139, 92, 246' },
    { a: 1.25, b: 1.05, tilt: 1.3, speed: 0.28, color: '196, 181, 253' }
  ];

  const RING_SEGMENTS = 75;
  const particles = [];
  const projectNodes = [
    { ring: 0, angle: 0, label: 'Poverty Aid', id: 0 },
    { ring: 1, angle: 2.1, label: 'StadiumPulse', id: 1 },
    { ring: 2, angle: 4.2, label: 'SSSB', id: 2 },
    { ring: 0, angle: 3.14, label: 'NIRANTAR', id: 3 },
    { ring: 1, angle: 5.2, label: 'FraudGraph-AI', id: 4 }
  ];

  // Spawn background star/dust particles
  const particleCount = window.innerWidth < 640 ? 40 : 70;
  for (let i = 0; i < particleCount; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.acos(2 * Math.random() - 1);
    const radius = 1.2 + Math.random() * 1.1;
    particles.push([
      radius * Math.sin(v) * Math.cos(u),
      radius * Math.cos(v),
      radius * Math.sin(v) * Math.sin(u),
      Math.random() * 0.5 + 0.5
    ]);
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = stage.clientWidth;
    H = stage.clientHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function rotate3D(x, y, z, yaw, pitch) {
    const rx = x * Math.cos(yaw) + z * Math.sin(yaw);
    const rz = -x * Math.sin(yaw) + z * Math.cos(yaw);
    const ry = y * Math.cos(pitch) - rz * Math.sin(pitch);
    const fz = y * Math.sin(pitch) + rz * Math.cos(pitch);
    return [rx, ry, fz];
  }

  function project(p) {
    const fov = 5 / (5 + p[2]);
    const scale = Math.min(W, H) * 0.2;
    return [W / 2 + p[0] * scale * fov, H * 0.46 - p[1] * scale * fov, fov];
  }

  function renderFrame() {
    curX += (targetX - curX) * 0.05;
    curY += (targetY - curY) * 0.05;
    ctx.clearRect(0, 0, W, H);

    const yaw = time * 0.12 + curX * 0.5;
    const pitch = -0.25 + curY * 0.3;
    const renderItems = [];

    // 1. Calculate Orbit Rings
    rings.forEach((R) => {
      for (let i = 0; i < RING_SEGMENTS; i++) {
        const a1 = (i / RING_SEGMENTS) * Math.PI * 2 + time * R.speed;
        const a2 = ((i + 1) / RING_SEGMENTS) * Math.PI * 2 + time * R.speed;

        const getPt = (ang) => {
          const x = R.a * Math.cos(ang);
          const y = R.b * Math.sin(ang);
          const y2 = y * Math.cos(R.tilt);
          const z2 = y * Math.sin(R.tilt);
          return rotate3D(x, y2, z2, yaw, pitch);
        };

        const A = getPt(a1);
        const B = getPt(a2);
        renderItems.push({ type: 'ring', A, B, z: (A[2] + B[2]) / 2, color: R.color });
      }
    });

    // 2. Calculate Particles
    particles.forEach((p) => {
      const pt = rotate3D(p[0], p[1] + Math.sin(time + p[0] * 3) * 0.05, p[2], yaw * 1.3, pitch);
      renderItems.push({ type: 'particle', A: pt, z: pt[2], size: p[3] });
    });

    // 3. Calculate Project Nodes
    projectNodes.forEach((node, idx) => {
      const R = rings[node.ring];
      const ang = node.angle + time * R.speed;
      const y = R.b * Math.sin(ang);
      const pt = rotate3D(R.a * Math.cos(ang), y * Math.cos(R.tilt), y * Math.sin(R.tilt), yaw, pitch);
      renderItems.push({ type: 'node', A: pt, z: pt[2], index: idx, node });
    });

    // 4. Add Central Glowing Core
    renderItems.push({ type: 'core', z: 0 });

    // Sort by depth (Z-order) for proper transparency rendering
    renderItems.sort((a, b) => b.z - a.z);

    const baseSize = Math.min(W, H);

    // Draw Ambient Ground Reflection Disc
    const g0 = ctx.createRadialGradient(W / 2, H * 0.82, 0, W / 2, H * 0.82, baseSize * 0.42);
    g0.addColorStop(0, 'rgba(139, 92, 246, 0.28)');
    g0.addColorStop(0.5, 'rgba(30, 20, 70, 0.4)');
    g0.addColorStop(1, 'rgba(7, 7, 16, 0)');

    ctx.save();
    ctx.translate(0, H * 0.82);
    ctx.scale(1, 0.22);
    ctx.translate(0, -H * 0.82);
    ctx.fillStyle = g0;
    ctx.beginPath();
    ctx.arc(W / 2, H * 0.82, baseSize * 0.42, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = 'rgba(196, 181, 253, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(W / 2, H * 0.82, baseSize * 0.3, baseSize * 0.065, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Render sorted elements
    renderItems.forEach((it) => {
      if (it.type === 'ring') {
        const a = project(it.A);
        const b = project(it.B);
        const alpha = Math.max(0.08, Math.min(0.85, 0.5 - it.z * 0.28));
        ctx.strokeStyle = `rgba(${it.color}, ${alpha})`;
        ctx.lineWidth = 1.2 + a[2] * 1.3;
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.stroke();
      } else if (it.type === 'particle') {
        const a = project(it.A);
        ctx.fillStyle = `rgba(216, 200, 255, ${Math.max(0.12, 0.55 - it.z * 0.2) * it.size})`;
        ctx.beginPath();
        ctx.arc(a[0], a[1], 1 + a[2] * 1.5 * it.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (it.type === 'node') {
        const a = project(it.A);
        hitPoints[it.index] = [a[0], a[1]];
        const isHovered = hoveredNode === it.index;
        const radius = (isHovered ? 8 : 5.5) * a[2] + 2;

        // Glow ring around node
        const glow = ctx.createRadialGradient(a[0], a[1], 0, a[0], a[1], radius * 3.2);
        glow.addColorStop(0, 'rgba(245, 243, 255, 0.95)');
        glow.addColorStop(0.35, 'rgba(168, 85, 247, 0.7)');
        glow.addColorStop(1, 'rgba(168, 85, 247, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(a[0], a[1], radius * 3.2, 0, Math.PI * 2);
        ctx.fill();

        // Node center pin
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(a[0], a[1], radius * 0.65, 0, Math.PI * 2);
        ctx.fill();

        // Node Label
        if (isHovered || it.z < 0) {
          ctx.font = '600 12px "Outfit", sans-serif';
          ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(196, 181, 253, 0.85)';
          ctx.textAlign = 'center';
          ctx.fillText(it.node.label, a[0], a[1] - radius * 3 - 6);
        }
      } else if (it.type === 'core') {
        // Glowing Central Core Orb
        const radius = baseSize * 0.17;
        const cx = W / 2;
        const cy = H * 0.46;

        // Outer glow
        const outerGlow = ctx.createRadialGradient(cx, cy, radius * 0.35, cx, cy, radius * 2.8);
        outerGlow.addColorStop(0, 'rgba(139, 92, 246, 0.45)');
        outerGlow.addColorStop(0.6, 'rgba(168, 85, 247, 0.15)');
        outerGlow.addColorStop(1, 'rgba(139, 92, 246, 0)');
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Sphere volume shading
        const sphereGrad = ctx.createRadialGradient(cx - radius * 0.35, cy - radius * 0.4, radius * 0.1, cx, cy, radius);
        sphereGrad.addColorStop(0, '#f1e8ff');
        sphereGrad.addColorStop(0.35, '#a855f7');
        sphereGrad.addColorStop(0.8, '#581c87');
        sphereGrad.addColorStop(1, '#1b0836');
        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }

  function loop() {
    if (isVisible && !document.hidden) {
      time += 0.016;
      renderFrame();
    }
    requestAnimationFrame(loop);
  }

  // Pointer Hit Testing
  function pickNode(e) {
    const rect = cv.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let closestIndex = -1;
    let minDist = 26;

    hitPoints.forEach((pt, i) => {
      if (!pt) return;
      const dist = Math.hypot(pt[0] - x, pt[1] - y);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    });

    return closestIndex;
  }

  // Click on a node in canvas
  cv.addEventListener('click', (e) => {
    const idx = pickNode(e);
    if (idx >= 0 && window.openProjectModal) {
      window.openProjectModal(idx);
    }
  });

  // Track hover state & cursor tilt
  stage.addEventListener('pointermove', (e) => {
    const rect = stage.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    hoveredNode = pickNode(e);
    cv.style.cursor = hoveredNode >= 0 ? 'pointer' : 'default';
  });

  stage.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    hoveredNode = -1;
  });

  // Observe visibility to save GPU when offscreen
  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  });
  observer.observe(stage);

  // Initialize
  resize();
  window.addEventListener('resize', resize);
  loop();

  // Allow bottom buttons to trigger node focus/hover
  window.setOrbitHover = function (i) {
    hoveredNode = i;
  };
})();
