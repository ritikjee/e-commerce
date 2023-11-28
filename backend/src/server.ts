import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});