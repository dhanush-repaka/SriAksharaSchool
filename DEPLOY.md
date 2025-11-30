# Deploying to GitHub Pages

This guide will help you deploy your Next.js site to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your project pushed to a GitHub repository

## Option 1: Automatic Deployment with GitHub Actions (Recommended)

### Step 1: Configure Repository Name

If your repository is named something other than `username.github.io`, you need to set the base path:

1. Open `next.config.js`
2. Uncomment and update these lines:
   ```js
   basePath: '/SriAksharaSchool',  // Replace with your repo name
   trailingSlash: true,
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

The GitHub Action will automatically:
- Build your Next.js site
- Deploy it to GitHub Pages
- Update on every push to main branch

### Step 4: Access Your Site

- If repo is `username.github.io`: `https://username.github.io`
- If repo has a different name: `https://username.github.io/SriAksharaSchool`

## Option 2: Manual Deployment

### Step 1: Build the Site

```bash
npm run build
```

This creates an `out` folder with static files.

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select `gh-pages` branch and `/ (root)` folder
5. Click **Save**

### Step 3: Deploy

```bash
# Install gh-pages if needed
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d out"

# Deploy
npm run deploy
```

## Important Notes

### Limitations of Static Export

Since GitHub Pages serves static files, some Next.js features won't work:

✅ **Works:**
- All pages and routes
- Client-side animations (GSAP, Framer Motion)
- Images (with `unoptimized: true`)
- All your components and styling

❌ **Won't Work:**
- API routes (`/api/*`)
- Server-side rendering (SSR)
- Dynamic routes with `getServerSideProps`
- Image optimization (images are served as-is)

### Base Path Configuration

If your repository name is NOT `username.github.io`, you MUST set the `basePath` in `next.config.js`:

```js
basePath: '/your-repo-name',
trailingSlash: true,
```

### Troubleshooting

**404 Errors:**
- Make sure `basePath` is set correctly in `next.config.js`
- Ensure `trailingSlash: true` is set
- Clear browser cache

**Build Fails:**
- Check that all images exist in `public/images/`
- Ensure no server-side code is used
- Check GitHub Actions logs for errors

**Images Not Loading:**
- Images must be in `public/images/` folder
- Use relative paths (already configured)
- Check browser console for 404 errors

## Alternative: Deploy to Vercel (Easier for Next.js)

GitHub Pages works, but **Vercel** is specifically designed for Next.js and offers:

- ✅ Automatic deployments
- ✅ Better performance
- ✅ Server-side features if needed later
- ✅ Free tier with custom domains

### Quick Vercel Deployment:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy (automatic!)

No configuration needed - Vercel detects Next.js automatically.

## Need Help?

- Check GitHub Actions logs if deployment fails
- Verify `basePath` matches your repository name
- Ensure all images are in `public/images/` folder

