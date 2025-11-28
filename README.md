# 📝 Ker102's Blog

![Astro](https://img.shields.io/badge/Astro-v5-BC52EE?style=flat&logo=astro&logoColor=white)
![Deploy](https://img.shields.io/github/actions/workflow/status/Ker102/Astroblogauto/deploy.yml?label=deploy&logo=github)
![Notion Sync](https://img.shields.io/github/actions/workflow/status/Ker102/Astroblogauto/publish-from-notion.yml?label=notion%20sync&logo=notion&logoColor=white)
![License](https://img.shields.io/badge/license-personal-blue)

My personal blog — a space where I share thoughts, learnings, and the occasional deep dive into tech topics.

🔗 **Live site:** [ker102.github.io/Astroblogauto](https://ker102.github.io/Astroblogauto/)

---

## ✨ How It Works

| Feature | Description |
|---------|-------------|
| 📄 **Notion → Blog** | Write posts in Notion, auto-publish to the site via GitHub Actions |
| ⚡ **Astro v5** | Lightning-fast static site generation |
| 🚀 **GitHub Pages** | Automatic deployment on every push to `main` |
| 📰 **RSS Feed** | Subscribe at `/Astroblogauto/rss.xml` |
| 🗺️ **Sitemap** | SEO-friendly sitemap generation |

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📂 Project Structure

```
src/
├── content/blog/   ← Blog posts (Markdown/MDX)
├── layouts/        ← Page templates
├── pages/          ← Routes
└── components/     ← Reusable UI pieces
scripts/
└── publish.js      ← Notion publishing script
```

---

<p align="center">
  <sub>Built with <a href="https://astro.build">Astro</a> • Theme inspired by <a href="https://github.com/HermanMartinus/bearblog/">Bear Blog</a></sub>
</p>
