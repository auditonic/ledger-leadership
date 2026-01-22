// Helper script to extract HTML body content for Next.js conversion
const fs = require('fs');
const path = require('path');

const htmlFiles = [
  'index.html',
  'about.html',
  'contact.html',
  'contribute.html',
  'edges.html',
  'field-notes.html',
  'for-podcasters.html',
  'practice.html'
];

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (bodyMatch) {
      console.log(`\n✅ ${file}: Body content extracted (${bodyMatch[1].length} chars)`);
    } else {
      console.log(`\n⚠️  ${file}: No body tag found`);
    }
  }
});
