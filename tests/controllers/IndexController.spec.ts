import { Request, Response } from 'express';
import { IndexController } from '../../src/controllers/IndexController';

describe('IndexController', () => {
    it('should respond as expected', () => {
        const request = {};
        const response = {
            json: jest.fn(),
        };

        IndexController(request as Request, response as unknown as Response);

        expect(response.json).toBeCalledWith({
            status: 'ok',
            timestamp: new Date().toDateString(),
        });
    });
});
