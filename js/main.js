(function () {
  "use strict";

  var TRANSLATIONS = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.services": "Liderazgo",
      "nav.experience": "Experiencia",
      "nav.education": "Educación",
      "nav.contact": "Contacto",
      "hero.greeting": "Hola, soy",
      "hero.name": "Juan Pablo Arcos Merchán",
      "hero.title": "Director de IT & Transformación Digital | ERP Odoo · Python · IA",
      "hero.tagline": "Directivo de tecnología con 8+ años transformando empresas con ERP Odoo. Lidero equipos, presupuesto y estrategia TI, y combino visión de negocio con solidez técnica (Python, IA) para convertir la tecnología en resultados.",
      "hero.cta": "Hablemos",
      "hero.ctaLinkedin": "LinkedIn",
      "hero.badges": ["Director de IT", "Transformación Digital", "ERP Odoo (v7–v20)", "Python & IA"],
      "about.title": "Sobre mí",
      "about.p1": "Ingeniero y directivo de tecnología con 8+ años liderando la transformación digital de empresas con ERP Odoo. Como Director de Software y Automatización en Agofer, lideré la internalización del ERP y la migración de Odoo 8 a Odoo 14 para +200 usuarios y 8 sedes, logrando eficiencia operativa y «cero papel».",
      "about.p2": "Mi perfil une la visión estratégica de un directivo con la solidez técnica de un ingeniero: entiendo el negocio, dirijo el equipo y sé qué pide la tecnología. He trabajado en los cuatro ángulos del ERP —integrador, cliente final industrial, partner internacional (Australia) y partner Gold en España— y en dos mercados internacionales.",
      "about.focus": ["Dirección de IT y transformación digital", "Gobierno y estrategia ERP", "Liderazgo de equipos y proyectos", "Automatización e IA aplicada"],
      "services.title": "Áreas de liderazgo",
      "services.items": [
        { "icon": "🎯", "title": "Dirección de TI", "desc": "Liderazgo del área de tecnología: estrategia, equipo, presupuesto y alineación con los objetivos de negocio." },
        { "icon": "🚀", "title": "Transformación digital", "desc": "Digitalización de procesos de punta a punta, con foco en eficiencia operativa y «cero papel»." },
        { "icon": "🧩", "title": "Gobierno ERP (Odoo)", "desc": "Implantación, migración y evolución de Odoo (v7→v20) como núcleo tecnológico del negocio." },
        { "icon": "🤖", "title": "Automatización e IA", "desc": "Automatización de procesos e inteligencia artificial aplicada para reducir costes y tiempos." },
        { "icon": "👥", "title": "Liderazgo de proyectos", "desc": "Dirección de proyectos y equipos multidisciplinares con Scrum y metodologías ágiles." }
      ],
      "stack.title": "Stack tecnológico",
      "experience.title": "Experiencia",
      "experience.items": [
        {
          "role": "Consultor Senior · Liderazgo de Proyectos",
          "company": "Madetosoft (Partner Gold Odoo)",
          "period": "2026 – Actualidad",
          "loc": "Barcelona, España",
          "bullets": [
            "Liderazgo de 4 proyectos de implantación y evolución Odoo en paralelo.",
            "Análisis funcional y de negocio, y dirección de la interlocución cliente–equipo técnico.",
            "Proyectos de integración, migración y automatización (VeriFactu, IA, OCR)."
          ]
        },
        {
          "role": "Senior Odoo Developer",
          "company": "Dimension3 Systems (Partner Odoo)",
          "period": "2024 – 2026",
          "loc": "Brisbane, Australia",
          "bullets": [
            "Desarrollo backend en Python/Odoo: módulos a medida y personalizaciones.",
            "Implementación e integración de módulos Odoo (Ventas, CRM, Inventario, Manufactura, eCommerce, POS).",
            "Soporte, mantenimiento y hosting de instancias Odoo para clientes internacionales (trabajo en inglés)."
          ]
        },
        {
          "role": "Director de Software y Automatización",
          "company": "Agofer S.A.S.",
          "period": "Jul 2020 – Sep 2023",
          "loc": "Colombia",
          "bullets": [
            "Dirección del área de software y automatización de una de las mayores comercializadoras de acero de Colombia.",
            "Lideré la migración de la intranet a Odoo y el upgrade de Odoo 8 a Odoo 14 para +200 usuarios y 8 sedes.",
            "Digitalización de procesos con foco en manufactura (MRP): eficiencia operativa y «cero papel».",
            "Gestión del equipo de TI y de proveedores de tecnología."
          ]
        },
        {
          "role": "Líder de Proyectos",
          "company": "Avancys S.A.S.",
          "period": "Feb 2018 – Jun 2020",
          "loc": "Colombia",
          "bullets": [
            "Ingresé como consultor Odoo y progresé a Líder de Proyectos (con funciones de director).",
            "Lideré implementaciones ERP Odoo de punta a punta y la coordinación de equipos funcionales y técnicos.",
            "Gestión de proyectos de facturación y nómina electrónica (proveedor oficial DIAN)."
          ]
        }
      ],
      "education.title": "Formación",
      "education.studies": "Educación",
      "education.studiesList": [
        { "title": "Máster en Ingeniería de Software y Sistemas Informáticos", "org": "UNIR | Universidad Internacional de La Rioja" },
        { "title": "Especialista en Gestión de Proyectos", "org": "Universidad Distrital Francisco José de Caldas, Colombia" },
        { "title": "Ingeniero en Automatización Industrial", "org": "Universidad del Cauca, Colombia" }
      ],
      "education.certs": "Certificaciones",
      "education.certsList": [
        { "title": "Odoo 15", "org": "Certificación oficial · 2021" },
        { "title": "Odoo 17", "org": "Certificación oficial · 2023" },
        { "title": "Scrum Master", "org": "ScrumStudy · 2023" },
        { "title": "PSU IA y Data Analytics", "org": "UNIR" }
      ],
      "education.languages": "Idiomas",
      "education.languagesList": [
        { "title": "Español", "org": "Nativo" },
        { "title": "Inglés", "org": "B2 (IELTS)" }
      ],
      "contact.title": "Contacto",
      "contact.sub": "¿Buscas un director de IT para liderar tu transformación digital? Hablemos.",
      "contact.linkedin": "LinkedIn",
      "contact.email": "Enviar email",
      "contact.github": "GitHub",
      "contact.location": "📍 Barcelona, España · Disponible para roles directivos presenciales, híbridos o remotos",
      "footer.rights": "© 2026 Juan Pablo Arcos Merchán.",
      "footer.built": "Hecho con HTML, CSS y JS · GitHub Pages"
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Leadership",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "hero.greeting": "Hi, I'm",
      "hero.name": "Juan Pablo Arcos Merchán",
      "hero.title": "IT Director & Digital Transformation | Odoo ERP · Python · AI",
      "hero.tagline": "Technology executive with 8+ years transforming companies with Odoo ERP. I lead teams, budget, and IT strategy, combining business vision with technical depth (Python, AI) to turn technology into results.",
      "hero.cta": "Let's talk",
      "hero.ctaLinkedin": "LinkedIn",
      "hero.badges": ["IT Director", "Digital Transformation", "Odoo ERP (v7–v20)", "Python & AI"],
      "about.title": "About me",
      "about.p1": "Engineer and technology executive with 8+ years leading digital transformation with Odoo ERP. As Software & Automation Director at Agofer, I led the ERP internalization and the migration from Odoo 8 to Odoo 14 for 200+ users and 8 locations, achieving operational efficiency and a paperless operation.",
      "about.p2": "My profile blends the strategic vision of an executive with the technical depth of an engineer: I understand the business, lead the team, and know what technology demands. I have worked across all four angles of ERP — integrator, industrial end customer, international partner (Australia), and Gold Partner in Spain — in two international markets.",
      "about.focus": ["IT leadership & digital transformation", "ERP governance & strategy", "Team & project leadership", "Automation & applied AI"],
      "services.title": "Areas of leadership",
      "services.items": [
        { "icon": "🎯", "title": "IT Leadership", "desc": "Leading the technology area: strategy, team, budget, and alignment with business goals." },
        { "icon": "🚀", "title": "Digital Transformation", "desc": "End-to-end process digitalization, focused on operational efficiency and a paperless operation." },
        { "icon": "🧩", "title": "ERP Governance (Odoo)", "desc": "Implementation, migration, and evolution of Odoo (v7→v20) as the business's technology core." },
        { "icon": "🤖", "title": "Automation & AI", "desc": "Process automation and applied artificial intelligence to reduce costs and cycle times." },
        { "icon": "👥", "title": "Project Leadership", "desc": "Leading multidisciplinary projects and teams with Scrum and agile methodologies." }
      ],
      "stack.title": "Tech stack",
      "experience.title": "Experience",
      "experience.items": [
        {
          "role": "Senior Consultant · Project Leadership",
          "company": "Madetosoft (Odoo Gold Partner)",
          "period": "2026 – Present",
          "loc": "Barcelona, Spain",
          "bullets": [
            "Leading 4 Odoo implementation and evolution projects in parallel.",
            "Functional and business analysis, and ownership of the client–technical team interface.",
            "Integration, migration, and automation projects (VeriFactu, AI, OCR)."
          ]
        },
        {
          "role": "Senior Odoo Developer",
          "company": "Dimension3 Systems (Odoo Partner)",
          "period": "2024 – 2026",
          "loc": "Brisbane, Australia",
          "bullets": [
            "Backend development in Python/Odoo: custom modules and customizations.",
            "Implementation and integration of Odoo modules (Sales, CRM, Inventory, Manufacturing, eCommerce, POS).",
            "Support, maintenance, and hosting of Odoo instances for international clients (English-speaking environment)."
          ]
        },
        {
          "role": "Software & Automation Director",
          "company": "Agofer S.A.S.",
          "period": "Jul 2020 – Sep 2023",
          "loc": "Colombia",
          "bullets": [
            "Led the software and automation area of one of Colombia's largest steel distributors.",
            "Led the intranet-to-Odoo migration and the upgrade from Odoo 8 to Odoo 14 for 200+ users and 8 locations.",
            "Digitized processes with a manufacturing (MRP) focus: operational efficiency and a paperless operation.",
            "Managed the IT team and technology suppliers."
          ]
        },
        {
          "role": "Project Leader",
          "company": "Avancys S.A.S.",
          "period": "Feb 2018 – Jun 2020",
          "loc": "Colombia",
          "bullets": [
            "Joined as an Odoo consultant and progressed to Project Leader (with director-level responsibilities).",
            "Led end-to-end Odoo ERP implementations and coordinated functional and technical teams.",
            "Managed electronic invoicing and payroll projects (official DIAN provider)."
          ]
        }
      ],
      "education.title": "Education",
      "education.studies": "Education",
      "education.studiesList": [
        { "title": "Master's in Software Engineering and Computer Systems", "org": "UNIR | International University of La Rioja" },
        { "title": "Specialist in Project Management", "org": "Universidad Distrital Francisco José de Caldas, Colombia" },
        { "title": "Industrial Automation Engineer", "org": "Universidad del Cauca, Colombia" }
      ],
      "education.certs": "Certifications",
      "education.certsList": [
        { "title": "Odoo 15", "org": "Official certification · 2021" },
        { "title": "Odoo 17", "org": "Official certification · 2023" },
        { "title": "Scrum Master", "org": "ScrumStudy · 2023" },
        { "title": "PSU AI & Data Analytics", "org": "UNIR" }
      ],
      "education.languages": "Languages",
      "education.languagesList": [
        { "title": "Spanish", "org": "Native" },
        { "title": "English", "org": "B2 (IELTS)" }
      ],
      "contact.title": "Contact",
      "contact.sub": "Looking for an IT director to lead your digital transformation? Let's talk.",
      "contact.linkedin": "LinkedIn",
      "contact.email": "Send email",
      "contact.github": "GitHub",
      "contact.location": "📍 Barcelona, Spain · Available for on-site, hybrid, or remote leadership roles",
      "footer.rights": "© 2026 Juan Pablo Arcos Merchán.",
      "footer.built": "Built with HTML, CSS & JS · GitHub Pages"
    }
  };

  var SKILLS_HOT = ["Dirección de IT", "Transformación Digital", "ERP Odoo (v7–v20)", "Python", "IA / AI", "PostgreSQL"];
  var SKILLS_COLD = ["Liderazgo de equipos", "Estrategia tecnológica", "Gestión de proyectos", "Odoo SH", "SQL", "Docker", "Git", "Machine Learning", "Automatización de procesos", "Scrum", "Integraciones", "Business Analysis"];

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
      ? "Juan Pablo Arcos Merchán | Director de IT & Transformación Digital"
      : "Juan Pablo Arcos Merchán | IT Director & Digital Transformation";
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
