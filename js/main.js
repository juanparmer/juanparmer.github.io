(function () {
  "use strict";

  var TRANSLATIONS = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.services": "Servicios",
      "nav.experience": "Experiencia",
      "nav.education": "Educación",
      "nav.contact": "Contacto",
      "hero.greeting": "Hola, soy",
      "hero.name": "Juan Pablo Arcos Merchan",
      "hero.title": "Consultor y Desarrollador Odoo | Experto en Python e Inteligencia Artificial",
      "hero.tagline": "Más de 8 años implementando, personalizando y migrando proyectos Odoo ERP. Acompaño a empresas en todo el ciclo: desde el análisis hasta el soporte. Disfruto los retos técnicos y resolver problemas de negocio con tecnología.",
      "hero.cta": "Hablemos",
      "hero.ctaLinkedin": "LinkedIn",
      "hero.badges": ["8+ años en Odoo", "Odoo Consultant & Developer", "Python & IA", "Migraciones de datos y versiones"],
      "about.title": "Sobre mí",
      "about.p1": "Ingeniero en Automatización Industrial con 8 años de experiencia en proyectos Odoo ERP, especializado en implementación, personalización, migración de datos entre ERPs y actualización de versiones de Odoo. Combino desarrollo en Python, automatización de procesos con Inteligencia Artificial y gestión de proyectos ágiles para entregar soluciones que optimizan la operación de las empresas.",
      "about.p2": "Disfruto los retos técnicos y me motiva resolver problemas de negocio con tecnología: entiendo el proceso, lo documento y lo materializo en módulos Odoo a la medida. Mi perfil une la visión funcional de un consultor con la solidez técnica de un desarrollador.",
      "about.focus": ["Consultoría funcional y técnica Odoo", "Desarrollo en Python", "Automatización con IA", "Gestión ágil de proyectos"],
      "services.title": "Servicios",
      "services.items": [
        { "icon": "⚙️", "title": "Implementación de Odoo", "desc": "Configuración funcional de módulos y adaptación del ERP a los procesos y la normativa de cada empresa." },
        { "icon": "🔄", "title": "Migración de datos y versiones", "desc": "Migración exitosa de datos entre ERPs y actualización de versiones de Odoo sin pérdida de información." },
        { "icon": "🧩", "title": "Desarrollo de módulos", "desc": "Módulos y funcionalidades personalizadas en Python, alineadas a las mejores prácticas de Odoo." },
        { "icon": "🤖", "title": "Automatización con IA", "desc": "Optimización de procesos de negocio con inteligencia artificial y automatización inteligente." },
        { "icon": "🎓", "title": "Consultoría y capacitación", "desc": "Acompañamiento en análisis de brechas, dirección de proyectos y formación de usuarios finales." }
      ],
      "stack.title": "Stack tecnológico",
      "experience.title": "Experiencia",
      "experience.items": [
        {
          "role": "Consultor Experto Odoo",
          "company": "Madetosoft (Partner Gold Odoo)",
          "period": "2026 – Actualidad",
          "loc": "Barcelona, España",
          "bullets": [
            "Dirección de proyectos Odoo de principio a fin: análisis de brechas, implementación, migración y soporte.",
            "Acompañamiento a empresas de todos los sectores en la transformación de sus procesos con Odoo.",
            "Migración de datos entre ERPs y actualización de versiones de Odoo sin pérdida de información."
          ]
        },
        {
          "role": "Odoo Developer",
          "company": "Dimension3 Systems Pty Ltd",
          "period": "2024",
          "loc": "Brisbane, Australia",
          "bullets": [
            "Responsable de la parte técnica de los proyectos: estimación de tareas, análisis, desarrollo y soporte.",
            "Desarrollo de módulos en Python y modelado de datos en PostgreSQL sobre Odoo.",
            "Despliegues, versionado con Git y administración en Odoo SH."
          ]
        },
        {
          "role": "Director de Software y Automatización",
          "company": "Agofer S.A.S.",
          "period": "Jul 2020 – Jul 2023",
          "loc": "Bogotá, Colombia",
          "bullets": [
            "Lideré la internalización del ERP: el proyecto se formó desde cero y asumimos Odoo en sitio.",
            "Conformé el equipo interno contratando consultores y desarrolladores, y desarrollé módulos personalizados.",
            "Migré el ERP de Odoo 8 a Odoo 14 y mejoré los procesos operativos de una empresa con más de 20 sucursales.",
            "Cumplimiento de plazos, alcance y presupuesto según el cronograma estipulado."
          ]
        },
        {
          "role": "Scrum Master",
          "company": "TODOO S.A.S.",
          "period": "Feb 2020 – Jun 2020",
          "loc": "Bogotá, Colombia",
          "bullets": [
            "Gestión del proceso Scrum y eliminación de impedimentos que afectaban la entrega del producto.",
            "Facilitación de ceremonias y apoyo al equipo para cumplir los objetivos de cada sprint."
          ]
        },
        {
          "role": "Consultor Integral",
          "company": "Avancys S.A.S.",
          "period": "Feb 2018 – Feb 2020",
          "loc": "Bogotá, Colombia",
          "bullets": [
            "Empecé como consultor funcional y pasé al área de desarrollo, convirtiéndome en consultor integral.",
          "Levantamiento de información, migración de datos, configuración, capacitación y soporte.",
            "Conocimiento profundo de la parte funcional y técnica de Odoo en proyectos ERP en la nube y facturación electrónica."
          ]
        }
      ],
      "education.title": "Formación",
      "education.studies": "Educación",
      "education.studiesList": [
        { "title": "Máster en Ingeniería de Software y Sistemas Informáticos", "org": "Universidad de La Rioja, España" },
        { "title": "Especialización en Gestión de Proyectos de Ingeniería", "org": "Universidad Francisco José de Caldas, Colombia" },
        { "title": "Ingeniería en Automatización Industrial", "org": "Universidad del Cauca, Colombia" }
      ],
      "education.certs": "Certificaciones",
      "education.certsList": [
        { "title": "Odoo", "org": "Certificado" },
        { "title": "Scrum Master", "org": "Certificado" },
        { "title": "PSU IA y Data Analytics", "org": "UNIR" }
      ],
      "education.languages": "Idiomas",
      "education.languagesList": [
        { "title": "Español", "org": "Nativo" },
        { "title": "Inglés", "org": "B2" }
      ],
      "contact.title": "Contacto",
      "contact.sub": "¿Tienes un proyecto Odoo en mente o necesitas soporte? Hablemos.",
      "contact.linkedin": "LinkedIn",
      "contact.email": "Enviar email",
      "contact.github": "GitHub",
      "contact.location": "📍 Madrid, España · Disponible para proyectos en remoto y consultoría",
      "footer.rights": "© 2026 Juan Pablo Arcos Merchan.",
      "footer.built": "Hecho con HTML, CSS y JS · GitHub Pages"
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "hero.greeting": "Hi, I'm",
      "hero.name": "Juan Pablo Arcos Merchan",
      "hero.title": "Odoo Consultant & Developer | Python & AI Expert",
      "hero.tagline": "8+ years implementing, customizing, and migrating Odoo ERP projects. I support companies across the full lifecycle: from analysis to support. I enjoy technical challenges and solving business problems with technology.",
      "hero.cta": "Let's talk",
      "hero.ctaLinkedin": "LinkedIn",
      "hero.badges": ["8+ years in Odoo", "Odoo Consultant & Developer", "Python & AI", "Data & version migrations"],
      "about.title": "About me",
      "about.p1": "Industrial Automation Engineer with 8 years of experience on Odoo ERP projects, specialized in implementation, customization, cross-ERP data migration, and Odoo version upgrades. I combine Python development, AI-driven process automation, and agile project management to deliver solutions that streamline business operations.",
      "about.p2": "I enjoy technical challenges and I'm driven by solving business problems with technology: I understand the process, document it, and build tailor-made Odoo modules to match. My profile blends the functional vision of a consultant with the technical depth of a developer.",
      "about.focus": ["Functional & technical Odoo consulting", "Python development", "AI automation", "Agile project management"],
      "services.title": "Services",
      "services.items": [
        { "icon": "⚙️", "title": "Odoo Implementation", "desc": "Functional module configuration and ERP adaptation to each company's processes and regulations." },
        { "icon": "🔄", "title": "Data & Version Migration", "desc": "Successful cross-ERP data migrations and Odoo version upgrades with zero data loss." },
        { "icon": "🧩", "title": "Module Development", "desc": "Custom modules and features in Python, aligned with Odoo best practices." },
        { "icon": "🤖", "title": "AI Automation", "desc": "Business process optimization with artificial intelligence and smart automation." },
        { "icon": "🎓", "title": "Consulting & Training", "desc": "Gap analysis, project management, and end-user training." }
      ],
      "stack.title": "Tech stack",
      "experience.title": "Experience",
      "experience.items": [
        {
          "role": "Expert Odoo Consultant",
          "company": "Madetosoft (Odoo Gold Partner)",
          "period": "2026 – Present",
          "loc": "Barcelona, Spain",
          "bullets": [
            "Odoo project management end to end: gap analysis, implementation, migration, and support.",
            "Supporting companies across all industries in transforming their processes with Odoo.",
            "Cross-ERP data migrations and Odoo version upgrades with zero data loss."
          ]
        },
        {
          "role": "Odoo Developer",
          "company": "Dimension3 Systems Pty Ltd",
          "period": "2024",
          "loc": "Brisbane, Australia",
          "bullets": [
            "In charge of the technical side of projects: task estimation, analysis, development, and support.",
            "Module development in Python and data modeling in PostgreSQL on Odoo.",
            "Deployments, Git versioning, and Odoo SH administration."
          ]
        },
        {
          "role": "Software and Automation Manager",
          "company": "Agofer S.A.S.",
          "period": "Jul 2020 – Jul 2023",
          "loc": "Bogotá, Colombia",
          "bullets": [
            "Led the ERP internalization: the project was built from scratch and we took Odoo on-site.",
            "Built the internal team by hiring consultants and developers, and developed custom modules.",
            "Migrated the ERP from Odoo 8 to Odoo 14 and improved operational processes for a company with 20+ branches.",
            "Met deadlines, scope, and budget according to the stipulated schedule."
          ]
        },
        {
          "role": "Scrum Master",
          "company": "TODOO S.A.S.",
          "period": "Feb 2020 – Jun 2020",
          "loc": "Bogotá, Colombia",
          "bullets": [
            "Managed the Scrum process and removed impediments affecting product delivery.",
            "Facilitated ceremonies and supported the team to meet each sprint's goals."
          ]
        },
        {
          "role": "Integral Consultant",
          "company": "Avancys S.A.S.",
          "period": "Feb 2018 – Feb 2020",
          "loc": "Bogotá, Colombia",
          "bullets": [
            "Started as a functional consultant and moved into development, becoming an integral consultant.",
            "Information gathering, data migration, configuration, training, and support.",
            "Deep knowledge of the functional and technical sides of Odoo on cloud ERP and e-invoicing projects."
          ]
        }
      ],
      "education.title": "Education",
      "education.studies": "Education",
      "education.studiesList": [
        { "title": "Master's in Software Engineering and Computer Systems", "org": "University of La Rioja, Spain" },
        { "title": "Specialization in Engineering Project Management", "org": "Universidad Francisco José de Caldas, Colombia" },
        { "title": "Industrial Automation Engineering", "org": "Universidad del Cauca, Colombia" }
      ],
      "education.certs": "Certifications",
      "education.certsList": [
        { "title": "Odoo", "org": "Certified" },
        { "title": "Scrum Master", "org": "Certified" },
        { "title": "PSU AI & Data Analytics", "org": "UNIR" }
      ],
      "education.languages": "Languages",
      "education.languagesList": [
        { "title": "Spanish", "org": "Native" },
        { "title": "English", "org": "B2" }
      ],
      "contact.title": "Contact",
      "contact.sub": "Do you have an Odoo project in mind or need support? Let's talk.",
      "contact.linkedin": "LinkedIn",
      "contact.email": "Send email",
      "contact.github": "GitHub",
      "contact.location": "📍 Madrid, Spain · Available for remote projects and consulting",
      "footer.rights": "© 2026 Juan Pablo Arcos Merchan.",
      "footer.built": "Built with HTML, CSS & JS · GitHub Pages"
    }
  };

  var SKILLS_HOT = ["Odoo", "Python", "Inteligencia Artificial / AI", "PostgreSQL"];
  var SKILLS_COLD = ["Odoo SH", "SQL", "Docker", "Git", "Machine Learning", "Automatización de procesos", "Scrum", "ERP", "Integraciones", "Consultoría funcional", "Business Analysis"];

  var lang = localStorage.getItem("jpa-lang") || (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
  if (lang !== "es" && lang !== "en") lang = "en";

  var esc = function (s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  };

  var t = function (key) {
    var dict = TRANSLATIONS[lang];
    return dict[key] !== undefined ? dict[key] : key;
  };

  function setText(key) {
    var nodes = document.querySelectorAll("[data-key='" + key + "']");
    nodes.forEach(function (n) { n.textContent = t(key); });
  }

  function applyStatic() {
    Object.keys(TRANSLATIONS[lang]).forEach(function (key) {
      if (typeof TRANSLATIONS[lang][key] === "string") setText(key);
    });
    document.title = lang === "es"
      ? "Juan Pablo Arcos Merchan | Consultor y Desarrollador Odoo"
      : "Juan Pablo Arcos Merchan | Odoo Consultant & Developer";
    document.documentElement.lang = lang;
  }

  function renderBadges() {
    document.getElementById("hero-badges").innerHTML = t("hero.badges").map(function (b) {
      return '<span class="badge">' + esc(b) + '</span>';
    }).join("");
  }

  function renderAbout() {
    document.getElementById("about-text").innerHTML =
      '<p>' + esc(t("about.p1")) + '</p><p>' + esc(t("about.p2")) + '</p>';
    document.getElementById("about-focus").innerHTML = t("about.focus").map(function (f) {
      return '<div class="focus-chip">' + esc(f) + '</div>';
    }).join("");
  }

  function renderServices() {
    document.getElementById("services-grid").innerHTML = t("services.items").map(function (s) {
      return '<div class="card">' +
        '<div class="card-icon">' + s.icon + '</div>' +
        '<h3>' + esc(s.title) + '</h3>' +
        '<p>' + esc(s.desc) + '</p>' +
        '</div>';
    }).join("");
  }

  function renderSkills() {
    var hot = SKILLS_HOT.map(function (s) {
      return '<span class="skill-chip hot">' + esc(s) + '</span>';
    }).join("");
    var cold = SKILLS_COLD.map(function (s) {
      return '<span class="skill-chip">' + esc(s) + '</span>';
    }).join("");
    document.getElementById("skills-cloud").innerHTML = hot + cold;
  }

  function renderExperience() {
    document.getElementById("timeline").innerHTML = t("experience.items").map(function (job) {
      var bullets = job.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join("");
      return '<div class="tl-item">' +
        '<div class="tl-card">' +
        '<div class="tl-head">' +
        '<div><span class="tl-role">' + esc(job.role) + '</span> · <span class="tl-company">' + esc(job.company) + '</span></div>' +
        '<span class="tl-period">' + esc(job.period) + '</span>' +
        '</div>' +
        '<div class="tl-loc">' + esc(job.loc) + '</div>' +
        '<ul class="tl-bullets">' + bullets + '</ul>' +
        '</div>' +
        '</div>';
    }).join("");
  }

  function renderLists() {
    var studies = t("education.studiesList").map(function (i) {
      return '<li><strong>' + esc(i.title) + '</strong><span>' + esc(i.org) + '</span></li>';
    }).join("");
    var certs = t("education.certsList").map(function (i) {
      return '<li><strong>' + esc(i.title) + '</strong><span>' + esc(i.org) + '</span></li>';
    }).join("");
    var langs = t("education.languagesList").map(function (i) {
      return '<li><strong>' + esc(i.title) + '</strong><span>' + esc(i.org) + '</span></li>';
    }).join("");
    document.getElementById("studies-list").innerHTML = studies;
    document.getElementById("certs-list").innerHTML = certs;
    document.getElementById("languages-list").innerHTML = langs;
  }

  function render() {
    applyStatic();
    renderBadges();
    renderAbout();
    renderServices();
    renderSkills();
    renderExperience();
    renderLists();

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
  }

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      localStorage.setItem("jpa-lang", lang);
      render();
      closeMenu();
    });
  });

  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  function closeMenu() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeMenu();
  });

  render();
})();
