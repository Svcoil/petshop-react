import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../hooks/useCart';
import apiService from '../services/api';
import './Products.css';

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await apiService.getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Falha ao carregar produtos. Por favor, tente novamente mais tarde.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="products">
        <h2>Nossos Produtos</h2>
        <div className="loading">Carregando produtos...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products">
        <h2>Nossos Produtos</h2>
        <div className="error">{error}</div>
      </section>
    );
  }

  return (
    <section className="products">
      <h2>Nossos Produtos</h2>
      <div className="products-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default Products;
