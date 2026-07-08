import { Project } from "../types";
import { isCustomCollage, isWideCollage, usePhoneFrame } from "../utils/projectPreview";
import { PhoneFrame } from "./PhoneFrame";

interface ProjectPreviewProps {
  project: Project;
  variant?: "card" | "modal";
}

export const ProjectPreview = ({ project, variant = "card" }: ProjectPreviewProps) => {
  const framed = usePhoneFrame(project);
  const collage = isCustomCollage(project.image);
  const wideCollage = isWideCollage(project.image);
  const isCard = variant === "card";
  const isModal = variant === "modal";

  if (framed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center overflow-hidden bg-[#0a0e14] ${
          isModal ? "px-4 py-3" : "p-0"
        }`}
      >
        <PhoneFrame
          src={project.image}
          alt={project.title}
          className={
            isCard ? "h-full max-w-none w-auto scale-[1.12]" : "max-w-[240px] sm:max-w-[280px]"
          }
        />
      </div>
    );
  }

  if (collage) {
    return (
      <div
        className={`relative h-full w-full overflow-hidden bg-[#0a0e14] ${
          isModal ? "p-1.5" : "p-0"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className={
            isCard
              ? wideCollage
                ? "h-full w-full scale-110 object-cover object-center transition-transform duration-500 group-hover/preview:scale-[1.18]"
                : "h-full w-full scale-105 object-cover object-center transition-transform duration-500 group-hover/preview:scale-110"
              : "h-full w-full object-contain"
          }
        />
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-hidden bg-[#0a0e14]">
      <img
        src={project.image}
        alt={project.title}
        className={`h-full w-full object-cover object-top ${
          isCard ? "scale-105 transition-transform duration-500 group-hover/preview:scale-110" : ""
        }`}
      />
    </div>
  );
};

export default ProjectPreview;
