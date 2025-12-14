# Wellisch Academic Group

> Elite Math Tutoring for Serious Students

A modern, premium landing page for an exclusive tutoring service in Westchester County, NY.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework:** React 18 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Radix UI primitives)
- **State:** TanStack Query (React Query)
- **Routing:** React Router DOM

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/       # UI Components
│   ├── ui/          # shadcn/ui base components
│   ├── Hero.tsx     # Landing hero section
│   ├── Services.tsx # Services offered
│   └── ...          # Other sections
├── pages/           # Route pages
├── hooks/           # Custom React hooks
├── lib/             # Utilities
└── assets/          # Static assets
```

## Customization

- **Colors:** Edit `tailwind.config.ts` for brand colors
- **Content:** Update component files in `src/components/`
- **Meta tags:** Edit `index.html` for SEO

## License

Private - All rights reserved.
