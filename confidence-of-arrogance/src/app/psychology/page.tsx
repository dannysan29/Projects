import PsychologyTriggers from '@/components/PsychologyTriggers';

export default function PsychologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center flex items-center justify-center gap-3">
          🧠 The Psychology of Ponzi Schemes
        </h1>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300 mb-6 text-center">
            Why do so many people fall for Ponzi schemes? The answer lies in powerful psychological triggers and manipulation tactics that exploit human nature. Explore the key psychological factors below.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-16">
          <PsychologyTriggers />
        </div>
        <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🛡️ How to Protect Yourself</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Be skeptical of guaranteed high returns with little or no risk.</li>
            <li>Research the investment and the people behind it.</li>
            <li>Watch for pressure to recruit others or act quickly.</li>
            <li>Check for proper registration and regulatory oversight.</li>
            <li>Trust your instincts—if it sounds too good to be true, it probably is.</li>
          </ul>
        </div>
        <div className="max-w-2xl mx-auto mt-12 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">📚 Further Reading</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <a href="https://www.tandfonline.com/doi/abs/10.1080/15427560.2015.1035687" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition-colors">Social Influence and Fraud: Evidence from a Ponzi Scheme (Journal of Behavioral Finance, 2015)</a><br/>
              Academic research on the role of social influence in Ponzi schemes.
            </li>
            <li>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1123435/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition-colors">The Psychology of Fraud: Why Good People Do Bad Things (NIH, 2004)</a><br/>
              A look at the psychological factors that drive people to commit or fall for fraud.
            </li>
            <li>
              <a href="https://www.apa.org/monitor/2017/07-08/cover-scams" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition-colors">Why We Fall for Scams (APA Monitor, 2017)</a><br/>
              Explains the psychological tricks scammers use and how to resist them.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
} 