#!/usr/bin/env node
/**
 * Generate PNG assets from SVG sources
 *
 * Uses rsvg-convert (librsvg) or sharp as fallback
 *
 * Usage: node scripts/generate-assets.js
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

function hasCommand(cmd) {
  try {
    execSync(`which ${cmd}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function rsvgConvert(input, output, width, height) {
  execSync(`rsvg-convert -w ${width} -h ${height} "${input}" > "${output}"`);
}

async function sharpConvert(input, output, width, height) {
  const sharp = (await import('sharp')).default;
  const { readFileSync } = await import('fs');
  const svg = readFileSync(input);
  await sharp(svg).resize(width, height).png().toFile(output);
}

async function generateAssets() {
  const useRsvg = hasCommand('rsvg-convert');

  console.log(`Generating web assets using ${useRsvg ? 'rsvg-convert' : 'sharp'}...\n`);

  const convert = useRsvg
    ? (i, o, w, h) => rsvgConvert(i, o, w, h)
    : sharpConvert;

  const assets = [
    { src: 'apple-touch-icon.svg', out: 'apple-touch-icon.png', w: 180, h: 180 },
    { src: 'og-image.svg', out: 'og-image.png', w: 1200, h: 630 },
    { src: 'favicon.svg', out: 'favicon-16x16.png', w: 16, h: 16 },
    { src: 'favicon.svg', out: 'favicon-32x32.png', w: 32, h: 32 },
    { src: 'apple-touch-icon.svg', out: 'icon-192x192.png', w: 192, h: 192 },
    { src: 'apple-touch-icon.svg', out: 'icon-512x512.png', w: 512, h: 512 },
  ];

  for (const { src, out, w, h } of assets) {
    const srcPath = join(publicDir, src);
    const outPath = join(publicDir, out);

    if (!existsSync(srcPath)) {
      console.log(`  SKIP ${out} (source ${src} not found)`);
      continue;
    }

    try {
      await convert(srcPath, outPath, w, h);
      console.log(`  OK ${out} (${w}x${h})`);
    } catch (err) {
      console.error(`  FAIL ${out}: ${err.message}`);
    }
  }

  console.log('\nAssets generated successfully!');
}

generateAssets().catch(console.error);
