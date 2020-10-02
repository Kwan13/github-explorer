import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import './database';

import routes from './routes';

// errors
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'internal server error.',
    });
  },
);

app.listen(3333, () => {
  console.log('server started!');
});
