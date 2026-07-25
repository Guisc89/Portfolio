/* ==========================================================================
   INTERACTIVE LOGIC AND CONFIGURATION: GUILHERME CARDOSO PORTFOLIO
   ========================================================================== */

/**
 * 1. CENTRAL CONFIGURATION VARIABLES
 * Replace the values below with your personal links and information.
 * All links and buttons on the site will be automatically updated!
 */
const CONFIG = {
  // WhatsApp Configuration
  whatsappNumber: '5551981097705', // Ex: '5551999999999' (Código país + DDD + Número, apenas números)
  whatsappMessage: 'Olá, Guilherme! Vi seu portfólio e gostaria de conversar sobre uma oportunidade na área de tecnologia.',
  
  // Professional Links
  linkedinUrl: 'https://www.linkedin.com/in/guilherme-cardoso-02111989', // Ex: 'https://www.linkedin.com/in/guilherme-cardoso-02111989'
  githubUrl: 'https://github.com/Guisc89',     // Ex: 'https://github.com/Guisc89'
  githubUsername: 'Guisc89',                  // Reservado para uma futura integração com a API do GitHub
  githubReposLimit: 6,                        // Reservado para limitar resultados de uma futura integração
  emailAddress: 'oguicardoso@outlook.com',         // Ex: 'oguicardoso@outlook.com'
  resumeUrl: 'assets/curriculo-guilherme.pdf',   // Ex: 'assets/curriculo-guilherme.pdf' ou link do drive
};

/**
 * 2. DYNAMIC PROJECTS LIST
 * Lista manual de fallback caso a API do GitHub não esteja disponível.
 */
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'Calculadora Web',
    description: 'Calculadora funcional desenvolvida com HTML, CSS e JavaScript, aplicando manipulação de DOM, tratamento de eventos, lógica matemática básica e interface responsiva adaptável.',
    solution: 'Demonstra domínio prático de JavaScript Vanilla, controle de eventos no navegador, estrutura semântica e estilização flexível com CSS Grid e Flexbox.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'INSERIR_GITHUB_CALCULADORA', // Deixe vazio ou preencha
    demoUrl: 'INSERIR_DEMO_CALCULADORA'      // Deixe vazio ou preencha
  },
  {
    id: 2,
    title: 'Script para Adobe InDesign',
    description: 'Script automatizado desenvolvido para rodar dentro da suíte Adobe InDesign, automatizando a inserção de datas formatadas e dados dinâmicos em páginas de mídia impressa.',
    solution: 'Resolve o gargalo operacional de edição manual e repetitiva em campanhas semanais de grande escala (Rede Farmácias Associadas), minimizando erros humanos e otimizando o fluxo de produção em mais de 60%.',
    technologies: ['JavaScript', 'ExtendScript', 'Adobe InDesign'],
    githubUrl: 'INSERIR_GITHUB_SCRIPT_INDESIGN',
    demoUrl: '' // Sem demonstração ao vivo por rodar em desktop
  }
];

/**
 * 3. DYNAMIC CERTIFICATIONS & EVENTS LIST
 * Feel free to add more certifications here as you get them!
 */
const CERTIFICATIONS = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Estácio de Sá',
    type: 'edu' // edu or event
  },
  {
    title: 'Gestão Estratégica em Negociação',
    institution: 'ESPM (Escola Superior de Propaganda e Marketing)',
    type: 'edu'
  },
  {
    title: 'User Experience Design (UX)',
    institution: 'ESPM (Escola Superior de Propaganda e Marketing)',
    type: 'edu'
  },
  {
    title: 'Linguagem de Programação Python',
    institution: 'Fundação Bradesco',
    type: 'edu'
  },
  {
    title: 'Banco de Dados SQL - Nível Iniciante',
    institution: 'Matera',
    type: 'edu'
  },
  {
    title: 'Introdução ao Linux',
    institution: 'Universidade Federal do Rio Grande do Sul',
    type: 'edu'
  },
  {
    title: 'Rio2C 2026',
    institution: 'Presença em evento de Inovação e Criatividade',
    type: 'event'
  },
  {
    title: 'Web Summit Rio 2026',
    institution: 'Fórum Global de Tecnologia e Empreendedorismo',
    type: 'event'
  }
];

