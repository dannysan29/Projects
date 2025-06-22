import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Confidence of Arrogance',
  description: 'Visualizing the mechanics, psychology, and data behind Ponzi schemes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-blue-600 text-white px-4 py-2 rounded z-50">Skip to main content</a>
        <header className="sticky top-0 z-50 bg-gray-950 bg-opacity-95 shadow-md">
          <nav className="container mx-auto flex items-center justify-between px-4 py-3" role="navigation" aria-label="Main navigation">
            <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} aria-label="Home">Confidence of Arrogance</Link>
            <div className="flex gap-6 text-lg">
              <Link href="/mechanics" className="text-gray-200 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} aria-label="Mechanics">Mechanics</Link>
              <Link href="/psychology" className="text-gray-200 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} aria-label="Psychology">Psychology</Link>
              <Link href="/case-studies" className="text-gray-200 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} aria-label="Case Studies">Case Studies</Link>
              <Link href="/map" className="text-gray-200 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} aria-label="Map">Map</Link>
              <Link href="/timeline" className="text-gray-200 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} aria-label="Timeline">Timeline</Link>
            </div>
          </nav>
        </header>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
