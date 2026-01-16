# Kristofer Jussmann — Detailed CV Supplement Document

> **Purpose**: This document provides comprehensive details about skills, projects, and certifications to supplement a CV/resume. It is designed to be fed to an AI model for generating Harvard-style and plain-text resumes.

---

## Personal Information

- **Full Name**: Kristofer Jussmann
- **Location**: Estonia
- **Title**: Full-Stack Developer & AI Engineer
- **Tagline**: Building agentic automation systems
- **Online Presence**:
  - GitHub: [github.com/ker102](https://github.com/ker102) (22+ public repositories)
  - LinkedIn: [linkedin.com/in/kristofer-jussmann-ker102](https://www.linkedin.com/in/kristofer-jussmann-ker102/)
  - Hugging Face: [huggingface.co/Ker102](https://huggingface.co/Ker102)
  - Portfolio: [kaelux.dev](https://kaelux.dev)

---

## Professional Summary

Full-Stack Developer and AI Engineer specializing in LLM-powered applications, workflow automation systems, and AI-integrated tools using modern frameworks. Expertise in building agentic systems that bridge the gap between automation, AI, and creative workflows. Projects blend cutting-edge AI capabilities with practical, production-ready solutions.

---

## Technical Skills

### Programming Languages
- **Python** (Advanced): Classes, generators, list comprehensions, lambda functions, async programming
- **TypeScript** (Advanced): Full-stack development, type-safe applications
- **JavaScript**: React, Vue.js, Svelte, Node.js
- **Bash/PowerShell**: Scripting and automation

### AI & Machine Learning
- **LLM Operations**: LLMOps workflows, prompt engineering (CoT, Few-shot, Zero-shot)
- **RAG Pipelines**: Vector embeddings, semantic search, context retrieval
- **Orchestration**: LangChain 1.x, LangGraph, Vercel AI SDK, Gemini SDK
- **Vector Databases**: Pinecone, Qdrant, Redis, Supabase pgvector
- **Model Training**: Fine-tuning vertical LLMs, synthetic dataset generation
- **Inference**: Hugging Face integration, production monitoring & evaluation

### DevOps & Cloud
- **Containerization**: Docker (multi-stage builds, Compose orchestration), Kubernetes basics
- **CI/CD**: GitHub Actions pipelines, automated testing, linting, docs generation
- **Cloud Platforms**: GCP (Vertex AI, Compute Engine, Colab), Azure (VMs, VNets, Blob Storage), DigitalOcean
- **Infrastructure**: Cloudflare tunnels, Raspberry Pi clusters

### Full-Stack Development
- **Frontend**: React, Next.js 16, Vue.js 3, Svelte 5, Astro, Angular, Electron
- **Styling**: TailwindCSS, Vanilla CSS, Three.js
- **Backend**: FastAPI, Node.js, Express
- **Databases**: PostgreSQL, Redis, Supabase, Prisma ORM
- **Automation**: n8n workflow automation, API integrations

### Systems & Security
- **Operating Systems**: Linux (Debian, Ubuntu, Mint), Windows Server
- **Remote Management**: SSH, RDP, network tunneling
- **Security**: PAT/SSH/Secrets management, dependency graphs, enterprise administration

---

## Professional Certifications

### Docker Foundations Professional Certificate
- **Issuer**: Docker Inc.
- **Skills**: Container workflows, multi-stage Dockerfiles, DevContainers for Codespaces, volume management, Compose orchestration (YAML), Kubernetes basics, image optimization

### GitHub Administration (GH-900)
- **Issuer**: Microsoft
- **Skills**: Advanced Git flow, GitHub Actions CI/CD pipelines, Codespaces configuration, security (PAT/SSH/Secrets), dependency graphs, PR/Merge best practices, enterprise administration

### AI Engineering Associate
- **Issuer**: DataCamp
- **Skills**: LLMOps workflows, RAG pipelines, vector embeddings, LangChain/LangGraph orchestration, prompt engineering, API endpoints, Python advanced features, EDGE functions, session memory, user authentication, Hugging Face integration, production monitoring

### ML Foundations Professional Certificate
- **Issuer**: Anaconda & Python Institute
- **Skills**: Supervised/Unsupervised/Reinforcement learning, Regression/Classification (XGBoost), data processing (Pandas/NumPy), visualization (Matplotlib/Seaborn), PyTorch, Scikit-Learn, Jupyter notebooks, dataset curation and synthetic generation

### Azure Administration Credential
- **Issuer**: Microsoft
- **Skills**: VM creation & management, Virtual Networks/Subnets, Blob Storage configuration, security policies, subscription management, enterprise cloud best practices

### Linux & Windows Fundamentals
- **Issuer**: Hack The Box Academy
- **Skills**: Bash/PowerShell scripting, filesystem hierarchy, remote management (SSH/RDP), network tunneling, Linux distro administration

---

## Key Projects

### n8n Automation Atlas (n8n-workflows-36k)
**Repository**: [github.com/Ker102/n8n-workflows-36k](https://github.com/Ker102/n8n-workflows-36k)
- **Description**: The largest synthetic n8n workflow dataset with 131,648 total workflows (36,985 importable, 36,166 RAG vectors)
- **Purpose**: Fine-tuning vertical LLMs for workflow generation
- **Features**: Archetype-based generation, semantic labels, Parquet and JSONL formats
- **Tech Stack**: Python 3.12, Node.js 22, Vue.js 3, Vite 5, Qdrant Cloud, Gemini 3 Pro Preview, Together AI M2-BERT
- **Also Published On**: Hugging Face datasets
- **Impact**: Enables AI-driven workflow automation for n8n platform

### Crosswind Console
**Repository**: [github.com/Ker102/Crosswind-Console](https://github.com/Ker102/Crosswind-Console)
- **Description**: Next-generation AI Orchestration Platform for travel, careers, and social trends research
- **Architecture**: Hybrid RAG + MCP (Model Context Protocol) with persistent HTTP connection pool
- **Features**:
  - Multi-agent system (Travel IQ Agent, Career Scout Agent, Trends Agent)
  - 120+ real-time tools (Amadeus, Flights Sky, Booking.com APIs)
  - Custom HTTP MCP client with 60% latency reduction
- **Tech Stack**: Svelte 5, FastAPI, LangChain 1.x, Google Gemini 2.0 Flash, Supabase pgvector
- **Status**: Beta Release

### Kaelux.dev
**Repository**: [github.com/Ker102/Kaelux-DevPortfolio](https://github.com/Ker102/Kaelux-DevPortfolio)
- **Description**: Production B2B AI engineering consultancy platform
- **Features**:
  - Kaelux Neural Agent: AI diagnostic chatbot with semantic caching RAG
  - Technical Wiki with AI-generated content
  - Lighthouse scores: Performance 95+, Accessibility 100, Best Practices 100, SEO 100
- **Tech Stack**: Next.js 16, TypeScript 5, TailwindCSS 3.4, Groq (Llama 3.3), Qdrant, Redis, PostgreSQL
- **Monitoring**: New Relic, Sentry
- **Infrastructure**: DigitalOcean, Docker, Vercel
- **Live**: [kaelux.dev](https://kaelux.dev)

### Kaelux Automate
**Repository**: [github.com/Ker102/Kaelux-Automate](https://github.com/Ker102/Kaelux-Automate)
- **Description**: Custom n8n interface with LLM-enhanced workflow script generation
- **Model**: Fine-tuned Qwen-3-Coder 14B on custom high-quality JSON dataset
- **Data Source**: n8n-workflows-36k dataset
- **Infrastructure**: GCP Spot VMs, Google Colab with NVIDIA GPUs
- **Status**: In Development

### ModelForge
**Repository**: [github.com/Ker102/ModelForge](https://github.com/Ker102/ModelForge)
- **Description**: Desktop AI suite connecting Blender to advanced AI models
- **Features**: Docker Compose orchestration for Vector DB, backend, and frontend
- **Tech Stack**: Python, Docker, Blender integration
- **Use Case**: AI-assisted 3D modeling workflows

### PromptTriage
**Repository**: [github.com/Ker102/PromptTriage](https://github.com/Ker102/PromptTriage)
- **Description**: Training competitive vertical AI model on frontier model system prompts
- **Purpose**: Prompt analyzer and refiner
- **Infrastructure**: GCP, Google Colab, NVIDIA Spot VMs

### Raspberry Pi Production Cluster
- **Description**: Full-stack web app hosting infrastructure
- **Features**: Cloudflare tunnels on custom Pi architecture with Docker
- **Skills Demonstrated**: Linux administration, containerization, network configuration

### Hardware Security Lab
- **Description**: Security research and implementation
- **Features**: Bad USB implementation with Pi Pico, local SLM hosting on Pi 2
- **Skills Demonstrated**: Hardware security, embedded systems, local AI deployment

### Social Automation
**Platform**: [x.com/ker102dev](https://x.com/ker102dev)
- **Description**: Fully automated content pipelines for YouTube and Twitter/X
- **Tech Stack**: n8n, Python
- **Skills Demonstrated**: API integrations, workflow automation, content scheduling

---

## GitHub Statistics

- **Total Public Repositories**: 22+
- **Most Active Areas**: AI/ML, Workflow Automation, Full-Stack Development
- **Key Technologies**: Python, TypeScript, Docker, FastAPI, LangChain, Next.js, Svelte
- **Notable Contributions**: Large-scale dataset curation, AI orchestration platforms, production B2B applications

---

## Upcoming Certifications

- Azure AI Associate
- CompTIA Network+
- MongoDB Developer

---

## Document Metadata

- **Generated**: January 2026
- **Source**: Portfolio page analysis + GitHub repository scan
- **Format**: Markdown for AI processing
