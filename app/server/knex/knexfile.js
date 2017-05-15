module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'languini',
      user: 'kellanriley',
      password: 'process.env.DATABASE_PASS'
    },
    seeds: {
      directory: './seeds'
    }
  }
}
