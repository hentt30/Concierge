import { createConnection } from 'typeorm';

createConnection(
    {
    url: process.env.DATABASE_URL,
    type: 'postgres',
    entities: [ "{dist,src}/entity/*{.js,.ts}"]['YOUR ENTITIES GO HERE'],
    synchronize: true,
    extra: {
      ssl: true,
    },
  });