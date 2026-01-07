class Order {
  constructor(id, items, totalAmount) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.createdAt = new Date();
  }
}

module.exports = Order;
