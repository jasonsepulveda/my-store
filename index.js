const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello my server in express')
});

app.get('/new-root', (req, res) => {
  res.send('Hello, I am a new root')
});

// Routing with Express.JS
// I added a new endpoint in order to send a json object
app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  })
});

app.listen(port, () => {
  console.log('My Port: ' + port)
});
