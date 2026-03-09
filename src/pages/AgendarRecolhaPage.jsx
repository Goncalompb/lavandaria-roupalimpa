import React, { useState } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";

export default function AgendarRecolhaPage() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    morada: "",
    data: "",
    detalhes: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent("Pedido de Agendamento de Recolha");
    const body = encodeURIComponent(
      [
        `Nome: ${form.nome}`,
        `Telefone: ${form.telefone}`,
        `Morada: ${form.morada}`,
        `Data pretendida: ${form.data}`,
        "",
        "Detalhes:",
        form.detalhes
      ].join("\n")
    );

    window.location.href = `mailto:roupalimpa.lavandaria@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="detail-page">
      <header className="detail-header">
        <nav className="nav">
          <Link to="/" className="brand" aria-label="Lavandaria Roupa Limpa">
            <img src="/LogoLavandaria.png" alt="Logotipo Lavandaria Roupa Limpa" className="brand-logo" />
          </Link>
          <Link to="/" className="btn btn-light">Voltar ao Início</Link>
        </nav>
        <div className="detail-hero">
          <h1>Agendar Recolha</h1>
        </div>
        <div className="detail-curve" aria-hidden="true" />
      </header>

      <main className="detail-main">
        <section className="booking-form-wrap">
          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input name="nome" type="text" required value={form.nome} onChange={handleChange} />
            </label>
            <label>
              Telefone
              <input name="telefone" type="tel" required value={form.telefone} onChange={handleChange} />
            </label>
            <label>
              Morada de recolha
              <input name="morada" type="text" required value={form.morada} onChange={handleChange} />
            </label>
            <label>
              Data pretendida
              <input name="data" type="date" required value={form.data} onChange={handleChange} />
            </label>
            <label>
              Detalhes da recolha
              <textarea name="detalhes" rows="5" value={form.detalhes} onChange={handleChange} />
            </label>
            <button type="submit" className="btn">Enviar Email</button>
          </form>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
