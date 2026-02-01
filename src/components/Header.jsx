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
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/carrinho">Carrinho ({getCartCount()})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;