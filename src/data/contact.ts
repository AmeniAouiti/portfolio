export const CONTACT_INFO = {
  email: "ameni.aouiti81@gmail.com",
  phone: "+216 58 932 240",
  phoneHref: "tel:+21658932240",
  address: "Cité El Ghazela, Ariana, Tunisia",
  linkedin: "https://www.linkedin.com/in/ameni-aouiti-50a8a2232/",
  github: "https://github.com/AmeniAouiti",
  facebook: "https://www.facebook.com/profile.php?id=61581259824758",
} as const;

export interface Certification {
  id: string;
  image: string;
  issuer: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "nvidia-diffusion",
    image: "/certifications/GenAi.png",
    issuer: "NVIDIA",
  },
  {
    id: "hashgraph",
    image: "/certifications/blockchain.png",
    issuer: "Hashgraph Association",
  },
  {
    id: "aws-cloud",
    image: "/certifications/aws.png",
    issuer: "AWS",
  },
  {
    id: "nvidia-predictive",
    image: "/certifications/learning.png",
    issuer: "NVIDIA",
  },
];
