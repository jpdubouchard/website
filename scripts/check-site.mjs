// Checks the built site in dist/: every new page exists in both languages,
// internal links on the new pages resolve, and the palette meets WCAG AA contrast.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const LANGS = ['en', 'fr'];
const errors = [];

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(p);
    return e.name.endsWith('.html') ? [p] : [];
  });
}

// 1. Both languages
const pages = Object.fromEntries(
  LANGS.map((l) => [l, new Set(htmlFiles(join(DIST, l)).map((f) => relative(join(DIST, l), f)))]),
);
for (const l of LANGS) {
  for (const page of pages[l]) {
    for (const other of LANGS) {
      if (!pages[other].has(page)) errors.push(`/${l}/${page} has no /${other}/ version`);
    }
  }
}

// 2. Internal links on the new pages
function resolves(path) {
  const file = join(DIST, decodeURI(path));
  if (existsSync(file) && statSync(file).isFile()) return true;
  return existsSync(join(file, 'index.html'));
}
for (const l of LANGS) {
  for (const file of htmlFiles(join(DIST, l))) {
    const html = readFileSync(file, 'utf8');
    for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (!url.startsWith('/') || url.startsWith('//')) continue;
      const path = url.split(/[?#]/)[0];
      if (!resolves(path)) errors.push(`${relative(DIST, file)} links to missing ${url}`);
    }
  }
}

// 3. Palette contrast (tokens in src/styles/global.css: light set, then dark sets)
const css = readFileSync('src/styles/global.css', 'utf8');
const sets = [];
for (const [, block] of css.matchAll(/\{([^{}]*--bg:[^{}]*)\}/g)) {
  const get = (name) => block.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`))?.[1];
  sets.push({ bg: get('bg'), text: get('text'), accent: get('accent'), onAccent: get('on-accent') });
}
function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
if (sets.length < 2) errors.push('Could not read the light and dark palette tokens');
for (const s of sets) {
  for (const [what, fg, bg] of [
    ['text on background', s.text, s.bg],
    ['links on background', s.accent, s.bg],
    ['button text on button', s.onAccent, s.accent],
  ]) {
    if (!fg || !bg) {
      errors.push(`Missing palette token for ${what}`);
      continue;
    }
    const r = ratio(fg, bg);
    if (r < 4.5) errors.push(`${what} ${fg} on ${bg} is ${r.toFixed(1)}:1, below 4.5:1`);
  }
}

if (errors.length) {
  console.error(`Site check failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`Site check passed: ${pages.en.size} pages in each language, links resolve, ${sets.length} palette sets meet AA.`);
