const request = require('supertest');
const app = require('../server');

describe('Post Endpoints', () => {

    // Test for creating a new post
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api/posts')
            .set('x-auth-token', 'valid_token') // Set a valid token for authentication
            .send({
                title: 'Test Post',
                content: 'This is a test post'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.title).toEqual('Test Post');
        expect(res.body.content).toEqual('This is a test post');
    });

    // Add more tests for other post endpoints (get all posts, get post by ID, update, delete)
});