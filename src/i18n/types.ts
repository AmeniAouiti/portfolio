import type { Project, Experience, Education } from "../types";

export type Language = "en" | "fr" | "de";

export interface LocaleContent {
  meta: { title: string; loading: string };
  nav: {
    about: string;
    stack: string;
    projects: string;
    journey: string;
    devops: string;
    certifications: string;
    education: string;
    contact: string;
    cv: string;
    downloadCv: string;
    role: string;
  };
  hero: {
    jobTitle: string;
    introHello: string;
    introRest: string;
    explore: string;
    contact: string;
    mobileLabel: string;
    webLabel: string;
  };
  about: {
    chapter: string;
    title: string;
    titleLine2: string;
    titleLine3: string;
    bio: string;
    availability: string;
    highlights: string[];
    diploma: string;
    role: string;
  };
  tech: {
    chapter: string;
    title: string;
    subtitle: string;
    items: { label: string; desc: string }[];
  };
  projects: {
    chapter: string;
    title: string;
    subtitle: string;
    details: string;
    explore: string;
    data: Project[];
  };
  experience: {
    chapter: string;
    title: string;
    viewAttestation: string;
    attestationNote: string;
    attestationClose: string;
    attestationLoadError: string;
    attestationOpenNewTab: string;
    data: Experience[];
  };
  education: {
    chapter: string;
    title: string;
    subtitle: string;
    data: Education[];
  };
  devops: {
    chapter: string;
    title: string;
    titleLine2: string;
    bio: string;
    items: [string, string][];
  };
  contact: {
    ctaText: string;
    getInTouch: string;
    emailLabel: string;
    phone: string;
    address: string;
    followMe: string;
    linkedin: string;
    github: string;
    facebook: string;
  };
  certifications: {
    chapter: string;
    title: string;
    subtitle: string;
    imageHint: string;
    items: { id: string; title: string; issuer: string }[];
  };
  footer: {
    copyright: string;
    rights: string;
    backToTop: string;
  };
  cvModal: {
    title: string;
    subtitle: string;
    english: string;
    french: string;
    close: string;
  };
  modal: { github: string; demo: string; report: string; about: string; links: string; close: string };
}

export const CV_FILES = {
  en: {
    href: "/cv_ameni_aouiti_en.pdf",
    filename: "cv_ameni_aouiti_en.pdf",
  },
  fr: {
    href: "/cv_ameni_aouiti_fr.pdf",
    filename: "cv_ameni_aouiti_fr.pdf",
  },
} as const;
