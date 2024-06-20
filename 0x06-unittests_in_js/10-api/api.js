const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 7865;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(availablePayments);
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

module.exports = app;
