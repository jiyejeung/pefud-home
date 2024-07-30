import express, { Express } from 'express';
import { donation_route } from './routes/donation_route';
import { AppDataSource } from './database/db';
import bodyParser from 'body-parser';
import { minting_route } from './routes/minting_routes';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerConfig from './swaggerConfig';
import swaggerUi from 'swagger-ui-express';
import { auth_route } from './routes/auth_route';
import cors from 'cors';
// const crypto = require('crypto');

// const secretKey = crypto.randomBytes(64).toString('hex');

const app: Express = express();

const portNumber = process.env.PORT_NUMBER || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDocs = swaggerJSDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    app.use('/api/auth', auth_route);
    app.use('/api/donation', donation_route);
    app.use('/api/minting', minting_route);

    app.listen(portNumber, () => {
      // console.log(secretKey);
      console.log('Server is running on port 3000');
      console.log('Swagger docs available at http://localhost:3001/api-docs');
    });
  })
  .catch((err: any) => {
    console.error('Error during Data Source initialization:', err);
  });
