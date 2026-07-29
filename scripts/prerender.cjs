/* Post-build prerender: emits static HTML per route so crawlers/AI engines
   receive full content in the initial payload, plus per-route SEO head tags,
   JSON-LD schema, sitemap.xml and robots.txt.
   CI-safe: resolves paths relative to the project root and bundles the
   prerender entry with esbuild on first run. */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const BUNDLE = path.join(ROOT, '.tmp', 'prerender.cjs');
const SITE = 'https://liliav.com';

{
  fs.mkdirSync(path.dirname(BUNDLE), { recursive: true });
  execSync(
    `"${path.join(ROOT, 'node_modules', '.bin', 'esbuild')}" src/prerender.tsx --bundle --platform=node --format=cjs --outfile=.tmp/prerender.cjs --jsx=automatic --loader:.css=empty --alias:@=./src`,
    { cwd: ROOT, stdio: 'inherit' },
  );
}

const { render, PAGES } = require(BUNDLE);

const tpl = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

for (const page of PAGES) {
  const html = render(page.path);
  let out = tpl;
  out = out.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  out = out.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(page.title)}</title>`);
  out = out.replace(/<meta name="description" content="[^"]*" \/>/, () => `<meta name="description" content="${esc(page.description)}" />`);
  const canonical = `<link rel="canonical" href="${SITE}${page.path === '/' ? '/' : page.path}" />`;
  const ld = page.jsonld ? `\n    <script type="application/ld+json">${JSON.stringify(page.jsonld)}</script>` : '';
  out = out.replace('</head>', () => `    ${canonical}${ld}\n  </head>`);
  const dir = page.path === '/' ? DIST : path.join(DIST, page.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), out);
}

// sitemap.xml + robots.txt are also committed under public/ so a plain
// `vite build` includes them; regenerate here to keep prerendered deploys in sync.
const urls = PAGES.map(
  (p) => `  <url><loc>${SITE}${p.path === '/' ? '/' : p.path}</loc><changefreq>${p.path === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${p.path === '/' ? '1.0' : p.path.startsWith('/procedures/') || p.path.startsWith('/destinations/') ? '0.9' : '0.7'}</priority></url>`,
).join('\n');
fs.writeFileSync(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(
  path.join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`,
);

console.log(`Prerendered ${PAGES.length} pages + sitemap.xml + robots.txt`);
