# Personal Blog Site Project Plan

This document outlines the steps to build a personal blog site with automatic deployment and content publishing from Notion.

## 1. Project Setup (Astro)

- Initialize a new Astro project: `npm create astro@latest`
- Follow the prompts to set up the project.
- Once created, navigate into the project directory.

## 2. Automatic Deployment to GitHub Pages

- Create a `.github/workflows` directory in the project root.
- Inside this directory, create a file named `deploy.yml`.
- Paste the following GitHub Pages deployment action for Astro into `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Check out your repository using git
        uses: actions/checkout@v4

      - name: Install, build, and deploy
        uses: withastro/action@v2
        with:
          # path: . # The root location of your Astro project inside the repository. (optional)
          # node-version: 20 # The specific version of Node.js to use. (optional)
          # package-manager: npm@latest # The Node.js package manager to use. (optional)
```

## 3. Automated Content Publishing from Notion

This involves a script to fetch content from Notion and a GitHub Action to run it on a schedule.

### 3.1. Publishing Script (`scripts/publish.js`)

- Create a `scripts` folder in the project root.
- Inside `scripts`, create a file named `publish.js`.
- This script will use the following libraries:
  - `@notionhq/client`
  - `notion-to-md`
  - `@octokit/rest`

- **Script Logic:**

  1.  **Initialize Notion Client:**
      - Use `const { Client } = require("@notionhq/client");`
      - Initialize with `new Client({ auth: process.env.NOTION_API_KEY });`

  2.  **Query Notion Database:**
      - Query the target database for pages where the "Status" property is "Ready to Publish".

  3.  **Process Pages:**
      - Loop through the pages returned from the query.
      - For each page:
        - Use `notion-to-md` to convert the page's blocks to a Markdown string.
        - Extract page properties (e.g., Title, Date, Tags) to generate frontmatter for the blog post.
        - Combine the frontmatter and the Markdown content.

  4.  **Commit to GitHub:**
      - Initialize the Octokit client: `const { Octokit } = require("@octokit/rest");`
      - It will be authenticated automatically by the `GITHUB_TOKEN` in the workflow.
      - Use `octokit.repos.createOrUpdateFileContents` to commit the new Markdown file to the `src/content/blog/` directory. The filename should be a slugified version of the page title.

  5.  **Update Notion Page:**
      - After a successful commit, update the Notion page's "Status" property to "Published" to prevent it from being processed again.

### 3.2. Scheduled GitHub Action for Publishing

- In the `.github/workflows` directory, create a new file (e.g., `publish-from-notion.yml`).
- This workflow will:
  - Run on a schedule (e.g., every 3 hours): `schedule: - cron: '0 */3 * * *'`
  - Check out the repository.
  - Set up Node.js.
  - Install dependencies (`npm install`).
  - Run the `publish.js` script.

- **Workflow File (`publish-from-notion.yml`):**

```yaml
name: Publish from Notion

on:
  schedule:
    - cron: '0 */3 * * *' # Runs every 3 hours
  workflow_dispatch: # Allows manual triggering

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run publish script
        env:
          NOTION_API_KEY: ${{ secrets.NOTION_API_KEY }}
          NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: node scripts/publish.js
```

## 4. Secrets Management

The following secrets need to be added to the GitHub repository settings (`Settings > Secrets and variables > Actions`):

- `NOTION_API_KEY`: Your Notion integration token.
- `NOTION_DATABASE_ID`: The ID of your Notion database.
- `GITHUB_TOKEN`: This is automatically provided by GitHub Actions, but the script needs to be configured to use it. Ensure the workflow has the correct permissions.
