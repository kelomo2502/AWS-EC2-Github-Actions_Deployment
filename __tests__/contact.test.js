const request = require('supertest');
const contact = require('../contact');

describe('GET /contact', () => {
    it('should return a  message', async () => {
        const response = await request(contact).get('/contact');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'feel free to contact us' });
    });
});
