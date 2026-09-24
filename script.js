/* ==========================================================================
   LOGICA INTERATIVA E CONFIGURACAO: GUILHERME CARDOSO PORTFOLIO
   ========================================================================== */

const CONFIG = {
  whatsappNumber: '5551981097705',
  whatsappMessage: 'Olá, Guilherme! Vi seu portfólio e gostaria de conversar sobre uma oportunidade na área de tecnologia.',
  
  linkedinUrl: 'https://www.linkedin.com/in/guilherme-cardoso-02111989',
  githubUrl: 'https://github.com/Guisc89',
  githubUsername: 'Guisc89',
  githubReposLimit: 6,
  emailAddress: 'oguicardoso@outlook.com',
  resumeUrl: 'assets/curriculo-conceito-guilherme-cardoso.pdf',
};

const PROFESSIONAL_PROJECTS = [
  {
    id: 1,
    prominence: 'primary',
    eyebrow: 'Projeto de portfólio · IA Aplicada',
    icon: 'compass',
    title: 'Bússola Capital — Agente de IA para Análise Financeira',
    roleSummary: 'Arquitetura, integrações, prompts, interface e publicação.',
    resultSummary: 'Dados de mercado transformados em um relatório estruturado e validado.',
    description: [
      'Desenvolvi um agente de inteligência artificial que analisa ações, FIIs e criptomoedas em tempo real e gera relatórios estruturados com pontos fortes, riscos e veredito de investimento.',
      'O sistema consome dados reais do Yahoo Finance, envia para análise por um LLM (Qwen 3.8 via Groq) com prompt de analista sênior, valida a resposta contra contratos Pydantic para defesa contra alucinações, e apresenta tudo em uma interface web profissional com cache inteligente e tratamento robusto de erros.'
    ],
    impact: {
      label: 'Arquitetura',
      before: 'DADOS BRUTOS',
      after: 'RELATÓRIO ESTRUTURADO',
      ariaLabel: 'Transformação de dados brutos em relatório estruturado de investimento'
    },
    indicators: [
      'Deploy público na Streamlit Community Cloud',
      'Integração com 2 APIs externas (Yahoo Finance + Groq)',
      'Defesa contra alucinação de IA via Pydantic',
      'Cache inteligente para otimizar limites de API',
      'Interface com UX de produto profissional'
    ],
    role: 'Arquiteto e desenvolvedor full-stack: defini a arquitetura em camadas, implementei o agente orquestrador, integrei APIs externas, projetei os prompts de IA, construí a interface web com Streamlit e publiquei na nuvem.',
    competencies: [
      'Arquitetura de Software',
      'Princípios SOLID',
      'Integração de APIs',
      'Engenharia de Prompts',
      'IA Aplicada',
      'Validação de Dados',
      'Orientação a Objetos',
      'Deploy em Nuvem'
    ],
    technologies: ['Python', 'Streamlit', 'Groq (LLM)', 'Pydantic', 'yfinance', 'OOP', 'SOLID'],
    githubUrl: 'https://github.com/Guisc89/agente-financeiro',
    demoUrl: 'https://agente-financeiro-io.streamlit.app/',
    media: [
      {
        type: 'embed',
        src: 'https://agente-financeiro-io.streamlit.app/?embed=true',
        title: 'Demonstração interativa do Bússola Capital',
        caption: 'Aplicação publicada — explore a interface ou abra a demonstração em uma nova aba.'
      }
    ]
  },
  {
    id: 2,
    prominence: 'secondary',
    eyebrow: 'Projeto profissional · Automação',
    icon: 'workflow',
    title: 'Sistema de Automação de Encartes e Materiais de Campanha',
    roleSummary: 'Diagnóstico, regras de negócio, automação, testes e validação.',
    resultSummary: 'Produção reduzida de 1 semana para menos de 2 dias.',
    description: [
      'Utilizando Vibe coding, desenvolvi uma solução que automatiza todo o fluxo de criação de preçários e os desdobramentos do encarte em diferentes formatos, incluindo telas, cards e materiais digitais.',
      'Uma operação manual e repetitiva, que exigia 1 semana de trabalho para produzir um único conjunto de materiais, passou a ser concluída em menos de 2 dias, com maior padronização e praticamente sem intervenção manual.'
    ],
    impact: {
      label: 'Tempo de produção',
      before: '1 SEMANA',
      after: 'MENOS DE 2 DIAS',
      ariaLabel: 'Tempo de produção reduzido de 1 semana para menos de 2 dias'
    },
    indicators: [
      'Mais de 99% de redução no tempo de execução',
      'Um único fluxo gerando diversos formatos',
      'Eliminação de tarefas manuais repetitivas',
      'Maior padronização dos materiais'
    ],
    role: 'Identificação do gargalo, mapeamento do processo, definição das regras de negócio, construção da solução, testes e validação do fluxo.',
    competencies: [
      'Automação',
      'Análise de processos',
      'Levantamento de requisitos',
      'Regras de negócio',
      'Lógica de programação',
      'Experiência do usuário',
      'Resolução de problemas reais'
    ],
    technologies: ['JavaScript', 'ExtendScript', 'Adobe InDesign'],
    media: [
      {
        type: 'video',
        src: 'assets/demo-automacao-encartes.mp4',
        title: 'Demonstração do sistema de automação de encartes',
        caption: 'Demonstração visual da solução automatizando a criação dos encartes e materiais de campanha.',
        muted: true,
        autoplay: true,
        loop: true,
        preload: 'auto'
      }
    ]
  },
  {
    id: 3,
    prominence: 'secondary',
    eyebrow: 'Projeto profissional · Inteligência de mídia',
    icon: 'radio-tower',
    title: 'Sistema de Inteligência para Abrangência de Rádios',
    roleSummary: 'Levantamento, modelagem de dados, definição funcional, construção e testes.',
    resultSummary: 'Cobertura de aproximadamente 58 rádios centralizada para apoiar decisões de mídia.',
    description: [
      'Transformei uma planilha de controle em um sistema web para centralizar, atualizar e analisar informações sobre a cobertura territorial das rádios contratadas pela Farmácias Associadas.',
      'A solução ajuda a identificar municípios alcançados, possíveis sobreposições entre emissoras e oportunidades de otimização. Antes, as contratações podiam ser definidas por município sem uma visão completa da abrangência territorial, inclusive com diferentes rádios cobrindo as mesmas regiões.'
    ],
    indicators: [
      'Aproximadamente 58 rádios analisadas',
      'Cerca de 600 associados impactados',
      'Dados centralizados em um sistema web',
      'Decisões de mídia orientadas por cobertura territorial'
    ],
    role: 'Levantamento do problema, organização e estruturação dos dados, definição das funcionalidades, construção do sistema no Replit com Vibe Coding, testes e evolução da solução.',
    competencies: [
      'Análise de negócios',
      'Levantamento de requisitos',
      'Mapeamento de processos',
      'Modelagem de dados',
      'Desenvolvimento de sistemas',
      'Experiência do usuário',
      'Decisões baseadas em dados'
    ],
    technologies: ['Replit', 'Modelagem de dados'],
    media: [
      {
        type: 'protected',
        title: 'Visualização sob solicitação',
        caption: 'Os dados de cobertura são corporativos. O fluxo pode ser demonstrado com informações anonimizadas.'
      }
    ]
  }
];

