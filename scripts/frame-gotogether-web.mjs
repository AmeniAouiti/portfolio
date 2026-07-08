import sharp from "sharp";
import fs from "fs";

const input =
  "C:/Users/user/.cursor/projects/d-portfolio-Portfolio-Ameni/assets/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_90c31b7563f4c6569e48cf938278cc6f_images_image-fd8e1854-eab1-47f3-b2ae-c3be7eb4a98f.png";
const out = "public/projects/gotogether.png";

const browserWidth = 1200;
const screen = await sharp(input).resize({ width: browserWidth }).png().toBuffer();
const screenMeta = await sharp(screen).metadata();

const barH = 44;
const pad = 10;
const totalW = screenMeta.width + pad * 2;
const totalH = screenMeta.height + barH + pad;

const chrome = Buffer.from(`<svg width="${totalW}" height="${totalH}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${totalW}" height="${totalH}" rx="16" fill="#1e293b"/>
  <rect y="${barH}" width="${totalW}" height="${totalH - barH}" fill="#f8fafc"/>
  <circle cx="24" cy="22" r="7" fill="#ef4444"/>
  <circle cx="48" cy="22" r="7" fill="#f59e0b"/>
  <circle cx="72" cy="22" r="7" fill="#22c55e"/>
  <rect x="${totalW / 2 - 180}" y="10" width="360" height="24" rx="12" fill="#0f172a"/>
  <text x="${totalW / 2}" y="27" text-anchor="middle" fill="#94a3b8" font-family="Arial,sans-serif" font-size="12">gotogether.app/login</text>
</svg>`);

await sharp(chrome)
  .composite([{ input: screen, top: barH + Math.floor(pad / 2), left: pad }])
  .resize({ width: 1400 })
  .png({ compressionLevel: 8 })
  .toFile(out);

const m = await sharp(out).metadata();
console.log("saved", out, `${m.width}x${m.height}`);
