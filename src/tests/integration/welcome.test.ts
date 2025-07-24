import request from 'supertest';

import app from '@src/app';

describe('GET /', () => {
    it('should respond with Welcome to the API!', async () => {
        const res = await request(app).get('/api');

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: 'Welcome to the API!' });
    });
});
