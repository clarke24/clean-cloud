# Clean-Cloud Marketing Website

A production-ready marketing website for Clean-Cloud, a UK-based business selling managed technical infrastructure for restaurants and cafés.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: lucide-react

## Features

- 🏠 **Home Page**: Hero, trust bar, how it works, highlights, packages preview, why switch, FAQ, and CTA sections
- 📋 **Services Page**: Full service menu, package comparison, multi-site discounts, and interactive quote calculator
- ℹ️ **About Page**: Company story, values, process timeline, and scope definition
- 📞 **Contact Page**: Full contact form with validation, API route, and contact information

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd clean-cloud
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API endpoint
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── globals.css           # Global styles & custom CSS variables
│   ├── layout.tsx            # Root layout with navbar, footer, metadata
│   └── page.tsx              # Home page
├── components/
│   ├── contact/
│   │   └── ContactForm.tsx   # Contact form component
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── HighlightCards.tsx
│   │   ├── PackagesPreview.tsx
│   │   ├── WhySwitch.tsx
│   │   └── FAQ.tsx
│   ├── layout/
│   │   ├── Navbar.tsx        # Navigation with mobile menu
│   │   └── Footer.tsx        # Site footer
│   ├── services/
│   │   ├── ServiceMenu.tsx
│   │   ├── PackagesSection.tsx
│   │   └── QuoteCalculator.tsx
│   ├── shared/
│   │   ├── CTASection.tsx
│   │   ├── IconMap.tsx
│   │   ├── SectionHeader.tsx
│   │   └── TrustBar.tsx
│   └── ui/                   # shadcn/ui components
└── lib/
    ├── content.ts            # All site content (services, FAQs, etc.)
    └── utils.ts              # Utility functions
```

## Color Scheme

The site uses a "clean tech" palette:

- **Background**: Off-white (#fafafa) / Light grey (#f4f4f5)
- **Primary**: Deep navy (#0f172a)
- **Accent**: Teal (#0d9488)
- **Success**: Soft green (#22c55e)

All colors meet AA+ contrast requirements.

## Content Management

All content is stored in TypeScript objects in `src/lib/content.ts`. This includes:

- Site configuration (name, contact details, service areas)
- Navigation links
- Services menu and packages
- FAQ items
- About page values and process steps
- And more...

To update content, simply edit the relevant objects in the content file.

## API Routes

### POST /api/contact

Handles contact form submissions. Currently logs to console but can be extended to:
- Send email notifications
- Integrate with a CRM
- Store in a database

## SEO

The site includes:
- Page-specific metadata (title, description)
- OpenGraph tags
- Twitter cards
- Structured data (LocalBusiness schema)

## License

Private - All rights reserved.
