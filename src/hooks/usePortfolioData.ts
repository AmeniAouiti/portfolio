import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Project, Experience } from "../types";

export const usePortfolioData = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let projData = [];
      let expData = [];

      try {
        const [projRes, expRes] = await Promise.all([
          fetch("/api/projects").catch(() => ({
            ok: false,
            json: () => Promise.resolve([]),
          })),
          fetch("/api/experiences").catch(() => ({
            ok: false,
            json: () => Promise.resolve([]),
          })),
        ]);

        if (projRes.ok) projData = await projRes.json();
        if (expRes.ok) expData = await expRes.json();
      } catch (err) {
        console.warn("API unavailable, fetching local fallbacks...");
      }

      // Fallback data based on the CV profile
      if (!projData || projData.length === 0) {
        projData = [
          {
            id: 1,
            title: "GainUP",
            category: "Mobile App",
            description:
              "Smart mobile coaching app with integrated AI services.",
            long_description:
              "Developed an intelligent sports coaching mobile app across platforms using Kotlin (Jetpack Compose) for Android and SwiftUI for iOS, alongside a Flutter back-office. Integrated AI features utilizing Mistral & Gemini, backed by a scalable NestJS & MongoDB architecture.",
            image:
              "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60",
            technologies: "Kotlin, SwiftUI, NestJS, MongoDB, Firebase, AI",
            github_url: "https://github.com/ameni",
            demo_url: "#",
            featured: true,
          },
          {
            id: 2,
            title: "PrimeProfs",
            category: "Educational Platform",
            description:
              "Educational platform featuring an AI chatbot and integrated payments.",
            long_description:
              "A comprehensive educational platform designed using a microservices architecture based on Scrum methodology. It features a conversational AI chatbot built with Flask and Ollama, real-time WebSocket communication, and secure payment processing via OAuth2 and JWT.",
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
            technologies:
              "Flutter, NestJS, PostgreSQL, WebSocket, Python, Ollama",
            github_url: "https://github.com/ameni",
            demo_url: "#",
            featured: true,
          },
          {
            id: 3,
            title: "SafeSiteConnect",
            category: "Mobile Solution",
            description:
              "Construction site management application with fast QR code integration.",
            long_description:
              "Built a mobile-first solution for construction professionals to track and manage site activities securely. Includes containerized backend deployment and rapid QR-based validations using JWT logic.",
            image: "/projects/safesite.png",
            technologies: "Flutter, NestJS, MongoDB, JWT, Docker",
            github_url: "https://github.com/ameni",
            demo_url: "#",
            featured: false,
          },
          {
            id: 4,
            title: "MedisApp",
            category: "Multiplatform App",
            description:
              "Restaurant meal reservation application utilizing Microsoft's cross-platform ecosystem.",
            long_description:
              "Designed and developed a cohesive multi-platform mobile application for seamless meal reservations leveraging .NET MAUI and Blazor (Razor Components).",
            image:
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60",
            technologies: ".NET MAUI, C#, Blazor, SQL Server, HTML5",
            github_url: "https://github.com/ameni",
            demo_url: "#",
            featured: false,
          },
          {
            id: 5,
            title: "Sotacib Cement",
            category: "B2B Mobile App",
            description:
              "Sales tracking and point-of-sale management mobile application.",
            long_description:
              "Developed a comprehensive mobile application to efficiently manage multiple points of sale and track cement sales metrics, complete with interactive map integrations using Google Maps API.",
            image: "/projects/sotacib.png",
            technologies: "Flutter, NestJS, MongoDB, Google Maps API, Firebase",
            github_url: "https://github.com/ameni",
            demo_url: "#",
            featured: false,
          },
        ];
      }

      if (!expData || expData.length === 0) {
        expData = [
          {
            id: 1,
            period: "Jun 2025 — Sep 2025",
            company: "Pulpetech (FinTech)",
            location: "Tunis, Tunisia",
            role: "Mobile Developer Intern",
            description:
              "Development of a secure mobile banking application, integrating rigorous fintech APIs like Bridge, Onfido, and Ory.",
            technologies: "Flutter, NestJS, PostgreSQL, Docker",
            logo: "https://www.pulpetech.com/wp-content/uploads/2021/11/logo_PT_bleu.png",
          },
          {
            id: 2,
            period: "Jun 2024 — Aug 2024",
            company: "Tunav",
            location: "Charguia 1, Tunis",
            role: "Web Developer Intern",
            description:
              "Created a comprehensive web application for managing claims and user accounts.",
            technologies: "ASP.NET, C#, SQL Server, JavaScript",
            logo: "https://tunav.com/assets/img/logo.png",
          },
          {
            id: 3,
            period: "Feb 2023 — Jun 2023",
            company: "CHU Habib Bourguiba",
            location: "Sfax, Tunisia",
            role: "Network Administrator Intern",
            description:
              "Implemented a robust network supervision system using Prometheus and Grafana for proactive monitoring with various exporters.",
            technologies: "Prometheus, Grafana, VMware, Cisco, Ubuntu Server",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Emblem_of_Tunisia.svg/512px-Emblem_of_Tunisia.svg.png",
          },
          {
            id: 4,
            period: "Jan 2022 — Feb 2022",
            company: "OACA - Sfax Thyna Airport",
            location: "Sfax, Tunisia",
            role: "Network Administrator Intern",
            description:
              "Deployed a secure authentication solution on Windows Server 2016 with Active Directory and NPS using RADIUS and multiple VPN protocols.",
            technologies:
              "Windows Server, Active Directory, RADIUS, VPN, PowerShell",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_OACA.png",
          },
        ];
      }

      setProjects(projData);
      setExperiences(expData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      toast.error("Failed to load content");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { projects, experiences, loading };
};
