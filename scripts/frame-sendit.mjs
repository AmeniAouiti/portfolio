import sharp from "sharp";

const assets =
  "C:/Users/user/.cursor/projects/d-portfolio-Portfolio-Ameni/assets";

const webCapture = `${assets}/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_90c31b7563f4c6569e48cf938278cc6f_images_image-fba3067a-fad6-4960-b5c3-3ad8ff868498.png`;

const mobileCaptures = [
  `${assets}/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_90c31b7563f4c6569e48cf938278cc6f_images_image-e6342a80-6d88-4e73-9a47-d345f128b361.png`,
  `${assets}/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_90c31b7563f4c6569e48cf938278cc6f_images_image-4db6868d-67a6-428f-8fd1-b3ea8413f63a.png`,
  `${assets}/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_90c31b7563f4c6569e48cf938278cc6f_images_image-fe27aa3a-8094-436d-a102-863d8c0a28df.png`,
  `${assets}/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_90c31b7563f4c6569e48cf938278cc6f_images_image-62575549-9887-428a-a5da-f93910c4a747.png`,
];

const out = "public/projects/sendit.png";
const width = 1400;
const webHeight = 500;
const phoneWidth = 220;
const sectionGap = 12;
const phoneGap = 20;

async function framePhone(input, targetWidth = phoneWidth) {
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

async function composeRow(frames, gap = phoneGap) {
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

const webBuf = await sharp(webCapture)
  .resize({ width, height: webHeight, fit: "cover", position: "top" })
  .png()
  .toBuffer();

const phones = [];
for (const img of mobileCaptures) {
  phones.push(await framePhone(img));
}
const mobileRow = await composeRow(phones);
const mobileMeta = await sharp(mobileRow).metadata();
const webMeta = await sharp(webBuf).metadata();

const totalH = webMeta.height + sectionGap + mobileMeta.height;
const mobileLeft = Math.floor((width - mobileMeta.width) / 2);

await sharp({
  create: { width, height: totalH, channels: 3, background: { r: 10, g: 12, b: 20 } },
})
  .composite([
    { input: webBuf, top: 0, left: 0 },
    { input: mobileRow, top: webMeta.height + sectionGap, left: mobileLeft },
  ])
  .png({ compressionLevel: 8 })
  .toFile(out);

const final = await sharp(out).metadata();
console.log("saved", out, `${final.width}x${final.height}`);
