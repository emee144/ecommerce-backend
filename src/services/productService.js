const { products } = require('../db/data');

const getAllProducts = () => {
  return products.map(p => ({ ...p })); 
};

const getProductById = (id) => {
  return products.find(p => p.id === id);
};

module.exports = { getAllProducts, getProductById };