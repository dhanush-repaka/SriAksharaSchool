# Quick Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
   WORDPRESS_AUTH_TOKEN=your_token_here
   ```

3. **Add Placeholder Images**
   Place your images in `public/images/` directory with these names (PNG format):
   - `hero-school.png` (1920x1080 recommended)
   - `about-school.png`
   - `about-hero.png`
   - `history.png`
   - `facilities.png`
   - `facilities-hero.png`
   - `campus-aerial.png`
   - `academics-hero.png`
   - `teaching-method.png`
   - `faculty.png`
   - `admissions-hero.png`
   - `campus-tour.png`
   - `gallery-hero.png`
   - `life-hero.png`
   - `student-life.png`
   - `contact-hero.png`
   - `leadership.png`
   - And gallery images: `gallery-1.png` through `gallery-12.png`
   
   Additional images for facilities and activities:
   - `classrooms.png`, `labs.png`, `computer-lab.png`, `library.png`
   - `sports.png`, `arts.png`, `cafeteria.png`, `auditorium.png`
   - `early-years.png`, `primary.png`, `middle-school.png`, `high-school.png`
   - `sports-activities.png`, `arts-activities.png`, `clubs.png`, `community-service.png`

   For now, you can use placeholder services like:
   - https://placeholder.com
   - https://picsum.photos
   - Or any image CDN

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## WordPress Setup (Optional)

If using WordPress as CMS:

1. Install WPGraphQL plugin on your WordPress site
2. Configure the GraphQL endpoint
3. Update `.env.local` with your endpoint URL
4. Use the helper functions from `lib/wordpress.ts` in your pages

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Fonts
Update Google Fonts in `app/layout.tsx`.

### Content
All content is currently hardcoded in page components. Replace with WordPress data or update directly in components.

## Building for Production

```bash
npm run build
npm start
```

## Notes

- All animations are configured and ready
- Smooth scrolling is enabled by default
- Page transitions work automatically
- Responsive design is implemented for all breakpoints
- Images use Next.js Image component for optimization

