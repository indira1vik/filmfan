import React from "react";
import genre from '../Movies.json'

export const Genre = () => {
  return (
    <>
      <div className="boxcontain">
        <h3 className="container px-0">Hollywood</h3>
        <div className="container scrolling-wrapper mb-5 p-0">
          {genre &&
            genre.map((movie,index) => (
              <div className="card" key={index}>
                <img
                  className="eachimage1"
                  src={movie.Poster}
                  alt="Movie/Series Poster Not Available"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
