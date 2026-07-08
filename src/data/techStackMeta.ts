export interface TechStackIconMeta {
  icon: string;
  color: string;
}

/** Icon slugs & brand colors for cdn.simpleicons.org — order matches locale tech.items */
export const TECH_STACK_META: TechStackIconMeta[] = [
  { icon: "react", color: "61DAFB" },
  { icon: "flutter", color: "02569B" },
  { icon: "kotlin", color: "7F52FF" },
  { icon: "nextdotjs", color: "FFFFFF" },
  { icon: "nestjs", color: "E0234E" },
  { icon: "typescript", color: "3178C6" },
  { icon: "postgresql", color: "4169E1" },
  { icon: "mongodb", color: "47A248" },
  { icon: "redis", color: "FF4438" },
  { icon: "docker", color: "2496ED" },
  { icon: "kubernetes", color: "326CE5" },
  { icon: "amazonaws", color: "FF9900" },
  { icon: "firebase", color: "FFCA28" },
  { icon: "socketdotio", color: "FFFFFF" },
  { icon: "stripe", color: "635BFF" },
  { icon: "dotnet", color: "512BD4" },
];

export const techIconUrl = (icon: string, color: string) =>
  `https://cdn.simpleicons.org/${icon}/${color.replace("#", "")}`;
