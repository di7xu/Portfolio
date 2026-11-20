import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const GROQ_MODEL = process.env.GROQ_MODEL || 'qwen/qwen3.8-27b';

app.use(compression());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// AI Chatbot Endpoint (Powered by Groq Cloud)
app.post('/api/chat', async (req, res) => {
    const { messages } = req.body || {};
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return res.status(503).json({ error: 'Server configuration error: Missing GROQ_API_KEY' });
    }
    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages must be a non-empty array' });
    }

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages,
                temperature: 0.7,
                max_tokens: 350
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Groq API Error:', data);
            return res.status(response.status).json({
                error: data?.error?.message || 'Failed to fetch from Groq'
            });
        }

        // Normalize response if model placed output in reasoning field
        if (data?.choices && data.choices[0]?.message) {
            const msg = data.choices[0].message;
            if (!msg.content && msg.reasoning) {
                msg.content = msg.reasoning;
            }
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error('Chat error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Serve Vite Production Build
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback to index.html for Single Page Application client routing
app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`=======================================================`);
    console.log(`🚀 Dilip Portfolio Server running on port ${PORT}`);
    console.log(`🌐 Static assets served from: ${distPath}`);
    console.log(`🤖 AI Chat endpoint: http://localhost:${PORT}/api/chat`);
    console.log(`=======================================================`);
});
