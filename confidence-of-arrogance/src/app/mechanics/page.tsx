'use client';

import PonziMechanics from '@/components/PonziMechanics';

export default function MechanicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center flex items-center justify-center gap-3">
          ⚙️ The Mechanics of a Ponzi Scheme
        </h1>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300 mb-6 text-center">
            A Ponzi scheme is a fraudulent investment operation that pays returns to existing investors from funds contributed by new investors, rather than from profit earned by the operation. The visualization below shows how these schemes typically grow and eventually collapse.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border border-gray-700 hover:border-blue-400 transition-colors">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">📈 Investment vs. Returns Over Time</h2>
            <PonziMechanics />
            <p className="text-sm text-gray-400 mt-4">
              This visualization shows how investments (green) and promised returns (red) grow over time in a typical Ponzi scheme. Notice how the gap between investments and returns widens, making the scheme increasingly unsustainable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">🚀 The Initial Promise</h3>
              <p className="text-gray-300">
                Schemes typically start with a seemingly legitimate investment opportunity, offering higher-than-market returns to attract initial investors.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">📉 The Unsustainable Growth</h3>
              <p className="text-gray-300">
                As more investors join, the scheme needs to attract even more new investors to pay returns to existing ones, creating an exponential growth requirement.
              </p>
            </div>
          </div>
        </div>
        {/* Research & References Section */}
        <div className="max-w-3xl mx-auto mt-16 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🔗 Research & References</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <a href="https://www.sec.gov/fast-answers/answersponzihtm.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition-colors">SEC: Ponzi Schemes - Frequently Asked Questions</a><br/>
              U.S. Securities and Exchange Commission's official explanation of Ponzi schemes, how they work, and warning signs.
            </li>
            <li>
              <a href="https://www.investopedia.com/terms/p/ponzischeme.asp" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition-colors">Investopedia: Ponzi Scheme</a><br/>
              A detailed overview of Ponzi schemes, their history, and notable examples.
            </li>
            <li>
              <a href="https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/ponzi-schemes" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition-colors">FBI: Ponzi Schemes</a><br/>
              The FBI's resource page on Ponzi schemes, including case studies and prevention tips.
            </li>
            <li>
              <a href="https://www.tandfonline.com/doi/abs/10.1080/15427560.2015.1035687" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition-colors">Social Influence and Fraud: Evidence from a Ponzi Scheme (Journal of Behavioral Finance, 2015)</a><br/>
              Academic research on the role of social influence in the spread of Ponzi schemes.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
} 