import express, { Express } from 'express';
import { donation_route } from './routes/donation_route';

import './database/db';

const app: Express = express();

const portNumber = process.env.PORT_NUMBER || 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/donation', donation_route);

app.listen(portNumber, (): void => console.log(`Server is running on port${portNumber}`));
