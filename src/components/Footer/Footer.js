import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__row">
        <p className="footer__date">© {(new Date()).getFullYear()}</p>
        <ul className="footer__links">
          <li><a href="https://praktikum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/Ivan-Galaido/movies-explorer-frontend" className="footer__link" target="_blank">Github</a></li>
          <li><a href="https://vk.com/enotik98" className="footer__link" target="_blank">Вконтакте</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;