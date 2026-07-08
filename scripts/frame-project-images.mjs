import sharp from "sharp";
import fs from "fs";
import path from "path";

const projectsDir = "public/projects";

async function frameScreenshot(input, targetWidth = 300) {
  const resized = await sharp(input).resize({ width: targetWidth }).png().toBuffer();
  const meta = await sharp(resized).metadata();
  const screenW = meta.width;
  const screenH = meta.height;
  const padX = 16;
  const padTop = 28;
  const padBottom = 18;
  const phoneW = screenW + padX * 2;
  const phoneH = screenH + padTop + padBottom;
  const radius = 42;

  const svg = Buffer.from(`<svg width="${phoneW}" height="${phoneH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bezel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3f3f46"/>
        <stop offset="100%" stop-color="#18181b"/>
      </linearGradient>
    </defs>
    <rect width="${phoneW}" height="${phoneH}" rx="${radius}" fill="url(#bezel)"/>
    <rect x="${phoneW / 2 - 46}" y="10" width="92" height="14" rx="7" fill="#09090b"/>
    <rect x="${padX}" y="${padTop}" width="${screenW}" height="${screenH}" rx="22" fill="#000"/>
  </svg>`);

  return sharp(svg)
    .composite([{ input: resized, top: padTop, left: padX }])
    .png()
    .toBuffer();
}

async function composeRow(frames, gap = 28, bg = { r: 10, g: 12, b: 20 }) {
  const metas = await Promise.all(frames.map((f) => sharp(f).metadata()));
  const width = metas.reduce((sum, m, i) => sum + m.width + (i ? gap : 0), 0);
  const height = Math.max(...metas.map((m) => m.height));
  const composites = [];
  let left = 0;
  for (let i = 0; i < frames.length; i++) {
    composites.push({
      input: frames[i],
      top: Math.floor((height - metas[i].height) / 2),
      left,
    });
    left += metas[i].width + gap;
  }
  return sharp({
    create: { width, height, channels: 3, background: bg },
  })
    .composite(composites)
    .png()
    .toBuffer();
}

async function composeVertical(topBuf, bottomBuf, gap = 12) {
  const top = await sharp(topBuf).metadata();
  const bottom = await sharp(bottomBuf).metadata();
  const width = Math.max(top.width, bottom.width);
  const height = top.height + gap + bottom.height;
  return sharp({
    create: { width, height, channels: 3, background: { r: 10, g: 12, b: 20 } },
  })
    .composite([
      { input: topBuf, top: 0, left: Math.floor((width - top.width) / 2) },
      { input: bottomBuf, top: top.height + gap, left: Math.floor((width - bottom.width) / 2) },
    ])
    .png()
    .toBuffer();
}

async function extractRegion(file, { left = 0, top = 0, width, height }) {
  return sharp(file).extract({ left, top, width, height }).png().toBuffer();
}

async function rebuildPulpeTech() {
  const src = path.join(projectsDir, "pulpetech.png");
  const meta = await sharp(src).metadata();
  const colW = Math.floor(meta.width / 3);
  const frames = [];
  for (let i = 0; i < 3; i++) {
    const crop = await extractRegion(src, {
      left: i * colW,
      top: 0,
      width: colW,
      height: meta.height,
    });
    frames.push(await frameScreenshot(crop, 260));
  }
  const row = await composeRow(frames);
  await sharp(row).resize({ width: 1400 }).png().toFile(path.join(projectsDir, "pulpetech.png"));
  console.log("pulpetech.png updated");
}

async function rebuildSabeel() {
  const src = path.join(projectsDir, "sabeel.png");
  const meta = await sharp(src).metadata();
  const splitY = Math.round(meta.height * 0.42);
  const web = await extractRegion(src, {
    left: 0,
    top: 0,
    width: meta.width,
    height: splitY,
  });
  const mobileRow = await extractRegion(src, {
    left: 0,
    top: splitY,
    width: meta.width,
    height: meta.height - splitY,
  });
  const colW = Math.floor(meta.width / 3);
  const frames = [];
  for (let i = 0; i < 3; i++) {
    const crop = await extractRegion(mobileRow, {
      left: i * colW,
      top: 0,
      width: colW,
      height: meta.height - splitY,
    });
    frames.push(await frameScreenshot(crop, 220));
  }
  const phones = await composeRow(frames, 20);
  const webResized = await sharp(web).resize({ width: 1400 }).png().toBuffer();
  const final = await composeVertical(webResized, phones);
  await sharp(final).resize({ width: 1400 }).png().toFile(path.join(projectsDir, "sabeel.png"));
  console.log("sabeel.png updated");
}

async function rebuildSendit() {
  const src = path.join(projectsDir, "sendit.png");
  const meta = await sharp(src).metadata();
  const splitY = Math.round(meta.height * 0.48);
  const web = await extractRegion(src, {
    left: 0,
    top: 0,
    width: meta.width,
    height: splitY,
  });
  const mobile = await extractRegion(src, {
    left: 0,
    top: splitY,
    width: meta.width,
    height: meta.height - splitY,
  });
  const phone = await frameScreenshot(mobile, 340);
  const webResized = await sharp(web).resize({ width: 1400 }).png().toBuffer();
  const final = await composeVertical(webResized, phone, 20);
  await sharp(final).resize({ width: 1400 }).png().toFile(path.join(projectsDir, "sendit.png"));
  console.log("sendit.png updated");
}

for (const file of ["pulpetech.png", "sabeel.png", "sendit.png"]) {
  if (!fs.existsSync(path.join(projectsDir, file))) {
    console.warn("skip missing", file);
  }
}

await rebuildPulpeTech();
await rebuildSabeel();
await rebuildSendit();
