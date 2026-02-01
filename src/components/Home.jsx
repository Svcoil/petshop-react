import React from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../hooks/useCart';
import './Home.css';

const Home = () => {
  const { addToCart } = useCart();

  const featuredProducts = [
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
    }
  ];

  return (
    <section className="home">
      <div className="banner">
        <h1>Bem-vindo ao PetShop Moderno</h1>
        <p>O melhor cuidado para seu pet!</p>
      </div>
      <div className="featured">
        <h2>Produtos em Destaque</h2>
        <div className="featured-products">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;