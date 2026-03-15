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
            'nav.cv': 'CV',
            'nav.stack': 'Stack',
            'nav.projects': 'Projets',
            'nav.contact': 'Contact',
            'hero.curved': 'HELLO I AM ILIAS',
            'hero.subtitle': 'ÉTUDIANT INFORMATIQUE (L3) • LA ROCHELLE',
            'hero.heading': 'Façonner le monde<br />par le code.',
            'about.title': 'À Propos',
            'about.quote': '"La rigueur technique est la clé de voûte de tout système fiable."',
            'about.description': 'Étudiant en <strong>Informatique (L3)</strong> à l\'Université de La Rochelle, je me spécialise dans les <strong>Systèmes, Réseaux et le Développement Web</strong>. Mon approche est méthodique\u00a0: j\'aime comprendre ce qui se passe sous le capot, du noyau Linux jusqu\'au rendu frontend.',
            'about.internship': 'À la recherche d\'un stage / alternance dans les domaines de la Data Science, de la Cybersécurité ou du DevOps, tout en restant ouvert à d\'autres opportunités passionnantes.',
            'about.stat1': 'Anglais',
            'about.stat2': 'Années Dev',
            'about.stat3': 'Niveau',
            'skills.title': 'Arsenal Technique',
            'skills.languages': 'Langages',
            'skills.backend': 'Backend & Data',
            'skills.systems': 'Systèmes & Outils',
            'projects.title': 'Projets Réalisés',
            'projects.subtitle': 'Découvrez mes réalisations les plus récentes',
            'projects.cat.game': 'Jeu Vidéo',
            'projects.immersion.desc': 'Développement complet d\'un jeu 2D platformer. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Visualisation cyber-attaques temps réel. Modèle IA pour estimer les pertes financières.',
            'projects.cocovoit.desc': 'Plateforme de covoiturage écologique. Création API backend, système de trajets et authentification.',
            'projects.fyc.desc': 'Site de billetterie événementielle. Mise en place de l\'architecture et optimisation UI.',
            'projects.status.done': 'Terminé',
            'projects.status.unavailable': 'Indisponible',
            'contact.title': 'Me Contacter',
            'contact.subtitle': 'Une question, un projet\u00a0? N\'hésitez pas à me contacter',
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
            'footer.copy': '© 2026 Ilias Hamlaoui. Built with Code.',
            'notif.success': 'Message envoyé avec succès !',
            'notif.error': 'Erreur lors de l\'envoi.',
            'notif.fallback': 'Ouverture de votre client email...',
            'quick.mailto.subject': 'Contact%20depuis%20votre%20Portfolio',
            'quick.mailto.body': 'Bonjour%20Ilias%2C%0A%0AJe%20vous%20contacte%20depuis%20votre%20portfolio.%0A%0A'
        },
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.cv': 'Resume',
            'nav.stack': 'Stack',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'hero.curved': 'HELLO I AM ILIAS',
            'hero.subtitle': 'COMPUTER SCIENCE STUDENT (L3) • LA ROCHELLE',
            'hero.heading': 'Shaping the world<br />through code.',
            'about.title': 'About Me',
            'about.quote': '"Technical rigor is the cornerstone of every reliable system."',
            'about.description': '<strong>Computer Science student (L3)</strong> at the University of La Rochelle, specializing in <strong>Systems, Networks, and Web Development</strong>. My approach is methodical: I love understanding what happens under the hood, from the Linux kernel to frontend rendering.',
            'about.internship': 'Looking for an internship / work-study program in Data Science, Cybersecurity, or DevOps, while remaining open to other exciting opportunities.',
            'about.stat1': 'English',
            'about.stat2': 'Years Dev',
            'about.stat3': 'Degree',
            'skills.title': 'Tech Arsenal',
            'skills.languages': 'Languages',
            'skills.backend': 'Backend & Data',
            'skills.systems': 'Systems & Tools',
            'projects.title': 'Projects',
            'projects.subtitle': 'Explore my most recent work',
            'projects.cat.game': 'Video Game',
            'projects.immersion.desc': 'Full development of a 2D platformer game. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Real-time cyber-attack visualization. AI model to estimate financial losses.',
            'projects.cocovoit.desc': 'Eco-friendly carpooling platform. Backend API, route system, and authentication.',
            'projects.fyc.desc': 'Event ticketing website. Architecture setup and UI optimization.',
            'projects.status.done': 'Completed',
            'projects.status.unavailable': 'Unavailable',
            'contact.title': 'Get in Touch',
            'contact.subtitle': 'Have a question or a project? Feel free to reach out',
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
            'footer.copy': '© 2026 Ilias Hamlaoui. Built with Code.',
            'notif.success': 'Message sent successfully!',
            'notif.error': 'Error sending message.',
            'notif.fallback': 'Opening your email client...',
            'quick.mailto.subject': 'Contact%20from%20your%20Portfolio',
            'quick.mailto.body': 'Hello%20Ilias%2C%0A%0AI%20am%20contacting%20you%20from%20your%20portfolio.%0A%0A'
        },
        de: {
            'nav.home': 'Startseite',
            'nav.about': 'Über mich',
            'nav.cv': 'Lebenslauf',
            'nav.stack': 'Stack',
            'nav.projects': 'Projekte',
            'nav.contact': 'Kontakt',
            'hero.curved': 'HELLO I AM ILIAS',
            'hero.subtitle': 'INFORMATIKSTUDENT (L3) • LA ROCHELLE',
            'hero.heading': 'Die Welt gestalten<br />durch Code.',
            'about.title': 'Über Mich',
            'about.quote': '"Technische Präzision ist der Grundstein jedes zuverlässigen Systems."',
            'about.description': '<strong>Informatikstudent (L3)</strong> an der Universität La Rochelle mit Schwerpunkt auf <strong>Systeme, Netzwerke und Webentwicklung</strong>. Mein Ansatz ist methodisch: Ich verstehe gerne, was unter der Haube passiert — vom Linux-Kernel bis zum Frontend-Rendering.',
            'about.internship': 'Auf der Suche nach einem Praktikum / Werkstudentenjob in den Bereichen Data Science, Cybersecurity oder DevOps, bin aber auch offen für andere spannende Möglichkeiten.',
            'about.stat1': 'Englisch',
            'about.stat2': 'Jahre Dev',
            'about.stat3': 'Abschluss',
            'skills.title': 'Tech-Arsenal',
            'skills.languages': 'Sprachen',
            'skills.backend': 'Backend & Daten',
            'skills.systems': 'Systeme & Tools',
            'projects.title': 'Projekte',
            'projects.subtitle': 'Entdecken Sie meine neuesten Arbeiten',
            'projects.cat.game': 'Videospiel',
            'projects.immersion.desc': 'Vollständige Entwicklung eines 2D-Plattformspiels. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Echtzeit-Visualisierung von Cyberangriffen. KI-Modell zur Schätzung finanzieller Verluste.',
            'projects.cocovoit.desc': 'Umweltfreundliche Mitfahrplattform. Backend-API, Routensystem und Authentifizierung.',
            'projects.fyc.desc': 'Event-Ticketing-Website. Architektur-Aufbau und UI-Optimierung.',
            'projects.status.done': 'Abgeschlossen',
            'projects.status.unavailable': 'Nicht verfügbar',
            'contact.title': 'Kontakt',
            'contact.subtitle': 'Eine Frage oder ein Projekt? Kontaktieren Sie mich gerne',
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
            'footer.copy': '© 2026 Ilias Hamlaoui. Built with Code.',
            'notif.success': 'Nachricht erfolgreich gesendet!',
            'notif.error': 'Fehler beim Senden.',
            'notif.fallback': 'E-Mail-Client wird geöffnet...',
            'quick.mailto.subject': 'Kontakt%20über%20Ihr%20Portfolio',
            'quick.mailto.body': 'Hallo%20Ilias%2C%0A%0AIch%20kontaktiere%20Sie%20über%20Ihr%20Portfolio.%0A%0A'
        },
        es: {
            'nav.home': 'Inicio',
            'nav.about': 'Sobre mí',
            'nav.cv': 'CV',
            'nav.stack': 'Stack',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            'hero.curved': 'HELLO I AM ILIAS',
            'hero.subtitle': 'ESTUDIANTE DE INFORMÁTICA (L3) • LA ROCHELLE',
            'hero.heading': 'Moldear el mundo<br />a través del código.',
            'about.title': 'Sobre Mí',
            'about.quote': '"El rigor técnico es la piedra angular de todo sistema fiable."',
            'about.description': '<strong>Estudiante de Informática (L3)</strong> en la Universidad de La Rochelle, especializado en <strong>Sistemas, Redes y Desarrollo Web</strong>. Mi enfoque es metódico: me gusta entender lo que pasa bajo el capó, desde el kernel de Linux hasta el renderizado frontend.',
            'about.internship': 'Buscando prácticas / formación en alternancia en Data Science, Ciberseguridad o DevOps, aunque permanezco abierto a otras oportunidades interesantes.',
            'about.stat1': 'Inglés',
            'about.stat2': 'Años Dev',
            'about.stat3': 'Nivel',
            'skills.title': 'Arsenal Técnico',
            'skills.languages': 'Lenguajes',
            'skills.backend': 'Backend y Datos',
            'skills.systems': 'Sistemas y Herramientas',
            'projects.title': 'Proyectos',
            'projects.subtitle': 'Descubre mis trabajos más recientes',
            'projects.cat.game': 'Videojuego',
            'projects.immersion.desc': 'Desarrollo completo de un juego 2D de plataformas. <strong>Lead Developer</strong> y <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Visualización de ciberataques en tiempo real. Modelo IA para estimar pérdidas financieras.',
            'projects.cocovoit.desc': 'Plataforma ecológica de viajes compartidos. API backend, sistema de rutas y autenticación.',
            'projects.fyc.desc': 'Sitio web de venta de entradas. Configuración de la arquitectura y optimización de UI.',
            'projects.status.done': 'Completado',
            'projects.status.unavailable': 'No disponible',
            'contact.title': 'Contacto',
            'contact.subtitle': '¿Una pregunta o un proyecto? No dudes en contactarme',
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
            'footer.copy': '© 2026 Ilias Hamlaoui. Built with Code.',
            'notif.success': '¡Mensaje enviado con éxito!',
            'notif.error': 'Error al enviar el mensaje.',
            'notif.fallback': 'Abriendo tu cliente de correo...',
            'quick.mailto.subject': 'Contacto%20desde%20tu%20Portfolio',
            'quick.mailto.body': 'Hola%20Ilias%2C%0A%0AMe%20pongo%20en%20contacto%20desde%20tu%20portfolio.%0A%0A'
        }
    };

    // =====================================================
    // LANGUAGE SWITCHING ENGINE
    // =====================================================
    let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);

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
    });

    // Apply saved language on load
    setLanguage(currentLang);

    // =====================================================
    // SCROLL TEXT ANIMATION
    // =====================================================
    const textPath = document.getElementById('text-path');
    if (textPath) {
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            let newOffset = 50 - (scrollY * 0.2);
            textPath.setAttribute('startOffset', newOffset + '%');
        });
    }

    // =====================================================
    // MOBILE MENU
    // =====================================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            if (isFlex) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(11, 14, 20, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

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
                const response = await fetch('contact.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                const dict = translations[currentLang];

                if (result.success) {
                    showNotification(dict['notif.success'], 'success');
                    contactForm.reset();
                } else {
                    showNotification(result.message || dict['notif.error'], 'error');
                }
            } catch (error) {
                const dict = translations[currentLang];
                const mailtoSubject = encodeURIComponent(formData.subject);
                const mailtoBody = encodeURIComponent(
                    `${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                );
                const mailtoLink = `mailto:im.hamlaoui@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

                showNotification(dict['notif.fallback'], 'success');
                window.location.href = mailtoLink;
            }

            submitBtn.innerHTML = originalBtnContent;
            submitBtn.disabled = false;
        });
    }

    // =====================================================
    // NOTIFICATION HELPER
    // =====================================================
    function showNotification(message, type) {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
});