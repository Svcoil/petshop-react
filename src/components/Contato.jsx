import React, { useState } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contato.css';

const Contato = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contato">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
      <div className="contact-info">
        <h3>Informações de Contato</h3>
        <p>Telefone: (85) 98820-8404</p>
        <p>WhatsApp: <a href="https://wa.me/5585988208404" target="_self" rel="noopener noreferrer">Clique aqui</a></p>
        <div className="social-links">
          <a href="https://instagram.com" target="_self" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          <a href="https://facebook.com" target="_self" rel="noopener noreferrer"><FaFacebook size={24} /></a>
        </div>
      </div>
    </section>
  );
};

export default Contato;