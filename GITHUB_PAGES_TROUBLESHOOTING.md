# GitHub Pages Troubleshooting - Nothing Happening

If you selected "GitHub Actions" in Pages settings but nothing is happening, follow these steps:

## Step 1: Check if Workflow File is Committed

The `.github/workflows/deploy.yml` file must be committed and pushed to GitHub.

### Check if it's committed:
```bash
git status
```

### If not committed, commit it:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

## Step 2: Check Your Branch Name

The workflow is set to trigger on `main` branch. If your default branch is `master`, update the workflow:

1. Open `.github/workflows/deploy.yml`
2. Change `main` to `master` on line 6:
   ```yaml
   branches:
     - master
   ```

## Step 3: Manually Trigger the Workflow

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. You should see "Deploy to GitHub Pages" workflow
4. Click on it
5. Click **Run workflow** button (top right)
6. Select your branch and click **Run workflow**

## Step 4: Check GitHub Actions is Enabled

1. Go to repository **Settings**
2. Click **Actions** → **General**
3. Make sure "Allow all actions and reusable workflows" is selected
4. Save

## Step 5: Check Workflow Runs

1. Go to **Actions** tab in your repository
2. Look for any workflow runs
3. Click on a run to see if there are errors
4. Check the logs for any issues

## Step 6: Verify Workflow File Location

Make sure the file is at:
```
.github/workflows/deploy.yml
```

Not:
- `.github/deploy.yml` ❌
- `deploy.yml` ❌
- `.github/workflows/deploy.yaml` (should be .yml) ❌

## Step 7: Check for Errors in Actions Tab

Common errors:
- **"Workflow not found"** → File not committed/pushed
- **"Permission denied"** → Check repository permissions
- **"Build failed"** → Check build logs for errors

## Step 8: Alternative - Use Manual Deployment

If GitHub Actions isn't working, you can deploy manually:

1. Build locally:
   ```bash
   npm run build
   ```

2. This creates an `out` folder

3. Push the `out` folder to `gh-pages` branch:
   ```bash
   npm install -g gh-pages
   gh-pages -d out
   ```

4. In GitHub Pages settings, select "Deploy from a branch" → `gh-pages` branch

## Quick Fix Checklist

- [ ] Workflow file is committed and pushed
- [ ] Branch name matches (main/master)
- [ ] GitHub Actions is enabled in repository settings
- [ ] Manually triggered the workflow
- [ ] Checked Actions tab for errors
- [ ] Repository has Pages write permissions

## Still Not Working?

1. Check the **Actions** tab for error messages
2. Share the error message and I can help fix it
3. Try the manual deployment method above

