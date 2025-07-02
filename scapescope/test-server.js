// Simple test script to verify server functionality
import fetch from 'node-fetch';

async function testServer() {
    try {
        // Test health endpoint
        console.log('Testing server health...');
        const healthResponse = await fetch('http://localhost:3001/api/health');
        const healthData = await healthResponse.json();
        console.log('Health check:', healthData);

        // Test chat endpoint
        console.log('\nTesting chat endpoint...');
        const chatResponse = await fetch('http://localhost:3001/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userMessage: 'Tell me about Mars'
            })
        });
        
        const chatData = await chatResponse.json();
        console.log('Chat response:', chatData);
        
        console.log('\n✅ Server is working correctly!');
    } catch (error) {
        console.error('❌ Server test failed:', error.message);
    }
}

testServer(); 