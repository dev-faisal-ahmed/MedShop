import express from 'express';
import cors from 'cors';
import { appRouter } from './router';
import { globalErrorHandler } from '../middleware';

export const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', appRouter);

app.get('/', (_, res) => {
  res.status(200).json({ ok: true, message: 'Welcome To MedShop API' });
});

app.all('*', (_, res) => {
  res.status(404).json({ ok: false, message: 'This path does not exist' });
});

app.use(globalErrorHandler);
