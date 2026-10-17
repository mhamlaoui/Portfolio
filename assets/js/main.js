document.addEventListener('DOMContentLoaded', () => {
    // =====================================================
    // LANGUAGE CONFIG
    // =====================================================
    const langMeta = {
        fr: { flag: 'https://flagcdn.com/24x18/fr.png', label: 'FR' },
        en: { flag: 'https://flagcdn.com/24x18/gb.png', label: 'EN' },
        de: { flag: 'https://flagcdn.com/24x18/de.png', label: 'DE' },
        es: { flag: 'https://flagcdn.com/24x18/es.png', label: 'ES' }
    };

    // =====================================================
    // TRANSLATIONS — FR / EN / DE / ES
    // =====================================================
    const translations = {
        fr: {
            'nav.home': 'Accueil',
            'nav.about': 'À propos',
            "nav.cv": "Profil",
            'nav.stack': 'Stack',
            'nav.projects': 'Projets',
            'nav.contact': 'Contact',
            'hero.curved': 'HELLO I AM ILIAS',
            "hero.subtitle": "Master 1 CRYPTIS · Université de Limoges",
            "hero.heading": "Ilias Hamlaoui",
            "about.title": "À propos",
            "about.quote": "Du développement full stack à la sécurité des systèmes.",
            "about.description": "Actuellement en <strong>Master 1 Sécurité de l’information et cryptologie, parcours CRYPTIS</strong> à l’Université de Limoges, je m’appuie sur un socle en informatique acquis à La Rochelle Université. Je m’intéresse à la <strong>cybersécurité, à la conteneurisation sécurisée et aux applications cloud</strong>.",
            "about.internship": "Mon objectif : appliquer mes compétences en développement et en sécurité à des projets technologiques à fort impact.",
            'about.stat1': 'Anglais',
            'about.stat2': 'Années Dev',
            'about.stat3': 'Niveau',
            "skills.title": "Compétences & outils",
            'skills.languages': 'Langages',
            'skills.backend': 'Backend & Data',
            'skills.systems': 'Systèmes & Outils',
            "projects.title": "Projets sélectionnés",
            "projects.subtitle": "Une sélection de projets en développement, data et applications web.",
            'projects.cat.game': 'Jeu Vidéo',
            'projects.immersion.desc': 'Développement complet d\'un jeu 2D platformer. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Visualisation cyber-attaques temps réel. Modèle IA pour estimer les pertes financières.',
            'projects.cocovoit.desc': 'Plateforme de covoiturage écologique. Création API backend, système de trajets et authentification.',
            "projects.virus.desc": "Prototype en C/GTK associant une visionneuse d’images à l’exploration des exécutables d’un répertoire et au repérage de fichiers .old. Le dépôt comprend aussi des utilitaires de chiffrement Vigenère, de conversion de bases et de statistiques de texte.",
            "projects.virus.category": "Programmation système",
            'projects.status.done': 'Terminé',
            'projects.status.unavailable': 'Indisponible',
            "contact.title": "Parlons de votre projet.",
            "contact.subtitle": "Développement, cybersécurité ou cloud : échangeons autour de vos idées.",
            'contact.phone': 'Téléphone',
            'contact.email.value': 'im.hamlaoui@gmail.com',
            'contact.location': 'Localisation',
            'contact.location.value': 'La Rochelle, France',
            'contact.quick.title': 'Préférez un email direct\u00a0?',
            'contact.quick.desc': 'Ouvrez votre client mail avec un message pré-rempli',
            'contact.quick.btn': 'Ouvrir mon client mail',
            'contact.form.name': 'Nom complet',
            'contact.form.email': 'Email',
            'contact.form.subject': 'Sujet',
            'contact.form.subject.ph': 'Sujet de votre message',
            'contact.form.message': 'Message',
            'contact.form.message.ph': 'Votre message...',
            'contact.form.send': 'Envoyer',
            "footer.copy": "© 2026 Ilias Hamlaoui",
            "notif.success": "Message envoyé.",
            "notif.error": "Message non envoyé. Réessayez ou utilisez le lien email direct.",
            'notif.fallback': 'Ouverture de votre client email...',
            'quick.mailto.subject': 'Contact%20depuis%20votre%20Portfolio',
            'quick.mailto.body': 'Bonjour%20Ilias%2C%0A%0AJe%20vous%20contacte%20depuis%20votre%20portfolio.%0A%0A',
            "hero.intro": "Étudiant en cybersécurité à Limoges, avec une expérience en développement full stack. Je m’intéresse à la sécurité des systèmes, aux conteneurs et au cloud.",
            "hero.work": "Découvrir mes projets",
            "hero.profile": "Mon profil PDF",
            "hero.diagram": "De l’application à son environnement",
            "layer.app": "Applications",
            "layer.container": "Conteneurisation",
            "layer.security": "Sécurité des systèmes",
            "journey.title": "Mon parcours",
            "journey.work": "Expérience",
            "journey.role": "Ingénieur Full Stack",
            "journey.date": "Avril — juin 2026 · Paris",
            "journey.desc": "Développement de fonctionnalités pour une application web mobile. Collaboration avec des équipes pluridisciplinaires pour intégrer des composants React Native et améliorer les performances et la réactivité de l’application.",
            "journey.study": "Formation",
            "journey.master": "Master Sécurité de l’information et cryptologie",
            "journey.master.detail": "Université de Limoges · Parcours CRYPTIS",
            "journey.master.date": "Sept. 2026 — oct. 2028 (prévu)",
            "journey.degree": "Informatique",
            "journey.degree.detail": "La Rochelle Université · 2023 — 2026",
            "profile.title": "Profil professionnel",
            "profile.desc": "Formation, expérience et domaines de spécialisation dans mon profil professionnel.",
            "profile.download": "Télécharger le profil",
            "ui.skip": "Aller au contenu",
            "ui.menu": "Menu de navigation",
            "ui.language": "Choisir la langue",
        },
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            "nav.cv": "Profile",
            'nav.stack': 'Stack',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'hero.curved': 'HELLO I AM ILIAS',
            "hero.subtitle": "Master’s year 1, CRYPTIS · University of Limoges",
            "hero.heading": "Ilias Hamlaoui",
            "about.title": "About me",
            "about.quote": "From full stack development to systems security.",
            "about.description": "Currently in the <strong>first year of a Master’s in Information Security and Cryptology, CRYPTIS track</strong> at the University of Limoges, I build on a computer science foundation from La Rochelle University. My interests are <strong>cybersecurity, secure containerization and cloud applications</strong>.",
            "about.internship": "My goal: apply my development and security skills to technology projects with meaningful impact.",
            'about.stat1': 'English',
            'about.stat2': 'Years Dev',
            'about.stat3': 'Degree',
            "skills.title": "Skills & tools",
            'skills.languages': 'Languages',
            'skills.backend': 'Backend & Data',
            'skills.systems': 'Systems & Tools',
            "projects.title": "Selected projects",
            "projects.subtitle": "Selected projects in development, data and web applications.",
            'projects.cat.game': 'Video Game',
            'projects.immersion.desc': 'Full development of a 2D platformer game. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Real-time cyber-attack visualization. AI model to estimate financial losses.',
            'projects.cocovoit.desc': 'Eco-friendly carpooling platform. Backend API, route system, and authentication.',
            "projects.virus.desc": "C/GTK prototype combining an image viewer with directory scanning for executables and .old files. The repository also includes utilities for Vigenère encryption, number-base conversion and text statistics.",
            "projects.virus.category": "Systems programming",
            'projects.status.done': 'Completed',
            'projects.status.unavailable': 'Unavailable',
            "contact.title": "Let’s discuss your project.",
            "contact.subtitle": "Development, cybersecurity or cloud: let’s exchange ideas.",
            'contact.phone': 'Phone',
            'contact.email.value': 'im.hamlaoui@gmail.com',
            'contact.location': 'Location',
            'contact.location.value': 'La Rochelle, France',
            'contact.quick.title': 'Prefer a direct email?',
            'contact.quick.desc': 'Open your email client with a pre-filled message',
            'contact.quick.btn': 'Open email client',
            'contact.form.name': 'Full name',
            'contact.form.email': 'Email',
            'contact.form.subject': 'Subject',
            'contact.form.subject.ph': 'Subject of your message',
            'contact.form.message': 'Message',
            'contact.form.message.ph': 'Your message...',
            'contact.form.send': 'Send',
            "footer.copy": "© 2026 Ilias Hamlaoui",
            "notif.success": "Message sent.",
            "notif.error": "Message not sent. Try again or use the direct email link.",
            'notif.fallback': 'Opening your email client...',
            'quick.mailto.subject': 'Contact%20from%20your%20Portfolio',
            'quick.mailto.body': 'Hello%20Ilias%2C%0A%0AI%20am%20contacting%20you%20from%20your%20portfolio.%0A%0A',
            "hero.intro": "Cybersecurity student in Limoges with experience in full stack development. My interests include systems security, containers and cloud applications.",
            "hero.work": "Explore my projects",
            "hero.profile": "My profile PDF",
            "hero.diagram": "From the application to its environment",
            "layer.app": "Applications",
            "layer.container": "Containerization",
            "layer.security": "Systems security",
            "journey.title": "My background",
            "journey.work": "Experience",
            "journey.role": "Full Stack Engineer",
            "journey.date": "April — June 2026 · Paris",
            "journey.desc": "Developed features for a mobile web application. Worked with cross-functional teams to integrate React Native components and improve application performance and responsiveness.",
            "journey.study": "Education",
            "journey.master": "Master’s in Information Security and Cryptology",
            "journey.master.detail": "University of Limoges · CRYPTIS track",
            "journey.master.date": "Sept. 2026 — Oct. 2028 (expected)",
            "journey.degree": "Computer Science",
            "journey.degree.detail": "La Rochelle University · 2023 — 2026",
            "profile.title": "Professional profile",
            "profile.desc": "Education, experience and areas of focus in my professional profile.",
            "profile.download": "Download profile",
            "ui.skip": "Skip to content",
            "ui.menu": "Navigation menu",
            "ui.language": "Choose language",
        },
        de: {
            'nav.home': 'Startseite',
            'nav.about': 'Über mich',
            "nav.cv": "Profil",
            'nav.stack': 'Stack',
            'nav.projects': 'Projekte',
            'nav.contact': 'Kontakt',
            'hero.curved': 'HELLO I AM ILIAS',
            "hero.subtitle": "Master 1 CRYPTIS · Universität Limoges",
            "hero.heading": "Ilias Hamlaoui",
            "about.title": "Über mich",
            "about.quote": "Von Full-Stack-Entwicklung zu Systemsicherheit.",
            "about.description": "Ich studiere im <strong>ersten Masterjahr Informationssicherheit und Kryptologie, Schwerpunkt CRYPTIS</strong>, an der Universität Limoges. Meine Informatikgrundlagen habe ich an der Universität La Rochelle erworben. Meine Interessen sind <strong>Cybersicherheit, sichere Containerisierung und Cloud-Anwendungen</strong>.",
            "about.internship": "Mein Ziel: Entwicklungs- und Sicherheitskenntnisse in wirkungsvolle Technologieprojekte einbringen.",
            'about.stat1': 'Englisch',
            'about.stat2': 'Jahre Dev',
            'about.stat3': 'Abschluss',
            "skills.title": "Kenntnisse & Werkzeuge",
            'skills.languages': 'Sprachen',
            'skills.backend': 'Backend & Daten',
            'skills.systems': 'Systeme & Tools',
            "projects.title": "Ausgewählte Projekte",
            "projects.subtitle": "Ausgewählte Projekte in Entwicklung, Datenanalyse und Webanwendungen.",
            'projects.cat.game': 'Videospiel',
            'projects.immersion.desc': 'Vollständige Entwicklung eines 2D-Plattformspiels. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Echtzeit-Visualisierung von Cyberangriffen. KI-Modell zur Schätzung finanzieller Verluste.',
            'projects.cocovoit.desc': 'Umweltfreundliche Mitfahrplattform. Backend-API, Routensystem und Authentifizierung.',
            "projects.virus.desc": "C/GTK-Prototyp mit Bildbetrachter und Verzeichnissuche nach ausführbaren Dateien und .old-Dateien. Das Repository enthält außerdem Werkzeuge für Vigenère-Verschlüsselung, Zahlensystemumrechnung und Textstatistik.",
            "projects.virus.category": "Systemprogrammierung",
            'projects.status.done': 'Abgeschlossen',
            'projects.status.unavailable': 'Nicht verfügbar',
            "contact.title": "Sprechen wir über Ihr Projekt.",
            "contact.subtitle": "Entwicklung, Cybersicherheit oder Cloud: tauschen wir Ideen aus.",
            'contact.phone': 'Telefon',
            'contact.email.value': 'im.hamlaoui@gmail.com',
            'contact.location': 'Standort',
            'contact.location.value': 'La Rochelle, Frankreich',
            'contact.quick.title': 'Lieber eine direkte E-Mail?',
            'contact.quick.desc': 'Öffnen Sie Ihren E-Mail-Client mit einer vorausgefüllten Nachricht',
            'contact.quick.btn': 'E-Mail-Client öffnen',
            'contact.form.name': 'Vollständiger Name',
            'contact.form.email': 'E-Mail',
            'contact.form.subject': 'Betreff',
            'contact.form.subject.ph': 'Betreff Ihrer Nachricht',
            'contact.form.message': 'Nachricht',
            'contact.form.message.ph': 'Ihre Nachricht...',
            'contact.form.send': 'Senden',
            "footer.copy": "© 2026 Ilias Hamlaoui",
            "notif.success": "Nachricht gesendet.",
            "notif.error": "Nachricht nicht gesendet. Erneut versuchen oder den E-Mail-Link verwenden.",
            'notif.fallback': 'E-Mail-Client wird geöffnet...',
            'quick.mailto.subject': 'Kontakt%20über%20Ihr%20Portfolio',
            'quick.mailto.body': 'Hallo%20Ilias%2C%0A%0AIch%20kontaktiere%20Sie%20über%20Ihr%20Portfolio.%0A%0A',
            "hero.intro": "Cybersicherheitsstudent in Limoges mit Erfahrung in der Full-Stack-Entwicklung. Ich interessiere mich für Systemsicherheit, Container und Cloud-Anwendungen.",
            "hero.work": "Projekte entdecken",
            "hero.profile": "Mein Profil als PDF",
            "hero.diagram": "Von der Anwendung bis zur Umgebung",
            "layer.app": "Anwendungen",
            "layer.container": "Containerisierung",
            "layer.security": "Systemsicherheit",
            "journey.title": "Mein Werdegang",
            "journey.work": "Berufserfahrung",
            "journey.role": "Full-Stack-Entwickler",
            "journey.date": "April — Juni 2026 · Paris",
            "journey.desc": "Entwicklung von Funktionen für eine mobile Webanwendung. Zusammenarbeit mit interdisziplinären Teams zur Integration von React-Native-Komponenten und Verbesserung von Leistung und Reaktionsfähigkeit.",
            "journey.study": "Ausbildung",
            "journey.master": "Master Informationssicherheit und Kryptologie",
            "journey.master.detail": "Universität Limoges · Schwerpunkt CRYPTIS",
            "journey.master.date": "Sept. 2026 — Okt. 2028 (voraussichtlich)",
            "journey.degree": "Informatik",
            "journey.degree.detail": "Universität La Rochelle · 2023 — 2026",
            "profile.title": "Berufliches Profil",
            "profile.desc": "Ausbildung, Erfahrung und Schwerpunkte in meinem beruflichen Profil.",
            "profile.download": "Profil herunterladen",
            "ui.skip": "Zum Inhalt",
            "ui.menu": "Navigationsmenü",
            "ui.language": "Sprache wählen",
        },
        es: {
            'nav.home': 'Inicio',
            'nav.about': 'Sobre mí',
            "nav.cv": "Perfil",
            'nav.stack': 'Stack',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            'hero.curved': 'HELLO I AM ILIAS',
            "hero.subtitle": "Máster 1 CRYPTIS · Universidad de Limoges",
            "hero.heading": "Ilias Hamlaoui",
            "about.title": "Sobre mí",
            "about.quote": "Del desarrollo full stack a la seguridad de sistemas.",
            "about.description": "Actualmente curso el <strong>primer año del máster en Seguridad de la Información y Criptología, itinerario CRYPTIS</strong>, en la Universidad de Limoges, con una base en informática adquirida en la Universidad de La Rochelle. Me interesan la <strong>ciberseguridad, la contenedorización segura y las aplicaciones cloud</strong>.",
            "about.internship": "Mi objetivo: aplicar mis conocimientos de desarrollo y seguridad a proyectos tecnológicos con impacto.",
            'about.stat1': 'Inglés',
            'about.stat2': 'Años Dev',
            'about.stat3': 'Nivel',
            "skills.title": "Competencias y herramientas",
            'skills.languages': 'Lenguajes',
            'skills.backend': 'Backend y Datos',
            'skills.systems': 'Sistemas y Herramientas',
            "projects.title": "Proyectos seleccionados",
            "projects.subtitle": "Proyectos seleccionados de desarrollo, datos y aplicaciones web.",
            'projects.cat.game': 'Videojuego',
            'projects.immersion.desc': 'Desarrollo completo de un juego 2D de plataformas. <strong>Lead Developer</strong> y <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Visualización de ciberataques en tiempo real. Modelo IA para estimar pérdidas financieras.',
            'projects.cocovoit.desc': 'Plataforma ecológica de viajes compartidos. API backend, sistema de rutas y autenticación.',
            "projects.virus.desc": "Prototipo en C/GTK que combina un visor de imágenes con la búsqueda de ejecutables y archivos .old en un directorio. El repositorio también incluye utilidades de cifrado Vigenère, conversión de bases y estadísticas de texto.",
            "projects.virus.category": "Programación de sistemas",
            'projects.status.done': 'Completado',
            'projects.status.unavailable': 'No disponible',
            "contact.title": "Hablemos de tu proyecto.",
            "contact.subtitle": "Desarrollo, ciberseguridad o cloud: compartamos ideas.",
            'contact.phone': 'Teléfono',
            'contact.email.value': 'im.hamlaoui@gmail.com',
            'contact.location': 'Ubicación',
            'contact.location.value': 'La Rochelle, Francia',
            'contact.quick.title': '¿Prefieres un email directo?',
            'contact.quick.desc': 'Abre tu cliente de correo con un mensaje prellenado',
            'contact.quick.btn': 'Abrir cliente de correo',
            'contact.form.name': 'Nombre completo',
            'contact.form.email': 'Email',
            'contact.form.subject': 'Asunto',
            'contact.form.subject.ph': 'Asunto de tu mensaje',
            'contact.form.message': 'Mensaje',
            'contact.form.message.ph': 'Tu mensaje...',
            'contact.form.send': 'Enviar',
            "footer.copy": "© 2026 Ilias Hamlaoui",
            "notif.success": "Mensaje enviado.",
            "notif.error": "Mensaje no enviado. Inténtalo de nuevo o utiliza el enlace de correo.",
            'notif.fallback': 'Abriendo tu cliente de correo...',
            'quick.mailto.subject': 'Contacto%20desde%20tu%20Portfolio',
            'quick.mailto.body': 'Hola%20Ilias%2C%0A%0AMe%20pongo%20en%20contacto%20desde%20tu%20portfolio.%0A%0A',
            "hero.intro": "Estudiante de ciberseguridad en Limoges con experiencia en desarrollo full stack. Me interesan la seguridad de sistemas, los contenedores y las aplicaciones cloud.",
            "hero.work": "Explorar mis proyectos",
            "hero.profile": "Mi perfil en PDF",
            "hero.diagram": "De la aplicación a su entorno",
            "layer.app": "Aplicaciones",
            "layer.container": "Contenedorización",
            "layer.security": "Seguridad de sistemas",
            "journey.title": "Mi trayectoria",
            "journey.work": "Experiencia",
            "journey.role": "Ingeniero Full Stack",
            "journey.date": "Abril — junio 2026 · París",
            "journey.desc": "Desarrollo de funcionalidades para una aplicación web móvil. Colaboración con equipos multidisciplinares para integrar componentes React Native y mejorar el rendimiento y la capacidad de respuesta.",
            "journey.study": "Formación",
            "journey.master": "Máster en Seguridad de la Información y Criptología",
            "journey.master.detail": "Universidad de Limoges · Itinerario CRYPTIS",
            "journey.master.date": "Sept. 2026 — oct. 2028 (previsto)",
            "journey.degree": "Informática",
            "journey.degree.detail": "Universidad de La Rochelle · 2023 — 2026",
            "profile.title": "Perfil profesional",
            "profile.desc": "Formación, experiencia y especialidades en mi perfil profesional.",
            "profile.download": "Descargar perfil",
            "ui.skip": "Ir al contenido",
            "ui.menu": "Menú de navegación",
            "ui.language": "Elegir idioma",
        }
    };

    // =====================================================
    // LANGUAGE SWITCHING ENGINE
    // =====================================================
    let currentLang = 'fr';
    try { currentLang = localStorage.getItem('portfolio-lang') || 'fr'; } catch {}
    if (!translations[currentLang]) currentLang = 'fr';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        try { localStorage.setItem('portfolio-lang', lang); } catch {}

        const dict = translations[lang];
        if (!dict) return;

        // Update HTML lang attribute
        document.getElementById('html-root').setAttribute('lang', lang);

        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                if (el.getAttribute('data-i18n-html') === 'true') {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            el.setAttribute('aria-label', dict[el.dataset.i18nAria]);
        });
        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.placeholder = dict[key];
            }
        });

        // Update the quick email mailto link
        const quickEmailLink = document.getElementById('quick-email-link');
        if (quickEmailLink) {
            const subject = dict['quick.mailto.subject'] || '';
            const body = dict['quick.mailto.body'] || '';
            quickEmailLink.href = `mailto:im.hamlaoui@gmail.com?subject=${subject}&body=${body}`;
        }

        // Update toggle button to show CURRENT language
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            const flag = toggleBtn.querySelector('.lang-flag-img');
            const label = toggleBtn.querySelector('.lang-label');
            const meta = langMeta[lang];
            if (meta) {
                flag.src = meta.flag;
                flag.alt = meta.label;
                label.textContent = meta.label;
            }
        }

        // Mark the active option in the dropdown
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        // Close dropdown after selecting
        const selector = document.getElementById('lang-selector');
        if (selector) selector.classList.remove('open');
        document.getElementById('lang-toggle').setAttribute('aria-expanded', 'false');
    }

    // =====================================================
    // DROPDOWN TOGGLE
    // =====================================================
    const langToggle = document.getElementById('lang-toggle');
    const langSelector = document.getElementById('lang-selector');

    if (langToggle && langSelector) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('open');
            langToggle.setAttribute('aria-expanded', String(langSelector.classList.contains('open')));
        });
    }

    // Language option click handlers
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            if (lang) setLanguage(lang);
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        if (langSelector) langSelector.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
    });

    // Apply saved language on load
    setLanguage(currentLang);

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    function closeMenu() {
        navLinks.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
    }
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', String(navLinks.classList.contains('is-open')));
    });
    navLinks.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (navLinks.classList.contains('is-open')) { closeMenu(); hamburger.focus(); }
            if (langSelector.classList.contains('open')) {
                langSelector.classList.remove('open'); langToggle.setAttribute('aria-expanded', 'false'); langToggle.focus();
            }
        }
    });
    matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);

    // =====================================================
    // CONTACT FORM HANDLER
    // =====================================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalBtnContent = submitBtn.innerHTML;

            const formData = {
                name: contactForm.querySelector('#name').value,
                email: contactForm.querySelector('#email').value,
                subject: contactForm.querySelector('#subject').value,
                message: contactForm.querySelector('#message').value,
                website: contactForm.querySelector('#website') ? contactForm.querySelector('#website').value : ''
            };

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ...';
            submitBtn.disabled = true;

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                const dict = translations[currentLang];

                if (response.ok && result.success) {
                    showNotification(dict['notif.success'], 'success');
                    contactForm.reset();
                } else {
                    showNotification(dict['notif.error'], 'error');
                }
            } catch (error) {
                const dict = translations[currentLang];
                showNotification(dict['notif.error'], 'error');
            }

            submitBtn.innerHTML = originalBtnContent;
            submitBtn.disabled = false;
        });
    }

    // =====================================================
    // NOTIFICATION HELPER
    // =====================================================
    function showNotification(message, type) {
        const status = document.getElementById('form-status');
        status.textContent = message;
        status.className = type;
    }
});
