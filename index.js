const express = require('express');
const { faker } = require('@faker-js/faker');

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
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products)
});

app.get('/products/filter', (req, res) => {
  res.send('I am a filter')
})

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
  // const { categoryId, productId } = req.params; // it is the same than above
  res.json({
    categoryId,
    productId,
    name: 'Product 2',
    price: 2000,
  })
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('There are not parameters')
  }
})

app.listen(port, () => {
  console.log('My Port: ' + port)
});
