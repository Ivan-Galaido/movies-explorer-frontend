import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio main__section main__section_ph_small">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://ivan-galaido.github.io/first-project/" target="_blank">
            <p className="portfolio__name">Статичный сайт</p>
            <div className="portfolio__icon">↗</div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://ivan-galaido.github.io/russian-travel/" target="_blank">
            <p className="portfolio__name">Адаптивный сайт</p>
            <div className="portfolio__icon">↗</div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://ivan-galaido.github.io/mesto/" target="_blank">
            <p className="portfolio__name">Одностроничное приложение</p>
            <div className="portfolio__icon">↗</div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
