import React from "react";
import { NavLink } from "react-router-dom";

const styling = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to={"Home"} style={styling} activeStyle={{background: "darkblue",}}>Home</NavLink>
      <NavLink to={"Movies"} style={styling} activeStyle={{background: "darkblue",}}>Movies</NavLink>
      <NavLink to={"Directors"} style={styling} activeStyle={{background: "darkblue",}}>Directors</NavLink>
      <NavLink to={"Actors"} style={styling} activeStyle={{background: "darkblue",}}>Actors</NavLink>
    </div>
  )
}

export default NavBar;
