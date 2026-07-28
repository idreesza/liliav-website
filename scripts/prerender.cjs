/* Post-build prerender: emits static HTML per route so crawlers/AI engines
   receive full content in the initial payload, plus per-route SEO head tags,
   JSON-LD schema, sitemap.xml and robots.txt. */
const fs = require('fs');
const path = require('path');

const DIST = '/mnt/agents/output/app/dist';
const SITE = 'https://liliav.com';

const { render, PAGES } = require('/mnt/agents/output/app/.tmp/prerender.cjs');

const tpl = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

for (const page of PAGES) {
  const html = render(page.path);
  let out = tpl;

  // Inject rendered markup
  out = out.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);

  // Per-route title + description
  out = out.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(page.title)}</title>`);
  out = out.replace(/<meta name="description" content="[^"]*" \/>/, () => `<meta name="description" content="${esc(page.description)}" />`);

  // Canonical
  const canonical = `<link rel="canonical" href="${SITE}${page.path === '/' ? '/' : page.path}" />`;

  // Per-route JSON-LD
  const ld = page.jsonld
    ? `\n    <script type="application/ld+json">${JSON.stringify(page.jsonld)}</script>`
    : '';

  out = out.replace('</head>', () => `    ${canonical}${ld}\n  </head>`);

  const dir = page.path === '/' ? DIST : path.join(DIST, page.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), out);
}

// sitemap.xml
const urls = PAGES.map(
  (p) => `  <url><loc>${SITE}${p.path === '/' ? '/' : p.path}</loc><changefreq>${p.path === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${p.path === '/' ? '1.0' : p.path.startsWith('/procedures/') || p.path.startsWith('/destinations/') ? '0.9' : '0.7'}</priority></url>`,
).join('\n');
fs.writeFileSync(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

// robots.txt
fs.writeFileSync(
  path.join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`,
);

console.log(`Prerendered ${PAGES.length} pages + sitemap.xml + robots.txt`);
