const http = require('http');
// const dayjs = require('dayjs');
// const Dinero = require("dinero.js")
// const bonds = require('./finances/nbp_edo')
const db = require('./db');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const {rows, error} = await db.query("SELECT * FROM bonds");
  console.log(error);
  res.end(JSON.stringify(rows));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
