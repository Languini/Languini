require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'languini',
      user: 'kellanriley',
      password: 'process.env.PASS'
    },
    seeds: {
      directory: './seeds'
    }
  }
}
