import { createConnection } from 'typeorm';

createConnection(
    {
    url: process.env.DATABASE_URL,
    type: 'postgres',
    entities: [ "{dist,src}/entity/*{.js,.ts}"],
    synchronize: true,
    ssl: {  
      rejectUnauthorized: false,
    },
  });