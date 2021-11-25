const { Pool } = require('pg')
const {dbConfig} = require('../config')

const pool = new Pool(dbConfig)
module.exports = {
  query: (text, params) => pool.query(text, params)
}
