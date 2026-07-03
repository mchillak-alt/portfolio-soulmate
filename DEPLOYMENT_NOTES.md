# Deployment Notes for Portfolio-Soulmate

## How to Update Your Website
Since this project is set up for **manual deployments** to Cloudflare Pages, follow these steps whenever you want to push new changes to your live site:

1. **Open your terminal** and navigate to this folder:
   ```bash
   cd "/Users/mischachillak/Documents/MISCHA CHILLAK PORTFOLIO FILES/portfolio-soulmate"
   ```

2. **Run the build and deploy command**:
   ```bash
   npm run build && npx wrangler pages deploy dist --project-name=portfolio-soulmate
   ```

## What This Does:
- **`npm run build`**: This "bakes" your React/TypeScript code into the final website files in the `dist` folder.
- **`npx wrangler pages deploy dist`**: This uploads that `dist` folder directly to your Cloudflare project.

## Note on GitHub:
- **GitHub** (`mchillak-alt/portfolio-soulmate`) is used as a **backup and version history**.
- I will still push all code changes to GitHub for you so your work is always safe.
- However, pushing to GitHub **will not** automatically update your live site. You must run the `wrangler` command above to make changes live.

---
*Notes created on Tuesday, April 21, 2026*
