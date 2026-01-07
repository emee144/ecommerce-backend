const cartService = require('../services/cartService');

const getCart = (req, res) => {
  res.json(cartService.getCart());
};

const addCartItem = (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = cartService.addItemToCart(productId, quantity);
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateCartItem = (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = cartService.updateCartItem(productId, quantity);
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const removeCartItem = (req, res) => {
  try {
    const { productId } = req.params;
    const cart = cartService.removeCartItem(Number(productId));
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getCart, addCartItem, updateCartItem, removeCartItem };
