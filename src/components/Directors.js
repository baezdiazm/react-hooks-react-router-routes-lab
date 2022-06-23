import React from "react";
import { directors } from "../data";

const allDirectors = directors.map((director)=>{
  return (
    <div key={director.name}>
      <h3 >{director.name}</h3>
      <h4>Movies</h4>
      {
        director.movies.map((movie)=>{
          return <li key={movie}>{movie}</li>
        })
      }
    </div>
  )
})

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  )
}

export default Directors;