// Array vazio — seção de projetos acadêmicos removida
const ACADEMIC_PROJECTS = [];

const CERTIFICATIONS = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Estácio de Sá',
    type: 'edu'
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

document.addEventListener('DOMContentLoaded', () => {
  initConfiguration();
  renderProjects();
  initProjectMediaGalleries();
  initProjectVideos();
  renderCertifications();
  initTheme();
  initMobileMenu();
  initScrollspy();
  initServicesAccordion();
  initSkillsFilter();
  initCapabilitiesBoard();
  initExperienceAccordion();
  initTypewriter();
  initUniverseEffect();
  initScrollReveal();
  initCounterAnimation();
  initCardTilt();
  initHeroCardTilt();
  initSmoothNavLinks();
  initBackToTop();
  initParticles();
  
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

  ensureLucideIcons();
});

function initConfiguration() {
  let whatsappUrl = '#';
  const cleanNumber = String(CONFIG.whatsappNumber || '').replace(/\D/g, '');
  if (cleanNumber.length >= 10 && !CONFIG.whatsappNumber.startsWith('INSERIR_')) {
    const encodedText = encodeURIComponent(CONFIG.whatsappMessage || '');
    whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;
  }

  const linkedinUrl = CONFIG.linkedinUrl === 'INSERIR_LINK_LINKEDIN' ? '#' : CONFIG.linkedinUrl;
  const githubUrl = CONFIG.githubUrl === 'INSERIR_LINK_GITHUB' ? '#' : CONFIG.githubUrl;
  const emailUrl = CONFIG.emailAddress === 'INSERIR_EMAIL' ? '#' : `mailto:${CONFIG.emailAddress}`;
  const resumeUrl = CONFIG.resumeUrl === 'INSERIR_LINK_CURRICULO' ? '#' : CONFIG.resumeUrl;

  setElementLink('heroWhatsappBtn', whatsappUrl);
  setElementLink('heroLinkedinBtn', linkedinUrl);
  setElementLink('heroGithubBtn', githubUrl);
  setElementLink('heroResumeBtn', resumeUrl);

  setElementLink('contactWhatsappBtn', whatsappUrl);
  setElementLink('contactLinkedinBtn', linkedinUrl);
  setElementLink('contactGithubBtn', githubUrl);
  setElementLink('contactEmailBtn', emailUrl);
  setElementLink('contactResumeBtn', resumeUrl);

  const emailTextEl = document.getElementById('contactEmailTxt');
  if (emailTextEl) {
    emailTextEl.textContent = CONFIG.emailAddress !== 'INSERIR_EMAIL' ? CONFIG.emailAddress : 'seu-email@dominio.com';
  }

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
  
  ensureLucideIcons();
}

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

