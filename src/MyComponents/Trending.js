import React from "react";
import trend from '../Trend.json'

export const Trending = () => {
  return (
    <>
      <div className="boxcontain">
        <h3 className="container px-0">Latest & Trending</h3>
        <div className="container scrolling-wrapper mb-5 p-0">
          {trend &&
            trend.map((movie,index) => (
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
