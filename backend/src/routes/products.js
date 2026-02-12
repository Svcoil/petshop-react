import express from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load products from JSON file
const getProducts = () => {
  const productsPath = join(__dirname, '../../data/products.json');
  const data = readFileSync(productsPath, 'utf8');
  return JSON.parse(data);
};

// GET all products
router.get('/', (req, res) => {
  try {
    const products = getProducts();
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch products'
    });
  }
});

// GET product by ID
router.get('/:id', (req, res) => {
  try {
    const products = getProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch product'
    });
  }
});

// GET products by category
router.get('/category/:category', (req, res) => {
  try {
    const products = getProducts();
    const filteredProducts = products.filter(
      p => p.category.toLowerCase() === req.params.category.toLowerCase()
    );
    
    res.json({
      success: true,
      count: filteredProducts.length,
      data: filteredProducts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch products by category'
    });
  }
});

export default router;
