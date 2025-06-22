import { useState } from 'react';

const triggers = [
  {
    title: 'Greed & FOMO',
    icon: '💸',
    description: 'Ponzi schemes promise high returns, triggering greed and the fear of missing out (FOMO) on a great opportunity.',
    research: {
      summary: 'Research shows that the promise of high, quick returns can override rational decision-making, especially when combined with stories of others getting rich.',
      link: 'https://www.investopedia.com/terms/p/ponzischeme.asp',
      linkText: 'Investopedia: Ponzi Scheme'
    }
  },
  {
    title: 'Authority & Trust',
    icon: '🧑‍⚖️',
    description: 'Fraudsters often pose as experts or use endorsements to build trust and credibility.',
    research: {
      summary: 'Studies in behavioral finance show that people are more likely to trust investments endorsed by authority figures or celebrities.',
      link: 'https://www.sec.gov/fast-answers/answersponzihtm.html',
      linkText: 'SEC: Ponzi Schemes FAQ'
    }
  },
  {
    title: 'Social Proof',
    icon: '👥',
    description: 'Seeing others invest (especially friends or celebrities) makes people more likely to join in.',
    research: {
      summary: 'Social influence is a major driver in the spread of Ponzi schemes. (Journal of Behavioral Finance, 2015)',
      link: 'https://www.tandfonline.com/doi/abs/10.1080/15427560.2015.1035687',
      linkText: 'Social Influence and Fraud: Evidence from a Ponzi Scheme'
    }
  },
  {
    title: 'Scarcity & Urgency',
    icon: '⏳',
    description: 'Limited-time offers and pressure to act quickly prevent careful consideration.',
    research: {
      summary: 'Scammers use urgency and scarcity to push people into making hasty decisions without due diligence.',
      link: 'https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/ponzi-schemes',
      linkText: 'FBI: Ponzi Schemes'
    }
  }
];

export default function PsychologyTriggers() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {triggers.map((trigger, idx) => (
        <div
          key={trigger.title}
          className={`bg-gray-700 p-6 rounded-xl shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-gray-600 hover:border-blue-400 flex flex-col items-start min-h-[200px] ${selected === idx ? 'ring-2 ring-blue-400' : ''}`}
          onClick={() => setSelected(selected === idx ? null : idx)}
        >
          <span className="text-4xl mb-2">{trigger.icon}</span>
          <h3 className="text-xl font-semibold mb-2 text-blue-200">{trigger.title}</h3>
          <p className="text-gray-300 mb-2">
            {selected === idx ? trigger.description : 'Click to learn more...'}
          </p>
          {selected === idx && (
            <div className="mt-2 text-sm text-gray-200">
              <strong>Research:</strong> {trigger.research.summary}
              <br />
              <a href={trigger.research.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition-colors">{trigger.research.linkText}</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 