import React from "react";
import { movies } from "../data";

function Movies() {

  const displayMovie = movies.map((movie) => (
    <div key={movie.title}>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))


  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovie}
    </div>

  )
}

export default Movies;
