const express = require('express');
const dayjs = require('dayjs');
const Dinero = require("dinero.js");
const db = require("./db");
const cors = require("cors");

const currencies = {
  "PLN": true,
  "USD": true,
  "EUR": true
}

var corsOptions = {
  origin: 'http://localhost:3000'
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const port = 3001

app.get('/finance/balance', async (req, res) => {
  const errors = [];
  const from = dayjs(req.query.from);
  if (!req.query.from || !from.isValid()) {
    errors.push("`from` is not a valid date")
  }
  const to = dayjs(req.query.to);
  if (!req.query.to || !to.isValid()) {
    errors.push("`to` is not a valid date")
  }
  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }
  const operations = await db.getOperations();
  res.json(operations.rows.map(x => {
    return {
      id: x.id,
      value: {
        currency: x.currency,
        amount: x.amount
      },
      date: x.date,
      name: x.name
    };
  }));
})


app.post('/finance/balance/operation', async (req, res) => {
  const errors = [];
  const date = dayjs(req.body.date);
  if (!req.body.date || !date.isValid()) {
    errors.push("`date` does not represent a valid date")
  }
  const title = req.body.title;
  if (!title || title.length === 0) {
    errors.push("`title` must be a non empty string")
  }
  const value = req.body.value;
  if (!value) {
    errors.push("`value` must not be empty")
  }
  let amount, currency;
  if (value) {
    amount = req.body.value.amount;
    if (!amount || amount === 0) {
      errors.push("`amount` must be a number other than 0")
    }
    currency = req.body.value.currency;
    if (!currency || currency.length != 3 || !currencies[currency]) {
      errors.push("`currency` is not an ISO 4217 code or is not supported")
    }
    try {
      Dinero({ amount, currency });
    } catch (e) {
      errors.push("`value` does not represent a correct money");
    }
  }
  const tags = req.body.tags;
  if (typeof(tags) !== 'string'){
    errors.push("`tags` must be a string");
  }
  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  const result = await db.addOperation({currency, amount, date, title, tags});
  if(result.rowCount !== 1){
    res.status(500).end();
  } 
  res.status(200).end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
