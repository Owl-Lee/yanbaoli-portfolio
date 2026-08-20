import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the public English-first portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /Yanbao Li \(Yan\) — Personal Homepage/);
  assert.match(html, /Selected Projects/);
  assert.match(html, /Information Systems student/);
  assert.match(html, /https:\/\/github\.com\/Owl-Lee\/Sona-Player/);
  assert.match(html, /aria-label="Language selection"/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/i);
});

test("keeps complete English and Chinese content in the client source", async () => {
  const [page, css, readme] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /type Language = "en" \| "zh"/);
  assert.match(page, /Selected Projects/);
  assert.match(page, /主要项目/);
  assert.match(page, /Primary navigation/);
  assert.match(page, /主导航/);
  assert.match(page, /Back to top/);
  assert.match(page, /回到顶部/);
  assert.match(css, /@media \(max-width: 680px\)/);
  assert.match(css, /\.repoStatus:not\(\.repoLink\)/);
  assert.match(readme, /## 简体中文/);
  await Promise.all([
    access(new URL("../public/Yanbao-Li-Resume.docx", import.meta.url)),
    access(new URL("../public/yanbao-li-photo.png", import.meta.url)),
  ]);
});
