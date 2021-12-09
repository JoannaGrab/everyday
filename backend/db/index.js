const { Pool } = require('pg')
const {dbConfig} = require('../config')

const pool = new Pool(dbConfig)
module.exports = {
  addOperation: async (op) => {
    return await pool.query("INSERT INTO operations(currency,amount,date,name) VALUES($1,$2,$3,$4)", Object.values(op));
  },
  getOperations: async () => {
    return await pool.query("SELECT * FROM operations");
  }
}
