# ScapeScope Deployment Guide 🚀

## Quick Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository
1. Make sure all your changes are committed to GitHub
2. Ensure your `.env` file is in `.gitignore` (it should be)

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your ScapeScope repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Set Environment Variables
In your Vercel project dashboard:
1. Go to Settings → Environment Variables
2. Add your NASA API key:
   - **Name**: `VITE_NASA_API`
   - **Value**: Your NASA API key
   - **Environment**: Production, Preview, Development

### Step 4: Deploy
1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be live at `https://your-project.vercel.app`

## Alternative Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

### GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/scapescope",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Run: `npm run deploy`

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your web server to serve `index.html` for all routes

## Environment Variables

Make sure to set these in your deployment platform:

```env
VITE_NASA_API=your_nasa_api_key_here
```

## Troubleshooting

### Common Issues:
1. **API Key Not Working**: Ensure environment variable is set correctly
2. **Build Fails**: Check that all dependencies are in `package.json`
3. **404 Errors**: Configure your hosting provider to handle client-side routing

### Performance Tips:
1. Enable compression on your hosting provider
2. Use a CDN for static assets
3. Optimize images in the `public/assets/` folder

## Post-Deployment Checklist

- [ ] Test all features work in production
- [ ] Verify API calls are working
- [ ] Check mobile responsiveness
- [ ] Test accessibility features
- [ ] Update README.md with live demo link
- [ ] Share on LinkedIn/portfolio!

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify your API keys are working
3. Test locally first: `npm run dev`
4. Check Vercel/Netlify build logs

---

**Happy Deploying! 🛰️** 