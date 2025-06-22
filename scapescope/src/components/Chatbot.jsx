import React, { useState, useRef, useEffect } from 'react';
import { fetchTogetherResponse } from '../utils/together.js';
import './Chatbot.css';

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const newMessage = { sender: 'user', text: userInput};
        setMessages((prev) => [...prev, newMessage]);
        setUserInput('');
        setLoading(true);

        try {
            const reply = await fetchTogetherResponse(userInput);
            setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { sender: 'bot', text: '⚠️ Sorry, something went wrong' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    return (
      <>
        <button onClick={toggleChat} className='chat-toggle-button'>
            {isOpen ? '❌' : '💬'}
        </button>

        {isOpen && (
            <div className='chatbot-widget'>
                <div className='chat-history'>
                    {messages.map((msg, i) => (
                        <div key={i} className={`chat-bubble ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    {loading && (
                        <div className='chat-bubble bot loading'>...</div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                <form onSubmit={handleSubmit} className='chat-input-form'>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder='Ask a space question...'
                        className='chat-input'
                    />
                    <button type="submit" className='chat-send' disabled={loading}>🚀</button>
                </form>
            </div>
        )}
    </>  
    );
}