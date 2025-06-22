export default function CharlesPonziCase() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-blue-300">Charles Ponzi (1920)</h1>
        <p className="text-lg text-gray-300 mb-6">
          Charles Ponzi gave his name to the infamous scheme. He promised investors 50% returns in 45 days by supposedly arbitraging international postal reply coupons. The scheme collapsed when new investments could no longer cover payouts.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Estimated losses: $20 million (over $250 million today)</li>
          <li>Years active: 1919–1920</li>
          <li>Victims: 20,000+</li>
          <li>Arrested: August 1920</li>
        </ul>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 mb-6">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">🔗 Research & Further Reading</h2>
          <ul className="list-disc list-inside text-blue-400 space-y-1">
            <li><a href="https://www.smithsonianmag.com/history/the-rise-and-fall-of-charles-ponzi-10882315/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 transition-colors">Smithsonian Magazine: The Rise and Fall of Charles Ponzi</a></li>
            <li><a href="https://www.investopedia.com/terms/p/ponzi-scheme.asp" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 transition-colors">Investopedia: Charles Ponzi</a></li>
          </ul>
        </div>
        <a href="/case-studies" className="text-blue-400 underline hover:text-blue-200 transition-colors">← Back to All Case Studies</a>
      </div>
    </main>
  );
} 