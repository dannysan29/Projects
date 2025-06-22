import React, { useEffect, useState } from 'react';
import './NewsFeed.css';

const NEWS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.nasa.gov%2Frss%2Fdyn%2Fbreaking_news.rss`

function extractImage(description) {
    const match = description.match(/<img.*src="(.*?)"/);
    return match ? match[1] : null;
}

export default function NewsFeed() {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [days, setDays] = useState(30);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        fetch(NEWS_URL)
            .then((res) => res.json())
            .then((data) => {
                if (data.items) {
                    setArticles(data.items.slice(0, 20)); 
                }
            })
            .catch(console.error);
    }, []);

    const now = new Date();
    const filteredArticles = articles
        .filter((item) => {
            const pubDate = new Date(item.pubDate);
            const ageInDays = (now - pubDate) / (1000 * 60 * 60 * 24);
            return ageInDays <= days;
        })
        .filter((item) => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="news-feed-container">
            <button onClick={() => setIsOpen(!isOpen)} className="toggle-news">
                📰 NASA News {isOpen ? '🔻' : '🔺'}
            </button>

            {isOpen && (
                <div className="news-widget-content">
                <div className='news-controls'>
                    <input
                        type='text'
                        placeholder='Search news...'
                        className='news-search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                        className='news-filter'
                    >
                        <option value={1}>Last 1 Day</option>
                        <option value={7}>Last 7 Days</option>
                        <option value={30}>Last 30 Days</option>
                        <option value={365}>Last Year</option>
                    </select>
                </div>

                {filteredArticles.map((item, i) => {
                    const img = extractImage(item.description);
                    const plainText = item.description.replace(/<[^>]*>?/gm, '');
                    return (
                        <div key={i} className='news-item'>
                            {img && <img src={img} alt="thumbnail" className='news-thumb' />}
                            <a href={item.link} target='_blank' rel="nonreferrer" className='news-title'>
                               {item.title} 
                            </a>
                            <p className="news-date">
                                {new Date(item.pubDate).toLocaleDateString()}
                            </p>
                            <p className='news-summary'>
                                {plainText.slice(0, 200)}...
                            </p>
                        </div>   
                    );
                })}
            </div>
        )}
    </div>
    );
}