function renderProjects() {
  const professionalGrid = document.getElementById('professionalProjects');
  const academicGrid = document.getElementById('academicProjectsGrid');

  if (professionalGrid) {
    professionalGrid.innerHTML = '';
    PROFESSIONAL_PROJECTS.forEach((project, index) => {
      professionalGrid.appendChild(createProfessionalProjectCard(project, index));
    });
  }

  if (academicGrid) {
    academicGrid.innerHTML = '';
    ACADEMIC_PROJECTS.forEach((project, index) => {
      academicGrid.appendChild(createAcademicProjectCard(project, index));
    });
  }
}

function renderProjectTags(technologies = []) {
  if (!technologies.length) return '';

  return `
    <div class="project-tag-wrap" aria-label="Tecnologias utilizadas">
      ${technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
    </div>
  `;
}

function renderProjectActions(project) {
  const githubLink = project.githubUrl && !project.githubUrl.startsWith('INSERIR_')
    ? `<a href="${project.githubUrl}" class="project-action-btn" target="_blank" rel="noopener noreferrer"><i data-lucide="github" aria-hidden="true"></i><span>Ver código</span></a>`
    : '';

  const demoLink = project.demoUrl && !project.demoUrl.startsWith('INSERIR_')
    ? `<a href="${project.demoUrl}" class="project-action-btn project-action-btn--primary" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link" aria-hidden="true"></i><span>Abrir demonstração</span></a>`
    : '';

  const actions = `${demoLink}${githubLink}`;

  return `<div class="project-actions">
    ${actions || '<a href="#contact" class="project-action-btn"><i data-lucide="messages-square" aria-hidden="true"></i><span>Solicitar demonstração</span></a>'}
  </div>`;
}

function renderCompactProjectAction(project) {
  const demoUrl = project.demoUrl && !project.demoUrl.startsWith('INSERIR_') ? project.demoUrl : '';
  const githubUrl = project.githubUrl && !project.githubUrl.startsWith('INSERIR_') ? project.githubUrl : '';
  const href = demoUrl || githubUrl || '#contact';
  const externalAttributes = href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';

  return `<div class="project-actions">
    <a href="${href}" class="project-action-btn project-action-btn--compact"${externalAttributes}>
      <span>Ver projeto</span>
      <i data-lucide="arrow-right" aria-hidden="true"></i>
    </a>
  </div>`;
}

