import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Confidence of Arrogance
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Exploring the mechanics, psychology, and data behind Ponzi schemes through interactive visualizations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" role="list" aria-label="Main sections">
          <Link href="/mechanics" className="block" tabIndex={0} aria-label="Explore Mechanics section">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <h2 className="text-2xl font-semibold mb-4">The Mechanics</h2>
              <p className="text-gray-300 mb-4">
                Understand how Ponzi schemes operate and why they inevitably collapse through interactive visualizations
              </p>
              <span className="text-blue-400 hover:text-blue-300">Explore Mechanics →</span>
            </div>
          </Link>
          <Link href="/psychology" className="block" tabIndex={0} aria-label="Explore Psychology section">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <h2 className="text-2xl font-semibold mb-4">The Psychology</h2>
              <p className="text-gray-300 mb-4">
                Explore the psychological factors that make these schemes so compelling and why people fall for them
              </p>
              <span className="text-blue-400 hover:text-blue-300">Explore Psychology →</span>
            </div>
          </Link>
          <Link href="/case-studies" className="block" tabIndex={0} aria-label="Explore Case Studies section">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
              <p className="text-gray-300 mb-4">
                Visualize real-world examples and their impact on investors through historical case studies
              </p>
              <span className="text-blue-400 hover:text-blue-300">Explore Case Studies →</span>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This educational platform aims to raise awareness about Ponzi schemes by combining data visualization, 
            historical analysis, and psychological insights. Through interactive elements and real-world examples, 
            we help visitors understand how these schemes work and how to protect themselves from financial fraud.
          </p>
        </div>
      </div>
    </main>
  )
}
