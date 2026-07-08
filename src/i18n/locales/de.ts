import type { LocaleContent } from "../types";
import { PROJECT_IMAGES } from "./en";

export const de: LocaleContent = {
  meta: {
    title: "Ameni Aouiti | Software-Ingenieurin - Full Stack & Mobile Developer",
    loading: "Portfolio wird geladen...",
  },
  nav: {
    about: "Über mich",
    stack: "Stack",
    projects: "Projekte",
    journey: "Werdegang",
    devops: "DevOps",
    certifications: "Zertifikate",
    education: "Studium",
    contact: "Kontakt",
    cv: "CV",
    downloadCv: "CV herunterladen",
    role: "Software-Ingenieurin - Full Stack & Mobile Developer",
  },
  hero: {
    jobTitle: "Software-Ingenieurin — Full Stack & Mobile Developer",
    introHello: "Hallo, ich bin Ameni —",
    introRest:
      "Software-Ingenieurin mit Sitz in Tunesien, verfügbar für Remote-, Vor-Ort- und Freelance-Projekte. Ich entwickle elegante Mobile-Apps und skalierbare Webplattformen mit React Native, Flutter, React.js & NestJS.",
    explore: "PROJEKTE ENTDECKEN",
    contact: "KONTAKT",
    mobileLabel: "Mobile App",
    webLabel: "Web-Plattform",
  },
  about: {
    chapter: "KAPITEL 01 — PROFIL",
    title: "Software-Ingenieurin",
    titleLine2: "spezialisiert auf Mobile & Full-Stack,",
    titleLine3: "KI-Integration & End-to-End-Delivery",
    bio: "Software-Ingenieurin mit Leidenschaft für Mobile- und Full-Stack-Entwicklung, KI-Integration und den vollständigen Lebenszyklus von Web- und Mobile-Anwendungen — von der Anforderungsaufnahme und Architekturkonzeption bis zu Deployment und Wartung. Mit über 2 Jahren Erfahrung im Aufbau von Produkten mit React Native, Flutter, NestJS, Next.js und React.js habe ich in FinTech, E-Commerce, Reise und KI gearbeitet — sowohl eigenständig als auch in Agile/Scrum-Teams.",
    availability: "Offen für Remote, vor Ort & Freelance-Projekte",
    highlights: [
      "End-to-End-Lieferung produktiver Mobile- & Web-Apps mit React Native, Flutter und NestJS.",
      "Erfahrung als Alleinentwicklerin strategischer Produkte von der Idee bis zum Cloud-Deployment.",
      "CI/CD, Docker, TypeScript und saubere Architektur für skalierbaren, wartbaren Code.",
    ],
    diploma: "ESPRIT",
    role: "Software-Ingenieurin",
  },
  tech: {
    chapter: "KAPITEL 02 — EXPERTISE",
    title: "Kerntechnologien",
    subtitle: "Mobile, Web, Backend, Datenbanken, DevOps, Cloud und Echtzeit — der Stack hinter meinen Projekten.",
    items: [
      { label: "React Native", desc: "Cross-Platform Mobile (Expo)" },
      { label: "Flutter", desc: "iOS & Android Apps (MVVM)" },
      { label: "Kotlin & SwiftUI", desc: "Natives Android & iOS" },
      { label: "React.js / Next.js", desc: "Moderne Web-Apps & SSR" },
      { label: "NestJS", desc: "Skalierbares Node.js-Backend" },
      { label: "TypeScript", desc: "Typsicher Full-Stack-Code" },
      { label: "PostgreSQL", desc: "Relationale Datenbanken" },
      { label: "MongoDB", desc: "NoSQL & Dokumentenspeicher" },
      { label: "Redis", desc: "Caching & Echtzeitdaten" },
      { label: "Docker", desc: "Containerisierung" },
      { label: "Kubernetes", desc: "Orchestrierung & Skalierung" },
      { label: "AWS / Vercel", desc: "Cloud-Deployment" },
      { label: "Firebase", desc: "Push, Analytics & Auth" },
      { label: "Socket.IO", desc: "Echtzeit-Messaging" },
      { label: "Stripe", desc: "Zahlungen & Abrechnung" },
      { label: ".NET / C#", desc: "Enterprise Web & MAUI" },
    ],
  },
  projects: {
    chapter: "KAPITEL 03 — PROJEKTE",
    title: "Realisierte Projekte",
    subtitle: "Anwendungen in Mobile, Web, FinTech, E-Commerce und KI.",
    details: "DETAILS",
    explore: "Entdecken",
    data: [

      {
        id: 1,
        title: "Sabeel Ecosystem",
        category: "Web & Mobile · Umrah",
        description:
          "Intelligentes Umrah-Digital-Ökosystem — 4 verbundene Plattformen (Pilger- & Guide-Apps, Agenturportal, Admin-Backoffice) für Pilger, Guides und Reiseagenturen.",
        long_description:
          "Sabeel ist ein intelligentes digitales Ökosystem für die Digitalisierung und integrierte Verwaltung von Umrah-Dienstleistungen. Vier verbundene Schnittstellen — Sabeel App (Pilger), Sabeel Guide, Sabeel Agence Web-Portal und Admin-Backoffice — teilen ein NestJS-Backend mit PostgreSQL (TypeORM). Anforderungsanalyse, UML-Modellierung und Agile/Scrum-Lieferung (19 Wochen, 5 Releases). JWT/RBAC-Sicherheit mit dynamischem Rollenwechsel, OTP-Wiederherstellung, Guide- und Agentur-Onboarding mit Cloudinary-Dokumentenspeicher. Kommerzielle Ebene: Umrah-Paketkataloge, Reservierungen, Amadeus-API-Integration und Bewertungssystem. Echtzeit-Socket.io-Messaging, Expo-Push-Benachrichtigungen und WebRTC-Audioanrufe. Feldoperationen: Konvoi-/Gruppenverwaltung, Mapbox-GPS-Tracking und SOS-Alerts. Finanzmodul: digitales Wallet, Buchungs-Ledger und Stripe-Connect-Zahlungen. RAG-Konversationsassistent (Gemini API + Qdrant) mit Text und Sprache, spirituelle Tools (Qibla, Adhan, Tasbih, Koran). Backend auf Render deployed; API-Validierung via Swagger und Postman.",
        image: PROJECT_IMAGES.Sabeel,
        technologies: "NestJS, React.js, React Native, Expo, PostgreSQL, TypeORM, Socket.IO, WebRTC, Mapbox, Stripe Connect, Gemini API, Qdrant, Cloudinary, Amadeus API, Render, TypeScript",
        github_url: "https://github.com/orgs/Sabil-app/repositories",
        demo_url: "https://canva.link/woz3q4gfzbuxa6w",
        report_url: "/rapport.pdf",
        featured: true,
      },

      {
        id: 2,
        title: "Sendit",
        category: "Web & Mobile · Logistik",
        description:
          "Paketlieferungs-App mit dynamischem Rollenwechsel (Kunde, Reisender, Fahrer) und Stripe-Zahlungen.",
        long_description:
          "Eigenständige End-to-End-Entwicklung (Mobile + Backend) einer Paketlieferungs-App. Architektur für dynamischen Rollenwechsel in einem Konto und Reservierungs-Workflows. Echtzeit-Messaging und Sprachanrufe (Socket.IO), sichere Dateispeicherung (MinIO), Geolokalisierung (Mapbox), Twilio-Kommunikation und Stripe-Zahlungen mit automatischer Provisionsaufteilung.",
        image: PROJECT_IMAGES.Sendit,
        technologies: "React Native, NestJS, MongoDB, Stripe, Socket.IO, Mapbox, Twilio, MinIO, Docker",
        github_url: "#",
        demo_url: "#",
        featured: true,
      },

      {
        id: 3,
        title: "PrimeProfs",
        category: "Mobile · Bildung",
        description:
          "Bildungs-App mit Echtzeit-Messaging, OAuth2 und KI-Chatbot (Ollama – Llama 3).",
        long_description:
          "Full-Stack-Mobile-Entwicklung im Scrum-Team. Echtzeit-Messaging (Socket.IO) und sichere OAuth2-Authentifizierung. Integration von Stripe-Zahlungen und einem KI-Assistenten mit Ollama (Llama 3) zur Unterstützung der Lernenden.",
        image: PROJECT_IMAGES.PrimeProfs,
        technologies: "Flutter, NestJS, PostgreSQL, Ollama, Stripe, Socket.IO, OAuth2, Scrum",
        github_url: "https://github.com/primeprofs12",
        demo_url: "https://canva.link/nvczoxv8meqoqno",
        featured: true,
      },

      {
        id: 4,
        title: "Pulpe Tech · Flexy Bank",
        category: "Mobile · FinTech",
        description:
          "White-Label-Mobile-Banking — KYC, Biometrie, virtuelle Karten und Bridge API.",
        long_description:
          "Full-Stack-Mobile-Praktikantin bei Flexy Bank, einer anpassbaren Banking-App für Partnerbanken. Mitwirkung an Flutter-Funktionen (MVVM): biometrische & Passcode-Authentifizierung, virtuelle Kartenverwaltung (sperren, PIN, Guthaben), Onboarding für Tunesier im Ausland mit Fernkontoeröffnung via Bridge API, internationale Überweisungen und Multi-Währung. Integration von Onfido KYC, Ory-Authentifizierung, sicheren Zahlungspipelines und Twilio SMS — NestJS & PostgreSQL Backend.",
        image: PROJECT_IMAGES.PulpeTech,
        technologies: "Flutter, NestJS, PostgreSQL, Onfido, Ory, Bridge, Twilio, Docker",
        github_url: "https://github.com/orgs/FlexyBancIntership/repositories",
        demo_url: "https://canva.link/yzn3zaar2ki3pdp",
        featured: true,
      },

      {
        id: 5,
        title: "GainUP",
        category: "Mobile · Sport & KI",
        description:
          "Plattformübergreifende Sport-Coaching-App mit nativen Android/iOS-Clients und KI-Trainingsplänen.",
        long_description:
          "Intelligente Sport-Coaching-App auf mehreren Plattformen. Native Android-App (Kotlin, Jetpack Compose) und iOS-App (SwiftUI) mit Flutter-Backoffice für Trainer. KI-Funktionen mit Mistral & Gemini auf NestJS & MongoDB, Firebase für Benachrichtigungen und Analysen.",
        image: PROJECT_IMAGES.GainUP,
        technologies: "Kotlin, SwiftUI, Flutter, NestJS, MongoDB, Mistral, Gemini, Firebase",
        github_url: "https://github.com/orgs/GainUp-app/repositories",
        demo_url: "#",
        featured: false,
      },

      {
        id: 6,
        title: "Kurubis Uniforme",
        category: "Web · B2B E-Commerce",
        description:
          "B2B E-Commerce-Plattform für Arbeitskleidung — Alleinentwicklerin von Design bis Cloud-Deployment.",
        long_description:
          "Alleinentwicklerin einer B2B-Plattform für Berufskleidung. Anforderungsanalyse und branchenspezifische Kataloge mit erweitertem Warenkorb/Angebotssystem. Admin-Backoffice, Kundenportal und Echtzeit-Messaging mit RBAC. Deployment und Wartung auf Vercel, Supabase und Cloudinary.",
        image: PROJECT_IMAGES.Kurubis,
        technologies: "Next.js, React, TypeScript, Supabase, PostgreSQL, Tailwind CSS, Cloudinary",
        github_url: "https://github.com/AmeniAouiti/Kurubis-uniforme-de-tunisie",
        demo_url: "https://kurubis-uniforme-de-tunisie-lwxh.vercel.app/",
        featured: false,
      },

      {
        id: 7,
        title: "GoTogether",
        category: "Web · Reisen",
        description:
          "Kollaborative Gruppenreise-Plattform mit KI-Empfehlungen und integriertem Marketplace.",
        long_description:
          "Co-Entwicklung einer kollaborativen Reiseplanungsplattform mit KI-Empfehlungen und Marketplace. Gruppen-Messaging mit niedriger Latenz über WebSockets und Kernmodul für Reiseplanung und Itineraries. Dynamische Gruppenrollen, Stripe-Zahlungen, Social Feed, Gamification, interaktive Karten und MFA-Sicherheit.",
        image: PROJECT_IMAGES.GoTogether,
        technologies: "Next.js 14, MongoDB, Stripe, TypeScript, Tailwind CSS, WebSockets, Scrum",
        github_url: "https://github.com/MohamedAliTrabelsiSE/gotogether",
        demo_url: "#",
        period: "2024 — Heute",
        type_label: "Teamprojekt",
        featured: true,
      },

      {
        id: 8,
        title: "SafeSiteConnect",
        category: "Mobile · Bau",
        description:
          "Baustellen-Management-App mit JWT-Authentifizierung und QR-Validierung vor Ort.",
        long_description:
          "Web- und Mobile-Anwendung für Baustellenmanagement und -überwachung. Containerisiertes NestJS-Backend mit JWT und rollenbasierter Zugriffskontrolle. Schnelle QR-Code-Validierungen für Geräte, Personal und Kontrollpunkte direkt auf der Baustelle.",
        image: PROJECT_IMAGES.SafeSiteConnect,
        technologies: "Flutter, NestJS, MongoDB, JWT, QR Code, Docker",
        github_url: "#",
        demo_url: "#",
        featured: false,
      },

      {
        id: 9,
        title: "MedisApp",
        category: "Mobile · Multiplattform",
        description:
          "Essensreservierungs-App für Unternehmen mit .NET MAUI und Blazor.",
        long_description:
          "Multiplattform-Mobile- und Desktop-App für Essensreservierungen im Firmenrestaurant mit .NET MAUI und Blazor Razor Components. Intuitive Bestelloberfläche für Mitarbeiter und Verwaltungs-Dashboards für Administratoren, mit SQL Server als Backend.",
        image: PROJECT_IMAGES.MedisApp,
        technologies: ".NET MAUI, C#, Blazor, SQL Server, HTML5",
        github_url: "#",
        demo_url: "#",
        featured: false,
      },

      {
        id: 10,
        title: "Sotacib Ciment",
        category: "Mobile · B2B Zement",
        description:
          "Mobile-App für POS-Verwaltung und Verkaufsverfolgung — entwickelt in einem 24h-Hackathon.",
        long_description:
          "Full-Stack-Mobile-Entwicklung während eines 24-Stunden-Hackathons für SOTACIB KAIROUAN (Zementindustrie). Flutter-App mit Direction- und Commercial-Rollen: interaktive Kartographie mit Google Maps, Besuchsplanung, Preisentwicklungs-Charts und Admin-Dashboards. NestJS & MongoDB REST-API, Firebase-Integration, Scrum-Methodik und Jira-Tracking — end-to-end innerhalb des Hackathon-Zeitfensters geliefert.",
        image: PROJECT_IMAGES.Sotacib,
        technologies: "Flutter, NestJS, MongoDB, Google Maps API, Firebase, REST API, Jira, Scrum",
        github_url: "https://github.com/ameniaouiti12/hackathon",
        demo_url: "#",
        period: "24h Hackathon",
        type_label: "Teamprojekt",
        featured: false,
      },

      {
        id: 11,
        title: "CHU Réseau — IT-Überwachung",
        category: "Infrastruktur · Systemadministration",
        description:
          "Netzwerk-Audit, Architekturmodellierung und zentrale IT-Park-Überwachung mit Prometheus & Grafana in einem Universitätskrankenhaus.",
        long_description:
          "Abschlusspraktikumsprojekt (ISET Sfax) in der IT-Abteilung (Unité SCE Informatique) des CHU Habib Bourguiba Sfax. Projektumfang: Studie und Bewertung des Krankenhausnetzwerks, Netzwerkarchitektur-Modellierung und Implementierung einer IT-Park-Überwachungslösung. Infrastruktur-Audit, Konzeption der logischen und physischen Netzwerkarchitektur, dann Deployment von Prometheus mit Grafana-Dashboards und Exportern (SNMP, Node, Blackbox, Windows) für Echtzeit-Überwachung von Servern und Netzwerkgeräten. Vom Krankenhaus-IT-Dienst validiert — alle Projektziele erreicht.",
        image: PROJECT_IMAGES.NetworkAdmin,
        technologies: "Prometheus, Grafana, SNMP Exporter, Node Exporter, Blackbox Exporter, VMware, Ubuntu Server, Cisco, Windows Server",
        github_url: "#",
        demo_url: "#",
        report_url: "/FINAL.pdf",
        featured: false,
        period: "Feb 2023 — Jun 2023",
        type_label: "Praktikumsprojekt",
      },
    ],
  },
  experience: {
    chapter: "KAPITEL 05 — WERDEGANG",
    title: "Berufserfahrung",
    viewAttestation: "Bescheinigung ansehen",
    attestationNote: "Nur zur Ansicht — Herunterladen, Drucken und Erfassen sind deaktiviert.",
    attestationClose: "Schließen",
    attestationLoadError: "Dieses Dokument kann in der Vorschau nicht angezeigt werden.",
    attestationOpenNewTab: "In neuem Tab öffnen",
    data: [
      {
        id: 1,
        period: "15. Dez 2025 — 15. Jun 2026",
        company: "BrandWood&CO",
        location: "Tunis, Tunesien",
        role: "Praktikantin Software Engineering — Sabeel Umrah-Ökosystem (PFE)",
        type_label: "Abschlusspraktikum (PFE)",
        description:
          "Im Entwicklungsteam von BrandWood&CO (Scrum, Betreuung Mohamed Rayen Mosrati) End-to-End-Konzeption und -Entwicklung von Sabeel — einem intelligenten digitalen Ökosystem für integriertes Umrah-Service-Management für Pilger, Guides und Reiseagenturen.",
        highlights: [
          "Anforderungsanalyse, UML-Modellierung (Anwendungsfälle, Klassen, Sequenzen), logische/physische Architektur und Agile/Scrum-Planung (19 Wochen, 5 Releases).",
          "Vier verbundene Plattformen — Sabeel App (Pilger), Sabeel Guide, Sabeel Agence Web-Portal und Admin-Backoffice — auf NestJS-Backend mit PostgreSQL (TypeORM).",
          "JWT/RBAC-Sicherheit, dynamischer Rollenwechsel, OTP-Wiederherstellung, Guide- & Agentur-Onboarding mit Admin-Validierung, sichere Dokumente via Cloudinary.",
          "Kommerzielles Modul: Umrah-Paketkataloge, Reservierungen, Amadeus-API-Integration, digitales Wallet, Buchungs-Ledger und Stripe-Connect-Zahlungen.",
          "Echtzeit-Socket.io-Messaging, Expo-Push-Benachrichtigungen, WebRTC-Audioanrufe, Mapbox-GPS-Konvoi-Tracking und SOS-Alerts.",
          "RAG-Konversationsassistent (Gemini API + Qdrant) mit Text/Sprache und spirituellen Tools (Qibla, Adhan, Tasbih, Koran).",
          "Backend-Deployment auf Render, Cloudinary-Speicher, API-Validierung (Swagger, Postman) und Pilotvalidierung mit Beta-Pilgern und Partneragenturen.",
        ],
        technologies:
          "NestJS, React.js, React Native, Expo, PostgreSQL, TypeORM, Socket.IO, WebRTC, Mapbox, Stripe Connect, Gemini API, Qdrant, Cloudinary, Amadeus API, Render, TypeScript",
        logo: "/logos/brandwood.png",
        attestation: "/certifications/Attestation_de_Stage_Ameni_AOUITI.pdf",
        attestation_label: "Praktikumsbescheinigung",
      },
      {
        id: 2,
        period: "Apr 2024 — Nov 2025",
        company: "BrandWood&CO",
        location: "Tunis, Tunesien",
        role: "Full Stack JS Mobile/Web Entwicklerin",
        type_label: "Teilzeit",
        description:
          "Teilzeit-Entwicklung und Wartung von 3+ produktiven Web- und Mobile-Apps im Agile/Scrum-Umfeld — sichere NestJS-APIs, JWT/RBAC und relationale & NoSQL-Datenbanken.",
        highlights: [
          "Automatisierte CI/CD-Pipelines (GitHub Actions), ~20 % kürzere Deployments.",
          "Bessere Codequalität durch TypeScript und Code Reviews, ~15 % weniger Produktionsbugs.",
          "Parallele eigenständige Lieferung mehrerer Anwendungen.",
        ],
        technologies:
          "NestJS, React.js, React Native, TypeScript, PostgreSQL, MySQL, MongoDB, JWT, Docker, GitHub Actions, Scrum",
        logo: "/logos/brandwood.png",
        attestation: "/certifications/Attestation_de_Travail_Ameni_AOUITI.pdf",
        attestation_label: "Arbeitsbescheinigung",
      },
      {
        id: 3,
        period: "Jun 2025 — Sep 2025",
        company: "Pulpe Tech (FinTech)",
        location: "Tunis, Tunesien",
        role: "Full Stack Mobile Praktikantin",
        type_label: "Teamprojekt",
        description:
          "Mitglied eines Flutter/NestJS-Teams bei Flexy Bank, einer anpassbaren White-Label-Banking-App für Partnerbanken.",
        highlights: [
          "Integration von Onfido KYC und Ory MFA für sicheres Onboarding.",
          "Sichere Zahlungspipelines und automatisierte Twilio-SMS-Kommunikation.",
        ],
        technologies: "Flutter, NestJS, PostgreSQL, Onfido, Ory, Bridge, Twilio, Docker",
        logo: "/logos/pulpetech.png",
        attestation: "/certifications/att.png",
        attestation_label: "Praktikumsbescheinigung",
      },
      {
        id: 4,
        period: "Jun 2024 — Aug 2024",
        company: "Tunav",
        location: "Charguia 1, Tunis",
        role: "Full Stack Web Praktikantin",
        type_label: "Teamprojekt",
        description:
          "Entwicklung eines sicheren Dashboards und Multi-Rollen-Authentifizierung für eine Kunden- und Beschwerdemanagement-Web-App mit .NET Core und React.js im Scrum-Team.",
        highlights: [
          "RBAC-Konzept und Integration für den Schutz sensibler Daten.",
          "Dynamische React.js-Oberflächen und performante .NET Core REST-APIs.",
        ],
        technologies: ".NET Core, React.js, SQL Server, MVC, Docker, Postman, Git, Scrum",
        logo: "/logos/tunav.png",
        attestation: "/certifications/tunav.jpeg",
        attestation_label: "Praktikumsbescheinigung",
      },
      {
        id: 5,
        period: "Feb 2023 — Jun 2023",
        company: "CHU Habib Bourguiba",
        location: "Sfax, Tunesien",
        role: "Netzwerkadministratorin Praktikantin",
        type_label: "Ausbildungspraktikum · ISET Sfax",
        description:
          "In der Krankenhaus-IT-Abteilung (Unité SCE Informatique) Abschlussprojekt zur Netzwerkinfrastruktur-Studie, Architekturmodellierung und Implementierung einer IT-Park-Überwachungslösung — Praktikum vom 10. Feb. bis 25. Mai 2023 (ISET Sfax).",
        highlights: [
          "Audit, Bewertung und Modellierung der logischen/physischen Netzwerkarchitektur am CHU Habib Bourguiba Sfax.",
          "Implementierung einer zentralen IT-Park-Überwachungslösung mit Prometheus und Grafana.",
          "Deployment von Exportern (SNMP, Node, Blackbox, Windows) und Konfiguration von Alert-Dashboards für proaktives Monitoring.",
          "Arbeit mit VMware-Virtualisierung, Ubuntu Server und Cisco-Netzwerkgeräten.",
        ],
        technologies: "Prometheus, Grafana, SNMP Exporter, Node Exporter, Blackbox Exporter, VMware, Ubuntu Server, Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Emblem_of_Tunisia.svg/512px-Emblem_of_Tunisia.svg.png",
        attestations: [
          { src: "/certifications/chu-attestation-stage.png", label: "Praktikumsbescheinigung" },
          { src: "/certifications/chu-attestation-validation.png", label: "Projektvalidierungsbescheinigung" },
        ],
      },
      {
        id: 6,
        period: "10. Jan 2022 — 9. Feb 2022",
        company: "OACA — Flughafen Sfax Thyna",
        location: "Sfax, Tunesien",
        role: "Netzwerkadministratorin Praktikantin",
        type_label: "Ausbildungspraktikum",
        description:
          "Beim Amt für Zivilluftfahrt und Flughäfen (OACA) Implementierung einer sicheren Netzwerkzugangs-Authentifizierungslösung auf Windows Server 2016 für die Flughafeninfrastruktur.",
        highlights: [
          "Konfiguration sicherer Authentifizierung auf Windows Server 2016 mit Active Directory und Network Policy Server (NPS).",
          "RADIUS-Deployment für Netzwerkzugangskontrolle und Integration von VPN-Protokollen (IPSec, OpenVPN, WireGuard).",
          "Automatisierung von Konfigurations- und Wartungsaufgaben mit PowerShell in einer VMware-Umgebung.",
        ],
        technologies: "Windows Server 2016, Active Directory, NPS, RADIUS, VPN (IPSec, OpenVPN, WireGuard), VMware, PowerShell",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_OACA.png",
        attestation: "/certifications/oaca-attestation-stage.png",
        attestation_label: "Praktikumsbescheinigung",
      },
    ],
  },
  education: {
    chapter: "KAPITEL 04 — STUDIUM",
    title: "Akademischer Werdegang",
    subtitle: "Universitäres Studium in Informatik und Informationstechnologie.",
    data: [
      {
        id: 1,
        period: "2023 — 2026",
        school: "ESPRIT",
        location: "El Ghazala, Ariana",
        degree: "Nationales Ingenieurdiplom in Informatik",
        type_label: "Ingenieurstudium",
        description:
          "Private Hochschule für Ingenieurwesen und Technologie — Spezialisierung auf Software Engineering, Full-Stack-Entwicklung, verteilte Systeme und moderne Softwarearchitektur.",
        highlights: [
          "Abschlussprojekt (PFE): Sabeel — intelligentes digitales Ökosystem für integriertes Umrah-Service-Management (BrandWood&CO).",
          "Mobile- & Webentwicklung, Backend-Architektur, Cloud-Deployment und Agile/Scrum-Projektmanagement.",
          "Fokus auf skalierbare Anwendungen, DevOps-Praktiken und aufkommende Technologien (KI, Echtzeitsysteme).",
        ],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4e/Esprit_logo.svg/120px-Esprit_logo.svg.png",
      },
      {
        id: 2,
        period: "2020 — 2023",
        school: "ISET Sfax",
        location: "Sfax, Tunesien",
        degree: "Angewandter Bachelor in Informationstechnologie",
        type_label: "Angewandte Licence",
        description:
          "Höheres Institut für Technologische Studien — angewandtes Studium in Informationstechnologie, Netzwerken, Systemadministration und Software-Grundlagen.",
        highlights: [
          "Abschlussprojekt (PFE): Netzwerkinfrastruktur-Studie und IT-Park-Überwachung am CHU Habib Bourguiba (Prometheus & Grafana).",
          "Netzwerkarchitektur, Windows/Linux-Serveradministration, Virtualisierung (VMware) und Sicherheitsgrundlagen.",
          "Vom Krankenhaus-IT-Dienst validiert — alle Projektziele erreicht.",
        ],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Emblem_of_Tunisia.svg/80px-Emblem_of_Tunisia.svg.png",
      },
    ],
  },
  devops: {
    chapter: "KAPITEL 05 — INFRASTRUKTUR",
    title: "Engineering",
    titleLine2: "Mindset",
    bio: "Leidenschaft für Zuverlässigkeit, Performance und Observability. CI/CD-Pipelines, Container und Monitoring-Dashboards.",
    items: [
      ["Docker", "Containerisierung & Microservices"],
      ["Kubernetes", "Orchestrierung & Skalierung"],
      ["GitHub Actions", "CI/CD-Automatisierung"],
      ["Prometheus + Grafana", "Echtzeit-Monitoring"],
      ["AWS / Vercel", "Cloud-Infrastruktur"],
    ],
  },
  contact: {
    ctaText:
      "Software-Ingenieurin mit Leidenschaft für skalierbare Mobile- und Full-Stack-Anwendungen. Ich setze neue Technologien — KI, Cloud und Echtzeit-Systeme — in praxisnahe Softwarelösungen ein.",
    getInTouch: "Kontakt aufnehmen",
    emailLabel: "E-Mail",
    phone: "Telefon",
    address: "Standort",
    followMe: "Folgen Sie mir auf",
    linkedin: "LinkedIn",
    github: "GitHub",
    facebook: "Facebook",
  },
  certifications: {
    chapter: "KAPITEL 06 — ZERTIFIKATE",
    title: "Zertifizierungen",
    subtitle: "Professionelle Zertifikate in KI, Cloud und verteilten Technologien.",
    imageHint: "Anerkannte Zertifizierungen aus Industrieprogrammen.",
    items: [
      { id: "nvidia-diffusion", title: "Generative AI with Diffusion Models", issuer: "NVIDIA" },
      { id: "hashgraph", title: "Hashgraph Developer", issuer: "The Hashgraph Association" },
      { id: "aws-cloud", title: "AWS Academy Graduate — Cloud Foundations", issuer: "Amazon Web Services" },
      { id: "nvidia-predictive", title: "Applications of AI for Predictive Maintenance", issuer: "NVIDIA" },
    ],
  },
  footer: {
    copyright: "© {year} Ameni Aouiti.",
    rights: "Alle Rechte vorbehalten.",
    backToTop: "Nach oben",
  },
  cvModal: {
    title: "CV herunterladen",
    subtitle: "Wählen Sie Ihre Sprache",
    english: "Englisch",
    french: "Französisch",
    close: "Schließen",
  },
  modal: {
    github: "Auf GitHub ansehen",
    demo: "Live-Demo",
    report: "Bericht",
    about: "Über das Projekt",
    links: "Links",
    close: "Schließen",
  },
};
