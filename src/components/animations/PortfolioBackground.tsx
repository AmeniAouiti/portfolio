import Threads from "./Threads";

// Primary cyan #00f2fe → RGB normalized
const THREAD_COLOR: [number, number, number] = [0, 0.95, 0.996];

const PortfolioBackground = () => (
  <div className="portfolio-bg pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
    <div className="absolute inset-0 opacity-80">
      <Threads
        color={THREAD_COLOR}
        amplitude={1.1}
        distance={0.15}
        enableMouseInteraction={true}
      />
    </div>
    <div className="portfolio-bg-vignette" />
  </div>
);

export default PortfolioBackground;
