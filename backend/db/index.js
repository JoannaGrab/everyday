const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD
})
module.exports = {
  addOperation: async (op) => {
    return await pool.query("INSERT INTO operations(currency,amount,date,name,tags) VALUES($1,$2,$3,$4,$5)", Object.values(op));
  },
  getOperations: async () => {
    return await pool.query("SELECT * FROM operations");
  }
}
