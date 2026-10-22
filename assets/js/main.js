document.addEventListener('DOMContentLoaded', () => {
    // =====================================================
    // LANGUAGE CONFIG
    // =====================================================
    const langMeta = { fr: { label: 'FR' }, en: { label: 'EN' }, de: { label: 'DE' }, es: { label: 'ES' } };

    // =====================================================
    // TRANSLATIONS — FR / EN / DE / ES
    // =====================================================
    const translations = {
        fr: {
            'nav.about': 'À propos',
            'nav.projects': 'Projets',
            'nav.contact': 'Contact',
            "hero.subtitle": "Master 1 CRYPTIS · Université de Limoges",
            "hero.heading": "Ilias Hamlaoui",
            "about.title": "À propos",
            "about.quote": "Du développement full stack à la sécurité des systèmes.",
            "about.description": "Actuellement en <strong>Master 1 Sécurité de l’information et cryptologie, parcours CRYPTIS</strong> à l’Université de Limoges, je m’appuie sur un socle en informatique acquis à La Rochelle Université. Je m’intéresse à la <strong>cybersécurité, à la conteneurisation sécurisée et aux applications cloud</strong>.",
            "skills.title": "Compétences & outils",
            'skills.languages': 'Langages',
            'skills.backend': 'Backend & Data',
            'skills.systems': 'Systèmes & Outils',
            "projects.title": "Projets sélectionnés",
            'projects.cat.game': 'Jeu Vidéo',
            'projects.immersion.desc': 'Développement complet d\'un jeu 2D platformer. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Visualisation cyber-attaques temps réel. Modèle IA pour estimer les pertes financières.',
            'projects.cocovoit.desc': 'Plateforme de covoiturage écologique. Création API backend, système de trajets et authentification.',
            "projects.virus.desc": "Prototype en C/GTK associant une visionneuse d’images à l’exploration des exécutables d’un répertoire et au repérage de fichiers .old. Le dépôt comprend aussi des utilitaires de chiffrement Vigenère, de conversion de bases et de statistiques de texte.",
            "projects.virus.category": "Programmation système",
            "contact.title": "Parlons de votre projet.",
            "contact.subtitle": "Développement, cybersécurité ou cloud : échangeons autour de vos idées.",
            'contact.phone': 'Téléphone',
            'contact.email.value': 'im.hamlaoui@gmail.com',
            'contact.location': 'Localisation',
            'contact.location.value': 'La Rochelle, France',
            'contact.quick.title': 'Préférez un email direct\u00a0?',
            'contact.quick.desc': 'Ouvrez votre client mail avec un message pré-rempli',
            'contact.quick.btn': 'Ouvrir mon client mail',
            "contact.form.name": "Nom (facultatif)",
            'contact.form.email': 'Email',
            "contact.form.subject": "Sujet (facultatif)",
            'contact.form.subject.ph': 'Sujet de votre message',
            'contact.form.message': 'Message',
            'contact.form.message.ph': 'Votre message...',
            'contact.form.send': 'Envoyer',
            "footer.copy": "© 2026 Ilias Hamlaoui",
            "notif.success": "Votre message a été pris en charge pour envoi. Merci.",
            "notif.error": "Message non envoyé. Réessayez ou utilisez le lien email direct.",
            'notif.fallback': 'Ouverture de votre client email...',
            'quick.mailto.subject': 'Contact%20depuis%20votre%20Portfolio',
            'quick.mailto.body': 'Bonjour%20Ilias%2C%0A%0AJe%20vous%20contacte%20depuis%20votre%20portfolio.%0A%0A',
            "hero.intro": "Étudiant en cybersécurité à Limoges, avec une expérience en développement full stack. Je m’intéresse à la sécurité des systèmes, aux conteneurs et au cloud.",
            "hero.work": "Découvrir mes projets",
            "hero.profile": "Mon profil PDF",
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
            "projects.source": "Code source",
            "contact.name.ph": "Comment vous appeler ?",
            "contact.form.heading": "Laissez-moi un message",
            "contact.privacy": "Votre email et votre message servent uniquement à vous répondre. Nom et sujet facultatifs. Conservation : 6 mois après le dernier échange.",
            "contact.privacy.link": "Utilisation des données et vos droits",
            "footer.privacy": "Confidentialité",
            "footer.legal": "Mentions légales",
            "contact.sending": "Envoi en cours…",
            "notif.unavailable": "Le formulaire est momentanément indisponible. Utilisez le lien email ; votre message reste ici.",
            "notif.limited": "Trop de tentatives. Réessayez plus tard ou utilisez le lien email.",
            "notif.invalid": "Vérifiez les champs : une adresse email valide et un message de 10 à 5 000 caractères sont requis.",
            "notif.uncertain": "L’envoi n’a pas pu être confirmé. Votre texte est conservé. Évitez de renvoyer immédiatement le même message.",
            "theme.label": "Apparence",
            "theme.system": "Système",
            "theme.light": "Clair",
            "theme.dark": "Sombre",
            "projects.virus.art": "Illustration du projet",
            "profile.preview": "Aperçu du profil · page 1 sur 2",
            "meta.title": "Ilias Hamlaoui | Cybersécurité & Développement",
            "meta.description": "Ilias Hamlaoui — Master CRYPTIS à l’Université de Limoges. Cybersécurité, conteneurisation, cloud et développement full stack.",
            "ui.language.title": "Changer de langue",
            "projects.source.title": "Voir le code",
            "projects.immersion.zoom": "Immersion — voir l’image en grand",
            "projects.cyber360.zoom": "Cyber360 — voir l’image en grand",
            "projects.cocovoit.zoom": "CoCoVoit — voir l’image en grand",
            "projects.status.prototype": "Prototype",
            "profile.open": "Ouvrir le profil PDF complet",
            "contact.email.ph": "votre@email.com",
            "alt.portrait": "Portrait d’Ilias Hamlaoui",
            "alt.immersion": "Immersion — jeu de plateforme 2D",
            "alt.cyber360": "Cyber360 — tableau de bord cyber",
            "alt.cocovoit": "CocoLaRochelle — recherche de covoiturage",
            "alt.virus": "Virus — C / GTK, illustration minimaliste avec une icône de fichier",
            "alt.profile": "Aperçu de la première page du profil professionnel d’Ilias Hamlaoui",
        },
        en: {
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            "hero.subtitle": "Master’s year 1, CRYPTIS · University of Limoges",
            "hero.heading": "Ilias Hamlaoui",
            "about.title": "About me",
            "about.quote": "From full stack development to systems security.",
            "about.description": "Currently in the <strong>first year of a Master’s in Information Security and Cryptology, CRYPTIS track</strong> at the University of Limoges, I build on a computer science foundation from La Rochelle University. My interests are <strong>cybersecurity, secure containerization and cloud applications</strong>.",
            "skills.title": "Skills & tools",
            'skills.languages': 'Languages',
            'skills.backend': 'Backend & Data',
            'skills.systems': 'Systems & Tools',
            "projects.title": "Selected projects",
            'projects.cat.game': 'Video Game',
            'projects.immersion.desc': 'Full development of a 2D platformer game. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Real-time cyber-attack visualization. AI model to estimate financial losses.',
            'projects.cocovoit.desc': 'Eco-friendly carpooling platform. Backend API, route system, and authentication.',
            "projects.virus.desc": "C/GTK prototype combining an image viewer with directory scanning for executables and .old files. The repository also includes utilities for Vigenère encryption, number-base conversion and text statistics.",
            "projects.virus.category": "Systems programming",
            "contact.title": "Let’s discuss your project.",
            "contact.subtitle": "Development, cybersecurity or cloud: let’s exchange ideas.",
            'contact.phone': 'Phone',
            'contact.email.value': 'im.hamlaoui@gmail.com',
            'contact.location': 'Location',
            'contact.location.value': 'La Rochelle, France',
            'contact.quick.title': 'Prefer a direct email?',
            'contact.quick.desc': 'Open your email client with a pre-filled message',
            'contact.quick.btn': 'Open email client',
            "contact.form.name": "Name (optional)",
            'contact.form.email': 'Email',
            "contact.form.subject": "Subject (optional)",
            'contact.form.subject.ph': 'Subject of your message',
            'contact.form.message': 'Message',
            'contact.form.message.ph': 'Your message...',
            'contact.form.send': 'Send',
            "footer.copy": "© 2026 Ilias Hamlaoui",
            "notif.success": "Your message has been accepted for sending. Thank you.",
            "notif.error": "Message not sent. Try again or use the direct email link.",
            'notif.fallback': 'Opening your email client...',
            'quick.mailto.subject': 'Contact%20from%20your%20Portfolio',
            'quick.mailto.body': 'Hello%20Ilias%2C%0A%0AI%20am%20contacting%20you%20from%20your%20portfolio.%0A%0A',
            "hero.intro": "Cybersecurity student in Limoges with experience in full stack development. My interests include systems security, containers and cloud applications.",
            "hero.work": "Explore my projects",
            "hero.profile": "My profile PDF",
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
            "projects.source": "Source code",
            "contact.name.ph": "What should I call you?",
            "contact.form.heading": "Leave me a message",
            "contact.privacy": "Your email and message are used only to reply. Name and subject are optional. Retention: 6 months after our last exchange.",
            "contact.privacy.link": "Data use and your rights",
            "footer.privacy": "Privacy",
            "footer.legal": "Legal notice",
            "contact.sending": "Sending…",
            "notif.unavailable": "The form is temporarily unavailable. Use the email link; your message stays here.",
            "notif.limited": "Too many attempts. Try again later or use the email link.",
            "notif.invalid": "Check the fields: a valid email and a message of 10 to 5,000 characters are required.",
            "notif.uncertain": "Sending could not be confirmed. Your text is preserved. Please avoid immediately resending the same message.",
            "theme.label": "Appearance",
            "theme.system": "System",
            "theme.light": "Light",
            "theme.dark": "Dark",
            "projects.virus.art": "Project illustration",
            "profile.preview": "Profile preview · page 1 of 2",
            "meta.title": "Ilias Hamlaoui | Cybersecurity & Development",
            "meta.description": "Ilias Hamlaoui — CRYPTIS Master’s student at the University of Limoges. Cybersecurity, containerization, cloud and full stack development.",
            "ui.language.title": "Change language",
            "projects.source.title": "View the code",
            "projects.immersion.zoom": "Immersion — view full-size image",
            "projects.cyber360.zoom": "Cyber360 — view full-size image",
            "projects.cocovoit.zoom": "CoCoVoit — view full-size image",
            "projects.status.prototype": "Prototype",
            "profile.open": "Open the full PDF profile",
            "contact.email.ph": "you@email.com",
            "alt.portrait": "Portrait of Ilias Hamlaoui",
            "alt.immersion": "Immersion — 2D platformer game",
            "alt.cyber360": "Cyber360 — cyber dashboard",
            "alt.cocovoit": "CocoLaRochelle — carpool search",
            "alt.virus": "Virus — C / GTK, minimalist illustration with a file icon",
            "alt.profile": "Preview of the first page of Ilias Hamlaoui’s professional profile",
        },
        de: {
            'nav.about': 'Über mich',
            'nav.projects': 'Projekte',
            'nav.contact': 'Kontakt',
            "hero.subtitle": "Master 1 CRYPTIS · Universität Limoges",
            "hero.heading": "Ilias Hamlaoui",
            "about.title": "Über mich",
            "about.quote": "Von Full-Stack-Entwicklung zu Systemsicherheit.",
            "about.description": "Ich studiere im <strong>ersten Masterjahr Informationssicherheit und Kryptologie, Schwerpunkt CRYPTIS</strong>, an der Universität Limoges. Meine Informatikgrundlagen habe ich an der Universität La Rochelle erworben. Meine Interessen sind <strong>Cybersicherheit, sichere Containerisierung und Cloud-Anwendungen</strong>.",
            "skills.title": "Kenntnisse & Werkzeuge",
            'skills.languages': 'Sprachen',
            'skills.backend': 'Backend & Daten',
            'skills.systems': 'Systeme & Tools',
            "projects.title": "Ausgewählte Projekte",
            'projects.cat.game': 'Videospiel',
            'projects.immersion.desc': 'Vollständige Entwicklung eines 2D-Plattformspiels. <strong>Lead Developer</strong> & <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Echtzeit-Visualisierung von Cyberangriffen. KI-Modell zur Schätzung finanzieller Verluste.',
            'projects.cocovoit.desc': 'Umweltfreundliche Mitfahrplattform. Backend-API, Routensystem und Authentifizierung.',
            "projects.virus.desc": "C/GTK-Prototyp mit Bildbetrachter und Verzeichnissuche nach ausführbaren Dateien und .old-Dateien. Das Repository enthält außerdem Werkzeuge für Vigenère-Verschlüsselung, Zahlensystemumrechnung und Textstatistik.",
            "projects.virus.category": "Systemprogrammierung",
            "contact.title": "Sprechen wir über Ihr Projekt.",
            "contact.subtitle": "Entwicklung, Cybersicherheit oder Cloud: tauschen wir Ideen aus.",
            'contact.phone': 'Telefon',
            'contact.email.value': 'im.hamlaoui@gmail.com',
            'contact.location': 'Standort',
            'contact.location.value': 'La Rochelle, Frankreich',
            'contact.quick.title': 'Lieber eine direkte E-Mail?',
            'contact.quick.desc': 'Öffnen Sie Ihren E-Mail-Client mit einer vorausgefüllten Nachricht',
            'contact.quick.btn': 'E-Mail-Client öffnen',
            "contact.form.name": "Name (optional)",
            'contact.form.email': 'E-Mail',
            "contact.form.subject": "Betreff (optional)",
            'contact.form.subject.ph': 'Betreff Ihrer Nachricht',
            'contact.form.message': 'Nachricht',
            'contact.form.message.ph': 'Ihre Nachricht...',
            'contact.form.send': 'Senden',
            "footer.copy": "© 2026 Ilias Hamlaoui",
            "notif.success": "Ihre Nachricht wurde zum Versand angenommen. Vielen Dank.",
            "notif.error": "Nachricht nicht gesendet. Erneut versuchen oder den E-Mail-Link verwenden.",
            'notif.fallback': 'E-Mail-Client wird geöffnet...',
            'quick.mailto.subject': 'Kontakt%20über%20Ihr%20Portfolio',
            'quick.mailto.body': 'Hallo%20Ilias%2C%0A%0AIch%20kontaktiere%20Sie%20über%20Ihr%20Portfolio.%0A%0A',
            "hero.intro": "Cybersicherheitsstudent in Limoges mit Erfahrung in der Full-Stack-Entwicklung. Ich interessiere mich für Systemsicherheit, Container und Cloud-Anwendungen.",
            "hero.work": "Projekte entdecken",
            "hero.profile": "Mein Profil als PDF",
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
            "projects.source": "Quellcode",
            "contact.name.ph": "Wie darf ich Sie nennen?",
            "contact.form.heading": "Schreiben Sie mir",
            "contact.privacy": "Ihre E-Mail und Nachricht werden nur zur Antwort verwendet. Name und Betreff sind optional. Aufbewahrung: 6 Monate nach dem letzten Austausch.",
            "contact.privacy.link": "Datennutzung und Ihre Rechte",
            "footer.privacy": "Datenschutz",
            "footer.legal": "Impressum",
            "contact.sending": "Wird gesendet…",
            "notif.unavailable": "Das Formular ist vorübergehend nicht verfügbar. Nutzen Sie den E-Mail-Link; Ihre Nachricht bleibt erhalten.",
            "notif.limited": "Zu viele Versuche. Versuchen Sie es später oder nutzen Sie den E-Mail-Link.",
            "notif.invalid": "Bitte prüfen: gültige E-Mail-Adresse und Nachricht mit 10 bis 5.000 Zeichen erforderlich.",
            "notif.uncertain": "Der Versand konnte nicht bestätigt werden. Ihr Text bleibt erhalten. Bitte senden Sie die Nachricht nicht sofort erneut.",
            "theme.label": "Darstellung",
            "theme.system": "System",
            "theme.light": "Hell",
            "theme.dark": "Dunkel",
            "projects.virus.art": "Projektillustration",
            "profile.preview": "Profilvorschau · Seite 1 von 2",
            "meta.title": "Ilias Hamlaoui | Cybersicherheit & Entwicklung",
            "meta.description": "Ilias Hamlaoui — Masterstudent (CRYPTIS) an der Universität Limoges. Cybersicherheit, Containerisierung, Cloud und Full-Stack-Entwicklung.",
            "ui.language.title": "Sprache ändern",
            "projects.source.title": "Code ansehen",
            "projects.immersion.zoom": "Immersion — Bild in voller Größe ansehen",
            "projects.cyber360.zoom": "Cyber360 — Bild in voller Größe ansehen",
            "projects.cocovoit.zoom": "CoCoVoit — Bild in voller Größe ansehen",
            "projects.status.prototype": "Prototyp",
            "profile.open": "Vollständiges PDF-Profil öffnen",
            "contact.email.ph": "ihre@email.de",
            "alt.portrait": "Porträt von Ilias Hamlaoui",
            "alt.immersion": "Immersion — 2D-Plattformspiel",
            "alt.cyber360": "Cyber360 — Cyber-Dashboard",
            "alt.cocovoit": "CocoLaRochelle — Mitfahrsuche",
            "alt.virus": "Virus — C / GTK, minimalistische Illustration mit Dateisymbol",
            "alt.profile": "Vorschau der ersten Seite des beruflichen Profils von Ilias Hamlaoui",
        },
        es: {
            'nav.about': 'Sobre mí',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            "hero.subtitle": "Máster 1 CRYPTIS · Universidad de Limoges",
            "hero.heading": "Ilias Hamlaoui",
            "about.title": "Sobre mí",
            "about.quote": "Del desarrollo full stack a la seguridad de sistemas.",
            "about.description": "Actualmente curso el <strong>primer año del máster en Seguridad de la Información y Criptología, itinerario CRYPTIS</strong>, en la Universidad de Limoges, con una base en informática adquirida en la Universidad de La Rochelle. Me interesan la <strong>ciberseguridad, la contenedorización segura y las aplicaciones cloud</strong>.",
            "skills.title": "Competencias y herramientas",
            'skills.languages': 'Lenguajes',
            'skills.backend': 'Backend y Datos',
            'skills.systems': 'Sistemas y Herramientas',
            "projects.title": "Proyectos seleccionados",
            'projects.cat.game': 'Videojuego',
            'projects.immersion.desc': 'Desarrollo completo de un juego 2D de plataformas. <strong>Lead Developer</strong> y <strong>Scrum Master</strong>.',
            'projects.cyber360.desc': 'Visualización de ciberataques en tiempo real. Modelo IA para estimar pérdidas financieras.',
            'projects.cocovoit.desc': 'Plataforma ecológica de viajes compartidos. API backend, sistema de rutas y autenticación.',
            "projects.virus.desc": "Prototipo en C/GTK que combina un visor de imágenes con la búsqueda de ejecutables y archivos .old en un directorio. El repositorio también incluye utilidades de cifrado Vigenère, conversión de bases y estadísticas de texto.",
            "projects.virus.category": "Programación de sistemas",
            "contact.title": "Hablemos de tu proyecto.",
            "contact.subtitle": "Desarrollo, ciberseguridad o cloud: compartamos ideas.",
            'contact.phone': 'Teléfono',
            'contact.email.value': 'im.hamlaoui@gmail.com',
            'contact.location': 'Ubicación',
            'contact.location.value': 'La Rochelle, Francia',
            'contact.quick.title': '¿Prefieres un email directo?',
            'contact.quick.desc': 'Abre tu cliente de correo con un mensaje prellenado',
            'contact.quick.btn': 'Abrir cliente de correo',
            "contact.form.name": "Nombre (opcional)",
            'contact.form.email': 'Email',
            "contact.form.subject": "Asunto (opcional)",
            'contact.form.subject.ph': 'Asunto de tu mensaje',
            'contact.form.message': 'Mensaje',
            'contact.form.message.ph': 'Tu mensaje...',
            'contact.form.send': 'Enviar',
            "footer.copy": "© 2026 Ilias Hamlaoui",
            "notif.success": "Tu mensaje ha sido aceptado para su envío. Gracias.",
            "notif.error": "Mensaje no enviado. Inténtalo de nuevo o utiliza el enlace de correo.",
            'notif.fallback': 'Abriendo tu cliente de correo...',
            'quick.mailto.subject': 'Contacto%20desde%20tu%20Portfolio',
            'quick.mailto.body': 'Hola%20Ilias%2C%0A%0AMe%20pongo%20en%20contacto%20desde%20tu%20portfolio.%0A%0A',
            "hero.intro": "Estudiante de ciberseguridad en Limoges con experiencia en desarrollo full stack. Me interesan la seguridad de sistemas, los contenedores y las aplicaciones cloud.",
            "hero.work": "Explorar mis proyectos",
            "hero.profile": "Mi perfil en PDF",
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
            "projects.source": "Código fuente",
            "contact.name.ph": "¿Cómo te llamas?",
            "contact.form.heading": "Déjame un mensaje",
            "contact.privacy": "Tu email y mensaje solo se utilizan para responderte. Nombre y asunto opcionales. Conservación: 6 meses después del último intercambio.",
            "contact.privacy.link": "Uso de datos y tus derechos",
            "footer.privacy": "Privacidad",
            "footer.legal": "Aviso legal",
            "contact.sending": "Enviando…",
            "notif.unavailable": "El formulario no está disponible temporalmente. Usa el enlace de correo; tu mensaje se conserva.",
            "notif.limited": "Demasiados intentos. Inténtalo más tarde o usa el enlace de correo.",
            "notif.invalid": "Revisa los campos: email válido y mensaje de 10 a 5.000 caracteres obligatorios.",
            "notif.uncertain": "No se pudo confirmar el envío. Tu texto se conserva. Evita reenviar el mismo mensaje inmediatamente.",
            "theme.label": "Apariencia",
            "theme.system": "Sistema",
            "theme.light": "Claro",
            "theme.dark": "Oscuro",
            "projects.virus.art": "Ilustración del proyecto",
            "profile.preview": "Vista previa del perfil · página 1 de 2",
            "meta.title": "Ilias Hamlaoui | Ciberseguridad y Desarrollo",
            "meta.description": "Ilias Hamlaoui — estudiante del máster CRYPTIS en la Universidad de Limoges. Ciberseguridad, contenedorización, cloud y desarrollo full stack.",
            "ui.language.title": "Cambiar idioma",
            "projects.source.title": "Ver el código",
            "projects.immersion.zoom": "Immersion — ver la imagen completa",
            "projects.cyber360.zoom": "Cyber360 — ver la imagen completa",
            "projects.cocovoit.zoom": "CoCoVoit — ver la imagen completa",
            "projects.status.prototype": "Prototipo",
            "profile.open": "Abrir el perfil PDF completo",
            "contact.email.ph": "tu@email.com",
            "alt.portrait": "Retrato de Ilias Hamlaoui",
            "alt.immersion": "Immersion — juego de plataformas 2D",
            "alt.cyber360": "Cyber360 — panel de ciberseguridad",
            "alt.cocovoit": "CocoLaRochelle — búsqueda de viajes compartidos",
            "alt.virus": "Virus — C / GTK, ilustración minimalista con un icono de archivo",
            "alt.profile": "Vista previa de la primera página del perfil profesional de Ilias Hamlaoui",
        }
    };

    // =====================================================
    // LANGUAGE SWITCHING ENGINE
    // =====================================================
    let currentLang = 'fr';
    try {
        const saved = JSON.parse(localStorage.getItem('portfolio-language') || 'null');
        if (saved && saved.expires > Date.now()) currentLang = saved.value;
        else localStorage.removeItem('portfolio-language');
        localStorage.removeItem('portfolio-lang');
    } catch {}
    if (!translations[currentLang]) currentLang = 'fr';

    function setLanguage(lang, remember = false) {
        if (!translations[lang]) return;
        currentLang = lang;
        if (remember) { try { localStorage.setItem('portfolio-language', JSON.stringify({ value: lang, expires: Date.now() + 180 * 86400000 })); } catch {} }

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
            if (dict[el.dataset.i18nAria] !== undefined) el.setAttribute('aria-label', dict[el.dataset.i18nAria]);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            if (dict[el.dataset.i18nAlt] !== undefined) el.alt = dict[el.dataset.i18nAlt];
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            if (dict[el.dataset.i18nTitle] !== undefined) el.title = dict[el.dataset.i18nTitle];
        });
        if (dict['meta.title']) document.title = dict['meta.title'];
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && dict['meta.description']) metaDescription.content = dict['meta.description'];
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

            const label = toggleBtn.querySelector('.lang-label');
            const meta = langMeta[lang];
            if (meta) {


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
            if (lang) setLanguage(lang, true);
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
    let pending = false;
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (pending || !contactForm.reportValidity()) return;
        const payload = Object.fromEntries(new FormData(contactForm));
        Object.keys(payload).forEach(key => payload[key] = payload[key].trim());
        if (payload.message.length < 10) { showStatus('invalid', 'error'); return; }
        const serialized = JSON.stringify(payload);
        const button = contactForm.querySelector('.btn-submit');
        const fields = [...contactForm.querySelectorAll('input, textarea')];
        pending = true; button.disabled = true;
        fields.forEach(field => field.readOnly = true);
        contactForm.setAttribute('aria-busy', 'true');
        button.querySelector('[data-i18n]').textContent = translations[currentLang]['contact.sending'];
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 20000);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST', credentials: 'omit', cache: 'no-store',
                headers: { 'Content-Type': 'application/json' },
                body: serialized, signal: controller.signal
            });
            let result;
            try { result = await response.json(); } catch { result = { code: 'unavailable' }; }
            if (response.ok && result.success === true && result.code === 'accepted') {
                showStatus('success', 'success'); contactForm.reset();
            } else {
                const code = ['limited', 'invalid', 'uncertain', 'unavailable'].includes(result.code) ? result.code : 'unavailable';
                showStatus(code, 'error');
            }
        } catch { showStatus('uncertain', 'error'); }
        finally {
            clearTimeout(timeout); pending = false; button.disabled = false;
            fields.forEach(field => field.readOnly = false);
            contactForm.removeAttribute('aria-busy');
            button.querySelector('[data-i18n]').textContent = translations[currentLang]['contact.form.send'];
        }
    });
    function showStatus(key, type) {
        const status = document.getElementById('form-status');
        status.textContent = translations[currentLang]['notif.' + key];
        status.className = type;
    }
});

// Progressive motion: the document remains readable without JavaScript.
(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const targets = document.querySelectorAll('.project-card, .about-layout, .journey-grid, .profile-section, .skill-category, .contact-wrapper');
    let observer;
    function updateMotion() {
        observer?.disconnect();
        targets.forEach(el => el.classList.remove('reveal-waiting'));
        if (preference.matches || !('IntersectionObserver' in window)) return;
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('reveal-waiting');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px 0px 40px 0px' });
        targets.forEach(el => {
            el.classList.add('reveal-item');
            if (el.getBoundingClientRect().top > innerHeight) {
                el.classList.add('reveal-waiting');
                observer.observe(el);
            }
        });
    }
    // Keyboard navigation must never land in hidden content.
    document.addEventListener('focusin', event => {
        event.target.closest('.reveal-waiting')?.classList.remove('reveal-waiting');
    });
    preference.addEventListener('change', updateMotion);
    updateMotion();
})();
