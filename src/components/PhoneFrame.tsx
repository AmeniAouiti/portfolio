interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export const PhoneFrame = ({ src, alt, className = "" }: PhoneFrameProps) => {
  const fillHeight = /\bh-/.test(className);

  return (
    <div className={`relative mx-auto w-full ${fillHeight ? "max-w-none" : "max-w-[200px]"} ${className}`}>
      <div
        className={`relative rounded-[1.85rem] border-[3px] border-zinc-700/90 bg-gradient-to-b from-zinc-800 to-zinc-950 p-[6px] shadow-[0_24px_48px_-16px_rgba(0,0,0,0.75)] ring-1 ring-white/5 ${
          fillHeight ? "h-full" : ""
        }`}
      >
        <div className="absolute top-[9px] left-1/2 z-10 h-[12px] w-[64px] -translate-x-1/2 rounded-full bg-zinc-950" />
        <div className={`overflow-hidden rounded-[1.4rem] bg-black ${fillHeight ? "h-full" : ""}`}>
          <img
            src={src}
            alt={alt}
            className={
              fillHeight
                ? "h-full w-full object-cover object-top"
                : "aspect-[9/19] w-full object-cover object-top"
            }
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
