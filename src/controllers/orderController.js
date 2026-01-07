const orderService = require('../services/orderService');

const checkout = (req, res) => {
  try {
    const order = orderService.checkout();
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOrders = (req, res) => {
  res.json(orderService.getOrders());
};

module.exports = { checkout, getOrders };
