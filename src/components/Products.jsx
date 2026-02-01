import React from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../hooks/useCart';
import './Products.css';

const Products = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Ração Premium para Cães',
      description: 'Ração de alta qualidade para cães adultos.',
      price: 80,
      image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Brinquedos para Gatos',
      description: 'Diversos brinquedos divertidos para gatos.',
      price: 20,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Coleira para Pets',
      description: 'Coleira resistente e confortável.',
      price: 40,
      image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      name: 'Cama para Pets',
      description: 'Cama macia e confortável para seu pet.',
      price: 60,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      name: 'Shampoo para Pets',
      description: 'Shampoo suave para banho de pets.',
      price: 15,
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      name: 'Arranhador para Gatos',
      description: 'Arranhador resistente para gatos.',
      price: 35,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 7,
      name: 'Petiscos para Cães',
      description: 'Petiscos saudáveis e deliciosos.',
      price: 25,
      image: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 8,
      name: 'Areia para Gato',
      description: 'Areia higiênica para caixa de areia.',
      price: 30,
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 9,
      name: 'Escova para Pets',
      description: 'Escova para pentear e cuidar do pelo.',
      price: 18,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 10,
      name: 'Comedouro Automático',
      description: 'Comedouro automático para alimentação programada.',
      price: 120,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
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