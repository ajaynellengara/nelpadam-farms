const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (f === 'node_modules' || f === '.git') continue;
    if (fs.statSync(full).isDirectory()) files.push(...walk(full));
    else if (f.endsWith('.js') || f.endsWith('.jsx')) files.push(full);
  }
  return files;
}

const replacements = [
  ['Govindan Nair', 'Govindan Nair'],
  ['GovindanPortrait', 'GovindanPortrait'],
  ["Govindan's", "Govindan's"],
  ['Govindan gets', 'Govindan gets'],
  ['Govindan harvests', 'Govindan harvests'],
  ['Govindan will', 'Govindan will'],
  ['Govindan ships', 'Govindan ships'],
  ['Govindan knows', 'Govindan knows'],
  ['Govindan personally', 'Govindan personally'],
  ['Govindan smiles', 'Govindan smiles'],
  ['Govindan takes', 'Govindan takes'],
  ['Support Govindan', 'Support Govindan'],
  ['Chat with Govindan', 'Chat with Govindan'],
  ['WhatsApp Govindan', 'WhatsApp Govindan'],
  ['price to Govindan', 'price to Govindan'],
  ['Namaskaram Govindan', 'Namaskaram Govindan'],
  ['Meet Govindan', 'Meet Govindan'],
  ['Govindan planted', 'Govindan planted'],
  ['Govindan grows', 'Govindan grows'],
  ['Govindan still', 'Govindan still'],
  ['Govindan says', 'Govindan says'],
  ['name: "Govindan Nair"', 'name: "Govindan Nair"'],
  ['"Govindan"', '"Govindan"'],
  ["Govindan's Story", "Govindan's Story"],
  ['Ready to support Govindan', 'Ready to support Govindan'],
  ['Govindan smiles every', 'Govindan smiles every'],
  ['Govindan Nair farms', 'Govindan Nair farms'],
  ["Pre-Order Govindan", "Pre-Order Govindan"],
  ["Govindan's Harvest", "Govindan's Harvest"],
  ['His name is', 'His name is'],
];

const files = walk('d:/REACT/_personal/farming-pepper');
let total = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [from, to] of replacements) {
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
