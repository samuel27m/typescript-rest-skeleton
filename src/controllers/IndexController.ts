import { Request, Response } from 'express';

const IndexController = (request: Request, response: Response): Response => {
    return response.json({
        status: 'ok',
        timestamp: new Date().toDateString(),
    });
};

export { IndexController };
