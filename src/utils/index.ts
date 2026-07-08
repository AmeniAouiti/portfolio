export const parseTech = (techStr: string) => {
  try {
    return JSON.parse(techStr);
  } catch {
    return techStr.split(",").map((t) => t.trim());
  }
};
