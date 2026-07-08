import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir =
  "C:/Users/user/.cursor/projects/d-portfolio-Portfolio-Ameni/assets";
const src = fs
  .readdirSync(assetsDir)
  .find((f) => f.includes("dad62ec4-6574-4fa8-a25e-6fdb9c44211f") && f.endsWith(".png"))
  ?? fs
    .readdirSync(assetsDir)
    .find((f) => f.includes("Violet_et_Cr_me_Illustr") && f.endsWith(".png"));

if (!src) throw new Error("GainUP source image not found");

const input = path.join(assetsDir, src);
const temp = "public/projects/gainup-source.png";
const out = "public/projects/gainup.png";

fs.writeFileSync(temp, fs.readFileSync(input));
await sharp(temp).resize({ width: 1400 }).png({ compressionLevel: 8 }).toFile(out);
fs.unlinkSync(temp);

const meta = await sharp(out).metadata();
console.log("saved", out, `${meta.width}x${meta.height}`);
