import 'reflect-metadata'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import routes from './routes';
import path from 'path';
import { User } from './entity/user';
import { Playlist } from './entity/paylist';

import { getConnectionOptions, ConnectionOptions, createConnection } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const getOptions = async () => {
  let connectionOptions: ConnectionOptions;
  connectionOptions = {
    type: 'postgres',
    synchronize: false,
    logging: false,
    extra: {
      ssl: true,
    },
    entities: [User,Playlist],
  };
  if (process.env.DATABASE_URL) {
    Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
  } else {
    // gets your default configuration
    // you could get a specific config by name getConnectionOptions('production')
    // or getConnectionOptions(process.env.NODE_ENV)
    connectionOptions = await getConnectionOptions(); 
  }

  return connectionOptions;
};

const connect2Database = async (): Promise<void> => {
    const typeormconfig = await getOptions();
    await createConnection(typeormconfig);
};

connect2Database().then(async () => {
    console.log('Connected to database');
    const app = express();
    app.use(express.static(path.join(__dirname, '../../client/build')));


    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../client', 'build', 'index.html'));
    });


    // Call midlewares
    app.use(cors(
        {
      origin: ['http://localhost:3000', 'https://accounts.spotify.com','https://concierge412.herokuapp.com'],
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

    app.listen(process.env.PORT , () => {
      console.log('Server started on port 5000!');
    });
});




    // Create a new express application instance
     
   


