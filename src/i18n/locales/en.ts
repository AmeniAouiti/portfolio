import type { LocaleContent } from "../types";

const PROJECT_IMAGES: Record<string, string> = {
  Sendit: "/projects/sendit.png",
  Sabeel: "/projects/sabeel.png",
  GoTogether: "/projects/gotogether.png",
  PrimeProfs: "/projects/primeprofs.png",
  Kurubis: "/projects/kurubis.png",
  SafeSiteConnect: "/projects/safesiteconnect.png",
  GainUP: "/projects/gainup.png",
  MedisApp: "/projects/medisapp.png",
  PulpeTech: "/projects/pulpetech.png",
  Sotacib: "/projects/sotacib.png",
  NetworkAdmin: "/projects/chu-reseau.png",
};

export const en: LocaleContent = {
  meta: {
    title: "Ameni Aouiti | Software Engineer - Full Stack & Mobile Developer",
    loading: "Loading portfolio...",
  },
  nav: {
    about: "About",
    stack: "Stack",
    projects: "Projects",
    journey: "Journey",
    devops: "DevOps",
    certifications: "Certs",
    education: "Education",
    contact: "Contact",
    cv: "CV",
    downloadCv: "Download CV",
    role: "Software Engineer - Full Stack & Mobile Developer",
  },
  hero: {
    jobTitle: "Software Engineer — Full Stack & Mobile Developer",
    introHello: "Hello, I'm Ameni —",
    introRest:
      "a software engineer based in Tunisia, available for remote, on-site and freelance projects. I build elegant mobile apps and scalable web platforms with React Native, Flutter, React.js & NestJS.",
    explore: "EXPLORE WORK",
    contact: "GET IN TOUCH",
    mobileLabel: "Mobile App",
    webLabel: "Web Platform",
  },
  about: {
    chapter: "CHAPTER 01 — PROFILE",
    title: "Software Engineer",
    titleLine2: "specializing in mobile & full-stack development,",
    titleLine3: "AI integration & end-to-end app delivery",
    bio: "Software Engineer passionate about mobile and full-stack development, AI integration, and the complete lifecycle of web and mobile applications — from requirements gathering and architecture design to deployment and maintenance. With 2+ years of experience building products using React Native, Flutter, NestJS, Next.js, and React.js, I've worked across FinTech, e-commerce, travel, and AI, both independently and within Agile/Scrum teams.",
    availability: "Open to remote, on-site & freelance opportunities",
    highlights: [
      "End-to-end delivery of production mobile & web apps with React Native, Flutter and NestJS.",
      "Sole developer experience on strategic products from ideation to cloud deployment.",
      "CI/CD, Docker, TypeScript and clean architecture for scalable, maintainable code.",
    ],
    diploma: "ESPRIT",
    role: "Software Engineer",
  },
  tech: {
    chapter: "CHAPTER 02 — EXPERTISE",
    title: "Core Technologies",
    subtitle: "Mobile, web, backend, databases, DevOps, cloud and real-time — the stack behind my projects.",
    items: [
      { label: "React Native", desc: "Cross-platform mobile (Expo)" },
      { label: "Flutter", desc: "iOS & Android apps (MVVM)" },
      { label: "Kotlin & SwiftUI", desc: "Native Android & iOS" },
      { label: "React.js / Next.js", desc: "Modern SSR & web apps" },
      { label: "NestJS", desc: "Scalable Node.js backend" },
      { label: "TypeScript", desc: "Type-safe full-stack code" },
      { label: "PostgreSQL", desc: "Relational databases" },
      { label: "MongoDB", desc: "NoSQL & document store" },
      { label: "Redis", desc: "Caching & real-time data" },
      { label: "Docker", desc: "Containerization" },
      { label: "Kubernetes", desc: "Orchestration & scaling" },
      { label: "AWS / Vercel", desc: "Cloud deployment" },
      { label: "Firebase", desc: "Push, analytics & auth" },
      { label: "Socket.IO", desc: "Real-time messaging" },
      { label: "Stripe", desc: "Payments & billing" },
      { label: ".NET / C#", desc: "Enterprise web & MAUI" },
    ],
  },
  projects: {
    chapter: "CHAPTER 03 — WORK",
    title: "Featured Projects",
    subtitle: "Real-world applications across mobile, web, FinTech, e-commerce and AI.",
    details: "DETAILS",
    explore: "Explore",
    data: [

      {
        id: 1,
        title: "Sabeel Ecosystem",
        category: "Web & Mobile · Umrah",
        description:
          "Intelligent Umrah digital ecosystem — 4 connected platforms (pilgrim & guide apps, agency portal, admin back-office) for pilgrims, guides and travel agencies.",
        long_description:
          "Sabeel is an intelligent digital ecosystem for the end-to-end digitalization and integrated management of Umrah services. Four connected interfaces — Sabeel App (pilgrims), Sabeel Guide (guides), Sabeel Agence web portal and an administration back-office — share a NestJS backend with PostgreSQL (TypeORM). Requirements analysis, UML modeling and Agile/Scrum delivery (19 weeks, 5 releases). JWT/RBAC security with dynamic role switching, OTP recovery, guide and agency onboarding with Cloudinary document storage. Commercial layer: Umrah pack catalogs, reservations, Amadeus API integration and rating system. Real-time Socket.io messaging, Expo push notifications and WebRTC audio calls. Field operations: convoy/group management, Mapbox GPS tracking and SOS alerts. Financial module: digital Wallet, accounting Ledger and Stripe Connect payments. RAG conversational assistant (Gemini API + Qdrant) with text and voice, plus spiritual tools (Qibla, Adhan, Tasbih, Quran). Backend deployed on Render for testing; API validation via Swagger and Postman.",
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
        category: "Web & Mobile · Logistics",
        description:
          "Parcel delivery matchmaking app with dynamic role switching (client, traveler, driver) and Stripe payments.",
        long_description:
          "Independent end-to-end development (mobile + backend) of a parcel delivery matchmaking application. Architected the dynamic role-switching system within a single user account and engineered core reservation workflows. Implemented real-time messaging and voice calling (Socket.IO), secure file storage (MinIO), geolocation (Mapbox), Twilio communications, and Stripe payments with automated commission splitting.",
        image: PROJECT_IMAGES.Sendit,
        technologies: "React Native, NestJS, MongoDB, Stripe, Socket.IO, Mapbox, Twilio, MinIO, Docker",
        github_url: "#",
        demo_url: "#",
        featured: true,
      },

      {
        id: 3,
        title: "PrimeProfs",
        category: "Mobile · Education",
        description:
          "Educational mobile app with real-time messaging, OAuth2 security and AI chatbot (Ollama – Llama 3).",
        long_description:
          "Full-stack mobile developer in a cross-functional Scrum team. Developed real-time messaging (Socket.IO) and secure OAuth2 authentication. Integrated Stripe payment pipelines and an AI virtual assistant powered by Ollama (Llama 3) for student support and tutoring workflows.",
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
          "White-label mobile banking app for Tunisians abroad — KYC, biometrics, virtual cards and Bridge API.",
        long_description:
          "Full-stack mobile developer intern on Flexy Bank, a customizable white-label banking application for partner banks. Contributed to Flutter (MVVM) mobile features: biometric & passcode authentication, virtual card management (freeze, PIN, balance), onboarding for Tunisians abroad with remote account opening via Bridge API, international transfers and multi-currency support. Integrated KYC microservices (Onfido), advanced authentication (Ory), secure payment pipelines and Twilio SMS — NestJS & PostgreSQL backend.",
        image: PROJECT_IMAGES.PulpeTech,
        technologies: "Flutter, NestJS, PostgreSQL, Onfido, Ory, Bridge, Twilio, Docker",
        github_url: "https://github.com/orgs/FlexyBancIntership/repositories",
        demo_url: "https://canva.link/yzn3zaar2ki3pdp",
        featured: true,
      },

      {
        id: 5,
        title: "GainUP",
        category: "Mobile · Sports & AI",
        description:
          "Cross-platform sports coaching app with native Android/iOS apps and AI-powered training plans.",
        long_description:
          "Cross-platform intelligent sports coaching application. Developed native Android (Kotlin, Jetpack Compose) and iOS (SwiftUI) clients with a Flutter back-office for coaches. Integrated AI coaching features using Mistral & Gemini on a NestJS & MongoDB backend, with Firebase for notifications and user analytics.",
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
          "B2B e-commerce platform for professional workwear — sole developer, from design to cloud deployment.",
        long_description:
          "Sole full-stack developer for a B2B e-commerce platform specializing in professional uniforms. Conducted requirement analysis and designed industry-specific catalogs with an advanced cart/quote system. Built admin back-office, client portal and real-time RBAC messaging. Deployed and maintained cloud infrastructure on Vercel, Supabase and Cloudinary.",
        image: PROJECT_IMAGES.Kurubis,
        technologies: "Next.js, React, TypeScript, Supabase, PostgreSQL, Tailwind CSS, Cloudinary",
        github_url: "https://github.com/AmeniAouiti/Kurubis-uniforme-de-tunisie",
        demo_url: "https://kurubis-uniforme-de-tunisie-lwxh.vercel.app/",
        featured: false,
      },

      {
        id: 7,
        title: "GoTogether",
        category: "Web · Travel",
        description:
          "Collaborative group travel planning platform with AI recommendations and integrated marketplace.",
        long_description:
          "Co-developed a collaborative group travel planning web platform featuring AI-driven recommendations and an interactive marketplace. Built low-latency group messaging infrastructure using WebSockets and designed the core itinerary management and trip planning module. Includes dynamic group roles, Stripe payments, social feed, gamification, interactive mapping and MFA security.",
        image: PROJECT_IMAGES.GoTogether,
        technologies: "Next.js 14, MongoDB, Stripe, TypeScript, Tailwind CSS, WebSockets, Scrum",
        github_url: "https://github.com/MohamedAliTrabelsiSE/gotogether",
        demo_url: "#",
        period: "2024 — Present",
        type_label: "Team Project",
        featured: true,
      },

      {
        id: 8,
        title: "SafeSiteConnect",
        category: "Mobile · Construction",
        description:
          "Construction site management app with JWT authentication and QR-based on-site validations.",
        long_description:
          "Combined web and mobile application for construction site management and monitoring. Built a containerized NestJS backend with JWT authentication and role-based access. Enabled rapid QR-code validations for tracking equipment, personnel and site checkpoints directly from the field.",
        image: PROJECT_IMAGES.SafeSiteConnect,
        technologies: "Flutter, NestJS, MongoDB, JWT, QR Code, Docker",
        github_url: "#",
        demo_url: "#",
        featured: false,
      },

      {
        id: 9,
        title: "MedisApp",
        category: "Mobile · Multiplatform",
        description:
          "Corporate meal reservation app for employees and administrators with .NET MAUI and Blazor.",
        long_description:
          "Cohesive multi-platform mobile and desktop application for corporate restaurant meal reservations using .NET MAUI and Blazor Razor Components. Delivers an intuitive ordering experience for employees and optimized order management dashboards for administrators, backed by SQL Server.",
        image: PROJECT_IMAGES.MedisApp,
        technologies: ".NET MAUI, C#, Blazor, SQL Server, HTML5",
        github_url: "#",
        demo_url: "#",
        featured: false,
      },

      {
        id: 10,
        title: "Sotacib Ciment",
        category: "Mobile · B2B Cement",
        description:
          "Mobile app for point-of-sale management and sales tracking — built in a 24-hour hackathon.",
        long_description:
          "Full-stack mobile development during a 24-hour hackathon for SOTACIB KAIROUAN (cement industry). Built a Flutter app with Direction and Commercial roles: interactive cartography with Google Maps, visit planning, price evolution charts and admin dashboards. NestJS & MongoDB REST API backend, Firebase integration, Scrum methodology and Jira tracking — delivered end-to-end within the hackathon timeframe.",
        image: PROJECT_IMAGES.Sotacib,
        technologies: "Flutter, NestJS, MongoDB, Google Maps API, Firebase, REST API, Jira, Scrum",
        github_url: "https://github.com/ameniaouiti12/hackathon",
        demo_url: "#",
        period: "24h Hackathon",
        type_label: "Team Project",
        featured: false,
      },

      {
        id: 11,
        title: "CHU Réseau — IT Supervision",
        category: "Infrastructure · System Administration",
        description:
          "Network audit, architecture modeling and centralized IT park monitoring with Prometheus & Grafana at a university hospital.",
        long_description:
          "Final-year internship project (ISET Sfax) at the CHU Habib Bourguiba Sfax IT unit (Unité SCE Informatique). Project scope: study and evaluation of the hospital computer network, network architecture modeling and implementation of an IT park monitoring solution. Conducted infrastructure audit, designed logical and physical network architecture, then deployed Prometheus with Grafana dashboards and exporters (SNMP, Node, Blackbox, Windows) for real-time supervision of servers and network devices. Project validated by the hospital IT department — all objectives achieved.",
        image: PROJECT_IMAGES.NetworkAdmin,
        technologies: "Prometheus, Grafana, SNMP Exporter, Node Exporter, Blackbox Exporter, VMware, Ubuntu Server, Cisco, Windows Server",
        github_url: "#",
        demo_url: "#",
        report_url: "/FINAL.pdf",
        featured: false,
        period: "Feb 2023 — Jun 2023",
        type_label: "Internship Project",
      },
    ],
  },
  experience: {
    chapter: "CHAPTER 05 — JOURNEY",
    title: "Experience Timeline",
    viewAttestation: "View certificate",
    attestationNote: "View only — downloading, printing and capturing are disabled.",
    attestationClose: "Close",
    data: [
      {
        id: 1,
        period: "15 Dec 2025 — 15 Jun 2026",
        company: "BrandWood&CO",
        location: "Tunis, Tunisia",
        role: "Software Engineer Intern — Sabeel Umrah Ecosystem (PFE)",
        type_label: "End-of-studies internship (PFE)",
        description:
          "Within BrandWood&CO's development team (Scrum, supervised by Mohamed Rayen Mosrati), end-to-end design and delivery of Sabeel — an intelligent digital ecosystem for integrated Umrah service management serving pilgrims, guides and travel agencies.",
        highlights: [
          "Requirements analysis, UML modeling (use cases, class & sequence diagrams), logical/physical architecture and Agile/Scrum planning (19 weeks, 5 releases).",
          "Four connected platforms — Sabeel App (pilgrims), Sabeel Guide, Sabeel Agence web portal and admin back-office — on a NestJS backend with PostgreSQL (TypeORM).",
          "JWT/RBAC security, dynamic role switching, OTP recovery, guide & agency onboarding with admin validation, secure documents via Cloudinary.",
          "Commercial module: Umrah pack catalogs, reservations, Amadeus API integration, digital Wallet, accounting Ledger and Stripe Connect payments.",
          "Real-time Socket.io messaging, Expo push notifications, WebRTC audio calls, Mapbox GPS convoy tracking and SOS alerts.",
          "RAG conversational assistant (Gemini API + Qdrant) with text/voice interaction and spiritual tools (Qibla, Adhan, Tasbih, Quran).",
          "Backend deployed on Render, Cloudinary storage, API validation (Swagger, Postman) and pilot validation with beta pilgrims and partner agencies.",
        ],
        technologies:
          "NestJS, React.js, React Native, Expo, PostgreSQL, TypeORM, Socket.IO, WebRTC, Mapbox, Stripe Connect, Gemini API, Qdrant, Cloudinary, Amadeus API, Render, TypeScript",
        logo: "/logos/brandwood.png",
        attestation: "/certifications/Attestation_de_Stage_Ameni_AOUITI.pdf",
        attestation_label: "Internship certificate",
      },
      {
        id: 2,
        period: "Apr 2024 — Nov 2025",
        company: "BrandWood&CO",
        location: "Tunis, Tunisia",
        role: "Full Stack JS Mobile/Web Developer",
        type_label: "Part-time",
        description:
          "Part-time full-stack developer building and maintaining 3+ production web and mobile applications in an Agile/Scrum environment — secure NestJS APIs, JWT/RBAC auth and relational & NoSQL databases.",
        highlights: [
          "Set up automated CI/CD pipelines (GitHub Actions), reducing deployment time by ~20%.",
          "Improved code quality with TypeScript, code reviews and best practices, cutting production bugs by ~15%.",
          "Delivered multiple applications in parallel autonomously, strengthening team delivery capacity.",
        ],
        technologies:
          "NestJS, React.js, React Native, TypeScript, PostgreSQL, MySQL, MongoDB, JWT, Docker, GitHub Actions, Scrum",
        logo: "/logos/brandwood.png",
        attestation: "/certifications/Attestation_de_Travail_Ameni_AOUITI.pdf",
        attestation_label: "Work certificate",
      },
      {
        id: 3,
        period: "Jun 2025 — Sep 2025",
        company: "Pulpe Tech (FinTech)",
        location: "Tunis, Tunisia",
        role: "Full Stack Mobile Developer Intern",
        type_label: "Team project",
        description:
          "Member of a Flutter/NestJS team on Flexy Bank, a customizable white-label mobile banking app for partner banks.",
        highlights: [
          "Integrated Onfido KYC and Ory MFA, securing the user onboarding journey.",
          "Contributed to secure payment pipelines and automated SMS communication via Twilio.",
        ],
        technologies: "Flutter, NestJS, PostgreSQL, Onfido, Ory, Bridge, Twilio, Docker",
        logo: "/logos/pulpetech.png",
        attestation: "/certifications/att.png",
        attestation_label: "Internship certificate",
      },
      {
        id: 4,
        period: "Jun 2024 — Aug 2024",
        company: "Tunav",
        location: "Charguia 1, Tunis",
        role: "Full Stack Web Developer Intern",
        type_label: "Team project",
        description:
          "Developed a secure dashboard and multi-role authentication system for a client and claims management web application using .NET Core and React.js in a multidisciplinary Scrum team.",
        highlights: [
          "Designed and integrated RBAC to secure access to sensitive data.",
          "Built dynamic React.js interfaces and performant .NET Core REST APIs for real-time claims tracking.",
        ],
        technologies: ".NET Core, React.js, SQL Server, MVC, Docker, Postman, Git, Scrum",
        logo: "/logos/tunav.png",
        attestation: "/certifications/tunav.jpeg",
        attestation_label: "Internship certificate",
      },
      {
        id: 5,
        period: "Feb 2023 — Jun 2023",
        company: "CHU Habib Bourguiba",
        location: "Sfax, Tunisia",
        role: "Network Administrator Intern",
        type_label: "Training internship · ISET Sfax",
        description:
          "Within the hospital IT unit (Unité SCE Informatique), final-year project on network infrastructure study, architecture modeling and implementation of an IT park monitoring solution — internship from 10 Feb to 25 May 2023 at ISET Sfax.",
        highlights: [
          "Conducted network infrastructure audit, evaluation and logical/physical architecture modeling at CHU Habib Bourguiba Sfax.",
          "Implemented a centralized IT park monitoring solution with Prometheus and Grafana for real-time supervision.",
          "Deployed exporters (SNMP, Node, Blackbox, Windows) and configured alerting dashboards for proactive infrastructure monitoring.",
          "Worked with VMware virtualized environments, Ubuntu Server and Cisco network equipment.",
        ],
        technologies: "Prometheus, Grafana, SNMP Exporter, Node Exporter, Blackbox Exporter, VMware, Ubuntu Server, Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Emblem_of_Tunisia.svg/512px-Emblem_of_Tunisia.svg.png",
        attestations: [
          { src: "/certifications/chu-attestation-stage.png", label: "Internship certificate" },
          { src: "/certifications/chu-attestation-validation.png", label: "Project validation certificate" },
        ],
      },
      {
        id: 6,
        period: "10 Jan 2022 — 9 Feb 2022",
        company: "OACA — Sfax Thyna Airport",
        location: "Sfax, Tunisia",
        role: "Network Administrator Intern",
        type_label: "Training internship",
        description:
          "At the Civil Aviation and Airports Authority (OACA), implemented a secure network access authentication solution on Windows Server 2016 for airport infrastructure.",
        highlights: [
          "Configured secure authentication on Windows Server 2016 with Active Directory and Network Policy Server (NPS).",
          "Deployed RADIUS for network access control and integrated VPN protocols (IPSec, OpenVPN, WireGuard).",
          "Automated configuration and maintenance tasks with PowerShell in a VMware virtualized environment.",
        ],
        technologies: "Windows Server 2016, Active Directory, NPS, RADIUS, VPN (IPSec, OpenVPN, WireGuard), VMware, PowerShell",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_OACA.png",
        attestation: "/certifications/oaca-attestation-stage.png",
        attestation_label: "Internship certificate",
      },
    ],
  },
  education: {
    chapter: "CHAPTER 04 — EDUCATION",
    title: "Academic Background",
    subtitle: "Engineering and applied sciences training in computer science and information technology.",
    data: [
      {
        id: 1,
        period: "2023 — 2026",
        school: "ESPRIT",
        location: "El Ghazala, Ariana",
        degree: "National Engineering Diploma in Computer Science",
        type_label: "Engineering degree",
        description:
          "Private Higher School of Engineering and Technology — specialization in software engineering, full-stack development, distributed systems and modern software architecture.",
        highlights: [
          "End-of-studies project (PFE): Sabeel — intelligent digital ecosystem for integrated Umrah service management (BrandWood&CO).",
          "Mobile & web development, backend architecture, cloud deployment and Agile/Scrum project management.",
          "Focus on scalable applications, DevOps practices and emerging technologies (AI, real-time systems).",
        ],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4e/Esprit_logo.svg/120px-Esprit_logo.svg.png",
      },
      {
        id: 2,
        period: "2020 — 2023",
        school: "ISET Sfax",
        location: "Sfax, Tunisia",
        degree: "Bachelor's Degree in Information Technology",
        type_label: "Applied licence",
        description:
          "Higher Institute of Technological Studies — applied training in information technology, networks, system administration and software fundamentals.",
        highlights: [
          "Final-year project (PFE): network infrastructure study and IT park monitoring at CHU Habib Bourguiba (Prometheus & Grafana).",
          "Network architecture, Windows/Linux server administration, virtualization (VMware) and security fundamentals.",
          "Project validated by the hospital IT department — all objectives achieved.",
        ],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Emblem_of_Tunisia.svg/80px-Emblem_of_Tunisia.svg.png",
      },
    ],
  },
  devops: {
    chapter: "CHAPTER 05 — INFRASTRUCTURE",
    title: "Engineering Mindset",
    titleLine2: "at Scale",
    bio: "Obsessed with reliability, performance and observability. I build CI/CD pipelines, containerized applications and monitoring dashboards that make systems observable and resilient.",
    items: [
      ["Docker", "Containerization & Microservices"],
      ["Kubernetes", "Orchestration & Scaling"],
      ["GitHub Actions", "CI/CD Automation"],
      ["Prometheus + Grafana", "Real-time Monitoring"],
      ["AWS / Vercel", "Cloud Infrastructure"],
    ],
  },
  contact: {
    ctaText:
      "Software Engineer passionate about scalable mobile and full-stack applications. I enjoy applying emerging technologies — AI, cloud and real-time systems — to real-world software solutions.",
    getInTouch: "Get In Touch",
    emailLabel: "Email",
    phone: "Phone",
    address: "Location",
    followMe: "Follow me on",
    linkedin: "LinkedIn",
    github: "GitHub",
    facebook: "Facebook",
  },
  certifications: {
    chapter: "CHAPTER 06 — CREDENTIALS",
    title: "Certifications",
    subtitle: "Professional certifications in AI, cloud and distributed technologies.",
    imageHint: "Industry-recognized credentials from leading technology programs.",
    items: [
      { id: "nvidia-diffusion", title: "Generative AI with Diffusion Models", issuer: "NVIDIA" },
      { id: "hashgraph", title: "Hashgraph Developer", issuer: "The Hashgraph Association" },
      { id: "aws-cloud", title: "AWS Academy Graduate — Cloud Foundations", issuer: "Amazon Web Services" },
      { id: "nvidia-predictive", title: "Applications of AI for Predictive Maintenance", issuer: "NVIDIA" },
    ],
  },
  footer: {
    copyright: "© {year} Ameni Aouiti.",
    rights: "All rights reserved.",
    backToTop: "Back to Top",
  },
  cvModal: {
    title: "Download CV",
    subtitle: "Choose your preferred language",
    english: "English",
    french: "Français",
    close: "Close",
  },
  modal: {
    github: "View on GitHub",
    demo: "Live Demo",
    report: "Report",
    about: "About This Project",
    links: "Links",
    close: "Close",
  },
};

export { PROJECT_IMAGES };
