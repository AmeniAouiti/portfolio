import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = pdfWorker;

interface PdfAttestationViewerProps {
  src: string;
  className?: string;
  loadingLabel: string;
  onError?: () => void;
}

const PdfAttestationViewer = ({
  src,
  className = "",
  loadingLabel,
  onError,
}: PdfAttestationViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;

    const renderPdf = async () => {
      setLoading(true);
      container.replaceChildren();

      try {
        const pdf = await getDocument({ url: src }).promise;

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          if (cancelled) return;

          const page = await pdf.getPage(pageNumber);
          const baseViewport = page.getViewport({ scale: 1 });
          const maxWidth = Math.min(container.clientWidth || 720, 900);
          const scale = Math.min(2, Math.max(1, maxWidth / baseViewport.width));
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) throw new Error("Canvas not supported");

          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.className = "mx-auto mb-4 block w-full max-w-full rounded-lg bg-white shadow-sm";
          canvas.draggable = false;

          await page.render({ canvasContext: context, viewport, canvas }).promise;

          if (cancelled) return;
          container.appendChild(canvas);
        }

        if (!cancelled) setLoading(false);
      } catch {
        if (!cancelled) onError?.();
      }
    };

    void renderPdf();

    return () => {
      cancelled = true;
    };
  }, [src, onError]);

  return (
    <div className={className}>
      {loading && (
        <div className="flex min-h-[40vh] items-center justify-center p-8 text-sm text-text-dim">
          {loadingLabel}
        </div>
      )}
      <div ref={containerRef} className="p-4" />
    </div>
  );
};

export default PdfAttestationViewer;
