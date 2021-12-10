import React from "react";
import { directors } from "../data";

function Directors() {

  const displayDirector = directors.map((director) => (
    <div key={director.name}>
      {director.name}
      {director.movies.map((movie) => (
        <ul key={movie}>
          <li>{movie}</li>
        </ul>
      ))}
    </div>

  ))


  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirector}
    </div>
  )
}

export default Directors;
