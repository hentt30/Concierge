import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import {createConnection} from 'typeorm';
import routes from './routes';


createConnection()
    .then(async (connection) => {
    // Create a new express application instance
      const app = express();

      // Call midlewares
      app.use(cors(
          {
            origin: ['http://localhost:3000', 'https://accounts.spotify.com'],
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            preflightContinue: false,
            optionsSuccessStatus: 200,
            credentials: true,
          },
      )).use(cookieParser());
      app.use(helmet());
      app.use(bodyParser.json());

      // Set all routes from routes folder
      app.use('/', routes);

      app.listen(3030, () => {
        console.log('Server started on port 3030!');
      });
    })
    .catch((error) => console.log(error));


