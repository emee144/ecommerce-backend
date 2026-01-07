const { cart, products } = require('../db/data');
const CartItem = require('../models/CartItem');

const getCart = () => cart;

const addItemToCart = (productId, quantity) => {
  const product = products.find(p => p.id === productId);
  if (!product) throw new Error("Product not found");
  if (quantity > product.stock) throw new Error("Quantity exceeds stock");

  const existingItem = cart.find(c => c.productId === productId);
  if (existingItem) {
    if (existingItem.quantity + quantity > product.stock)
      throw new Error("Quantity exceeds stock");
    existingItem.quantity += quantity;
  } else {
    cart.push(new CartItem(productId, quantity));
  }

  return cart;
};

const updateCartItem = (productId, quantity) => {
  const product = products.find(p => p.id === productId);
  if (!product) throw new Error("Product not found");
  if (quantity > product.stock) throw new Error("Quantity exceeds stock");

  const item = cart.find(c => c.productId === productId);
  if (!item) throw new Error("Cart item not found");

  if (quantity === 0) {
    
    const index = cart.indexOf(item);
    cart.splice(index, 1);
  } else {
    item.quantity = quantity;
  }

  return cart;
};

const removeCartItem = (productId) => {
  const index = cart.findIndex(c => c.productId === productId);
  if (index === -1) throw new Error("Cart item not found");
  cart.splice(index, 1);
  return cart;
};

const clearCart = () => {
  cart.length = 0;
};

module.exports = {
  getCart,
  addItemToCart,
  updateCartItem,
  removeCartItem,
  clearCart
};
