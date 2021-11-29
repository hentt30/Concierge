import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import {createConnection} from 'typeorm';
import routes from './routes';
import path from 'path';


createConnection()
    .then(async (connection) => {
    // Create a new express application instance
      const app = express();
      app.use(express.static(path.join(__dirname, '../../client/build')));


      app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client', 'build', 'index.html'));
      });


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

      app.listen(process.env.PORT||5000, () => {
        console.log('Server started on port 5000!');
      });
    })
    .catch((error) => console.log(error));


