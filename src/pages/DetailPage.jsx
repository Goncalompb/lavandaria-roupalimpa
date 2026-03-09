import React from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";

export default function DetailPage({ title, ctaLabel, cards }) {
  return (
    <div className="detail-page">
      <header className="detail-header">
        <nav className="nav">
          <Link to="/" className="brand" aria-label="Lavandaria Roupa Limpa">
            <img src="/LogoLavandaria.png" alt="Logotipo Lavandaria Roupa Limpa" className="brand-logo" />
          </Link>
          <Link to="/agendar-recolha" className="btn btn-light">{ctaLabel}</Link>
        </nav>

        <div className="detail-hero">
          <h1>{title}</h1>
        </div>

        <div className="detail-curve" aria-hidden="true" />
      </header>

      <main className="detail-main">
        <section className="detail-grid">
          {cards.map((card) => (
            <article className="detail-card" key={card.title}>
              <h2>{card.title}</h2>
              {card.text ? <p>{card.text}</p> : null}
              {card.items ? (
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {card.action ? (
                <div className="detail-actions">
                  <Link
                    to={card.actionLink || (card.title === "Plano empresarial" ? "/agendar-recolha" : "/#contacto")}
                    className="btn"
                  >
                    {card.action}
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

