module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'languini',
      user: 'postgres',
      password: 'pass'
    },
    seeds: {
      directory: './seeds'
    }
  }
}
