import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[], defaultId = sectionIds[0]) => {
  const [activeId, setActiveId] = useState(defaultId);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = defaultId;
        let bestRatio = 0;

        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0) setActiveId(bestId);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.55, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, defaultId]);

  return activeId;
};
