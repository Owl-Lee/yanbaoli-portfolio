# Portfolio workflow

- This website is hosted on GitHub Pages at `https://yanbaoli.me`. Preserve this hosting choice; do not register or publish it with ChatGPT Sites.
- Pushes to `main` automatically publish after the GitHub Actions checks pass. Pull requests only verify changes. No ChatGPT session or cloud deployment secret is needed.
- Use pnpm and preserve `pnpm-lock.yaml`. Run `pnpm lint` and `pnpm test` for changes affecting the site or publishing process.
- `pnpm build` creates a static export in `dist/client`. Only this directory is published; server build files must not be uploaded.
- Keep the English and Chinese experience and existing public URLs intact. DNS changes should be limited to this website's apex and `www`; other subdomains and mail records are separate services.
- Before publishing a user-requested preview, honor any explicit request to wait for review. Otherwise follow the user's authorization for changes and automatic publishing.
