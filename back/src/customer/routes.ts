import { Express, Request, Response } from 'express';

export const customerRoutes = (app: Express) => {
  app.get('/customers', (request: Request, response: Response) =>
    response.send('get customers'),
  );
  app.get('/customer/:id', (request: Request, response: Response) =>
    response.send('get customer id'),
  );
  app.post('/customer', (request: Request, response: Response) =>
    response.send('post customer'),
  );
};
