import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { Error } from '../typings';
import connectDB from './mongodb/connect';
import {
  conversationRoute,
  gigRoute,
  messageRoute,
  orderRoute,
  reviewRoute,
  userRoute,
  authRoute,
} from './routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';

  return res.status(errorStatus).send(errorMessage);
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL!);
    app.listen(8080, () =>
      console.log('Server has been started on port http://localhost:8080')
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
