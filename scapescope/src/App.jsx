import React, { useEffect, useState } from 'react';
import NewsFeed from './components/NewsFeed';
import Dashboard from './components/Dashboard';

const KEYWORDS = [
  "galaxy", "nebula", "black hole", "supernova", "telescope", "NASA", "orbit", "Milky Way",
  "Mars", "Apollo", "exoplanet", "Hubble", "ISS", "cosmic", "herbig-haro", "gamma ray bursts",
  "quasars", "blazars", "methane", "ammonia", "asteroid belt"
];

function highlightKeywords(text, keywords) {
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

  return text.split(regex).map((part, i) => {
    if (keywords.some(kw => kw.toLowerCase() === part.toLowerCase())) {
      const searchTerm = encodeURIComponent(part);
      const url = `https://en.wikipedia.org/wiki/${searchTerm}`;
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline font-semibold"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_NASA_API;
  const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(APOD_URL)
      .then(response => {
        console.log('API Status:', response.status);
        if (!response.ok) throw new Error('Failed to fetch NASA data');
        return response.json();
      })
      .then(data => {
        console.log('NASA Data:', data);
        setData(data);
      })
      .catch(err => {
        console.error('NASA API Error:', err);
        setError(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-cyan-400">
        ScapeScope: NASA Daily Explorer
      </h1>

      {error && <p className="text-red-500 text-center">Error: {error.message}</p>}

      {data ? (
        <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded shadow space-y-4">
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="text-sm text-gray-400">{data.date}</p>

          {data.media_type === 'image' ? (
            <img src={data.url} alt={data.title} className="rounded-lg w-full" />
          ) : (
            <iframe
              title="nasa-video"
              src={data.url}
              width="100%"
              height="400"
              className="rounded"
              allow="autoplay"
            />
          )}

          <p className="text-lg leading-relaxed">
            {highlightKeywords(data.explanation, KEYWORDS)}
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-400 italic">🔭 Loading today's space insight...</p>
      )}
      
      <Dashboard />
      <NewsFeed />
    </div>
  );
}

export default App;

