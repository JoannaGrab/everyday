const dayjs = require('dayjs');
const http = require('http');
const Dinero = require("dinero.js")
const bonds = require('./finances/nbp_edo')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const edo = bonds.createBond(Dinero({ amount: 10000, currency: 'PLN' }), 2.7, 1.5, 2.5, dayjs());
  const history = bonds.edoHistory(edo, dayjs().add(2, "year"));
  res.end(JSON.stringify(history));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});