# Padmaja Karapureddy — Software Engineering Portfolio

A premium, editorial developer portfolio and interactive resume built using **Next.js**, **React**, and **Tailwind CSS**. It showcases production-ready backend architectures, AI-driven data pipelines, and a complete curriculum vitae designed for recruitment.

## 🚀 Live Demo
🌐 **Production URL:** [https://portfolio-padmaja.vercel.app](https://portfolio-padmaja.vercel.app) *(or your Vercel deployment link)*

---

## 🛠️ Tech Stack & Features

*   **Frontend Core:** Next.js (App Router), React, TypeScript
*   **Design & Motion:** CSS, Tailwind CSS, Framer Motion
*   **Theme & Typography:** Minimalist editorial light theme, premium typography, customized layout
*   **Interactive Features:**
    *   **Curriculum Vitae Modal:** An A4-formatted, print-friendly two-column resume view.
    *   **Publication Viewer:** Interactive modal showcasing *The Hindu* newspaper feature clipping.

---

## 📂 Highlighted Projects

### 1. India Food Map (Bharat Taste Atlas)
An AI-powered culinary knowledge platform standardizing and cataloging India’s regional culinary diversity.
*   **Data Pipeline:** Web scraping recipes $\rightarrow$ LLM parsing (Qwen via Ollama) $\rightarrow$ Pydantic schema validation $\rightarrow$ Levenshtein-based deduplication.
*   **Metrics:** Coverage across 28 states, 8K+ dishes in production, ~80% API load efficiency.
*   **Stack:** Next.js, Node.js, MongoDB Atlas, Python, Docker, Google Cloud Run, Pydantic, GIS Map.

### 2. TrustChain
A secure, scalable supplier verification and risk credibility platform.
*   **Core Logic:** Robust REST APIs, role-based access control (RBAC), secure JWT tokenization, and weighted risk-scoring modules.
*   **Stack:** Node.js, Express, MongoDB, REST APIs, JSON Web Tokens (JWT), Docker.

---

## 💻 Getting Started Locally

### Prerequisites
*   Node.js (v18.x or later)
*   npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/padmajakarapureddy/portfolio.git
   cd portfolio/padmaja-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deployment on Vercel

Vercel is the recommended hosting platform for Next.js applications, offering native support for Server-Side Rendering (SSR), serverless functions, and image optimization out of the box.

### Deploying via Vercel CLI (Quickest)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command inside the `padmaja-portfolio` directory:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to link and deploy your site.

### Deploying via Vercel Dashboard (Recommended)
1. Push your repository to **GitHub**.
2. Sign in to [Vercel](https://vercel.com) using your GitHub account.
3. Click **Add New > Project**, import your repository, and click **Deploy**.
