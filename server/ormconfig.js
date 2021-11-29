module.exports = {
   "type": "postgres",
   "url":process.env.DATABASE_URL,
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