// Prints the résumé PDFs from the built print pages (dist/<lang>/resume-print/), then removes
// those pages so they are never published. Also checks each PDF is at most two pages and that
// its text has no email address, phone number, postal code or AWS account ID.
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { existsSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const DIST = 'dist';
const OUTPUTS = { en: 'JP-DuBouchard-Resume.pdf', fr: 'JP-DuBouchard-CV.pdf' };
const MAX_PAGES = 2;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' };

const privacy = [
  ['an email address', /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g],
  ['a phone number', /(?:\+?1[\s.-]?)?\(?\b\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b/g],
  ['a postal code', /\b[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d\b/g],
  ['an AWS account ID', /\b\d{12}\b/g],
];

// Serve dist/ so the print pages find their stylesheet
const server = createServer((req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  let file = join(DIST, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;

async function launch() {
  const attempts = [process.env.CHROME_PATH, '/usr/bin/google-chrome', undefined].filter((p, i, a) => p !== null && a.indexOf(p) === i);
  let lastError;
  for (const executablePath of attempts) {
    if (executablePath && !existsSync(executablePath)) continue;
    try {
      return await chromium.launch(executablePath ? { executablePath } : {});
    } catch (e) {
      lastError = e;
    }
  }
  throw new Error(`Could not start a Chromium browser to print the résumé PDFs: ${lastError?.message ?? 'none found'}`);
}

const errors = [];
const browser = await launch();
try {
  for (const [lang, name] of Object.entries(OUTPUTS)) {
    const page = await browser.newPage();
    await page.goto(`${base}/${lang}/resume-print/`, { waitUntil: 'load' });
    const text = await page.evaluate(() => document.body.innerText);
    const buffer = await page.pdf({ preferCSSPageSize: true, printBackground: true });
    await page.close();

    const pages = (buffer.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    if (pages < 1) errors.push(`${name}: could not count pages`);
    if (pages > MAX_PAGES) errors.push(`${name} runs to ${pages} pages; the limit is ${MAX_PAGES}. Trim the content or tighten the print layout.`);
    for (const [what, re] of privacy) {
      for (const [match] of text.matchAll(re)) errors.push(`${name} contains what looks like ${what}: ${match}`);
    }
    writeFileSync(join(DIST, lang, name), buffer);
    console.log(`${lang}/${name}: ${pages} page(s), ${(buffer.length / 1024).toFixed(0)} KB`);
  }
} finally {
  await browser.close();
  server.close();
  // Never publish the print pages
  for (const lang of Object.keys(OUTPUTS)) rmSync(join(DIST, lang, 'resume-print'), { recursive: true, force: true });
}

if (errors.length) {
  console.error(`PDF build failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
