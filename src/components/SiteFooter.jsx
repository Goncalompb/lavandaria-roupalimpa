import React from "react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="footer-col footer-brand">
          <img src="/LogoLavandaria.png" alt="Lavandaria Roupa Limpa" />
          <p>No centro da cidade, cuidamos da sua roupa com qualidade, rapidez e confian&ccedil;a.</p>
          <span className="footer-badge">Livro de Reclama&ccedil;&otilde;es</span>
        </div>

        <div className="footer-col">
          <h3>Tratamentos</h3>
          <ul>
            <li>Lavagem Di&aacute;ria</li>
            <li>Secagem</li>
            <li>Engomadoria</li>
            <li>Dobragem Profissional</li>
            <li>Higieniza&ccedil;&atilde;o</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Especialidades</h3>
          <ul>
            <li>Edred&otilde;es</li>
            <li>Cortinas</li>
            <li>Roupas Delicadas</li>
            <li>T&ecirc;xtil de Alojamento Local</li>
            <li>Servi&ccedil;o Empresarial</li>
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <nav>
          <a href="#">Lavagem</a>
          <a href="#">Especialidades</a>
          <a href="#">Recolha</a>
          <a href="#">Acordos</a>
        </nav>
        <p>Copyright 2026 Lavandaria Roupa Limpa - Todos os direitos reservados</p>
        <p>Assinado por Gonçalo Miguel Pacífico Barradas em 08/03/2026</p>
      </div>
    </footer>
  );
}
