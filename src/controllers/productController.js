const productService = require('../services/productService');

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

module.exports = { getAllProducts };
