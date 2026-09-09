import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';

const read = file => readFileSync(file,'utf8');
const pages = ['index.html','publications/index.html','projects/index.html','background/index.html','404.html'];
const html = Object.fromEntries(pages.map(p => [p, read(path.join('dist', p))]));
const matches = (s,re) => [...s.matchAll(re)];
const ids = s => matches(s,/\bid="([^"]+)"/g).map(m => m[1]);
const publications = JSON.parse(read('src/data/publications.json'));
const projects = JSON.parse(read('src/data/projects.json'));
const provenance = JSON.parse(read('docs/cv-provenance.json'));
assert.equal(publications.length,8);
assert.equal(projects.length,6);
assert.equal(matches(html['index.html'],/data-publication=/g).length,4);
assert.equal(matches(html['index.html'],/data-project=/g).length,3);
assert.equal(matches(html['publications/index.html'],/data-publication=/g).length,8);
assert.equal(matches(html['projects/index.html'],/data-project=/g).length,6);
for (const pub of publications) {
  assert(ids(html['publications/index.html']).includes(pub.id), `Missing publication ${pub.id}`);
  assert(pub.links.some(l=>l.label==='Paper'));
  assert(!pub.authors.includes('et al.'),`Incomplete authors: ${pub.id}`);
}
for (const project of projects) assert(ids(html['projects/index.html']).includes(project.id));
for (const alias of ['intro','skills','experience','education','conferences','projects','publications','contact']) assert(ids(html['index.html']).includes(alias));
let internalLinks=0;
for(const [file, content] of Object.entries(html)) {
  assert.equal(matches(content,/<h1\b/g).length,1,`${file}: one h1`);
  const pageIds=ids(content);
  assert.equal(pageIds.length,new Set(pageIds).size,`${file}: unique IDs`);
  assert.match(content,/<html lang="en"/);
  assert.match(content,/<title>[^<]+<\/title>/);
  assert.match(content,/<meta name="description" content="[^"]+"/);
  assert.match(content,/<link rel="canonical"/);
  assert(!/jquery|particles\.js|ai-animations|typing-effect/.test(content),`${file}: obsolete script`);
  const headings=matches(content,/<h([1-6])\b/g).map(m=>Number(m[1]));
  headings.forEach((n,i)=>assert(i===0||n<=headings[i-1]+1,`${file}: heading order`));
  for(const [tag] of matches(content,/<img\b[^>]*>/g)) {
    assert.match(tag,/alt="[^"]+"/); assert.match(tag,/width="\d+"/); assert.match(tag,/height="\d+"/);
  }
  for (const [, raw] of matches(content,/\b(?:href|src)="([^"]+)"/g)) {
    const link=raw.replaceAll('&amp;','&');
    if (/^(https?:|mailto:|data:)/.test(link)) continue;
    const base=new URL(file==='index.html'?'/':'/'+file.replace(/index.html$/,''),'https://local.test');
    const url=new URL(link,base);
    let target=url.pathname.slice(1);
    if (!target || target.endsWith('/')) target+='index.html';
    assert(existsSync(path.join('dist',target)),`${file}: missing ${link}`);
    if(url.hash && target.endsWith('.html')) assert(ids(read(path.join('dist',target))).includes(decodeURIComponent(url.hash.slice(1))),`${file}: missing anchor ${link}`);
    internalLinks++;
  }
}
const cv=readFileSync('dist/assets/files/Hossein_Shirali_CV.pdf');
assert.equal(createHash('sha256').update(cv).digest('hex'),provenance.sha256,'CV hash');
assert.equal(cv.subarray(0,4).toString(),'%PDF');
assert.equal(read('dist/google6a7ff7fa311fae9a.html'),read('google6a7ff7fa311fae9a.html'));
assert.match(read('dist/robots.txt'),/sitemap.xml/);
assert.equal(matches(read('dist/sitemap.xml'),/<loc>/g).length,4);
console.log(`PASS: ${pages.length} static pages; ${internalLinks} internal links/assets; 8 publications, 6 projects; homepage 4/3; aliases, headings, alt text, metadata, verification and CV checksum.`);
