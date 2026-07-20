const fs = require("fs/promises");
const pngToIco = require("png-to-ico").default;
const sharp = require("sharp");

const maskInput = "C:/Users/enzo.gardel/Downloads/R3Tech-Logo.webp";
const crop = { left: 80, top: 330, width: 1090, height: 540 };

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

async function buildTransparentLogo() {
  const base = sharp(maskInput)
    .extract(crop)
    .resize(1080, 520)
    .ensureAlpha();
  const { data, info } = await base.raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const x = (i / 4) % info.width;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    const isWhiteMark = max > 130 && saturation < 0.22;
    const isBlueMark = b > 115 && b - r > 45 && saturation > 0.28;
    const whiteMarkScore = isWhiteMark ? clamp((max - 128) / 94) : 0;
    const blueMarkScore = isBlueMark
      ? clamp((b - 110) / 115) * clamp((b - r - 30) / 115)
      : 0;
    const markScore = Math.max(whiteMarkScore, blueMarkScore);

    if (markScore < 0.06) {
      data[i + 3] = 0;
      continue;
    }

    data[i + 3] = Math.round(255 * clamp(Math.pow(markScore, 0.75)));

    if (whiteMarkScore >= blueMarkScore) {
      const lift = clamp((x - info.width * 0.04) / (info.width * 0.42));
      data[i] = Math.round(246 + lift * 9);
      data[i + 1] = Math.round(249 + lift * 6);
      data[i + 2] = 255;
    } else {
      const t = clamp((x - info.width * 0.5) / (info.width * 0.46));
      data[i] = Math.round(40 - t * 28);
      data[i + 1] = Math.round(198 - t * 82);
      data[i + 2] = 255;
    }
  }

  return sharp(data, { raw: info })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 12 })
    .extend({
      top: 34,
      right: 44,
      bottom: 34,
      left: 44,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
}

async function main() {
  const logo = await buildTransparentLogo();

  await logo
    .clone()
    .resize(980, null, { fit: "inside", withoutEnlargement: false })
    .webp({ quality: 96, alphaQuality: 100 })
    .toFile("public/r3Tech-logo-transparent.webp");

  await logo
    .clone()
    .resize(512, 512, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile("public/r3Tech-icon.png");

  const sizes = [16, 32, 48, 64];
  const files = [];
  for (const size of sizes) {
    const file = `public/r3Tech-icon-${size}.png`;
    await sharp("public/r3Tech-icon.png").resize(size, size).png().toFile(file);
    files.push(file);
  }

  const ico = await pngToIco(files);
  await fs.writeFile("public/favicon.ico", ico);
  for (const file of files) await fs.rm(file, { force: true });
  console.log(`transparent logo and ico generated (${ico.length} bytes)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
