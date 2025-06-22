"use client";
import { useState } from "react";

const cases = [
  {
    name: 'Charles Ponzi (1920)',
    year: 1920,
    region: 'North America',
    summary: 'The original Ponzi scheme. Charles Ponzi promised investors 50% returns in 45 days by supposedly arbitraging international postal reply coupons. The scheme collapsed when new investments could no longer cover payouts.',
    links: [
      { text: 'Smithsonian Magazine: The Rise and Fall of Charles Ponzi', url: 'https://www.smithsonianmag.com/history/the-rise-and-fall-of-charles-ponzi-10882315/' },
      { text: 'Investopedia: Charles Ponzi', url: 'https://www.investopedia.com/terms/p/ponzi-scheme.asp' }
    ]
  },
  {
    name: 'Bernie Madoff (2008)',
    year: 2008,
    region: 'North America',
    summary: 'The largest Ponzi scheme in history. Bernie Madoff defrauded thousands of investors out of $65 billion over decades, using new investors' money to pay returns to earlier ones.',
    links: [
      { text: 'The Guardian: How Bernie Madoff Pulled Off His Massive Swindle', url: 'https://www.theguardian.com/business/2009/jan/01/bernard-madoff-wall-street-fraud' },
      { text: 'SEC: Madoff Charged with Massive Fraud', url: 'https://www.sec.gov/news/press/2008/2008-293.htm' }
    ]
  },
  {
    name: 'BitConnect (2016-2018)',
    year: 2016,
    region: 'North America',
    summary: 'A cryptocurrency-based Ponzi scheme. BitConnect promised high returns through a "trading bot," but collapsed after regulatory warnings and investor withdrawals.',
    links: [
      { text: 'Cointelegraph: BitConnect: The Collapse of a $2.6 Billion Crypto Scam', url: 'https://cointelegraph.com/news/bitconnect-the-collapse-of-a-2-6-billion-crypto-scam' },
      { text: 'SEC: BitConnect Charged', url: 'https://www.sec.gov/news/press-release/2021-90' }
    ]
  },
  {
    name: 'MMM (Russia, 1990s)',
    year: 1990,
    region: 'Europe',
    summary: 'Sergei Mavrodi's MMM scheme defrauded millions of Russians in the 1990s, promising returns of up to 1000%. The collapse led to massive financial losses and social unrest.',
    links: [
      { text: 'BBC: The Russian Pyramid Scheme That Refused to Die', url: 'https://www.bbc.com/news/magazine-27560845' },
      { text: 'Investopedia: MMM', url: 'https://www.investopedia.com/terms/m/mmm.asp' }
    ]
  },
  {
    name: 'Albanian Pyramid Schemes (1996-1997)',
    year: 1996,
    region: 'Europe',
    summary: 'A series of Ponzi schemes in Albania led to the loss of $1.2 billion (half the country's GDP) and widespread civil disorder. Many Albanians lost their life savings.',
    links: [
      { text: 'The Atlantic: The Pyramid Scheme That Collapsed a Country', url: 'https://www.theatlantic.com/international/archive/2012/12/the-pyramid-scheme-that-collapsed-a-country/266255/' },
      { text: 'Wikipedia: Albanian Pyramid Schemes', url: 'https://en.wikipedia.org/wiki/Pyramid_schemes_in_Albania' }
    ]
  },
  {
    name: 'Reed Slatkin (EarthLink Co-founder, 1986-2001)',
    year: 1986,
    region: 'North America',
    summary: 'Slatkin ran a $600 million Ponzi scheme, targeting friends, celebrities, and fellow Scientologists. He was sentenced to 14 years in prison.',
    links: [
      { text: 'CNN: EarthLink Co-founder Gets 14 Years', url: 'http://edition.cnn.com/2003/LAW/09/02/slatkin.sentencing/' },
      { text: 'LA Times: Slatkin Sentenced', url: 'https://www.latimes.com/archives/la-xpm-2003-sep-03-me-slatkin3-story.html' }
    ]
  },
  {
    name: 'TelexFree (2012-2014)',
    year: 2012,
    region: 'North America',
    summary: 'A global telecom-based Ponzi scheme that defrauded investors in over 40 countries, with losses estimated at $3 billion.',
    links: [
      { text: 'Reuters: TelexFree Founders Indicted', url: 'https://www.reuters.com/article/us-usa-crime-telexfree-idUSKBN0F52JH20140724' },
      { text: 'SEC: TelexFree Charged', url: 'https://www.sec.gov/news/press-release/2014-79' }
    ]
  },
  {
    name: 'Jin Xin (China, 2016)',
    year: 2016,
    region: 'Asia',
    summary: 'Jin Xin's Ezubao was one of China's largest Ponzi schemes, defrauding 900,000 investors out of $7.6 billion before collapsing.',
    links: [
      { text: 'Reuters: China Jails Ponzi Scheme Bosses', url: 'https://www.reuters.com/article/us-china-crime-ponzi-idUSKCN1B40JU' },
      { text: 'BBC: China Ezubao Scam', url: 'https://www.bbc.com/news/world-asia-china-35659574' }
    ]
  },
  {
    name: 'Petters Group Worldwide (Tom Petters, 2008)',
    year: 2008,
    region: 'North America',
    summary: 'Tom Petters orchestrated a $3.65 billion Ponzi scheme through his company, defrauding investors by selling fictitious promissory notes. He was sentenced to 50 years in prison.',
    links: [
      { text: 'Star Tribune: Tom Petters Sentenced', url: 'https://www.startribune.com/petters-gets-50-years-in-prison/89323487/' },
      { text: 'SEC: Petters Ponzi Scheme', url: 'https://www.sec.gov/news/press/2008/2008-254.htm' }
    ]
  },
  {
    name: 'Gerald Payne & Greater Ministries International (1990s)',
    year: 1990,
    region: 'North America',
    summary: 'A faith-based Ponzi scheme that defrauded over 18,000 people out of $448 million, promising to double their money as a "blessing."',
    links: [
      { text: 'Tampa Bay Times: Greater Ministries Ponzi Scheme', url: 'https://www.tampabay.com/news/courts/criminal/greater-ministries-leader-dies-in-prison/2222342/' },
      { text: 'Justice.gov: Greater Ministries Sentencing', url: 'https://www.justice.gov/archive/opa/pr/2001/April/180crm.htm' }
    ]
  },
  {
    name: 'Scott Rothstein (Rothstein Rosenfeldt Adler, 2009)',
    year: 2009,
    region: 'North America',
    summary: 'Rothstein ran a $1.2 billion Ponzi scheme selling fake legal settlements. He was sentenced to 50 years in prison.',
    links: [
      { text: 'Miami Herald: Scott Rothstein Ponzi Scheme', url: 'https://www.miamiherald.com/news/business/article1922827.html' },
      { text: 'SEC: Rothstein Ponzi Scheme', url: 'https://www.sec.gov/news/press/2009/2009-232.htm' }
    ]
  },
  {
    name: 'Lou Pearlman (Trans Continental Airlines, 1980s-2006)',
    year: 1980,
    region: 'North America',
    summary: 'Music mogul Lou Pearlman ran a $300 million Ponzi scheme, defrauding investors while managing boy bands like NSYNC and Backstreet Boys.',
    links: [
      { text: 'Rolling Stone: Lou Pearlman Ponzi Scheme', url: 'https://www.rollingstone.com/music/music-news/lou-pearlman-ponzi-scheme-252274/' },
      { text: 'CNN: Pearlman Sentenced', url: 'http://edition.cnn.com/2008/CRIME/05/21/pearlman.sentenced/' }
    ]
  },
  {
    name: 'Wextrust Capital (2003-2008)',
    year: 2003,
    region: 'North America',
    summary: 'Wextrust Capital defrauded over 1,200 investors out of $255 million through real estate and commodity investments. The founders were convicted in 2009.',
    links: [
      { text: 'Reuters: Wextrust Founders Convicted', url: 'https://www.reuters.com/article/us-wextrust-fraud-idUSTRE5A86Q920091109' },
      { text: 'SEC: Wextrust Ponzi Scheme', url: 'https://www.sec.gov/news/press/2008/2008-177.htm' }
    ]
  }
];

