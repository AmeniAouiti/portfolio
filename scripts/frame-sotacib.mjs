import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir =
  "C:/Users/user/.cursor/projects/d-portfolio-Portfolio-Ameni/assets";
const srcName = fs
  .readdirSync(assetsDir)
  .find((f) => f.includes("2cf0aa26-fbbe-4bfa-b02f-fc241399fa0b") && f.endsWith(".png"))
  ?? fs
    .readdirSync(assetsDir)
    .find((f) => f.includes("8727b7d4-2b52-4376-b6a7-f8ff7e433117") && f.endsWith(".png"));

if (!srcName) throw new Error("Sotacib collage not found");

const temp = "public/projects/sotacib-source.png";
const out = "public/projects/sotacib.png";

fs.writeFileSync(temp, fs.readFileSync(path.join(assetsDir, srcName)));
await sharp(temp)
  .trim({ threshold: 15 })
  .resize({ width: 1400 })
  .png({ compressionLevel: 8 })
  .toFile(out);
fs.unlinkSync(temp);

const meta = await sharp(out).metadata();
console.log("saved", out, `${meta.width}x${meta.height}`);
