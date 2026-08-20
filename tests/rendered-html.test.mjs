import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the bilingual English-first portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<title>Yanbao Li \(Yan\) — Personal Homepage<\/title>/i);
  assert.match(html, />EN</);
  assert.match(html, />中</);
  assert.match(html, /https:\/\/github\.com\/Owl-Lee\/AdMind/);
  assert.match(html, /https:\/\/github\.com\/Owl-Lee\/Sona-Player/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("keeps public assets and bilingual project data", async () => {
  const [page] = await Promise.all([readFile(new URL("../app/page.tsx", import.meta.url), "utf8"), access(new URL("../public/Yanbao-Li-Resume.docx", import.meta.url))]);
  assert.match(page, /en:\s*\{/);
  assert.match(page, /zh:\s*\{/);
  assert.match(page, /https:\/\/github\.com\/Owl-Lee\/Sona-Player/);
});
