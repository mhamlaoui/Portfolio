const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public');
// Only this generated directory is cleared; never serve the repository root.
if (path.dirname(output) !== root || path.basename(output) !== 'public') throw new Error('Invalid output');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
const files = [
  'index.html', 'confidentialite.html', 'mentions-legales.html', '404.html',
  'google954e9a034987986a.html', 'assets/css/style.css', 'assets/js/main.js', 'assets/js/theme.js',
  'assets/fonts/manrope-variable.woff2', 'assets/fonts/OFL-Manrope.txt',
  'assets/img/favicon-32.png', 'assets/img/apple-touch-icon.png', 'assets/img/og-image.jpg',
  'assets/img/ilias-portrait.webp', 'assets/img/immersion.webp', 'assets/img/cyber360.webp',
  'assets/img/cocovoit.webp', 'assets/img/virus-cover.webp',
  'assets/docs/Profile-Ilias-Hamlaoui.pdf', 'assets/docs/profile-preview.webp'
];
for (const file of files) {
  const target = path.join(output, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(path.join(root, file), target);
}
console.log(`Built ${files.length} public assets. Server code, secrets and old CVs are excluded.`);
