const { cart, orders, products } = require('../db/data');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const cartService = require('./cartService');

let nextOrderId = 1;

const checkout = () => {
  if (cart.length === 0) throw new Error("Cart is empty");

  const orderItems = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) throw new Error(`Product ${item.productId} not found`);
    if (item.quantity > product.stock)
      throw new Error(`Not enough stock for ${product.name}`);

    product.stock -= item.quantity; 

    return new OrderItem(product.id, item.quantity, product.price);
  });

  const totalAmount = orderItems.reduce((sum, i) => sum + i.quantity * i.priceAtPurchase, 0);
  const order = new Order(nextOrderId++, orderItems, totalAmount);

  orders.push(order);
  cartService.clearCart(); 

  return order;
};

const getOrders = () => orders;

module.exports = { checkout, getOrders };