const regions = [
  "All",
  "North America",
  "Europe",
  "Asia",
  "South America",
  "Africa",
  "Oceania",
];

export default function CaseStudiesPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [year, setYear] = useState("");

  const filteredCases = cases.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.summary.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === "All" || c.region === region;
    const matchesYear = !year || c.year.toString() === year;
    return matchesSearch && matchesRegion && matchesYear;
  });

  // Keyboard handler for card links
  function handleCardKeyDown(e: React.KeyboardEvent<HTMLDivElement>, url: string) {
    if (e.key === "Enter" || e.key === " ") {
      window.open(url, "_blank");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          🕵️‍♂️ Ponzi Scheme Case Studies
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
          <input
            type="text"
            aria-label="Search case studies"
            placeholder="Search by name or summary..."
            className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            aria-label="Filter by region"
            className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <input
            type="number"
            aria-label="Filter by year"
            placeholder="Year"
            className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-28"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Ponzi scheme case studies">
          {filteredCases.length === 0 && (
            <div className="col-span-full text-center text-gray-400">No case studies found.</div>
          )}
          {filteredCases.map((c) => (
            <div
              key={c.name}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ minHeight: "340px" }}
              tabIndex={0}
              role="listitem"
              aria-label={`Case study: ${c.name}`}
              onKeyDown={(e) => handleCardKeyDown(e, c.links[0]?.url || "")}
            >
              <h2 className="text-2xl font-semibold mb-2 text-blue-300">{c.name}</h2>
              <p className="text-gray-300 mb-4">{c.summary}</p>
              <div className="mt-auto">
                <h3 className="text-lg font-semibold mb-1 text-gray-200">Further Reading:</h3>
                <ul className="list-disc list-inside text-blue-400 space-y-1">
                  {c.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-200 transition-colors"
                        tabIndex={0}
                        aria-label={`Read more about ${c.name} on ${link.text}`}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 