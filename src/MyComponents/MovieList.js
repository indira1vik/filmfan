import React from "react";
import "../App.css";

export const MovieList = (props) => {
  return (
    <>
      <div className="container my-5">
        {props.movies &&
          props.movies.map((movie, index) => (
            <div className="onecard" key={index}>
              <div>
                <img
                  className="eachimage"
                  src={movie.Poster}
                  alt="Movie/Series Poster Not Available"
                />
              </div>
              <div className="p-4">
                <h4>{movie.Title}</h4>
                <div>Type : {movie.Type.toUpperCase()}</div>
                <div>Year : {movie.Year}</div>
                <button
                  type="button"
                  onClick={() => props.handleFavclick(movie)}
                  className="btn btn-outline-primary mt-4"
                >
                  Add to Watchlist
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
