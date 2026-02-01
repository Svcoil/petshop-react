import React from 'react';
import { useCart } from '../hooks/useCart';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">R$ {item.price.toFixed(2)} cada</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="total-item">Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remover</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Geral: R$ {total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;