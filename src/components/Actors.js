import React from "react";
import { actors } from "../data";

const allActors = actors.map((actor)=> {
  return (
    <div key={actor.name}>
      <h3 >{actor.name}</h3>
    {
      actor.movies.map((movie)=>{
        return (
          <li key={movie}>{movie}</li>
          )
        })
      }
      </div>
  )
})

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  )
}

export default Actors;
