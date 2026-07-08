interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
}

export const BrowserFrame = ({
  src,
  alt,
  url = "ameni-aouiti.dev",
  className = "",
}: BrowserFrameProps) => (
  <div
    className={`overflow-hidden rounded-xl border border-white/10 bg-[#0c0e12] shadow-[0_28px_64px_-20px_rgba(0,0,0,0.7)] ${className}`}
  >
    <div className="flex items-center gap-2 border-b border-white/8 bg-[#12151c] px-3 py-2.5">
      <div className="flex shrink-0 gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-white/8 bg-black/40 px-2.5 py-1">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
        <span className="truncate font-mono text-[10px] text-white/45">{url}</span>
      </div>
    </div>
    <div className="aspect-[16/10] w-full overflow-hidden bg-black">
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="eager" />
    </div>
  </div>
);

export default BrowserFrame;
