# ScapeScope: NASA Daily Explorer 🚀

A web-based application that delivers daily space-related facts, images, and news using NASA's public APIs. ScapeScope enriches learning by dynamically highlighting scientific terms and linking them to trusted external resources. The experience is made engaging through a fun fact loader, a scrollable NASA news feed, and a space data dashboard for real-time insights—all crafted to spark curiosity and make space science accessible.

![ScapeScope Screenshot](https://via.placeholder.com/800x400/0a0a0a/00bfff?text=ScapeScope+Demo)

---

🌐 **Live Demo:** [https://astroheights.org](https://astroheights.org)

---

## ✨ Features

### 🌟 Core Features
- **NASA APOD Integration**: Daily space images/videos with detailed explanations
- **Smart Keyword Highlighting**: Scientific terms automatically linked to Wikipedia
- **Fun Fact Loader**: Random space facts with custom images and source links
- **Live Space Dashboard**: Real-time ISS location, moon phase, and solar activity
- **NASA News Feed**: Latest space news with search and filtering capabilities

### 🛰️ Live Data
- **ISS Location**: Real-time coordinates updated every 30 seconds
- **Moon Phase**: Current lunar cycle with visual indicators
- **Solar Activity**: Space weather monitoring and recent events
- **Universal Time**: UTC display for space operations

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Space Theme**: Immersive cosmic aesthetic with cyan accents
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- NASA API key (free at [api.nasa.gov](https://api.nasa.gov/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd scapescope
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_NASA_API=your_nasa_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
scapescope/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx        # Live space data display
│   │   ├── Dashboard.css        # Dashboard styling
│   │   ├── NewsFeed.jsx         # NASA news feed
│   │   ├── NewsFeed.css         # News feed styling
│   │   ├── FunFactLoader.jsx    # Random space facts
│   │   └── FunFactLoader.css    # Fact loader styling
│   ├── utils/
│   │   └── fetchNews.js         # News API utilities
│   ├── App.jsx                  # Main application component
│   └── main.jsx                 # Application entry point
├── public/
│   └── assets/                  # Space images for fun facts
├── package.json
└── README.md
```

## 🔧 Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: CSS3 with custom dark theme
- **APIs**: NASA APOD, Open Notify (ISS), Space Flight News
- **Deployment**: Vercel (recommended)

## 📡 API Integration

### NASA APOD API
- **Endpoint**: `https://api.nasa.gov/planetary/apod`
- **Purpose**: Daily space images and explanations
- **Rate Limit**: 1000 requests per hour

### Open Notify API
- **Endpoint**: `http://api.open-notify.org/iss-now.json`
- **Purpose**: Real-time ISS location data
- **Update Frequency**: Every 30 seconds

### Space Flight News API
- **Endpoint**: `https://api.spaceflightnewsapi.net/v4/articles`
- **Purpose**: Latest space news and articles
- **Features**: RSS parsing and content filtering

## 🎯 Key Features Explained

### Smart Keyword Highlighting
Scientific terms in NASA explanations are automatically detected and linked to Wikipedia articles, making complex concepts accessible to learners.

### Live Space Dashboard
- **ISS Tracking**: Real-time coordinates with 30-second updates
- **Moon Phase Calculator**: Accurate lunar cycle tracking
- **Solar Activity Monitor**: Space weather event tracking
- **Universal Time Display**: UTC for space operations

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔮 Future Enhancements

- [ ] Light/dark theme toggle
- [ ] Framer Motion animations
- [ ] Offline mode with cached data
- [ ] Social sharing features
- [ ] Space event notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NASA](https://nasa.gov/) for providing amazing APIs and space data
- [Open Notify](http://open-notify.org/) for ISS tracking data
- The space exploration community for inspiration

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/scapescope](https://github.com/yourusername/scapescope)
- **Live Demo**: [https://astroheights.org](https://astroheights.org)

---

**Made with ❤️ for space exploration enthusiasts**
