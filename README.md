# OverlayQA site

Landing page for [OverlayQA](https://mulianju.github.io/overlayqa/). This repository is only the static site. It does not contain the extension or the license Worker.

Pages:

- `/` home
- `/privacy.html`
- `/terms.html`

Asset and navigation links are relative, so the same files work at `https://mulianju.github.io/overlayqa/` and, later, at a domain root. Canonical and Open Graph URLs are absolute and currently point at the project-pages address. If you move the site, update those `<head>` tags in `index.html`, `privacy.html`, and `terms.html`.

English / 中文 is a toggle on the page (`localStorage` key `oqa-lang`), not a separate path.

## Publish

Source: GitHub Actions (`.github/workflows/deploy-pages.yml`). Do not add a custom domain or a `CNAME` file.

1. This repo must be public: `github.com/mulianju/overlayqa`.
2. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Settings → Actions → General → Workflow permissions: **Read and write permissions**.
4. Push to `main`. The site is `https://mulianju.github.io/overlayqa/`.

`config.js` holds the price and the Creem checkout URL. `privacy@overlayqa.app` is still a contact placeholder.

## 说明

这个仓库只放落地页，用来发到 GitHub Pages。扩展和许可 Worker 不要推到这里。

导航用相对路径。canonical / Open Graph 写死为 `https://mulianju.github.io/overlayqa/`。换根域名时只改这三页 `<head>` 里的绝对地址。
