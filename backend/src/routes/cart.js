import express from 'express';

const router = express.Router();

// In-memory cart storage (in production, this would use a database)
// TODO: Implement database persistence (MongoDB, PostgreSQL, etc.) for production
// Current implementation will lose all cart data on server restart
let carts = {};

// GET cart by session ID
router.get('/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const cart = carts[sessionId] || { items: [], total: 0 };
  
  res.json({
    success: true,
    data: cart
  });
});

// POST add item to cart
router.post('/:sessionId/items', (req, res) => {
  const { sessionId } = req.params;
  const { product, quantity } = req.body;
  
  if (!carts[sessionId]) {
    carts[sessionId] = { items: [], total: 0 };
  }
  
  const cart = carts[sessionId];
  const existingItemIndex = cart.items.findIndex(item => item.id === product.id);
  
  if (existingItemIndex >= 0) {
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    cart.items.push({ ...product, quantity });
  }
  
  // Calculate total
  cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  res.json({
    success: true,
    data: cart
  });
});

// PUT update item quantity
router.put('/:sessionId/items/:itemId', (req, res) => {
  const { sessionId, itemId } = req.params;
  const { quantity } = req.body;
  
  if (!carts[sessionId]) {
    return res.status(404).json({
      success: false,
      error: 'Cart not found'
    });
  }
  
  const cart = carts[sessionId];
  const itemIndex = cart.items.findIndex(item => item.id === parseInt(itemId));
  
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Item not found in cart'
    });
  }
  
  if (quantity <= 0) {
    cart.items.splice(itemIndex, 1);
  } else {
    cart.items[itemIndex].quantity = quantity;
  }
  
  // Recalculate total
  cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  res.json({
    success: true,
    data: cart
  });
});

// DELETE remove item from cart
router.delete('/:sessionId/items/:itemId', (req, res) => {
  const { sessionId, itemId } = req.params;
  
  if (!carts[sessionId]) {
    return res.status(404).json({
      success: false,
      error: 'Cart not found'
    });
  }
  
  const cart = carts[sessionId];
  cart.items = cart.items.filter(item => item.id !== parseInt(itemId));
  
  // Recalculate total
  cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  res.json({
    success: true,
    data: cart
  });
});

// DELETE clear cart
router.delete('/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  carts[sessionId] = { items: [], total: 0 };
  
  res.json({
    success: true,
    data: carts[sessionId]
  });
});

export default router;
