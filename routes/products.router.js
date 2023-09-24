const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      product: faker.commerce.product(),
      productName: faker.commerce.productName(),
      productDescription: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('I am a filter')
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  });
});

module.exports = router