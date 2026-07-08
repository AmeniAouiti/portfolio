import { Project } from "../types";

export const isCustomCollage = (image: string) => image.startsWith("/projects/");

export const isWideCollage = (image: string) =>
  /\/(sotacib|gainup|primeprofs|chu-reseau)\.png$/.test(image);

export const isMobileProject = (project: Project) =>
  project.category.toLowerCase().includes("mobile");

export const usePhoneFrame = (project: Project) =>
  isMobileProject(project) && !isCustomCollage(project.image);
