import React, { useState } from 'react';
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
    </section>
  );
};

export default Contato;