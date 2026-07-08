import sharp from "sharp";
import path from "path";

const out = path.join("public", "projects", "chu-reseau.png");
const sources = [
  path.join("public", "projects", "chu-reseau-grafana-system.png"),
  path.join("public", "projects", "chu-reseau-prometheus-blackbox.png"),
  path.join("public", "projects", "chu-reseau-network-traffic.png"),
];

const CARD_W = 1400;
const CARD_H = 980;
const PAD = 28;
const GAP = 16;
const RADIUS = 14;
const BG = { r: 8, g: 12, b: 22 };
const PANEL_BG = { r: 14, g: 20, b: 36 };

async function panelContain(src, width, height) {
  const fitted = await sharp(src)
    .resize(width, height, {
      fit: "contain",
      background: PANEL_BG,
    })
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" rx="${RADIUS}" fill="#fff"/>
    </svg>`,
  );
  const frame = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="${RADIUS}"
        fill="none" stroke="rgba(0,242,254,0.3)" stroke-width="2"/>
    </svg>`,
  );

  return sharp({
    create: { width, height, channels: 3, background: PANEL_BG },
  })
    .composite([
      { input: fitted, top: 0, left: 0 },
      { input: mask, blend: "dest-in" },
      { input: frame, top: 0, left: 0 },
    ])
    .png()
    .toBuffer();
}

async function main() {
  const innerW = CARD_W - PAD * 2;
  const innerH = CARD_H - PAD * 2 - GAP * 2;

  // Proportional slots: gauges (compact) / blackbox / traffic graphs
  const h1 = Math.round(innerH * 0.26);
  const h2 = Math.round(innerH * 0.34);
  const h3 = innerH - h1 - h2;

  const p1 = await panelContain(sources[0], innerW, h1);
  const p2 = await panelContain(sources[1], innerW, h2);
  const p3 = await panelContain(sources[2], innerW, h3);

  await sharp({
    create: { width: CARD_W, height: CARD_H, channels: 3, background: BG },
  })
    .composite([
      { input: p1, top: PAD, left: PAD },
      { input: p2, top: PAD + h1 + GAP, left: PAD },
      { input: p3, top: PAD + h1 + GAP + h2 + GAP, left: PAD },
    ])
    .png()
    .toFile(out);

  const meta = await sharp(out).metadata();
  console.log(`Created ${out} (${meta.width}x${meta.height})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
