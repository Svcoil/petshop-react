# Pet Shop - Professional E-commerce Website

A professional pet shop e-commerce application built with React (frontend) and Node.js/Express (backend).

## Features

### Frontend
- Modern React application with Vite
- Product catalog with categories
- Shopping cart functionality
- Responsive design
- React Router for navigation
- Professional UI/UX

### Backend
- RESTful API built with Express
- Product management
- Shopping cart sessions
- CORS enabled
- JSON-based data storage

## Project Structure

```
petshop-react/
├── backend/              # Backend API
│   ├── src/
│   │   ├── routes/      # API routes
│   │   └── server.js    # Express server
│   ├── data/            # Product data
│   └── package.json
├── src/                 # Frontend source
│   ├── components/      # React components
│   ├── contexts/        # React contexts
│   ├── services/        # API service layer
│   └── ...
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

### Running the Application

#### Option 1: Run Backend and Frontend Separately

Terminal 1 - Backend:
```bash
cd backend
npm start
```
Backend will run on http://localhost:3001

Terminal 2 - Frontend:
```bash
npm run dev
```
Frontend will run on http://localhost:5173

#### Option 2: Run Both Together
```bash
npm run dev:all
```

### Building for Production

```bash
npm run build
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID  
- `GET /api/products/category/:category` - Get products by category

### Shopping Cart
- `GET /api/cart/:sessionId` - Get cart
- `POST /api/cart/:sessionId/items` - Add to cart
- `PUT /api/cart/:sessionId/items/:itemId` - Update quantity
- `DELETE /api/cart/:sessionId/items/:itemId` - Remove item
- `DELETE /api/cart/:sessionId` - Clear cart

## Technologies Used

### Frontend
- React 19
- Vite
- React Router DOM
- React Icons

### Backend
- Node.js
- Express
- CORS
- Body Parser

## Contributing

This is a professional e-commerce template. Feel free to fork and customize for your needs.

## License

ISC
