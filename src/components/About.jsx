import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre Nós</h2>
      <div className="about-content">
        <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cachorro" />
        <div className="text">
          <p>Somos uma petshop dedicada ao bem-estar dos seus pets. Oferecemos serviços de qualidade e produtos selecionados para cães e gatos.</p>
          <p>Nosso compromisso é com o amor e cuidado que seus animais merecem.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Gato" />
      </div>
    </section>
  );
};

export default About;