import React from 'react';
import './Services.css';

const Services = ({ addToCart }) => {
  const services = [
    {
      id: 1,
      name: 'Banho e Tosa',
      description: 'Serviço completo de banho e tosa para seu pet.',
      price: 50,
      image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Veterinário',
      description: 'Consultas veterinárias e cuidados de saúde.',
      price: 100,
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Hospedagem',
      description: 'Hospedagem segura e confortável para seu pet.',
      price: 30,
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section className="services">
      <h2>Nossos Serviços</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="price">R$ {service.price.toFixed(2)}</p>
            <button onClick={() => addToCart(service)} className="add-btn">Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;