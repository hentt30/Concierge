module.exports = {
   "type": "postgres",
   "url":process.env.DATABASE_URL,
   "entities": [__dirname + "/entity/*{.js,.ts}"],
   "migrations": [
      __dirname+"/migration/**/*{.js,.ts}"
   ],
   "cli": {
      "entitiesDir": "dist/entity",
      "migrationsDir": "dist/migration",
      "subscribersDir": "dist/subscriber"
   }
}