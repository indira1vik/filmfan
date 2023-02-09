import React from "react";
import "../App.css";

export const WatchList = (props) => {
  return (
    <>
      {/* <div className="boxcontain">
        <h3 className="container px-0">Your Watchlist</h3>
        <div className="container scrolling-wrapper mb-5 p-0">
          
        </div>
      </div> */}

      <div className="container my-5">
        {props.favlist &&
          props.favlist.map((movie, index) => (
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
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
