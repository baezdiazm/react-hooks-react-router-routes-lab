import React from "react";
import { movies } from "../data";

const allMovies = movies.map((movie)=> {
  return (
    <div key={movie.title}>
      <h3 >{movie.title}</h3>
      Duration: {movie.time} mins
      <ul key={movie.time}>{
          movie.genres.map((gen)=> {
            return <li key={gen}>{gen}</li>
          })
        }
      </ul>
    </div>
  )
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  )
}

export default Movies;
