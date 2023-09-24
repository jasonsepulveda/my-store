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
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    }
  ])
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  })
})
// new endpoint with 2 parameters
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId } = req.params;
  const { productId } = req.params
  res.json({
    categoryId,
    productId,
    name: 'Product 2',
    price: 2000,
  })
})

app.listen(port, () => {
  console.log('My Port: ' + port)
});
