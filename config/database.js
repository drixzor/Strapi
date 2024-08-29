module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL', false),
      },
      acquireConnectionTimeout: 10000, // Increase timeout
    },
    pool: {
      min: 2,
      max: 10, // Adjust based on your RDS instance capacity
    },
    debug: false,
  },
});
