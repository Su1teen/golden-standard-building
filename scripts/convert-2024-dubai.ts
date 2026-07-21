import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import convert from "heic-convert";

const dir = "./src/assets/timeline/2024 dubai";

for (const file of readdirSync(dir)) {
  if (!file.toLowerCase().endsWith(".heic")) continue;

  const inputBuffer = readFileSync(join(dir, file));
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: "JPEG",
    quality: 0.92,
  });

  const outName = file.replace(/\.heic$/i, ".jpg");
  writeFileSync(join(dir, outName), outputBuffer);
  console.log(`Converted ${file} -> ${outName}`);
}
