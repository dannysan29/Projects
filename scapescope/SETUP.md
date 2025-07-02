# ScapeScope Setup Guide 🚀

## Quick Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Get Required API Key

#### NASA API Key (Required)
1. Go to [https://api.nasa.gov/](https://api.nasa.gov/)
2. Sign up for a free account
3. Generate an API key
4. Create a `.env` file in the project root with:
   ```
   VITE_NASA_API=your_nasa_api_key_here
   ```

### 3. Start the Development Server
```bash
npm run dev
```

## What Each Feature Does

### ✅ **Working Features**
- **Fun Fact Loader**: Random space facts with images
- **News Feed**: NASA news with search/filtering
- **Dashboard**: ISS location, moon phase, UTC time
- **NASA APOD**: Daily space images (requires NASA API key)
- **Responsive Design**: Works on mobile and desktop

## Troubleshooting

### Common Issues:

1. **"Failed to fetch NASA data"**
   - Make sure you have a valid NASA API key in `.env`
   - Check that the key is named `VITE_NASA_API`

2. **Styling looks broken**
   - Make sure Tailwind CSS is installed: `npm install`
   - Restart the dev server: `npm run dev`

3. **Dashboard shows "unavailable"**
   - This is normal - some APIs may be temporarily down
   - The app will show fallback data

### Environment Variables Template:
```env
# Required for NASA APOD images
VITE_NASA_API=your_nasa_api_key_here
```

## Testing Your Setup

1. **Open your browser** to `http://localhost:5173`
2. **Check the main content** - you should see NASA's daily image
3. **Test the dashboard** - ISS location should update every 30 seconds
4. **Try the news feed** - should show recent NASA news

## Deployment Ready

Once everything works locally:
1. Commit your changes to GitHub
2. Follow the `deploy.md` guide for Vercel deployment
3. Set environment variables in your hosting platform

---

**Need help?** Check the browser console for error messages and refer to the troubleshooting section above. 