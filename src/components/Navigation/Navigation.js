import "./Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";
import ProfileIcon from "../../images/profile.svg";

function Navigation({ openNavigation, onCloseNavigation }) {
  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onCloseNavigation();
    }
  };
  return (
    <div
      className={`navigation ${openNavigation && "navigation_opened"}`}
      onClick={handleClickOverlay}>
      <ul
        className={`navigation__list ${openNavigation && "navigation__list_opened"}`}>
        <li
          className="navigation__item navigation__item_visible-in-bar"
          onClick={onCloseNavigation}>
          <NavLink className="navigation__link"
                   activeClassName="navigation__link_active"
                   exact
                   to={"/"}>Главная</NavLink>
        </li>
        <li onClick={onCloseNavigation}>
          <NavLink className="navigation__link"
                   activeClassName="navigation__link_active"
                   to={"/movies"}>Фильмы</NavLink>
        </li>
        <li onClick={onCloseNavigation}>
          <NavLink className="navigation__link"
                   activeClassName="navigation__link_active"
                   to={"/saved-movies"}>Сохраненные фильмы</NavLink>
        </li>
        <li
          className="navigation__item navigation__item_type_profile"
          onClick={onCloseNavigation}>
          <NavLink className="navigation__link navigation__link_type_profile" to="/profile">
            Аккаунт
            <img src={ProfileIcon} alt="Переход к профилю."/>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;