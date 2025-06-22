'use client';
import { useState } from 'react';

const events = [
  {
    year: 1920,
    title: 'Charles Ponzi',
    description: 'The original Ponzi scheme. Promised 50% returns in 45 days. Collapsed after a few months.',
    link: '/case-studies/charles-ponzi'
  },
  {
    year: 1990,
    title: 'MMM (Russia)',
    description: 'Sergei Mavrodi's MMM defrauded millions of Russians, promising up to 1000% returns.',
    link: '/case-studies'
  },
  {
    year: 1996,
    title: 'Albanian Pyramid Schemes',
    description: 'Collapse of multiple schemes led to civil disorder and $1.2 billion in losses.',
    link: '/case-studies'
  },
  {
    year: 2001,
    title: 'Reed Slatkin',
    description: 'EarthLink co-founder ran a $600 million Ponzi scheme targeting friends and celebrities.',
    link: '/case-studies'
  },
  {
    year: 2008,
    title: 'Bernie Madoff',
    description: 'Largest Ponzi scheme in history. $65 billion lost over decades.',
    link: '/case-studies/bernie-madoff'
  },
  {
    year: 2016,
    title: 'BitConnect',
    description: 'Crypto-based Ponzi. $2.6 billion lost before collapse.',
    link: '/case-studies'
  },
  {
    year: 2016,
    title: 'Ezubao (China)',
    description: 'Jin Xin's Ezubao defrauded 900,000 investors out of $7.6 billion.',
    link: '/case-studies'
  },
  {
    year: 2018,
    title: 'PlusToken (China)',
    description: 'Crypto wallet scam. Estimated $2+ billion lost.',
    link: '/case-studies'
  }
];

export default function TimelinePage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">🕰️ Ponzi Scheme Timeline</h1>
        <div className="max-w-2xl mx-auto">
          <ol className="relative border-l-4 border-blue-400">
            {events.map((event, idx) => (
              <li key={event.title} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-400 rounded-full -left-4 ring-4 ring-gray-900 text-white font-bold text-lg">
                  {event.year}
                </span>
                <div className={`bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 transition-colors cursor-pointer ${selected === idx ? 'ring-2 ring-blue-400' : ''}`}
                  onClick={() => setSelected(selected === idx ? null : idx)}>
                  <h3 className="text-xl font-semibold mb-2 text-blue-200">{event.title}</h3>
                  <p className="text-gray-300 mb-2">{selected === idx ? event.description : 'Click to learn more...'}</p>
                  {selected === idx && (
                    <a href={event.link} className="text-blue-400 underline hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer">View Case Studies</a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
} 