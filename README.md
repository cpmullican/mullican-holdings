# Mullican Holdings Website

A premium, minimalist website for Mullican Holdings built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Assets

Replace the placeholder SVG files in the `public` directory with your actual assets:
- `logo.svg` - Mullican "M" logo
- `crest.svg` - Family crest (used in footer watermark)
- `archimedes.svg` - Archimedes sketch/engraving (used in Philosophy section)
- `og-image.png` - Social sharing image (recommended: 1200x630px) - for Open Graph and Twitter Card previews

## Build

```bash
npm run build
npm start
```

## SEO Configuration

The site includes comprehensive SEO optimizations:
- Enhanced metadata with Open Graph and Twitter Cards
- Structured data (JSON-LD) for Organization, WebSite, Articles, and Services
- Automatic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration (`/robots.txt`)

**Environment Variables:**
- `NEXT_PUBLIC_SITE_URL` - Set to your production domain (e.g., `https://mullican.xyz`) for proper canonical URLs and structured data

**Social Sharing Image:**
- Create an `og-image.png` file (1200x630px recommended) in the `public` directory for optimal social media previews

## Project Structure

- `app/` - Next.js App Router pages and layout
- `components/` - React components
  - `sections/` - Page section components
- `public/` - Static assets

