module.exports = {
   "type": "postgres",
   "url":process.env.DATABASE_URL,
   "port":5433,
   "entities": ["dist/**/*.entity.js"],
   "migrations": [
      "dist/migration/**/*.ts"
   ],
   "subscribers": [
      "dist/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "dist/entity",
      "migrationsDir": "dist/migration",
      "subscribersDir": "dist/subscriber"
   }
}