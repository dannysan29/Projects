'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issue in Leaflet with Next.js
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const schemes = [
  {
    name: 'Charles Ponzi (1920)',
    position: [42.3601, -71.0589], // Boston, USA
    summary: 'The original Ponzi scheme. Promised 50% returns in 45 days.',
    link: '/case-studies/charles-ponzi'
  },
  {
    name: 'Bernie Madoff (2008)',
    position: [40.7128, -74.0060], // New York, USA
    summary: 'Largest Ponzi scheme in history. $65 billion lost.',
    link: '/case-studies/bernie-madoff'
  },
  {
    name: 'MMM (Russia, 1990s)',
    position: [55.7558, 37.6173], // Moscow, Russia
    summary: 'Defrauded millions of Russians, promising up to 1000% returns.',
    link: '/case-studies'
  },
  {
    name: 'Albanian Pyramid Schemes (1996-1997)',
    position: [41.3275, 19.8187], // Tirana, Albania
    summary: 'Collapse led to civil disorder. $1.2 billion lost.',
    link: '/case-studies'
  },
  {
    name: 'BitConnect (2016-2018)',
    position: [20.5937, 78.9629], // India (global, but registered in India)
    summary: 'Crypto-based Ponzi. $2.6 billion lost.',
    link: '/case-studies'
  },
  {
    name: 'Jin Xin (Ezubao, China, 2016)',
    position: [39.9042, 116.4074], // Beijing, China
    summary: 'Ezubao defrauded 900,000 investors out of $7.6 billion.',
    link: '/case-studies'
  },
  {
    name: 'TelexFree (2012-2014)',
    position: [-19.9167, -43.9345], // Belo Horizonte, Brazil (global, but HQ in Brazil)
    summary: 'Telecom-based Ponzi. $3 billion lost.',
    link: '/case-studies'
  },
  {
    name: 'Wextrust Capital (2003-2008)',
    position: [41.8781, -87.6298], // Chicago, USA
    summary: 'Defrauded 1,200+ investors out of $255 million.',
    link: '/case-studies'
  }
];

export default function MapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">🗺️ Ponzi Schemes Around the World</h1>
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {schemes.map((scheme) => (
              <Marker key={scheme.name} position={scheme.position as [number, number]}>
                <Popup>
                  <div className="max-w-xs">
                    <strong>{scheme.name}</strong>
                    <p className="text-sm mb-2">{scheme.summary}</p>
                    <a href={scheme.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">View Case Studies</a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <p className="text-gray-300 text-center mt-6 max-w-2xl mx-auto">
          Click on a marker to learn more about each Ponzi scheme. Explore the <a href="/case-studies" className="text-blue-400 underline hover:text-blue-200 transition-colors">Case Studies</a> page for details.
        </p>
      </div>
    </main>
  );
} 