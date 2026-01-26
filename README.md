# Chris Portfolio

My personal portfolio website built with Next.js 15, React 18, and TypeScript. 

## Features

- **Project Showcase** - Display featured projects with descriptions and links
- **Tech Stack Display** - Visual representation of technologies and tools
- **AI Chat Assistant** - Interactive chat powered by Anthropic's Claude
- **About Me Section** - Personal introduction with social links
- **Contact Form** - Easy way for visitors to get in touch
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Engaging motion effects throughout the site

## Tech Stack

**Framework & Language:**

- Next.js 15.4.4 - React framework with App Router and Turbopack
- React 18.3.1 - UI library
- TypeScript 5 - Type safety

**Styling & Animation:**

- Tailwind CSS 4 - Utility-first CSS framework
- Motion 12.23.12 - Animation library
- Lucide React - SVG icon library
- Tech Stack Icons - Technology brand icons

**Backend & AI:**

- Supabase - Database for configuration storage
- Anthropic Claude SDK - AI-powered chat functionality

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm
- Anthropic API key for the chat feature
- Supabase project with a `config` table for chat prompts

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd chris-portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```
ANTHROPIC_API_KEY=your_api_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
chris-portfolio/
├── app/                    # Next.js App Router
│   ├── api/                # API routes (chat endpoint)
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── component/              # React components
│   ├── AboutMe/            # About section components
│   ├── Banner/             # Hero banner
│   ├── Chat/               # AI chat components
│   ├── Contact.tsx         # Contact form
│   ├── CTASection/         # Call-to-action section
│   ├── Header.tsx          # Navigation header
│   ├── ProjectShowcase/    # Project display components
│   └── TechStack/          # Tech stack display
├── constants/              # Configuration constants
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## Available Scripts

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Start development server with Turbopack |
| `pnpm build`   | Build production bundle                  |
| `pnpm start`   | Start production server                  |
| `pnpm lint`    | Run ESLint code linting                  |

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables (Anthropic + Supabase)
4. Deploy

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js (Netlify, Railway, AWS Amplify, etc.).

## Environment Variables

| Variable                                    | Description                     | Required |
| ------------------------------------------- | ------------------------------- | -------- |
| `ANTHROPIC_API_KEY`                         | API key for Claude chat feature | Yes      |
| `NEXT_PUBLIC_SUPABASE_URL`                  | Supabase project URL            | Yes      |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Supabase anon/public key     | Yes      |
