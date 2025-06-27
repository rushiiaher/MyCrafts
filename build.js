const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'final-out');

// Define source → destination mapping
const folders = [
  { from: 'Coaching_web', to: 'coaching' },
  { from: 'Perfume_website', to: 'perfume' },
  { from: 'Portfolio_website', to: 'portfolio' },
  { from: 'Startup_web', to: 'startup' },
  { from: 'ai-conference-2025/out', to: 'ai-conference-2025' },
];

// Clean and create final-out folder
if (fs.existsSync(OUTPUT_DIR)) {
  fse.removeSync(OUTPUT_DIR);
}
fs.mkdirSync(OUTPUT_DIR);

// Copy all folders
folders.forEach(({ from, to }) => {
  const src = path.join(__dirname, from);
  const dest = path.join(OUTPUT_DIR, to);
  fse.copySync(src, dest);
  console.log(`Copied ${from} → ${to}`);
});
