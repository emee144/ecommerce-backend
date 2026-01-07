# ecommerce-backend

A backend-only e-commerce service built with **Node.js** and **Express**, demonstrating clean architecture, proper API design, robust cart/order management, and correct inventory handling.

No frontend – pure backend logic with in-memory data storage.

## Features
- Product listing
- Full cart management (add, update quantity, remove items)
- Checkout process with inventory validation
- Order creation with total calculation and timestamp
- Stock reduction on successful checkout
- Cart automatically cleared after checkout
- Comprehensive error handling for insufficient stock

## Tech Stack
- Node.js
- Express.js

## Prerequisites
- Node.js (v18 or higher recommended)
- npm

## Installation & Setup
```bash
git clone https://github.com/emee144/ecommerce-backend.git
cd ecommerce-backend
npm install
node index.js