/* ==========================================================================
   MAIN CONTROLLER - RUNS ON DOM CONTENT LOADED
   ========================================================================== */
const PROJECTS = [...DEFAULT_PROJECTS];

document.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic components
  initConfiguration();
  renderProjects();
  renderCertifications();
  initTheme();
  initMobileMenu();
  initScrollspy();
  initSkillsFilter();
  initTypewriter();
  initUniverseEffect();
  initScrollReveal();
  initCounterAnimation();
  initCardTilt();
  initHeroCardTilt();
  initSmoothNavLinks();
  initParticles();
  
  // Set current year in footer
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

  // Initialize Lucide Icons
  ensureLucideIcons();

/**
 * 4. SETUP CONFIGURATION LINKS IN DOM
 */
function initConfiguration() {
  // Parse WhatsApp URL
  let whatsappUrl = '#';
  const cleanNumber = String(CONFIG.whatsappNumber || '').replace(/\D/g, '');
  if (cleanNumber.length >= 10 && !CONFIG.whatsappNumber.startsWith('INSERIR_')) {
    const encodedText = encodeURIComponent(CONFIG.whatsappMessage || '');
    whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;
  }

  // Parse Social links
  const linkedinUrl = CONFIG.linkedinUrl === 'INSERIR_LINK_LINKEDIN' ? '#' : CONFIG.linkedinUrl;
  const githubUrl = CONFIG.githubUrl === 'INSERIR_LINK_GITHUB' ? '#' : CONFIG.githubUrl;
  const emailUrl = CONFIG.emailAddress === 'INSERIR_EMAIL' ? '#' : `mailto:${CONFIG.emailAddress}`;
  const resumeUrl = CONFIG.resumeUrl === 'INSERIR_LINK_CURRICULO' ? '#' : CONFIG.resumeUrl;

  // Hero section assignments
  setElementLink('heroWhatsappBtn', whatsappUrl);
  setElementLink('heroLinkedinBtn', linkedinUrl);
  setElementLink('heroGithubBtn', githubUrl);
  setElementLink('heroResumeBtn', resumeUrl);

  // Contact section assignments
  setElementLink('contactWhatsappBtn', whatsappUrl);
  setElementLink('contactLinkedinBtn', linkedinUrl);
  setElementLink('contactGithubBtn', githubUrl);
  setElementLink('contactEmailBtn', emailUrl);
  setElementLink('contactResumeBtn', resumeUrl);

  // Email textual text inside the card
  const emailTextEl = document.getElementById('contactEmailTxt');
  if (emailTextEl) {
    emailTextEl.textContent = CONFIG.emailAddress !== 'INSERIR_EMAIL' ? CONFIG.emailAddress : 'seu-email@dominio.com';
  }

  // Handle empty alerts on click
  const socialLinks = [
    { id: 'heroWhatsappBtn', val: CONFIG.whatsappNumber, name: 'WhatsApp' },
    { id: 'contactWhatsappBtn', val: CONFIG.whatsappNumber, name: 'WhatsApp' },
    { id: 'heroLinkedinBtn', val: CONFIG.linkedinUrl, name: 'LinkedIn' },
    { id: 'heroGithubBtn', val: CONFIG.githubUrl, name: 'GitHub' },
    { id: 'heroResumeBtn', val: CONFIG.resumeUrl, name: 'Currículo (PDF)' },
    { id: 'contactLinkedinBtn', val: CONFIG.linkedinUrl, name: 'LinkedIn' },
    { id: 'contactGithubBtn', val: CONFIG.githubUrl, name: 'GitHub' },
    { id: 'contactEmailBtn', val: CONFIG.emailAddress, name: 'E-mail' },
    { id: 'contactResumeBtn', val: CONFIG.resumeUrl, name: 'Currículo (PDF)' }
  ];

  socialLinks.forEach(link => {
    const el = document.getElementById(link.id);
    if (el && (!link.val || link.val.startsWith('INSERIR_'))) {
      el.addEventListener('click', (e) => {
        if (el.getAttribute('href') === '#') {
          e.preventDefault();
          alert(`Aviso: Configure o link de seu ${link.name} no arquivo script.js para ativá-lo.`);
        }
      });
    }
  });
  
  // Re-initialize Lucide Icons to render any new icons
  ensureLucideIcons();
}

