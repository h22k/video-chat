import * as process from 'process'

export default () => ({
  port: parseInt(process.env?.PORT ?? '0', 10) || 8080,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env?.DATABASE_PORT ?? '0', 10) || 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
  node_env: process.env.NODE_ENV,
})
