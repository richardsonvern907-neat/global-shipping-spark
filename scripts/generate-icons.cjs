const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/favicon-base.svg');
const outDir = path.join(__dirname, '../public');

const sizes = [16, 32, 48, 180, 192, 512];

async function generate() {
  const svgBuffer = fs.readFileSync(svgPath);
  
  for (const size of sizes) {
    const filename = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(outDir, filename));
    console.log(`Generated ${filename}`);
  }

  // Use 32x32 for favicon.ico as a simple fallback
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(outDir, 'favicon.ico'));
  console.log('Generated favicon.ico');
}

generate().catch(console.error);