function renderProjectMedia(project) {
  const mediaItems = Array.isArray(project.media) ? project.media : [];
  if (!mediaItems.length) return '';

  const items = mediaItems.map((media, mediaIndex) => {
    const isActive = mediaIndex === 0;
    let content = '';

    if (media.type === 'image') {
      content = `<img src="${media.src}" alt="${media.alt || ''}" loading="lazy">`;
    } else if (media.type === 'video') {
      content = `<video controls playsinline${media.muted ? ' muted' : ''}${media.autoplay ? ' autoplay' : ''}${media.loop ? ' loop' : ''} preload="${media.preload || 'metadata'}"${media.poster ? ` poster="${media.poster}"` : ''} aria-label="${media.title || `Vídeo do projeto ${project.title}`}">
        <source src="${media.src}" type="video/mp4">
        Seu navegador não oferece suporte a vídeo HTML5.
      </video>`;
    } else if (media.type === 'embed') {
      content = `<iframe src="${media.src}" title="${media.title || `Demonstração do projeto ${project.title}`}" loading="lazy" allow="fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    } else {
      content = `<div class="project-media-protected">
        <i data-lucide="shield-check" aria-hidden="true"></i>
        <span>Projeto corporativo</span>
        <strong>${media.title || 'Visualização protegida'}</strong>
        <p>${media.caption || 'A demonstração pode ser apresentada com dados anonimizados.'}</p>
        <a href="#contact">Conversar sobre a solução <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
      </div>`;
    }

    return `<figure class="project-media-item${isActive ? ' is-active' : ''}" data-media-index="${mediaIndex}"${isActive ? '' : ' hidden'}>
      <div class="project-media-viewport">${content}</div>
      ${media.type !== 'protected' && media.caption ? `<figcaption>${media.caption}</figcaption>` : ''}
    </figure>`;
  }).join('');

  const controls = mediaItems.length > 1
    ? `<div class="project-media-controls" aria-label="Selecionar mídia do projeto">
        ${mediaItems.map((media, mediaIndex) => `<button type="button" data-media-target="${mediaIndex}" class="${mediaIndex === 0 ? 'is-active' : ''}" aria-label="Mostrar mídia ${mediaIndex + 1}" aria-pressed="${mediaIndex === 0}">${String(mediaIndex + 1).padStart(2, '0')}</button>`).join('')}
      </div>`
    : '';

  return `<div class="project-media-shell" data-project-media>${items}${controls}</div>`;
}

function createProfessionalProjectCard(project, index) {
  const article = document.createElement('article');
  const titleId = `professional-project-${project.id}-title`;
  const delayClass = index > 0 ? ` reveal-delay-${Math.min(index + 1, 4)}` : '';
  const resultIcon = project.id === 2 ? 'clock-3' : 'chart-no-axes-column-increasing';
  const result = project.impact
    ? `
      <div class="project-result-strip" aria-label="${project.impact.ariaLabel}">
        <i data-lucide="${resultIcon}" aria-hidden="true"></i>
        <div>
          <span>${project.impact.label}</span>
          <p><s>${project.impact.before}</s><i data-lucide="arrow-right" aria-hidden="true"></i><strong>${project.impact.after}</strong></p>
        </div>
      </div>
    `
    : `<div class="project-result-strip"><i data-lucide="${resultIcon}" aria-hidden="true"></i><div><span>Resultado</span><strong>${project.resultSummary}</strong></div></div>`;

  article.className = `glass-card project-case project-case--${project.prominence} reveal${delayClass}`;
  article.setAttribute('aria-labelledby', titleId);
  article.innerHTML = `
    <div class="project-case-media">
      ${renderProjectMedia(project)}
    </div>

    <div class="project-case-body">
      <div class="project-case-heading">
        <span class="project-case-eyebrow">
          <i data-lucide="${project.icon}" aria-hidden="true"></i>
          ${project.eyebrow}
        </span>
        <h3 class="project-case-title" id="${titleId}">${project.title}</h3>
        <p class="project-card-intro">${project.description[0]}</p>
      </div>

      <div class="project-case-summary">
        ${result}
        ${project.prominence === 'primary' ? renderProjectTags(project.technologies.slice(0, 3)) : ''}
        ${renderCompactProjectAction(project)}
      </div>
    </div>
  `;

  return article;
}

function createAcademicProjectCard(project, index) {
  const article = document.createElement('article');
  const delay = (index % 3) + 1;
  const description = project.description ? `<p class="project-desc">${project.description}</p>` : '';
  const solution = project.solution
    ? `
      <details class="academic-project-disclosure">
        <summary>Ver o que demonstra</summary>
        <div class="project-meta-box">
          <span>${project.solution}</span>
        </div>
      </details>
    `
    : '';

  article.className = `glass-card project-card academic-project-card reveal${delay > 1 ? ` reveal-delay-${delay}` : ''}`;
  article.innerHTML = `
    <header class="project-header">
      <span class="academic-project-label">
        <i data-lucide="code-2" aria-hidden="true"></i>
        Projeto de estudo
      </span>
      ${renderProjectActions(project)}
    </header>
    <h4 class="project-title">${project.title}</h4>
    ${description}
    ${renderProjectTags(project.technologies)}
    ${solution}
  `;

  return article;
}

function renderCertifications() {
  const track = document.getElementById('certificationsGrid');
  if (!track) return;

  track.innerHTML = '';

  const createSequence = (isDuplicate = false) => {
    const sequence = document.createElement('div');
    sequence.className = 'certs-sequence';

    if (isDuplicate) sequence.setAttribute('aria-hidden', 'true');

    CERTIFICATIONS.forEach(cert => {
      const card = document.createElement('article');
      card.className = 'cert-card';
      card.setAttribute('data-type', cert.type);

      const iconName = cert.type === 'edu' ? 'award' : 'calendar-days';

      card.innerHTML = `
        <div class="cert-icon" aria-hidden="true">
          <i data-lucide="${iconName}"></i>
        </div>
        <div class="cert-info">
          <h3>${cert.title}</h3>
          <p>${cert.institution}</p>
        </div>
      `;

      sequence.appendChild(card);
    });

    return sequence;
  };

  track.append(createSequence(), createSequence(true));
}

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

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!menuToggle || !navMenu) return;

  const setMenuState = (isOpen) => {
    navMenu.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      ensureLucideIcons();
    }

    if (isOpen && window.matchMedia('(max-width: 768px)').matches) {
      window.requestAnimationFrame(() => navMenu.querySelector('a')?.focus());
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
      return;
    }

    if (event.key === 'Tab' && navMenu.classList.contains('active')) {
      const focusableItems = [menuToggle, ...navMenu.querySelectorAll('a')];
      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && navMenu.classList.contains('active')) {
      setMenuState(false);
    }
  });
}

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

function initServicesAccordion() {
  const serviceItems = Array.from(document.querySelectorAll('.services-section .service-item'));
  if (!serviceItems.length) return;

  serviceItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;

      serviceItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.open = false;
      });
    });
  });
}

function initSkillsFilter() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skillsGrid = document.getElementById('skillsGrid');
  const originalBadges = Array.from(document.querySelectorAll('.skill-badge'));

  if (!skillsGrid || !originalBadges.length) return;

  for (let copyIndex = 0; copyIndex < 2; copyIndex += 1) {
    originalBadges.forEach(badge => {
      const clone = badge.cloneNode(true);
      clone.classList.add('skill-badge-clone');
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('a, button, input, select, textarea').forEach(control => {
        control.setAttribute('tabindex', '-1');
      });
      skillsGrid.appendChild(clone);
    });
  }

  const skillBadges = skillsGrid.querySelectorAll('.skill-badge');

  tabBtns.forEach(btn => {
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(btn.classList.contains('active')));

    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-tab');

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

function initCapabilitiesBoard() {
  const filterButtons = Array.from(document.querySelectorAll('[data-capability-filter]'));
  const categories = Array.from(document.querySelectorAll('[data-capability-category]'));

  if (!filterButtons.length || !categories.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.capabilityFilter;

      filterButtons.forEach(item => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      categories.forEach(category => {
        const shouldShow = selectedCategory === 'all'
          || category.dataset.capabilityCategory === selectedCategory;

        category.hidden = !shouldShow;
      });
    });
  });
}

function initExperienceAccordion() {
  const cards = Array.from(document.querySelectorAll('.experience-section .job-card'));

  if (!cards.length) return;

  function setCardState(card, isOpen) {
    const toggle = card.querySelector('.job-toggle');
    const details = card.querySelector('.job-details');
    const title = card.querySelector('.job-title')?.textContent.trim() || 'experiência';

    card.classList.toggle('is-open', isOpen);
    toggle?.setAttribute('aria-expanded', String(isOpen));
    toggle?.setAttribute('aria-label', `${isOpen ? 'Recolher' : 'Abrir'} detalhes de ${title}`);
    toggle?.setAttribute('title', `${isOpen ? 'Recolher' : 'Abrir'} detalhes`);
    details?.setAttribute('aria-hidden', String(!isOpen));
  }

  cards.forEach((card, index) => {
    const title = card.querySelector('.job-title');
    const company = card.querySelector('.job-company');

    if (!title || !company) return;

    const header = document.createElement('div');
    const heading = document.createElement('div');
    const toggle = document.createElement('button');
    const details = document.createElement('div');
    const detailsInner = document.createElement('div');
    const detailsId = `job-details-${index + 1}`;

    header.className = 'job-card-header';
    heading.className = 'job-card-heading';
    toggle.className = 'job-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', detailsId);
    toggle.innerHTML = '<i data-lucide="chevron-down"></i>';
    details.className = 'job-details';
    details.id = detailsId;
    detailsInner.className = 'job-details-inner';

    card.insertBefore(header, title);
    heading.append(title, company);
    header.append(heading, toggle);

    while (header.nextSibling) {
      detailsInner.appendChild(header.nextSibling);
    }

    details.appendChild(detailsInner);
    card.appendChild(details);
    const isMobileLayout = window.matchMedia('(max-width: 768px)').matches;
    setCardState(card, !isMobileLayout && index === 0);

    toggle.addEventListener('click', () => {
      const shouldOpen = !card.classList.contains('is-open');

      if (shouldOpen) {
        cards.forEach(otherCard => setCardState(otherCard, false));
      }

      setCardState(card, shouldOpen);
    });
  });
}

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

function initCardTilt() {
  const cards = document.querySelectorAll('.project-card.glass-card, .cert-card.glass-card');
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

function initHeroCardTilt() {
  const card = document.querySelector('.hero-visual .tech-card');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!card) return;

  const isMobileLayout = window.matchMedia('(max-width: 768px)').matches;

  if (isMobileLayout && !canHover) {
    card.setAttribute('aria-label', 'Card profissional — toque para alternar entre resumo e foto');
    card.setAttribute('aria-pressed', 'false');

    const toggleCardFace = () => {
      const isFlipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(isFlipped));
    };

    card.addEventListener('click', toggleCardFace);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCardFace();
      }
    });
    return;
  }

  if (!canHover || prefersReducedMotion) return;

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

function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width, height;
  let pixelRatio = 1;
  let particles = [];
  let animationId = null;

  const COLORS = ['245, 59, 0', '139, 92, 246', '255, 255, 255'];

  const mouse = { x: null, y: null, radius: 140 };

  function isDesktop() {
    return window.innerWidth > 768 && window.matchMedia('(hover: hover)').matches;
  }

  function particleCount() {
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

function initProjectMediaGalleries() {
  document.querySelectorAll('[data-project-media]').forEach(gallery => {
    const buttons = Array.from(gallery.querySelectorAll('[data-media-target]'));
    const items = Array.from(gallery.querySelectorAll('[data-media-index]'));
    if (buttons.length < 2 || items.length < 2) return;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetIndex = button.getAttribute('data-media-target');
        buttons.forEach(item => {
          const selected = item === button;
          item.classList.toggle('is-active', selected);
          item.setAttribute('aria-pressed', String(selected));
        });
        items.forEach(item => {
          const selected = item.getAttribute('data-media-index') === targetIndex;
          item.classList.toggle('is-active', selected);
          item.hidden = !selected;
        });
      });
    });
  });
}

function initProjectVideos() {
  const videos = Array.from(document.querySelectorAll('.project-media-viewport video'));
  if (!videos.length) return;

  videos.forEach(video => {
    if (video.hasAttribute('muted')) {
      video.muted = true;
      video.defaultMuted = true;
    }
  });

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, {
    rootMargin: '200px 0px',
    threshold: 0.15
  });

  videos.forEach(video => observer.observe(video));
}

function initBackToTop() {
  const button = document.getElementById('backToTopBtn');
  if (!button) return;

  const updateVisibility = () => {
    const isVisible = window.scrollY > 500;
    button.classList.toggle('is-visible', isVisible);
    button.setAttribute('aria-hidden', String(!isVisible));
    button.tabIndex = isVisible ? 0 : -1;
  };

  button.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();
}
