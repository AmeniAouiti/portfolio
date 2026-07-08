import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir =
  "C:/Users/user/.cursor/projects/d-portfolio-Portfolio-Ameni/assets";
const srcName = fs
  .readdirSync(assetsDir)
  .find((f) => f.includes("89a5b3b0-6abd-4c87-88b9-d2153ba8e212") && f.endsWith(".png"));

if (!srcName) throw new Error("Kurubis screenshot not found");

const temp = "public/projects/kurubis-source.png";
const out = "public/projects/kurubis.png";

fs.writeFileSync(temp, fs.readFileSync(path.join(assetsDir, srcName)));

const browserWidth = 1200;
const screen = await sharp(temp).resize({ width: browserWidth }).png().toBuffer();
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
  <rect x="${totalW / 2 - 260}" y="10" width="520" height="24" rx="12" fill="#0f172a"/>
  <text x="${totalW / 2}" y="27" text-anchor="middle" fill="#94a3b8" font-family="Arial,sans-serif" font-size="12">kurubis-uniforme-de-tunisie-lwxh.vercel.app</text>
</svg>`);

await sharp(chrome)
  .composite([{ input: screen, top: barH + Math.floor(pad / 2), left: pad }])
  .resize({ width: 1400 })
  .png({ compressionLevel: 8 })
  .toFile(out);

fs.unlinkSync(temp);

const m = await sharp(out).metadata();
console.log("saved", out, `${m.width}x${m.height}`);
