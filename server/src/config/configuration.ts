import * as process from 'process'

export default () => ({
  port: parseInt(process.env?.PORT ?? '0', 10) || 8080,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env?.DATABASE_PORT ?? '0', 10) || 5432,
  },
})
