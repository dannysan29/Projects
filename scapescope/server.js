import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { userMessage } = req.body;

    try {
        const response = await fetch('https://api.together.xyz/v1/inference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.VITE_TOGETHER_KEY}`,
            },
            body: JSON.stringify({
                model: 'meta-llama/Llama-2-70b-chat',
                messages: [
                    { role: 'system', content: 'You are a helpful astronomy expert.' },
                    { role: 'user', content: userMessage }
                ],
                max_tokens: 512,
                temperature: 0.7,
                top_p: 0.9
            }),
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server listening at http://localhost:${PORT}`);
});