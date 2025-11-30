# Sri Akshara School - Next.js Frontend

A modern, production-grade frontend for Sri Akshara School built with Next.js 14, GSAP, and Tailwind CSS.

## Features

- ✨ **Smooth Animations**: GSAP ScrollTrigger for scroll-triggered animations
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🚀 **Performance**: Optimized with Next.js 14 App Router
- 🎭 **Page Transitions**: Smooth page transitions with Framer Motion
- 📜 **Smooth Scrolling**: Lenis smooth scroll integration
- 🎬 **Lottie Support**: Ready for Lottie animations
- 🔌 **WordPress Integration**: GraphQL utilities for WordPress CMS

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library with ScrollTrigger
- **Lenis** - Smooth scrolling
- **Framer Motion** - Page transitions and animations
- **Swiper** - Touch slider for testimonials
- **GraphQL** - WordPress CMS integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SriAksharaSchool
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your WordPress GraphQL endpoint:
```
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
WORDPRESS_AUTH_TOKEN=your_auth_token_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── academics/
│   ├── admissions/
│   ├── contact/
│   ├── facilities/
│   ├── gallery/
│   ├── life-at-akshara/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── animations/        # Animation components
│   ├── layout/            # Navigation, Footer
│   ├── providers/         # Context providers
│   └── sections/          # Reusable section components
├── lib/                   # Utilities and helpers
│   └── wordpress.ts      # WordPress GraphQL client
└── public/               # Static assets
    └── images/          # Image assets
```

## Pages

- **Home** (`/`) - Landing page with hero, features, testimonials
- **About** (`/about`) - School history, mission, vision, values
- **Academics** (`/academics`) - Curriculum, programs, faculty
- **Admissions** (`/admissions`) - Admission process, requirements, fees
- **Facilities** (`/facilities`) - Campus facilities and infrastructure
- **Gallery** (`/gallery`) - Photo and video gallery
- **Life at Akshara** (`/life-at-akshara`) - Student life, activities, events
- **Contact** (`/contact`) - Contact form and information

## Components

### Section Components
- `Hero` - Full-screen hero sections with animations
- `SplitSection` - Image and content split layouts
- `WhyChooseUs` - Sticky scroll section with features
- `CTA` - Call-to-action sections
- `Cards` - Flexible card grid component
- `TestimonialSlider` - Swiper-based testimonial carousel
- `StatsSection` - Animated statistics counter

### Animation Components
- `ScrollAnimation` - GSAP scroll-triggered animations
- `PageTransition` - Framer Motion page transitions
- `Loader` - Initial page loader

## WordPress Integration

The project includes utilities for connecting to a WordPress backend via WPGraphQL:

1. Install WPGraphQL plugin on your WordPress site
2. Configure the GraphQL endpoint in `.env.local`
3. Use the helper functions from `lib/wordpress.ts`:

```typescript
import { fetchPages, fetchPosts } from '@/lib/wordpress'

// In your page component
const pages = await fetchPages()
const posts = await fetchPosts(10)
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Fonts
Fonts are configured in `app/layout.tsx`. Update the Google Fonts imports as needed.

### Animations
Animation timings and effects can be adjusted in:
- `components/animations/ScrollAnimation.tsx` - Scroll animations
- `components/animations/PageTransition.tsx` - Page transitions

## Image Placeholders

Add your images to `public/images/` directory:
- `hero-school.png`
- `about-school.png`
- `facilities.png`
- And other images referenced in components

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For questions or issues, please contact the development team.

