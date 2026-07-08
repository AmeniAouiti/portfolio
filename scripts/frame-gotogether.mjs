import sharp from "sharp";
import fs from "fs";

const input =
  "C:/Users/user/.cursor/projects/d-portfolio-Portfolio-Ameni/assets/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_90c31b7563f4c6569e48cf938278cc6f_images_image-fd8e1854-eab1-47f3-b2ae-c3be7eb4a98f.png";
const out = "public/projects/gotogether.png";
fs.mkdirSync("public/projects", { recursive: true });

async function frameScreenshot(src, targetWidth = 310) {
  const resized = await sharp(src).resize({ width: targetWidth }).png().toBuffer();
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
      <linearGradient id="b" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#52525b"/>
        <stop offset="100%" stop-color="#18181b"/>
      </linearGradient>
    </defs>
    <rect width="${phoneW}" height="${phoneH}" rx="42" fill="url(#b)"/>
    <rect x="${phoneW / 2 - 46}" y="10" width="92" height="14" rx="7" fill="#09090b"/>
    <rect x="${padX}" y="${padTop}" width="${screenW}" height="${screenH}" rx="22" fill="#000"/>
  </svg>`);

  return sharp(svg)
    .composite([{ input: resized, top: padTop, left: padX }])
    .png()
    .toBuffer();
}

const phone = await frameScreenshot(input);
const pm = await sharp(phone).metadata();
const W = 900;
const H = 620;
const bg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eef2ff"/>
      <stop offset="50%" stop-color="#f5f3ff"/>
      <stop offset="100%" stop-color="#ede9fe"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
</svg>`);

await sharp(bg)
  .composite([
    {
      input: phone,
      top: Math.floor((H - pm.height) / 2),
      left: Math.floor((W - pm.width) / 2),
    },
  ])
  .png()
  .toFile(out);

console.log("saved", out);