/**
 * Ensure all Lucide icons are rendered properly
 */
function ensureLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function setElementLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;

  el.setAttribute('href', url || '#');

  if (el.getAttribute('target') === '_blank') {
    el.setAttribute('rel', 'noopener noreferrer');
  }
}

/**
 * 5. RENDERS DYNAMIC PROJECTS CARDS
 */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = ''; // Clear fallback

  PROJECTS.forEach(project => {
    // Generate GitHub & Demo icons dynamically based on configuration presence
    const githubLink = project.githubUrl && !project.githubUrl.startsWith('INSERIR_') 
      ? `<a href="${project.githubUrl}" class="project-action-btn" target="_blank" rel="noopener noreferrer" aria-label="Código Fonte no GitHub"><i data-lucide="github"></i></a>` 
      : '';
      
    const demoLink = project.demoUrl && !project.demoUrl.startsWith('INSERIR_') 
      ? `<a href="${project.demoUrl}" class="project-action-btn" target="_blank" rel="noopener noreferrer" aria-label="Demonstração Online"><i data-lucide="external-link"></i></a>` 
      : '';

    const technologiesBadges = project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('');

    const card = document.createElement('article');
    const delay = (PROJECTS.indexOf(project) % 4) + 1;
    card.className = `glass-card project-card reveal${delay > 1 ? ' reveal-delay-' + delay : ''}`;
    card.innerHTML = `
      <div class="project-header">
        <div class="project-tag-wrap">
          ${technologiesBadges}
        </div>
        <div class="project-actions">
          ${githubLink}
          ${demoLink}
        </div>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-meta-box">
        <strong>O que resolve / demonstra:</strong>
        <span>${project.solution}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * 6. RENDERS DYNAMIC CERTIFICATIONS & EVENTS
 */
function renderCertifications() {
  const grid = document.getElementById('certificationsGrid');
  if (!grid) return;

  grid.innerHTML = ''; // Clear

  CERTIFICATIONS.forEach(cert => {
    const card = document.createElement('div');
    const delay = (CERTIFICATIONS.indexOf(cert) % 4) + 1;
    card.className = `glass-card cert-card reveal${delay > 1 ? ' reveal-delay-' + delay : ''}`;
    card.setAttribute('data-type', cert.type);
    
    // Choose icon based on type
    const iconName = cert.type === 'edu' ? 'award' : 'calendar-days';
    
    card.innerHTML = `
      <div class="cert-icon">
        <i data-lucide="${iconName}"></i>
      </div>
      <div class="cert-info">
        <h3>${cert.title}</h3>
        <p>${cert.institution}</p>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

/**
 * 7. DARK/LIGHT THEME TOGGLE WITH LOCALSTORAGE
 */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const getStoredTheme = () => {
    try {
      return localStorage.getItem('theme');
    } catch (error) {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // The theme still works even when storage is unavailable.
    }
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro');
    themeToggle.setAttribute('title', theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro');
  };

  const storedTheme = getStoredTheme();
  const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

/**
 * 8. MOBILE MENU DRAWER
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!menuToggle || !navMenu) return;

  const setMenuState = (isOpen) => {
    navMenu.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      ensureLucideIcons();
    }
  };

  menuToggle.setAttribute('aria-controls', 'navMenu');
  setMenuState(false);

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setMenuState(!navMenu.classList.contains('active'));
  });

  document.addEventListener('click', (event) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
      setMenuState(false);
      menuToggle.focus();
    }
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1120 && navMenu.classList.contains('active')) {
      setMenuState(false);
    }
  });
}

/**
 * 9. SCROLLSPY (ACTIVE LINK HIGHLIGHTING & STICKY NAV)
 */
function initScrollspy() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (header) {
    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    });
  }, {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * 10. INTERACTIVE SKILLS FILTER
 */
function initSkillsFilter() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skillBadges = document.querySelectorAll('.skill-badge');

  tabBtns.forEach(btn => {
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(btn.classList.contains('active')));

    btn.addEventListener('click', () => {
      // Toggle active classes on tabs
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-tab');

      // Filter badges
      skillBadges.forEach(badge => {
        const category = badge.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          badge.classList.remove('hidden');
        } else {
          badge.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * 11. TYPEWRITER EFFECT
 */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const text = el.textContent || 'Guilherme Cardoso';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    el.textContent = text;
    el.style.borderRight = 'none';
    return;
  }

  el.textContent = '';
  let index = 0;

  const type = () => {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index += 1;
      window.setTimeout(type, 85);
      return;
    }

    window.setTimeout(() => {
      el.style.borderRight = 'none';
    }, 5000);
  };

  type();
}

/**
 * 12. UNIVERSE PARALLAX BACKGROUND EFFECT
 * Moves glowing orbs and the starfield background in sync with the mouse pointer
 */
function initUniverseEffect() {
  const glowBg = document.querySelector('.glow-bg');
  const starsBg = document.querySelector('.stars-bg');
  const orbs = document.querySelectorAll('.glow-orb');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!glowBg || !canHover || prefersReducedMotion) return;

  let frame = null;
  let pointerX = 0;
  let pointerY = 0;

  const render = () => {
    const normX = (pointerX / window.innerWidth) - 0.5;
    const normY = (pointerY / window.innerHeight) - 0.5;

    if (starsBg) {
      starsBg.style.transform = `translate(${normX * -15}px, ${normY * -15}px)`;
    }

    orbs.forEach((orb, index) => {
      const depth = (index + 1) * 25;
      orb.style.transform = `translate(${normX * depth}px, ${normY * depth}px)`;
    });

    frame = null;
  };

  document.addEventListener('mousemove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (frame === null) frame = requestAnimationFrame(render);
  }, { passive: true });
}

/**
 * 13. SCROLL REVEAL ANIMATION
 * Uses IntersectionObserver to animate elements into view with staggered delays
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(element => element.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => observer.observe(element));
}

/**
 * 14. COUNTER ANIMATION
 * Animates numbers from 0 to their target when scrolled into view
 */
function initCounterAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateCounter = (element) => {
    const originalText = element.textContent.trim();
    const match = originalText.match(/^([^0-9]*)([0-9]+(?:[.,][0-9]+)?)(.*)$/);
    if (!match) return;

    const [, prefix, numericText, suffix] = match;
    const decimalSeparator = numericText.includes(',') ? ',' : '.';
    const decimals = numericText.includes(',') || numericText.includes('.')
      ? numericText.split(/[.,]/)[1].length
      : 0;
    const target = Number(numericText.replace(',', '.'));

    if (!Number.isFinite(target) || prefersReducedMotion) {
      element.textContent = originalText;
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const formatValue = (value) => {
      const formatted = value.toFixed(decimals);
      return decimals && decimalSeparator === ',' ? formatted.replace('.', ',') : formatted;
    };

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${prefix}${formatValue(target * eased)}${suffix}`;

      if (progress < 1) requestAnimationFrame(step);
      else element.textContent = originalText;
    };

    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    statNumbers.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(element => observer.observe(element));
}

/**
 * 15. CARD TILT 3D EFFECT
 * Adds a subtle 3D tilt on mouseover for service/glass cards
 */
function initCardTilt() {
  const cards = document.querySelectorAll('.service-card.glass-card, .project-card.glass-card, .cert-card.glass-card');
  if (!cards.length || !window.matchMedia('(hover: hover)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/**
 * 16. HERO PROFESSIONAL CARD TILT
 * Composes a smooth pointer-driven 3D tilt with the card's CSS float animation.
 */
function initHeroCardTilt() {
  const card = document.querySelector('.hero-visual .tech-card');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!card || !canHover || prefersReducedMotion) return;

  const tilt = {
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    frame: null
  };

  function renderTilt() {
    tilt.currentX += (tilt.targetX - tilt.currentX) * 0.14;
    tilt.currentY += (tilt.targetY - tilt.currentY) * 0.14;

    card.style.setProperty('--hero-tilt-x', `${tilt.currentX.toFixed(2)}deg`);
    card.style.setProperty('--hero-tilt-y', `${tilt.currentY.toFixed(2)}deg`);

    const stillMoving = Math.abs(tilt.targetX - tilt.currentX) > 0.01
      || Math.abs(tilt.targetY - tilt.currentY) > 0.01;

    tilt.frame = stillMoving ? requestAnimationFrame(renderTilt) : null;
  }

  function requestTiltFrame() {
    if (tilt.frame === null) tilt.frame = requestAnimationFrame(renderTilt);
  }

  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    tilt.targetX = normalizedY * -6;
    tilt.targetY = normalizedX * 7;
    requestTiltFrame();
  });

  card.addEventListener('mouseleave', () => {
    tilt.targetX = 0;
    tilt.targetY = 0;
    requestTiltFrame();
  });
}

/**
 * 17. SMOOTH NAV LINK INTERACTIONS
 * Adds animated underline indicator to nav links on hover
 */
function initSmoothNavLinks() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-1px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
    });
  });
}

/**
 * 17. INTERACTIVE PARTICLE NETWORK BACKGROUND
 * Canvas-based particles in the brand's orange/purple duo, reacting to the
 * mouse pointer with a gentle repulsion and drawing faint connecting lines.
 * Skips or scales down on small screens and respects reduced-motion preference.
 */
function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return; // Respect user preference, keep static background only

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width, height;
  let pixelRatio = 1;
  let particles = [];
  let animationId = null;

  // Colors pulled from the brand palette: orange (primary) + purple (secondary)
  const COLORS = ['245, 59, 0', '139, 92, 246', '255, 255, 255'];

  const mouse = { x: null, y: null, radius: 140 };

  function isDesktop() {
    return window.innerWidth > 768 && window.matchMedia('(hover: hover)').matches;
  }

  function particleCount() {
    // Density scales with viewport area, capped for performance
    const area = width * height;
    return Math.min(70, Math.max(18, Math.floor(area / 22000)));
  }

  function resize() {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.max(1, Math.floor(width * pixelRatio));
    canvas.height = Math.max(1, Math.floor(height * pixelRatio));
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  class Particle {
    constructor() { this.reset(); }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = (Math.random() - 0.5) * 0.35;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = Math.random() * 0.35 + 0.45;
      this.interaction = 0;
    }

    update() {
      this.interaction = 0;

      if (mouse.x !== null && isDesktop()) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.interaction = force;
          this.x += Math.cos(angle) * force * 2.2;
          this.y += Math.sin(angle) * force * 2.2;
        }
      }

      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > width) this.speedX *= -1;
      if (this.y < 0 || this.y > height) this.speedY *= -1;
    }

    draw() {
      const visibleAlpha = Math.min(this.alpha + this.interaction * 0.2, 0.95);
      const glowAlpha = Math.min(this.alpha * 0.85 + this.interaction * 0.2, 0.75);

      ctx.fillStyle = `rgba(${this.color}, ${visibleAlpha})`;
      ctx.shadowColor = `rgba(${this.color}, ${glowAlpha})`;
      ctx.shadowBlur = Math.max(4, this.size * 2.8) + this.interaction * 5;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
    }
  }

  function drawConnections() {
    const MAX_DIST = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const opacity = (1 - dist / MAX_DIST) * 0.16;
          ctx.strokeStyle = `rgba(150, 100, 220, ${opacity})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function initParticleArray() {
    particles = [];
    const count = particleCount();
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  function start() {
    resize();
    initParticleArray();
    if (animationId) cancelAnimationFrame(animationId);
    animate();
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(start, 200);
  });

  // Pause the animation when the tab isn't visible to save battery/CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    } else if (!document.hidden && !animationId) {
      animate();
    }
  });

  start();
}

});
