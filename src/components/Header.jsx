import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.css';

const Header = () => {
  const { getCartCount } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">PetShop Moderno</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/carrinho">Carrinho ({getCartCount()})</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
      </div>
    </header>
  );
};

export default Header;