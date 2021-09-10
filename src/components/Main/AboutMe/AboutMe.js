import React from "react";
import Avatar from "../../../images/avatar.jpg";
import "./AboutMe.css";

function AboutMe() {
  const currentDate = new Date();
  return (
    <section className="about-me main__section main__section_ph_small main__section_pv_big">
      <h2 className="about-me__title main__section-title main__section-title_mb_small">Студент</h2>
      <p className="about-me__name">Иван</p>
      <p className="about-me__profession">Фронтенд-разработчик, {currentDate.getFullYear() - 1998} лет</p>
      <p className="about-me__description">
        Я родился и живу в Санкт-Петербурге. Интерес в web-програмировании появился в 10 классе на уроках информатики. Мой первый сайт занял первое место 
        среди однокласников и был отправлен на районные соревнования, где занял 15 место.
        
       </p>
      <ul className="about-me__links">
        <li>
          <a href="https://vk.com/enotik98" target="_blank" className="about-me__link">ВКонтакте</a>
        </li>
        <li>
          <a href="https://github.com/Ivan-Galaido" target="_blank" className="about-me__link">GitHub</a>
        </li>
      </ul>
      <img src={Avatar} alt="Фотография создателя." className="about-me__avatar"/>
    </section>
  );
}

export default AboutMe;
