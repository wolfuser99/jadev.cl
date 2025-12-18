import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const inputSvg = path.join(root, 'public', 'favicon.svg');
const outDir = path.join(root, 'public');

async function ensureExists(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function generate() {
  const svg = await fs.promises.readFile(inputSvg);
  await ensureExists(outDir);

  const sizes = [16, 32, 48];
  for (const size of sizes) {
    const out = path.join(outDir, `favicon-${size}x${size}.png`);
    await sharp(svg).resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png({ quality: 90 }).toFile(out);
    console.log('Wrote', out);
  }

  const apple = path.join(outDir, 'apple-touch-icon.png');
  await sharp(svg).resize(180, 180).png({ quality: 92 }).toFile(apple);
  console.log('Wrote', apple);

  const android192 = path.join(outDir, 'android-chrome-192x192.png');
  await sharp(svg).resize(192, 192).png({ quality: 92 }).toFile(android192);
  console.log('Wrote', android192);

  const android512 = path.join(outDir, 'android-chrome-512x512.png');
  await sharp(svg).resize(512, 512).png({ quality: 92 }).toFile(android512);
  console.log('Wrote', android512);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
