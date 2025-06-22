export default function BernieMadoffCase() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-blue-300">Bernie Madoff (2008)</h1>
        <p className="text-lg text-gray-300 mb-6">
          Bernie Madoff orchestrated the largest Ponzi scheme in history, defrauding thousands of investors out of $65 billion over several decades. He used new investors' money to pay returns to earlier ones, creating the illusion of a profitable business.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Estimated losses: $65 billion</li>
          <li>Years active: 1970s–2008</li>
          <li>Victims: Thousands, including individuals, charities, and institutions</li>
          <li>Arrested: December 2008</li>
          <li>Sentenced to 150 years in prison</li>
        </ul>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 mb-6">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">🔗 Research & Further Reading</h2>
          <ul className="list-disc list-inside text-blue-400 space-y-1">
            <li><a href="https://www.theguardian.com/business/2009/jan/01/bernard-madoff-wall-street-fraud" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 transition-colors">The Guardian: How Bernie Madoff Pulled Off His Massive Swindle</a></li>
            <li><a href="https://www.sec.gov/news/press/2008/2008-293.htm" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 transition-colors">SEC: Madoff Charged with Massive Fraud</a></li>
          </ul>
        </div>
        <a href="/case-studies" className="text-blue-400 underline hover:text-blue-200 transition-colors">← Back to All Case Studies</a>
      </div>
    </main>
  );
} 