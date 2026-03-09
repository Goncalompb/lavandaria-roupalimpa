import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";

const cards = [
  {
    title: "Lavagem Diária",
    text: "Perfeito para roupa do dia a dia, com separação por tecidos e fragrância suave.",
    link: "/lavagem-diaria"
  },
  {
    title: "Empresas",
    text: "Planos para alojamentos locais e empresas que precisam de roupa pronta sem atrasos.",
    link: "/proprietarios"
  },
  {
    title: "Fique em casa",
    text: "Recolha e entrega ao domicílio para quem quer praticidade total no dia a dia.",
    link: "/utilizadores"
  },
  {
    title: "Peças Especiais",
    text: "Edredões, cortinas e peças delicadas com cuidado técnico e acabamento premium.",
    link: "/pecas-especiais"
  }
];

const googleReviews = [
  {
    name: "Marta Silva",
    text: "Serviço impecável. Recolha e entrega sempre no horário e a roupa vem super bem tratada.",
    when: "há 2 semanas"
  },
  {
    name: "João Ferreira",
    text: "Usei para edredões e roupa delicada. Qualidade excelente e atendimento muito simpático.",
    when: "há 1 mês"
  },
  {
    name: "Carla Mendes",
    text: "Muito prático para quem tem pouco tempo. Recomendo o plano de recolha ao domicílio.",
    when: "há 3 semanas"
  },
  {
    name: "Pedro Santos",
    text: "Atendimento rápido e roupa entregue impecável. Melhor serviço de recolha que já usei.",
    when: "há 5 dias"
  },
  {
    name: "Ana Ribeiro",
    text: "Gostei muito do cuidado com as peças delicadas e da facilidade no agendamento.",
    when: "há 2 meses"
  }
];

const galleryImages = [
  "/lavandaria-1.webp",
  "/lavandaria-2.webp",
  "/lavandaria-3.webp",
  "/lavandaria-4.webp"
];

