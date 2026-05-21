const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (f === 'node_modules' || f === '.git' || f === 'scripts') continue;
    if (fs.statSync(full).isDirectory()) files.push(...walk(full));
    else if (f.endsWith('.js') || f.endsWith('.jsx')) files.push(full);
  }
  return files;
}

// Old parchment hex → New soil-light hex
// Ordered longest-first to avoid partial replacement issues
const swaps = [
  // Exact background colors
  ['#F5EDD9', '#E8D4B0'],  // parchment → soil-base
  ['#EDE0C4', '#DBBF97'],  // parchment-alt → soil-base-alt
  ['#E0CEAD', '#CCAA80'],  // parchment-deep → soil-base-deep
  ['#FFFDF7', '#F2E6D0'],  // white → soil-base-pale
  ['#FBF0CC', '#F5DFA0'],  // gold-pale
  ['#D4E8C8', '#C8DFB8'],  // leaf-pale (slightly warmer)
  // Meta description (HTML content)
  ['F5EDD9', 'E8D4B0'],    // bare hex in meta theme-color etc
];

const files = walk('d:/REACT/_personal/farming-pepper');
let total = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [from, to] of swaps) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    total++;
    console.log('Updated:', path.basename(file));
  }
}
console.log('Done. Files updated:', total);
