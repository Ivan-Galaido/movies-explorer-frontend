import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards }) {
  const countCards = window.screen.width > 768 ? 12 : window.screen.width > 400 ? 8 : 5;
  const cardElements = cards.slice(0,countCards).map((item) => <li key={item.id}><MoviesCard data={item}/></li>);
  return (
    <ul className="cards">
      {cardElements}
    </ul>
  );

/*function MoviesCardList({ moviesCards = [], usersMoviesCards, countCards, onSaveMovieCard, onDeleteMovieCard }) {
  const cardElements = moviesCards.slice(0, Math.min(moviesCards.length, countCards))
    .map((item) => (
      <li key={item.movieId}>
        <MoviesCard
          data={item}
          saved={usersMoviesCards.some(usersItem => usersItem.movieId === item.movieId)}
          onSaveMovieCard={onSaveMovieCard}
          onDeleteMovieCard={onDeleteMovieCard}/>
      </li>
    ));
  return ((moviesCards && moviesCards.length) || 0) > 0
         ? <ul className="cards">{cardElements}</ul>
         : <p className="cards__not-found">Ничего не найдено</p>;*/

}

export default MoviesCardList;