const MAPS_SRC =
  "https://maps.google.com/maps?q=Rua%20das%20Quintas%2C%2042A%2C%20Caparica&t=&z=16&ie=UTF8&iwloc=&output=embed";

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % googleReviews.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const handleScrollDown = (event) => {
    event.preventDefault();

    const target = document.getElementById("servicos");
    if (!target) return;

    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + window.scrollY - 24;
    const distance = endY - startY;
    const duration = 1200;
    let startTime = null;

    const easeInOut = (progress) =>
      progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const step = (time) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOut(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  return (
    <>
      <header className="hero">
        <div className="hero-bubbles" aria-hidden="true">
          <span className="bubble b1" />
          <span className="bubble b2" />
          <span className="bubble b3" />
          <span className="bubble b4" />
          <span className="bubble b5" />
        </div>

        <nav className="nav">
          <Link to="/" className="brand" aria-label="Lavandaria Roupa Limpa">
            <img src="/LogoLavandaria.png" alt="Logotipo Lavandaria Roupa Limpa" className="brand-logo" />
          </Link>
          <Link to="/agendar-recolha" className="btn btn-light">Agendar Recolha</Link>
        </nav>

        <div className="hero-content">
          <h1>Roupa Limpa </h1>
          <p>
            Tornamos a lavagem de roupa simples, rápida e profissional para famílias e empresas todos os dias.
          </p>
          <div className="hero-actions">
            <a href="#servicos" className="btn">Conhecer Serviços</a>
          </div>
        </div>

        <a
          href="#servicos"
          className="scroll-down-indicator"
          aria-label="Descer para os serviços"
          onClick={handleScrollDown}
        >
          <span className="scroll-chevron" aria-hidden="true" />
        </a>

        <div className="hero-curve" aria-hidden="true" />
      </header>

      <main>
        <section id="servicos" className="audience section">
          {cards.map((card) => (
            <article className="audience-card" key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <Link to={card.link}>Saber mais</Link>
            </article>
          ))}
        </section>

        <section className="about-laundry section">
          <div className="about-media">
            <div className="media-shape media-shape-top" aria-hidden="true" />
            <div className="about-carousel">
              {galleryImages.map((image, index) => {
                const len = galleryImages.length;
                let rel = index - currentImage;
                if (rel < 0) rel += len;
                const rank = Math.min(rel, 2);
                const x = rank * 56;
                const y = rank * 24;
                const scale = 1 - rank * 0.075;
                const opacity = rank > 2 ? 0 : 1;
                const blur = rank * 0.9;

                return (
                  <img
                    key={image}
                    src={image}
                    alt="Interior da Lavandaria Roupa Limpa"
                    className="about-image"
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${scale})`,
                      filter: `blur(${blur}px)`,
                      zIndex: 20 - rank,
                      opacity
                    }}
                    onError={(event) => {
                      event.currentTarget.src = "/LogoLavandaria.png";
                    }}
                  />
                );
              })}
            </div>
            <button
              type="button"
              className="about-next"
              aria-label="Próxima foto"
              onClick={() => setCurrentImage((prev) => (prev + 1) % galleryImages.length)}
            >
              ›
            </button>
            <div className="media-shape media-shape-bottom" aria-hidden="true" />
          </div>

          <div className="about-content">
            <h2>No centro da cidade, a nossa lavandaria foi criada para simplificar o seu dia.</h2>
            <p>
              Com equipamentos modernos e um atendimento próximo, entregamos roupa limpa, cuidada e pronta no tempo
              certo.
            </p>

            <div className="about-points">
              <article>
                <h3>Espaço moderno e funcional</h3>
                <p>Zona organizada para lavagem, secagem e atendimento com foco em conforto e rapidez.</p>
              </article>
              <article>
                <h3>Tecnologia e cuidado</h3>
                <p>Programas adequados para cada tipo de tecido, preservando qualidade, cor e durabilidade.</p>
              </article>
              <article>
                <h3>Qualidade e confiança</h3>
                <p>Compromisso diário com higiene, pontualidade e um resultado final premium.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="google-reviews section">
          <div className="reviews-head">
            <h2>Avaliações no Google</h2>
          </div>

          <div className="reviews-loop">
            <div className="reviews-ring">
              {googleReviews.map((review, index) => {
                const len = googleReviews.length;
                let rel = index - currentReview;
                if (rel > len / 2) rel -= len;
                if (rel < -len / 2) rel += len;
                const clamped = Math.max(-2, Math.min(2, rel));
                const scale = clamped === 0 ? 1.08 : 0.92 - Math.abs(clamped) * 0.08;
                const y = 16 + Math.abs(clamped) * 8;
                const rotate = clamped * -8;
                const x = clamped * 140;
                const opacity = Math.abs(clamped) > 2 ? 0 : 1;

                return (
                  <article
                    key={review.name}
                    className={`review-orbit-card ${clamped === 0 ? "active" : ""}`}
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
                      zIndex: 20 - Math.abs(clamped),
                      opacity
                    }}
                  >
                    <div className="review-stars">★★★★★</div>
                    <h3>{review.name}</h3>
                    <p>{review.text}</p>
                    <span>{review.when}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-highlight">
          <div className="contact-highlight-inner">
            <article className="contact-feature-card">
              <h2>Informações </h2>

              

              <div className="feature-block">
                <span className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="feature-icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
                  </svg>
                </span>
                <h3>Contactos</h3>
                <p>+351 960 044 919</p>
                <p>(Chamada para rede móvel nacional)</p>
              </div>

              <div className="feature-block">
                <span className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="feature-icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
                    <path d="m3 7 9 7 9-7" />
                  </svg>
                </span>
                <h3>Endereço de Email</h3>
                <p>roupalimpa.lavandaria@gmail.com</p>
              </div>

               <div className="feature-block">
                <span className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="feature-icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <h3>Morada</h3>
                <p>Rua das Quintas 42A, Caparica</p>
              </div>



             
            </article>

            <article className="contact-map-panel">
              <h3>Localização</h3>
              <iframe
                title="Mapa da Lavandaria"
                src={MAPS_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href="https://share.google/wA7Lx76QcwCBwLcPo" target="_blank" rel="noreferrer">
                Abrir no Google Maps
              </a>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

