import React from 'react';
import './Sobre.css';

const Sobre = () => {
  return (
    <section className="sobre">
      <h2>Sobre Nós</h2>
      <div className="sobre-content">
        <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cachorro" />
        <div className="text">
          <p>Somos uma petshop dedicada ao bem-estar dos seus pets. Fundada em 2020, nossa missão é oferecer produtos de alta qualidade e serviços especializados para cães e gatos.</p>
          <p>Com uma equipe apaixonada por animais, trabalhamos para garantir que seu pet tenha tudo o que precisa para uma vida saudável e feliz.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Gato" />
      </div>
    </section>
  );
};

export default Sobre;