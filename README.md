# Yanbao Li — Personal Portfolio

**English** · [简体中文](#简体中文) · [Live site](https://yanbaoli.me)

Source code for [yanbaoli.me](https://yanbaoli.me), the personal portfolio of
Yanbao Li (Yan), an Information Systems student at Stony Brook University
interested in software engineering and applied AI.

[中文说明](#中文说明)

## Highlights

- Bilingual English / Chinese experience
- Responsive portfolio layout with education, awards, skills, and project slots
- Links to GitHub, LinkedIn, résumé, and email

## Tech Stack

- React 19
- TypeScript
- Vinext / Vite
- CSS

## Run locally

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Live site

[yanbaoli.me](https://yanbaoli.me)

## Automatic publishing

The website is exported as static HTML and hosted by GitHub Pages. Every push
to `main` runs lint, builds the website, tests the output, then publishes
`dist/client`. Pull requests run the same checks without publishing.

Update this repository with any editor or coding assistant, then merge or push
to `main`. No ChatGPT Sites session or separate cloud credentials are required.
Deployment progress and failures appear in the repository's Actions tab.

GitHub Pages must use **GitHub Actions** as its publishing source and
`yanbaoli.me` as its custom domain. DNS stays with Namecheap; only the apex
website records and `www` point to GitHub Pages. Other subdomains and mail
records stay as configured. The old ChatGPT Sites hosting association has
been removed from the build; the previous setup is available in Git history.
Content Security Policy and referrer policy are declared in the exported HTML;
HTTP response headers and the `www` redirect are managed by GitHub Pages.

---

## 简体中文

**[English](#yanbao-li--personal-portfolio)** · 简体中文 · [访问网站](https://yanbaoli.me)

这是 [yanbaoli.me](https://yanbaoli.me) 的源代码仓库。该网站是 Yanbao Li（Yan）的中英文个人作品集；Yan 目前就读于石溪大学 Information Systems 专业，关注软件工程与应用型 AI。

### 网站亮点

- 英文优先，并提供完整中文内容
- 响应式作品集布局，覆盖教育经历、项目、奖项与技能
- 提供 GitHub、LinkedIn、简历和电子邮箱入口
- 在桌面、平板和手机尺寸下保持可读与可操作

### 技术栈

- React 19
- TypeScript
- Vinext / Vite
- CSS

### 本地运行

需要 Node.js 22.13 或更高版本，以及 pnpm。

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
```

### 在线网站

[yanbaoli.me](https://yanbaoli.me)

### 自动发布

网站由 GitHub Pages 托管。每次更新 `main`，GitHub 会自动检查代码、构建并测试，
全部通过后发布新版；拉取请求只检查，不发布。

以后可以用任何编辑器或编程助手修改这个仓库，再合并或推送到 `main`。
无需回到 ChatGPT 发布，也无需单独提供云服务密钥；发布进度在仓库的 Actions 中查看。
域名仍是 `yanbaoli.me`，其他子域名和邮件配置不受这条发布流程影响。
