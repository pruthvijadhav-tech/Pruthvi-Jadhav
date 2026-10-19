/**
 * PRUTHVI JADHAV — MASTER INTERACTIVE LOGIC
 * Navigation, Modals, Certificate Viewer, Contact Validation & Micro-interactions
 */

(function () {
  'use strict';

  // Helper shortcut
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

  // 1. Mouse Spotlight Tracker
  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
    document.documentElement.style.setProperty('--my', `${e.clientY}px`);
  });

  // 2. Scroll Progress Bar
  const progressBar = $('#progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  // 3. Dynamic Footer Year
  const yrEl = $('#current-year');
  if (yrEl) {
    yrEl.textContent = new Date().getFullYear();
  }

  // 4. Mobile Navigation Drawer & Backdrop
  const menuBtn = $('#mobile-menu-btn');
  const navMenu = $('#nav-menu');
  const navBackdrop = $('#nav-backdrop');

  function closeMobileMenu() {
    if (!navMenu || !navMenu.classList.contains('open')) return;
    navMenu.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('open');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.innerHTML = '☰';
    }
    document.body.classList.remove('menu-open');
  }

  function openMobileMenu() {
    if (!navMenu) return;
    navMenu.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('open');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.innerHTML = '✕';
    }
    document.body.classList.add('menu-open');
  }

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Auto-close when clicking any link inside navMenu
    navMenu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-nav') && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // 5. Toast Notification System
  function showToast(message, duration = 3000) {
    let container = $('#toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px; flex-shrink:0;"><polyline points="20 6 9 17 4 12"></polyline></svg><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
  window.showToast = showToast;

  // 6. Copy to Clipboard Utility
  $$('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        showToast(`Copied to clipboard: ${text}`);
      } catch (err) {
        showToast(`Email: ${text}`);
      }
    });
  });

  // 7. Dialog Management (Escape key, Click outside, Focus Trap)
  let activeModal = null;
  let lastActiveElement = null;

  function openModal(modalEl, triggerEl) {
    if (!modalEl) return;
    lastActiveElement = triggerEl || document.activeElement;
    activeModal = modalEl;
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';

    const focusable = modalEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) {
      focusable[0].focus();
    }
  }

  function closeModal() {
    if (!activeModal) return;
    activeModal.classList.remove('open');
    document.body.style.overflow = '';
    activeModal = null;
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  window.closeModal = closeModal;

  document.addEventListener('keydown', (e) => {
    if (!activeModal) return;
    if (e.key === 'Escape') {
      closeModal();
    }
    // Trap focus inside modal
    if (e.key === 'Tab') {
      const focusable = [...activeModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Close when clicking modal backdrop or close button
  document.addEventListener('click', (e) => {
    if (e.target.matches('.modal-overlay') || e.target.closest('[data-modal-close]')) {
      closeModal();
    }
  });

  // 8. Project Details Modal
  function openProjectModal(projectId, triggerBtn) {
    const data = window.PORTFOLIO_DATA;
    if (!data || !data.projects) return;

    let project = null;
    if (typeof projectId === 'number') {
      project = data.projects[projectId];
    } else {
      project = data.projects.find((p) => p.id === projectId || p.short === projectId || p.title === projectId);
    }

    if (!project) return;

    const modal = $('#project-modal');
    const body = $('#project-modal-body');
    if (!modal || !body) return;

    const techBadges = project.tech.map(([name, role]) => `<span class="tech-chip">${name} <small style="color:var(--accent);">· ${role}</small></span>`).join('');
    const featuresList = project.features.map((f) => `<li>${f}</li>`).join('');
    const actionLinks = project.links.length
      ? project.links.map(([label, url]) => `<a class="btn btn-primary btn-sm" href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('')
      : '<span style="font-size:0.85rem; color:var(--text-muted); font-style:italic;">Repository / demo link available upon request.</span>';

    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="project-status ${project.live ? 'live' : ''}">${project.live ? '● ' : ''}${project.status}</span>
      </div>
      <h2 style="font-size:1.8rem; margin-bottom:8px;">${project.title}</h2>
      <p style="font-size:1.02rem; color:var(--text-light); margin-bottom:20px; line-height:1.6;">${project.blurb}</p>

      <h4>Problem Context</h4>
      <p>${project.problem}</p>

      <h4>Solution & Architecture</h4>
      <p>${project.solution}</p>

      <h4>Key Features</h4>
      <ul>${featuresList}</ul>

      <h4>Engineering Contribution & Role</h4>
      <p>${project.role}</p>

      <h4>Technologies & Frameworks</h4>
      <div class="tech-chips" style="margin-top:6px;">${techBadges}</div>

      ${project.links.length ? `<h4>Project Links & Repositories</h4><div class="project-actions" style="margin-top:8px;">${actionLinks}</div>` : ''}
    `;

    openModal(modal, triggerBtn);
  }
  window.openProjectModal = openProjectModal;

  // Delegate project click triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-project]');
    if (trigger) {
      e.preventDefault();
      const pid = trigger.dataset.openProject;
      openProjectModal(pid, trigger);
    }
  });

  // 9. Certificate Image Viewer Modal
  let currentCertIndex = 0;
  let currentCertImgIndex = 0;

  function showCertificate(certIndex, imgIndex = 0, triggerBtn = null) {
    const data = window.PORTFOLIO_DATA;
    if (!data || !data.certificates) return;

    const certs = data.certificates;
    currentCertIndex = (certIndex + certs.length) % certs.length;
    const cert = certs[currentCertIndex];
    currentCertImgIndex = Math.max(0, Math.min(imgIndex, cert.images.length - 1));

    const modal = $('#cert-modal');
    const container = $('#cert-modal-body');
    if (!modal || !container) return;

    const currentImg = cert.images[currentCertImgIndex];
    const totalImgs = cert.images.length;

    let subNav = '';
    if (totalImgs > 1) {
      subNav = `
        <div style="display:flex; gap:8px; justify-content:center; margin-bottom:12px;">
          ${cert.images.map((_, i) => `
            <button class="btn btn-sm ${i === currentCertImgIndex ? 'btn-primary' : 'btn-glass'}" onclick="window.switchCertImg(${i})" style="padding:4px 10px; font-size:0.75rem;">
              Sheet ${i + 1}
            </button>
          `).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="cert-viewer-controls">
        <button class="cert-ctrl-btn" id="cert-prev-btn" aria-label="Previous Certificate">❮</button>
        <div class="cert-viewer-caption" style="text-align:center;">
          <span style="display:block; font-size:1rem; font-weight:700; color:#fff;">${cert.title}</span>
          <span style="font-size:0.84rem; color:var(--accent);">${cert.issuer} · ${cert.date} (${currentCertIndex + 1} of ${certs.length})</span>
        </div>
        <button class="cert-ctrl-btn" id="cert-next-btn" aria-label="Next Certificate">❯</button>
      </div>
      ${subNav}
      <div style="text-align:center; position:relative; min-height:200px;">
        <img class="cert-full-img" src="${currentImg}" alt="${cert.title} Credential Preview" loading="lazy">
      </div>
      <div style="margin-top:14px; text-align:center;">
        <p style="font-size:0.9rem; color:var(--text-muted); max-width:640px; margin:0 auto 12px;">${cert.notes || ''}</p>
        ${cert.verify ? `<a class="btn btn-primary btn-sm" href="${cert.verify}" target="_blank" rel="noopener">Verify Online Credential ↗</a>` : ''}
      </div>
    `;

    // Hook prev / next buttons
    $('#cert-prev-btn').onclick = () => showCertificate(currentCertIndex - 1, 0);
    $('#cert-next-btn').onclick = () => showCertificate(currentCertIndex + 1, 0);

    openModal(modal, triggerBtn);
  }
  window.showCertificate = showCertificate;
  window.switchCertImg = (idx) => showCertificate(currentCertIndex, idx);

  // Arrow key navigation when cert modal is open
  document.addEventListener('keydown', (e) => {
    const certModal = $('#cert-modal');
    if (certModal && certModal.classList.contains('open')) {
      if (e.key === 'ArrowLeft') showCertificate(currentCertIndex - 1, 0);
      if (e.key === 'ArrowRight') showCertificate(currentCertIndex + 1, 0);
    }
  });

  // Delegate cert triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-cert-index]');
    if (trigger) {
      e.preventDefault();
      const idx = parseInt(trigger.dataset.certIndex, 10);
      showCertificate(idx, 0, trigger);
    }
  });

  // 10. Contact Form Interactive Handler
  const contactForm = $('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = $('#contact-name')?.value.trim();
      const email = $('#contact-email')?.value.trim();
      const subject = $('#contact-subject')?.value.trim();
      const message = $('#contact-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in your Name, Email and Message.');
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Message Prepared!</span>';
        showToast('Opening your email client to send your message directly to Pruthvi...');

        // Trigger native mailto
        const mailtoUrl = `mailto:jadhavpruthvi20069@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Hi Pruthvi,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;
        window.location.href = mailtoUrl;

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          contactForm.reset();
        }, 3000);
      }, 700);
    });
  }

  // 11. Live Local Time Indicator for Pune (IST: UTC+5:30)
  const puneTimeEl = $('#pune-local-time');
  if (puneTimeEl) {
    function updatePuneTime() {
      const now = new Date();
      // Format in IST
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      puneTimeEl.textContent = new Intl.DateTimeFormat('en-IN', options).format(now) + ' IST';
    }
    updatePuneTime();
    setInterval(updatePuneTime, 1000);
  }

  // 12. Active Nav Link Auto-Selection
  const currentPath = window.location.pathname.toLowerCase();
  $$('.nav-link').forEach((link) => {
    const href = link.getAttribute('href')?.toLowerCase();
    if (!href) return;
    if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
    }
  });

})();
