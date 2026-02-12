const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiService {
  // Products
  async getProducts() {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error('Failed to fetch products');
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error('Failed to fetch product');
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  async getProductsByCategory(category) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error('Failed to fetch products by category');
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }

  // Cart
  getSessionId() {
    let sessionId = localStorage.getItem('petshop_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
      localStorage.setItem('petshop_session_id', sessionId);
    }
    return sessionId;
  }

  async getCart() {
    try {
      const sessionId = this.getSessionId();
      const response = await fetch(`${API_BASE_URL}/cart/${sessionId}`);
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error('Failed to fetch cart');
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  }

  async addToCart(product, quantity = 1) {
    try {
      const sessionId = this.getSessionId();
      const response = await fetch(`${API_BASE_URL}/cart/${sessionId}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product, quantity }),
      });
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error('Failed to add to cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  }

  async updateCartItem(itemId, quantity) {
    try {
      const sessionId = this.getSessionId();
      const response = await fetch(`${API_BASE_URL}/cart/${sessionId}/items/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error('Failed to update cart item');
    } catch (error) {
      console.error('Error updating cart item:', error);
      throw error;
    }
  }

  async removeFromCart(itemId) {
    try {
      const sessionId = this.getSessionId();
      const response = await fetch(`${API_BASE_URL}/cart/${sessionId}/items/${itemId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error('Failed to remove from cart');
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  }

  async clearCart() {
    try {
      const sessionId = this.getSessionId();
      const response = await fetch(`${API_BASE_URL}/cart/${sessionId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error('Failed to clear cart');
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    }
  }
}

export default new ApiService();
