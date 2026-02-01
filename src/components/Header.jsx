import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.css';

const Header = () => {
  const { getCartCount } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">PetShop</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/carrinho">
          <FaShoppingCart size={24} />
          {getCartCount() > 0 && <span className="badge">{getCartCount()}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;