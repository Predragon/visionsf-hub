# VisionSF Marketing Hub

Professional marketing website for VisionSF - an AI-native software development agency based in San Francisco.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build**: Vite 7
- **Icons**: Lucide React
- **Routing**: React Router DOM v7
- **Deployment**: Cloudflare Pages

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

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Responsive nav with mobile menu
│   ├── Hero.tsx          # Landing hero with CTAs
│   ├── Services.tsx      # Service offerings and pricing
│   ├── HowItWorks.tsx    # 4-step process timeline
│   ├── Portfolio.tsx     # Case studies showcase
│   ├── About.tsx         # Founder story and values
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Site footer
├── pages/
│   ├── Home.tsx          # Main landing page
│   ├── ServicesPage.tsx  # Services detail page
│   └── AboutPage.tsx     # About detail page
├── App.tsx               # Router configuration
├── main.tsx              # Entry point
└── index.css             # Tailwind v4 configuration
```

## Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. Push to GitHub repository
2. Go to Cloudflare Dashboard > Pages
3. Create new project > Connect to Git
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 20

### Option 2: Direct Upload

```bash
# Build the project
npm run build

# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist --project-name=visionsf-hub
```

## Configuration

### Environment Variables (Optional)

None required for static deployment.

### Form Integration

The contact form uses Formspree. To enable:

1. Create account at [Formspree](https://formspree.io)
2. Create new form
3. Replace `your-form-id` in `src/components/Contact.tsx` with your form ID

### Analytics (Optional)

Add Plausible or Simple Analytics script to `index.html` head section.

## Features

- Responsive design (mobile-first)
- Smooth scroll navigation
- Sticky header with scroll effect
- Mobile hamburger menu
- Active section highlighting
- Contact form with validation
- SEO meta tags
- Open Graph social cards
- Security headers

## Performance

- Tailwind CSS purges unused styles
- Code splitting via React Router
- Optimized production build
- Assets cached with immutable headers

## License

MIT

---

Built with Workshop by VisionSF
