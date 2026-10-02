import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the public English-first portfolio", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
  assert.match(html, /http-equiv="Content-Security-Policy"/i);
  assert.match(html, /style-src [^;]*https:\/\/fonts\.googleapis\.com/);
  assert.match(html, /font-src [^;]*https:\/\/fonts\.gstatic\.com/);
  assert.match(html, /name="referrer" content="strict-origin-when-cross-origin"/);
  assert.match(html, /<html lang="en"/i);

  // Metadata, SEO and fonts.
  assert.match(html, /Yanbao Li \(Yan\) — Software Engineering · Applied AI/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /og:image/);
  assert.match(html, /og\.png/);
  assert.match(html, /twitter:card/);
  assert.match(html, /summary_large_image/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /https:\/\/fonts\.googleapis\.com\/css2\?family=Newsreader/);
  assert.match(html, /Noto\+Serif\+SC/);

  // Accessibility landmarks.
  assert.match(html, /href="#main-content"/);
  assert.match(html, /id="main-content"/);
  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /aria-label="Language selection"/);
  assert.match(html, /aria-pressed="true"/);

  // Hero and sections.
  assert.match(html, /Hi, I’m Yan\./);
  assert.match(html, /Information Systems student at/);
  assert.match(html, /Open to software engineering and applied AI roles/);
  assert.match(html, /3 live projects/);
  for (const id of ["top", "projects", "research", "about", "awards"]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(html, /Selected projects/);
  assert.match(html, /Research &amp; modeling/);
  assert.match(html, /About &amp; education/);
  assert.match(html, /Awards &amp; leadership/);
  assert.match(html, /Skills &amp; interests/);
  assert.match(html, /Let’s build something useful\./);

  // Projects, their images and links.
  assert.match(html, /src="\/projects\/vh\.jpg"/);
  assert.match(html, /src="\/projects\/admind\.jpg"/);
  assert.match(html, /src="\/projects\/sona-player\.jpg"/);
  assert.match(html, /src="\/yanbao-li-photo\.jpg"/);
  assert.match(html, /src="\/brands\/sbu-logo\.jpg"/);
  assert.match(html, /src="\/brands\/ahu-logo\.png"/);
  assert.match(html, /https:\/\/videoharvester\.app\//);
  assert.match(html, /https:\/\/github\.com\/Owl-Lee\/VideoHarvester/);
  assert.match(html, /https:\/\/admind\.yanbaoli\.me\//);
  assert.match(html, /https:\/\/github\.com\/Owl-Lee\/AdMind/);
  assert.match(html, /https:\/\/sona\.yanbaoli\.me\//);
  assert.match(html, /https:\/\/github\.com\/Owl-Lee\/Sona"/);
  assert.doesNotMatch(html, /Owl-Lee\/Sona-Player/);
  assert.match(html, /Live demo/);
  assert.match(html, /Released · Windows/);
  assert.match(html, /Public demo · Web \/ API/);
  assert.match(html, /Preview · Windows &amp; Android/);
  assert.match(html, /recovery of unfinished tasks/);

  // Research, awards and contact.
  assert.match(html, /href="\/cumcm-2025-drone-optimization-paper\.pdf"/);
  assert.match(html, /href="\/mcm-icm-2025-problem-f-public\.pdf"/);
  assert.match(html, /Anhui University Student Innovation Competition/);
  assert.match(html, /Merit Award/);
  assert.match(html, /href="\/Yanbao-Li-Resume\.pdf"/);
  assert.match(html, /View résumé/);
  assert.match(html, /href="mailto:liyanbao06@outlook\.com"/);
  assert.match(html, /https:\/\/writing\.yanbaoli\.me\//);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/yanbao-li-772a45377\//);
  assert.match(html, /Back to top/);

  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/i);
  assert.doesNotMatch(html, /C:\/Users\/|E:\/Code\//i);
  assert.doesNotMatch(html, /https:\/\/yanbaoli\.me\/Yanbao-Li-Resume\.pdf/);
});

test("keeps complete English and Chinese content in the client source", async () => {
  const [page, css, readme] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /type Language = "en" \| "zh"/);
  assert.match(page, /const content: Record<Language, Content>/);
  const english = [
    "Selected projects", "Research & modeling", "About & education", "Awards & leadership",
    "Skills & interests", "Let’s build something useful.", "Primary navigation", "Back to top", "Copied",
  ];
  const chinese = [
    "李彦宝", "主要项目", "科研与建模", "关于与教育经历", "奖项与经历", "技能与方向",
    "一起做点有用的东西。", "主导航", "回到顶部", "已复制", "源码", "跳到正文",
  ];
  for (const phrase of [...english, ...chinese]) assert.ok(page.includes(phrase), `missing copy: ${phrase}`);
  assert.match(page, /李彦宝（Yan）— 个人主页/);
  assert.match(page, /searchParams\.set\("lang", "zh"\)/);
  assert.match(page, /navigator\.clipboard\.writeText/);
  assert.match(page, /IntersectionObserver/);

  assert.match(css, /@media \(max-width: 980px\)/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /html\[lang="zh-CN"\]/);
  assert.match(css, /--serif: "Newsreader", "Noto Serif SC"/);
  assert.match(readme, /## 简体中文/);
  await Promise.all([
    "../public/Yanbao-Li-Resume.pdf",
    "../public/cumcm-2025-drone-optimization-paper.pdf",
    "../public/mcm-icm-2025-problem-f-public.pdf",
    "../public/yanbao-li-photo.jpg",
    "../public/projects/vh.jpg",
    "../public/projects/admind.jpg",
    "../public/projects/sona-player.jpg",
    "../public/brands/sbu-logo.jpg",
    "../public/brands/ahu-logo.png",
    "../public/robots.txt",
    "../public/sitemap.xml",
    "../public/og.png",
    "../public/favicon.png",
  ].map((path) => access(new URL(path, import.meta.url))));
});

test("exports a complete website for GitHub Pages with local assets", async () => {
  const output = new URL("../dist/client/", import.meta.url);
  const html = await readFile(new URL("index.html", output), "utf8");
  assert.match(html, /Hi, I’m Yan\./);
  assert.match(html, /Selected projects/);
  assert.match(html, /Research &amp; modeling/);
  assert.match(html, /rel="canonical"/);
  assert.doesNotMatch(html, /\/_vinext\/image\?/);
  await access(new URL(".nojekyll", output));
  await access(new URL("404.html", output));

  const localAssets = new Set(
    [...html.matchAll(/(?:src|href)="(\/[^"#?]+)(?:[?#][^"]*)?"/g)]
      .map((match) => match[1])
      .filter((path) => path !== "/"),
  );
  assert.ok(localAssets.size > 5, "expected exported CSS, JavaScript, images and PDFs");
  for (const path of localAssets) await access(new URL(`.${path}`, output));
});
