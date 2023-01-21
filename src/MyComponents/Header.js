import React from "react";
import logo from "../movie.png";
import "../App.css";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid cont">
          <a className="navbar-brand cont" href="/#">
            <img
              src={logo}
              alt=""
              width="48"
              height="48"
              className="d-inline-block align-text-middle mx-3"
            />
            FilmFans
          </a>
        </div>
      </nav>
    </>
  );
}
