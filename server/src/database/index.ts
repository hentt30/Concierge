import { getConnectionOptions, ConnectionOptions } from 'typeorm';
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
    entities: ['dist/entity/*.*'],
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
});
import { createConnection } from 'typeorm';

