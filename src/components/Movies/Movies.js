import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies({cards}) {
  /* function Movies({
  moviesCards,
  usersMoviesCards,
  countCards,
  onIncCountOfCards,
  onSaveMovieCard,
  onDeleteMovieCard,
  onChangeFilters,
}) { */
  return (
    <section className="movies">
          <SearchForm/>
      <MoviesCardList cards={cards}/>
      {cards.length>12 && <button className="movies__more">Ещё</button>}
    </section>
   /* <section className="movies">
     <SearchForm
        onChangeFilters={onChangeFilters}/>
      <MoviesCardList
        moviesCards={moviesCards}
        usersMoviesCards={usersMoviesCards}
        countCards={countCards}
        onSaveMovieCard={onSaveMovieCard}
        onDeleteMovieCard={onDeleteMovieCard}/>
      {((moviesCards && moviesCards.length) || 0) > countCards &&
      <button className="movies__more" onClick={onIncCountOfCards}>Ещё</button>}
    </section> */
  );
}

export default Movies;
