import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">R$ {product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className="add-btn">Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;