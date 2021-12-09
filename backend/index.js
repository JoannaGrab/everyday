const express = require('express');
const dayjs = require('dayjs');
const Dinero = require("dinero.js");
const db = require("./db");

const currencies = {
  "PLN": true,
  "USD": true,
  "EUR": true
}

const app = express();
app.use(express.json());
const port = 3000

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
  const b = await db.getOperations();
  res.json(b);
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
    if (!amount || amount < 0) {
      errors.push("`amount` must be a number greater than 0")
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
  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  const result = await db.addOperation({currency, amount, date, title});
  if(result.rowCount !== 1){
    res.status(500).end();
  } 
  res.status(200).end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
