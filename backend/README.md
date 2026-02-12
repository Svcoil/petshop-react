# Pet Shop Backend API

Professional backend API for the Pet Shop application built with Node.js and Express.

## Features

- RESTful API for products
- Shopping cart management
- CORS enabled for frontend integration
- JSON-based data storage

## Installation

```bash
cd backend
npm install
```

## Running the Server

```bash
npm start
```

The server will run on http://localhost:3001

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category

### Cart

- `GET /api/cart/:sessionId` - Get cart by session ID
- `POST /api/cart/:sessionId/items` - Add item to cart
- `PUT /api/cart/:sessionId/items/:itemId` - Update item quantity
- `DELETE /api/cart/:sessionId/items/:itemId` - Remove item from cart
- `DELETE /api/cart/:sessionId` - Clear cart

## Health Check

- `GET /api/health` - Check if API is running
