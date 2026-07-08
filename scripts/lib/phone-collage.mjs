import sharp from "sharp";

export async function framePhone(input, targetWidth = 260) {
  const resized = await sharp(input).resize({ width: targetWidth }).png().toBuffer();
  const meta = await sharp(resized).metadata();
  const screenW = meta.width;
  const screenH = meta.height;
  const padX = 16;
  const padTop = 28;
  const padBottom = 18;
  const phoneW = screenW + padX * 2;
  const phoneH = screenH + padTop + padBottom;

  const svg = Buffer.from(`<svg width="${phoneW}" height="${phoneH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bezel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3f3f46"/>
        <stop offset="100%" stop-color="#18181b"/>
      </linearGradient>
    </defs>
    <rect width="${phoneW}" height="${phoneH}" rx="42" fill="url(#bezel)"/>
    <rect x="${phoneW / 2 - 46}" y="10" width="92" height="14" rx="7" fill="#09090b"/>
    <rect x="${padX}" y="${padTop}" width="${screenW}" height="${screenH}" rx="22" fill="#000"/>
  </svg>`);

  return sharp(svg)
    .composite([{ input: resized, top: padTop, left: padX }])
    .png()
    .toBuffer();
}

export async function composeRow(frames, gap = 24) {
  const metas = await Promise.all(frames.map((f) => sharp(f).metadata()));
  const rowW = metas.reduce((sum, m, i) => sum + m.width + (i ? gap : 0), 0);
  const rowH = Math.max(...metas.map((m) => m.height));
  const composites = [];
  let left = 0;
  for (let i = 0; i < frames.length; i++) {
    composites.push({
      input: frames[i],
      top: Math.floor((rowH - metas[i].height) / 2),
      left,
    });
    left += metas[i].width + gap;
  }
  return sharp({
    create: { width: rowW, height: rowH, channels: 3, background: { r: 10, g: 12, b: 20 } },
  })
    .composite(composites)
    .png()
    .toBuffer();
}

export async function buildCollage(screens, out, width = 1400, phoneWidth = 260) {
  const phones = [];
  for (const screen of screens) {
    phones.push(await framePhone(screen, phoneWidth));
  }
  const row = await composeRow(phones);
  await sharp(row).resize({ width }).png({ compressionLevel: 8 }).toFile(out);
  const meta = await sharp(out).metadata();
  console.log("saved", out, `${meta.width}x${meta.height}`);
}

export async function svgToPng(svg, w, h) {
  return sharp(Buffer.from(svg)).resize(w, h).png().toBuffer();
}
