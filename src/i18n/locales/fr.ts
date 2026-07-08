import type { LocaleContent } from "../types";
import { PROJECT_IMAGES } from "./en";

export const fr: LocaleContent = {
  meta: {
    title: "Ameni Aouiti | Ingénieure Logiciel - Full Stack & Mobile Developer",
    loading: "Chargement du portfolio...",
  },
  nav: {
    about: "À propos",
    stack: "Stack",
    projects: "Projets",
    journey: "Parcours",
    devops: "DevOps",
    certifications: "Certifs",
    education: "Études",
    contact: "Contact",
    cv: "CV",
    downloadCv: "Télécharger CV",
    role: "Ingénieure Logiciel - Full Stack & Mobile Developer",
  },
  hero: {
    jobTitle: "Ingénieure Logiciel — Full Stack & Mobile Developer",
    introHello: "Bonjour, je suis Ameni —",
    introRest:
      "ingénieure logiciel basée en Tunisie, disponible en remote, sur site et en freelance. Je conçois des applications mobiles élégantes et des plateformes web évolutives avec React Native, Flutter, React.js & NestJS.",
    explore: "VOIR MES PROJETS",
    contact: "ME CONTACTER",
    mobileLabel: "App Mobile",
    webLabel: "Plateforme Web",
  },
  about: {
    chapter: "CHAPITRE 01 — PROFIL",
    title: "Ingénieure logiciel",
    titleLine2: "spécialisée en mobile & full-stack,",
    titleLine3: "intégration d'IA & livraison end-to-end",
    bio: "Ingénieure logiciel passionnée par le développement mobile et full-stack, l'intégration d'IA, et le cycle de vie complet des applications web et mobile — du recueil des besoins et de la conception d'architecture au déploiement et à la maintenance. Avec plus de 2 ans d'expérience à construire des produits avec React Native, Flutter, NestJS, Next.js et React.js, j'ai travaillé en FinTech, e-commerce, voyage et IA, aussi bien en autonomie qu'au sein d'équipes Agile/Scrum.",
    availability: "Disponible en remote, sur site & en freelance",
    highlights: [
      "Livraison de bout en bout d'applications mobile & web en production avec React Native, Flutter et NestJS.",
      "Expérience en tant que développeuse unique sur des produits stratégiques, de l'idéation au déploiement cloud.",
      "CI/CD, Docker, TypeScript et architectures propres pour un code scalable et maintenable.",
    ],
    diploma: "ESPRIT",
    role: "Ingénieure logiciel",
  },
  tech: {
    chapter: "CHAPITRE 02 — EXPERTISE",
    title: "Technologies clés",
    subtitle: "Mobile, web, backend, bases de données, DevOps, cloud et temps réel — le stack de mes projets.",
    items: [
      { label: "React Native", desc: "Mobile cross-platform (Expo)" },
      { label: "Flutter", desc: "Apps iOS & Android (MVVM)" },
      { label: "Kotlin & SwiftUI", desc: "Mobile natif Android & iOS" },
      { label: "React.js / Next.js", desc: "Web moderne & SSR" },
      { label: "NestJS", desc: "Backend Node.js scalable" },
      { label: "TypeScript", desc: "Code full-stack typé" },
      { label: "PostgreSQL", desc: "Bases relationnelles" },
      { label: "MongoDB", desc: "NoSQL & documents" },
      { label: "Redis", desc: "Cache & données temps réel" },
      { label: "Docker", desc: "Conteneurisation" },
      { label: "Kubernetes", desc: "Orchestration & scaling" },
      { label: "AWS / Vercel", desc: "Déploiement cloud" },
      { label: "Firebase", desc: "Push, analytics & auth" },
      { label: "Socket.IO", desc: "Messagerie temps réel" },
      { label: "Stripe", desc: "Paiements & facturation" },
      { label: ".NET / C#", desc: "Web entreprise & MAUI" },
    ],
  },
  projects: {
    chapter: "CHAPITRE 03 — RÉALISATIONS",
    title: "Projets réalisés",
    subtitle: "Applications concrètes en mobile, web, FinTech, e-commerce et IA.",
    details: "DÉTAILS",
    explore: "Explorer",
    data: [

      {
        id: 1,
        title: "Sabeel Ecosystem",
        category: "Web & Mobile · Omra",
        description:
          "Écosystème numérique intelligent Omra — 4 plateformes connectées (apps pèlerin & guide, portail agence, back-office admin) pour pèlerins, guides et agences.",
        long_description:
          "Sabeel est un écosystème numérique intelligent pour la digitalisation et la gestion intégrée des services liés à l'Omra. Quatre interfaces connectées — Sabeel App (pèlerins), Sabeel Guide (guides), portail web Sabeel Agence et back-office d'administration — partagent un backend NestJS avec PostgreSQL (TypeORM). Analyse des besoins, modélisation UML et livraison Agile/Scrum (19 semaines, 5 releases). Sécurité JWT/RBAC avec changement de rôle dynamique, récupération OTP, onboarding et validation administrative des guides et agences, stockage sécurisé des documents via Cloudinary. Couche commerciale : catalogues de packs Omra, réservations, intégration API Amadeus et système d'évaluation. Messagerie temps réel Socket.io, notifications push Expo et appels audio WebRTC. Opérations terrain : gestion des groupes/convois, suivi GPS Mapbox et alertes SOS. Module financier : portefeuille numérique (Wallet), registre comptable (Ledger) et paiements Stripe Connect. Assistant conversationnel RAG (API Gemini + Qdrant) en texte et voix, outils spirituels (Qibla, Adhan, Tasbih, Coran). Backend déployé sur Render ; validation API via Swagger et Postman.",
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
        category: "Web & Mobile · Logistique",
        description:
          "Application de mise en relation pour livraison de colis avec changement de rôle dynamique et paiements Stripe.",
        long_description:
          "Développement de bout en bout (mobile + backend) en autonomie. Conception du système de changement de rôle à la volée (client, voyageur, livreur) sur un même compte et des flux de réservation. Intégration de la messagerie/appels vocaux en temps réel (Socket.IO), du stockage de fichiers sécurisé (MinIO), de la géolocalisation (Mapbox), des communications Twilio et des paiements Stripe avec répartition automatique des commissions.",
        image: PROJECT_IMAGES.Sendit,
        technologies: "React Native, NestJS, MongoDB, Stripe, Socket.IO, Mapbox, Twilio, MinIO, Docker",
        github_url: "#",
        demo_url: "#",
        featured: true,
      },

      {
        id: 3,
        title: "PrimeProfs",
        category: "Mobile · Éducation",
        description:
          "Application éducative mobile avec messagerie temps réel, OAuth2 et chatbot IA (Ollama – Llama 3).",
        long_description:
          "Développeuse full-stack mobile en équipe Scrum. Développement de la messagerie en temps réel (Socket.IO) et intégration de l'authentification sécurisée OAuth2. Implémentation des passerelles de paiement Stripe et d'un assistant virtuel propulsé par l'IA (Ollama – Llama 3) pour accompagner les apprenants.",
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
          "Application bancaire mobile en marque blanche — KYC, biométrie, cartes virtuelles et API Bridge.",
        long_description:
          "Stagiaire développeuse mobile full stack sur Flexy Bank, application bancaire personnalisable pour les banques partenaires. Contribution aux fonctionnalités Flutter (MVVM) : authentification biométrique et passcode, gestion de cartes virtuelles (geler, PIN, solde), onboarding pour les Tunisiens à l'étranger avec ouverture de compte à distance via Bridge API, virements internationaux et multi-devises. Intégration KYC (Onfido), authentification avancée (Ory), pipelines de paiement sécurisés et SMS Twilio — backend NestJS & PostgreSQL.",
        image: PROJECT_IMAGES.PulpeTech,
        technologies: "Flutter, NestJS, PostgreSQL, Onfido, Ory, Bridge, Twilio, Docker",
        github_url: "https://github.com/orgs/FlexyBancIntership/repositories",
        demo_url: "https://canva.link/yzn3zaar2ki3pdp",
        featured: true,
      },

      {
        id: 5,
        title: "GainUP",
        category: "Mobile · Sport & IA",
        description:
          "Application de coaching sportif multiplateforme avec apps natives Android/iOS et plans IA.",
        long_description:
          "Application de coaching sportif intelligente multiplateforme. Développement des clients natifs Android (Kotlin, Jetpack Compose) et iOS (SwiftUI) avec un back-office Flutter pour les coachs. Intégration de fonctionnalités IA avec Mistral & Gemini sur un backend NestJS & MongoDB, et Firebase pour les notifications et l'analytique.",
        image: PROJECT_IMAGES.GainUP,
        technologies: "Kotlin, SwiftUI, Flutter, NestJS, MongoDB, Mistral, Gemini, Firebase",
        github_url: "https://github.com/orgs/GainUp-app/repositories",
        demo_url: "#",
        featured: false,
      },

      {
        id: 6,
        title: "Kurubis Uniforme",
        category: "Web · E-commerce B2B",
        description:
          "Plateforme e-commerce B2B pour vêtements professionnels — développeuse unique, de la conception au déploiement cloud.",
        long_description:
          "Développement de bout en bout en autonomie d'une plateforme e-commerce B2B spécialisée dans les vêtements professionnels. Analyse des besoins et modélisation du catalogue par métier avec système avancé de panier/devis. Création du back-office administrateur, du portail client et de la messagerie temps réel avec gestion des rôles (RBAC). Déploiement et maintenance sur Vercel, Supabase et Cloudinary.",
        image: PROJECT_IMAGES.Kurubis,
        technologies: "Next.js, React, TypeScript, Supabase, PostgreSQL, Tailwind CSS, Cloudinary",
        github_url: "https://github.com/AmeniAouiti/Kurubis-uniforme-de-tunisie",
        demo_url: "https://kurubis-uniforme-de-tunisie-lwxh.vercel.app/",
        featured: false,
      },

      {
        id: 7,
        title: "GoTogether",
        category: "Web · Voyage",
        description:
          "Plateforme collaborative de planification de voyages en groupe avec IA et marketplace intégrée.",
        long_description:
          "Co-développement d'une plateforme web collaborative de planification de voyages avec recommandations IA et marketplace intégrée. Conception et développement de la messagerie de groupe à faible latence via WebSockets et du module principal de gestion et planification des itinéraires. Inclut rôles dynamiques, paiements Stripe, fil social, gamification, cartographie interactive et sécurité MFA.",
        image: PROJECT_IMAGES.GoTogether,
        technologies: "Next.js 14, MongoDB, Stripe, TypeScript, Tailwind CSS, WebSockets, Scrum",
        github_url: "https://github.com/MohamedAliTrabelsiSE/gotogether",
        demo_url: "#",
        period: "2024 — Aujourd'hui",
        type_label: "Projet d'équipe",
        featured: true,
      },

      {
        id: 8,
        title: "SafeSiteConnect",
        category: "Mobile · BTP",
        description:
          "Application de gestion de chantiers avec authentification JWT et validations QR sur le terrain.",
        long_description:
          "Application web et mobile pour la gestion et le suivi de chantiers BTP. Backend NestJS conteneurisé avec authentification JWT et contrôle d'accès par rôles. Validations rapides par QR code pour le suivi des équipements, du personnel et des points de contrôle directement sur site.",
        image: PROJECT_IMAGES.SafeSiteConnect,
        technologies: "Flutter, NestJS, MongoDB, JWT, QR Code, Docker",
        github_url: "#",
        demo_url: "#",
        featured: false,
      },

      {
        id: 9,
        title: "MedisApp",
        category: "Mobile · Multiplateforme",
        description:
          "Application de réservation de repas en entreprise avec .NET MAUI et Blazor.",
        long_description:
          "Application mobile et desktop multiplateforme pour la réservation de repas au sein d'un restaurant d'entreprise, développée avec .NET MAUI et Blazor Razor Components. Expérience intuitive pour les employés et tableaux de bord de gestion des commandes pour l'administration, avec SQL Server.",
        image: PROJECT_IMAGES.MedisApp,
        technologies: ".NET MAUI, C#, Blazor, SQL Server, HTML5",
        github_url: "#",
        demo_url: "#",
        featured: false,
      },

      {
        id: 10,
        title: "Sotacib Ciment",
        category: "Mobile · B2B Ciment",
        description:
          "Application mobile de gestion des points de vente et suivi des ventes — réalisée en hackathon 24h.",
        long_description:
          "Développement full stack mobile lors d'un hackathon de 24 heures pour SOTACIB KAIROUAN (industrie du ciment). Application Flutter avec rôles Direction et Commercial : cartographie interactive Google Maps, planification des visites, graphiques d'évolution des prix et tableaux de bord admin. Backend API REST NestJS & MongoDB, intégration Firebase, méthodologie Scrum et suivi Jira — livré de bout en bout dans le délai du hackathon.",
        image: PROJECT_IMAGES.Sotacib,
        technologies: "Flutter, NestJS, MongoDB, Google Maps API, Firebase, API REST, Jira, Scrum",
        github_url: "https://github.com/ameniaouiti12/hackathon",
        demo_url: "#",
        period: "Hackathon 24h",
        type_label: "Projet d'équipe",
        featured: false,
      },

      {
        id: 11,
        title: "CHU Réseau — Supervision IT",
        category: "Infrastructure · Administration Système",
        description:
          "Audit réseau, modélisation d'architecture et supervision centralisée du parc informatique avec Prometheus & Grafana dans un CHU.",
        long_description:
          "Projet de fin d'études (ISET Sfax) au sein de l'Unité SCE Informatique du CHU Habib Bourguiba Sfax. Projet : étude et évaluation du réseau informatique, modélisation de l'architecture réseau et implémentation d'une solution de surveillance du parc informatique. Audit de l'infrastructure, conception de l'architecture logique et physique, puis déploiement de Prometheus avec tableaux de bord Grafana et exportateurs (SNMP, Node, Blackbox, Windows) pour la supervision en temps réel des serveurs et équipements réseau. Projet validé par le service informatique de l'hôpital — objectifs entièrement atteints.",
        image: PROJECT_IMAGES.NetworkAdmin,
        technologies: "Prometheus, Grafana, SNMP Exporter, Node Exporter, Blackbox Exporter, VMware, Ubuntu Server, Cisco, Windows Server",
        github_url: "#",
        demo_url: "#",
        report_url: "/FINAL.pdf",
        featured: false,
        period: "Fév 2023 — Juin 2023",
        type_label: "Projet de stage",
      },
    ],
  },
  experience: {
    chapter: "CHAPITRE 05 — PARCOURS",
    title: "Expérience professionnelle",
    viewAttestation: "Voir l'attestation",
    attestationNote: "Consultation uniquement — le téléchargement, l'impression et la capture sont désactivés.",
    attestationClose: "Fermer",
    attestationLoadError: "Impossible d'afficher ce document dans la visionneuse.",
    attestationOpenNewTab: "Ouvrir dans un nouvel onglet",
    attestationLoading: "Chargement du document...",
    data: [
      {
        id: 1,
        period: "15 Déc 2025 — 15 Juin 2026",
        company: "BrandWood&CO",
        location: "Tunis, Tunisie",
        role: "Stagiaire Ingénieure Logicielle — Écosystème Sabeel (PFE)",
        type_label: "Stage PFE · Fin d'études",
        description:
          "Au sein de l'équipe de développement BrandWood&CO (Scrum, encadrement M. Mohamed Rayen Mosrati), conception et développement de bout en bout de Sabeel — écosystème numérique intelligent pour la digitalisation et la gestion intégrée des services Omra au bénéfice des pèlerins, guides et agences de voyage.",
        highlights: [
          "Analyse et conception : recueil des besoins, modélisation UML (cas d'utilisation, classes, séquences), architecture logique/physique, planification Agile/Scrum (19 semaines, 5 releases).",
          "Quatre interfaces connectées — Sabeel App (pèlerins), Sabeel Guide, portail Sabeel Agence (web) et back-office admin — sur backend NestJS et PostgreSQL (TypeORM).",
          "Sécurité JWT/RBAC, changement de rôle dynamique, récupération OTP, onboarding et validation admin des guides/agences, documents sécurisés via Cloudinary.",
          "Gestion commerciale : catalogues de packs Omra, réservations, intégration API Amadeus, portefeuille Wallet, registre Ledger et paiements Stripe Connect.",
          "Messagerie Socket.io, notifications push Expo, appels audio WebRTC, suivi GPS Mapbox des convois et alertes SOS.",
          "Assistant RAG conversationnel (API Gemini + Qdrant) texte/voix et outils spirituels (Qibla, Adhan, Tasbih, Coran).",
          "Déploiement backend sur Render, stockage Cloudinary, validation API (Swagger, Postman) et phase pilote avec pèlerins bêta et agences partenaires.",
        ],
        technologies:
          "NestJS, React.js, React Native, Expo, PostgreSQL, TypeORM, Socket.IO, WebRTC, Mapbox, Stripe Connect, Gemini API, Qdrant, Cloudinary, Amadeus API, Render, TypeScript",
        logo: "/logos/brandwood.png",
        attestation: "/certifications/Attestation_de_Stage_Ameni_AOUITI.pdf",
        attestation_label: "Attestation de stage",
      },
      {
        id: 2,
        period: "Avr 2024 — Nov 2025",
        company: "BrandWood&CO",
        location: "Tunis, Tunisie",
        role: "Développeuse Full Stack JS Mobile/Web",
        type_label: "Temps partiel",
        description:
          "Développement et maintenance de plus de 3 applications web et mobiles en production au sein d'un environnement Agile/Scrum — APIs NestJS sécurisées, authentification JWT/RBAC et bases PostgreSQL, MySQL et MongoDB.",
        highlights: [
          "Mise en place de pipelines CI/CD automatisés (GitHub Actions), réduisant le temps de déploiement d'environ 20 %.",
          "Amélioration de la qualité du code via TypeScript, revues de code et bonnes pratiques, réduisant les bugs en production d'environ 15 %.",
          "Renforcement de la capacité de livraison en développant plusieurs applications en parallèle de manière autonome.",
        ],
        technologies:
          "NestJS, React.js, React Native, TypeScript, PostgreSQL, MySQL, MongoDB, JWT, Docker, GitHub Actions, Scrum",
        logo: "/logos/brandwood.png",
        attestation: "/certifications/Attestation_de_Travail_Ameni_AOUITI.pdf",
        attestation_label: "Attestation de travail",
      },
      {
        id: 3,
        period: "Juin 2025 — Sep 2025",
        company: "Pulpe Tech (FinTech)",
        location: "Tunis, Tunisie",
        role: "Stagiaire Développeuse Full Stack Mobile",
        type_label: "Travail d'équipe",
        description:
          "Membre d'une équipe Flutter/NestJS sur Flexy Bank, application bancaire mobile en marque blanche personnalisable pour les banques partenaires.",
        highlights: [
          "Intégration du KYC Onfido et de l'authentification multi-facteurs Ory, sécurisant le parcours d'onboarding.",
          "Contribution aux pipelines de paiement sécurisés et à la communication SMS automatisée via Twilio.",
        ],
        technologies: "Flutter, NestJS, PostgreSQL, Onfido, Ory, Bridge, Twilio, Docker",
        logo: "/logos/pulpetech.png",
        attestation: "/certifications/att.png",
        attestation_label: "Attestation de stage",
      },
      {
        id: 4,
        period: "Juin 2024 — Août 2024",
        company: "Tunav",
        location: "Charguia 1, Tunis",
        role: "Stagiaire Développeuse Full Stack Web",
        type_label: "Travail d'équipe",
        description:
          "Au sein d'une équipe pluridisciplinaire, développement d'un tableau de bord sécurisé et d'un système d'authentification multi-rôles pour une application web de gestion des clients et des réclamations (.NET Core, React.js, Scrum).",
        highlights: [
          "Conception et intégration d'un système RBAC pour sécuriser l'accès aux données sensibles.",
          "Création d'interfaces dynamiques React.js et d'API REST .NET Core pour le suivi des réclamations en temps réel.",
        ],
        technologies: ".NET Core, React.js, SQL Server, MVC, Docker, Postman, Git, Scrum",
        logo: "/logos/tunav.png",
        attestation: "/certifications/tunav.jpeg",
        attestation_label: "Attestation de stage",
      },
      {
        id: 5,
        period: "Fév 2023 — Juin 2023",
        company: "CHU Habib Bourguiba",
        location: "Sfax, Tunisie",
        role: "Stagiaire Administratrice Réseau",
        type_label: "Stage de formation · ISET Sfax",
        description:
          "Au sein de l'Unité SCE Informatique du CHU, projet de fin d'études sur l'étude du réseau informatique, la modélisation d'architecture et l'implémentation d'une solution de surveillance du parc informatique — stage du 10 février au 25 mai 2023 (ISET Sfax).",
        highlights: [
          "Étude, évaluation et modélisation de l'architecture logique/physique du réseau informatique du CHU Habib Bourguiba Sfax.",
          "Implémentation d'une solution de supervision centralisée du parc informatique avec Prometheus et Grafana.",
          "Déploiement des exportateurs (SNMP, Node, Blackbox, Windows) et configuration des tableaux de bord d'alerte pour une supervision proactive.",
          "Travail sur environnements virtualisés VMware, serveurs Ubuntu et équipements réseau Cisco.",
        ],
        technologies: "Prometheus, Grafana, SNMP Exporter, Node Exporter, Blackbox Exporter, VMware, Ubuntu Server, Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Emblem_of_Tunisia.svg/512px-Emblem_of_Tunisia.svg.png",
        attestations: [
          { src: "/certifications/chu-attestation-stage.png", label: "Attestation de stage" },
          { src: "/certifications/chu-attestation-validation.png", label: "Attestation de validation du projet" },
        ],
      },
      {
        id: 6,
        period: "10 Jan 2022 — 9 Fév 2022",
        company: "OACA — Aéroport Sfax Thyna",
        location: "Sfax, Tunisie",
        role: "Stagiaire Administratrice Réseau",
        type_label: "Stage de formation",
        description:
          "À l'Office de l'Aviation Civile et des Aéroports (OACA), mise en place d'une solution d'authentification sécurisée pour le contrôle d'accès réseau de l'infrastructure aéroportuaire.",
        highlights: [
          "Configuration de l'authentification sécurisée sur Windows Server 2016 avec Active Directory et Network Policy Server (NPS).",
          "Déploiement de RADIUS pour le contrôle d'accès réseau et intégration des protocoles VPN (IPSec, OpenVPN, WireGuard).",
          "Automatisation des tâches de configuration et maintenance avec PowerShell dans un environnement virtualisé VMware.",
        ],
        technologies: "Windows Server 2016, Active Directory, NPS, RADIUS, VPN (IPSec, OpenVPN, WireGuard), VMware, PowerShell",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_OACA.png",
        attestation: "/certifications/oaca-attestation-stage.png",
        attestation_label: "Attestation de stage",
      },
    ],
  },
  education: {
    chapter: "CHAPITRE 04 — ÉTUDES",
    title: "Parcours académique",
    subtitle: "Études universitaires en ingénierie informatique et technologies de l'information.",
    data: [
      {
        id: 1,
        period: "2023 — 2026",
        school: "ESPRIT",
        location: "El Ghazala, Ariana",
        degree: "Diplôme National d'Ingénieur en Informatique",
        type_label: "Cycle ingénieur",
        description:
          "École Privée des Hautes Études d'Ingénierie et de Technologie — spécialisation en génie logiciel, développement full-stack, systèmes distribués et architecture logicielle moderne.",
        highlights: [
          "Projet de fin d'études (PFE) : Sabeel — écosystème numérique intelligent pour la gestion intégrée des services Omra (BrandWood&CO).",
          "Développement mobile & web, architecture backend, déploiement cloud et gestion de projet Agile/Scrum.",
          "Focus sur les applications scalables, les pratiques DevOps et les technologies émergentes (IA, systèmes temps réel).",
        ],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4e/Esprit_logo.svg/120px-Esprit_logo.svg.png",
      },
      {
        id: 2,
        period: "2020 — 2023",
        school: "ISET Sfax",
        location: "Sfax, Tunisie",
        degree: "Licence Appliquée en Technologies de l'Information",
        type_label: "Licence appliquée",
        description:
          "Institut Supérieur des Études Technologiques — cursus appliqué en technologies de l'information, réseaux, administration système et fondamentaux du développement logiciel.",
        highlights: [
          "Projet de fin d'études (PFE) : étude du réseau informatique et supervision du parc IT au CHU Habib Bourguiba (Prometheus & Grafana).",
          "Architecture réseau, administration serveurs Windows/Linux, virtualisation (VMware) et fondamentaux de la sécurité.",
          "Projet validé par le service informatique de l'hôpital — objectifs entièrement atteints.",
        ],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Emblem_of_Tunisia.svg/80px-Emblem_of_Tunisia.svg.png",
      },
    ],
  },
  devops: {
    chapter: "CHAPITRE 05 — INFRASTRUCTURE",
    title: "État d'esprit",
    titleLine2: "ingénieur",
    bio: "Passionnée par la fiabilité, la performance et l'observabilité. Je construis des pipelines CI/CD, des applications conteneurisées et des tableaux de bord de monitoring.",
    items: [
      ["Docker", "Conteneurisation & Microservices"],
      ["Kubernetes", "Orchestration & Scaling"],
      ["GitHub Actions", "Automatisation CI/CD"],
      ["Prometheus + Grafana", "Monitoring temps réel"],
      ["AWS / Vercel", "Infrastructure cloud"],
    ],
  },
  contact: {
    ctaText:
      "Ingénieure logiciel passionnée par les applications mobiles et full-stack évolutives. J'aime appliquer les technologies émergentes — IA, cloud et systèmes temps réel — à des solutions concrètes.",
    getInTouch: "Me contacter",
    emailLabel: "Email",
    phone: "Téléphone",
    address: "Adresse",
    followMe: "Suivez-moi sur",
    linkedin: "LinkedIn",
    github: "GitHub",
    facebook: "Facebook",
  },
  certifications: {
    chapter: "CHAPITRE 06 — CERTIFICATIONS",
    title: "Certifications",
    subtitle: "Certifications professionnelles en IA, cloud et technologies distribuées.",
    imageHint: "Certificats professionnels validés par des programmes reconnus.",
    items: [
      { id: "nvidia-diffusion", title: "Generative AI with Diffusion Models", issuer: "NVIDIA" },
      { id: "hashgraph", title: "Hashgraph Developer", issuer: "The Hashgraph Association" },
      { id: "aws-cloud", title: "AWS Academy Graduate — Cloud Foundations", issuer: "Amazon Web Services" },
      { id: "nvidia-predictive", title: "Applications of AI for Predictive Maintenance", issuer: "NVIDIA" },
    ],
  },
  footer: {
    copyright: "© {year} Ameni Aouiti.",
    rights: "Tous droits réservés.",
    backToTop: "Retour en haut",
  },
  cvModal: {
    title: "Télécharger le CV",
    subtitle: "Choisissez votre langue",
    english: "Anglais",
    french: "Français",
    close: "Fermer",
  },
  modal: {
    github: "Voir sur GitHub",
    demo: "Démo live",
    report: "Rapport",
    about: "À propos du projet",
    links: "Liens",
    close: "Fermer",
  },
};
