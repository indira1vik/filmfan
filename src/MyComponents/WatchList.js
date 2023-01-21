import React from "react";

export const WatchList = (props) => {
  return (
    <>
      <div className="boxcontain">
        <h3 className="container px-0">Your Watchlist</h3>
        <div className="container scrolling-wrapper mb-5 p-0">
          {props.fav &&
            props.fav.map((movie, index) => (
              <div className="card" key={index}>
                <img
                  className="eachimage1"
                  src={movie.Poster}
                  alt="Movie/Series Poster Not Available"
                />
                <div className="text-center p-0">
                  <button
                    type="button"
                    onClick={() => props.removeIt(movie)}
                    className="btn btn-outline-danger mb-3"
                  >
                    Watched it
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
