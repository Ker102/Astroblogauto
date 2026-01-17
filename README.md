# 📝 KJ — Technical Blog & Portfolio

![Astro](https://img.shields.io/badge/Astro-v5.16-BC52EE?style=flat&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-v19-61DAFB?style=flat&logo=react&logoColor=black)
![Deploy](https://img.shields.io/github/actions/workflow/status/Ker102/Astroblogauto/deploy.yml?label=deploy&logo=github)
![Notion Sync](https://img.shields.io/github/actions/workflow/status/Ker102/Astroblogauto/publish-from-notion.yml?label=notion%20sync&logo=notion&logoColor=white)
![License](https://img.shields.io/badge/license-personal-blue)

A personal technical blog and minimalistic portfolio by **Kristofer Jussmann** — covering AI Engineering, DevOps, and Full-Stack Development.

🔗 **Live site:** [ker102.github.io/Astroblogauto](https://ker102.github.io/Astroblogauto/)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📄 **Notion → Blog** | Write posts in Notion, auto-publish to the site via GitHub Actions |
| ⚡ **Astro v5** | Lightning-fast static site generation with React islands |
| 🎨 **Portfolio Page** | Showcase projects with animated components |
| 🚀 **GitHub Pages** | Automatic deployment on every push to `main` |
| 📰 **RSS Feed** | Subscribe at `/Astroblogauto/rss.xml` |
| 🗺️ **Sitemap** | SEO-friendly sitemap generation |
| 🔒 **CodeQL Security** | Automated security scanning |
| 🤖 **Dependabot** | Automated dependency updates with auto-merge |

---

## 🛠️ Tech Stack

- **Framework:** [Astro v5.16](https://astro.build) with MDX support
- **UI Components:** React 19 + Motion (animations)
- **Content:** Markdown/MDX blog posts, Notion CMS integration
- **Deployment:** GitHub Pages via GitHub Actions
- **Extras:** RSS feed, sitemap, Sharp for image optimization

---

## 📂 Project Structure

```
Astroblogauto/
├── src/
│   ├── components/       # Reusable UI (Header, Footer, WorkflowTimeline)
│   ├── content/blog/     # Blog posts (Markdown/MDX)
│   ├── layouts/          # Page templates
│   ├── pages/            # Routes (index, about, portfolio, blog, rss)
│   ├── styles/           # Global CSS
│   └── consts.ts         # Site configuration
├── scripts/
│   └── publish.js        # Notion → GitHub publishing script
├── .github/
│   └── workflows/        # CI/CD pipelines
│       ├── deploy.yml              # Build & deploy to GitHub Pages
│       ├── publish-from-notion.yml # Sync posts from Notion
│       ├── dependabot-auto-merge.yml
│       └── codeql.yml              # Security analysis
└── public/               # Static assets
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check Notion connection
npm run check:notion
```

---

## 📝 Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

| Variable | Description |
|----------|-------------|
| `NOTION_API_KEY` | Notion integration API key |
| `NOTION_DATABASE_ID` | Notion database ID for blog posts |
| `GITHUB_TOKEN` | Personal access token for publishing |

---

<p align="center">
  <sub>Built with <a href="https://astro.build">Astro</a> • Theme inspired by <a href="https://github.com/HermanMartinus/bearblog/">Bear Blog</a></sub>
</p>
