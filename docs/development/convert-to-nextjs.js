const fs = require('fs');
const path = require('path');

// Map HTML files to Next.js routes
const routes = {
  'index.html': 'page.tsx',
  'about.html': 'about/page.tsx',
  'contact.html': 'contact/page.tsx',
  'contribute.html': 'contribute/page.tsx',
  'edges.html': 'edges/page.tsx',
  'field-notes.html': 'field-notes/page.tsx',
  'for-podcasters.html': 'for-podcasters/page.tsx',
  'practice.html': 'practice/page.tsx',
};

Object.entries(routes).forEach(([htmlFile, nextFile]) => {
  if (!fs.existsSync(htmlFile)) {
    console.log(`⚠️  ${htmlFile} not found`);
    return;
  }
  
  const html = fs.readFileSync(htmlFile, 'utf8');
  
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) {
    console.log(`⚠️  ${htmlFile}: No body tag found`);
    return;
  }
  
  let bodyContent = bodyMatch[1];
  
  // Extract title and description from head
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  
  const title = titleMatch ? titleMatch[1] : 'Ledger Leadership';
  const description = descMatch ? descMatch[1] : '';
  
  // Fix CSS path
  bodyContent = bodyContent.replace(/href=["']styles\.css["']/g, 'href="/styles.css"');
  
  // Fix internal links (remove .html extension for Next.js)
  bodyContent = bodyContent.replace(/href=["']([^"']+)\.html["']/g, (match, path) => {
    if (path === 'index') return 'href="/"';
    return `href="/${path}"`;
  });
  
  // Create Next.js page component
  const pageContent = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
};

export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`${bodyContent.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\` }} />
  );
}
`;
  
  // Create directory if needed
  const dir = path.dirname(`src/app/${nextFile}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(`src/app/${nextFile}`, pageContent);
  console.log(`✅ Created src/app/${nextFile}`);
});

console.log('\n✅ Conversion complete!');
