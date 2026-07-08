export interface Project {
  id: number;
  title: string;
  description: string;
  long_description: string;
  image: string;
  technologies: string;
  github_url: string;
  demo_url: string;
  report_url?: string;
  category: string;
  featured: boolean;
  period?: string;
  type_label?: string;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
  highlights?: string[];
  logo?: string;
  type_label?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string;
  location: string;
  logo?: string;
  type_label?: string;
  highlights?: string[];
  attestation?: string;
  attestation_label?: string;
  attestations?: { src: string; label: string }[];
}
