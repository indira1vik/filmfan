import React from "react";

export const SearchBar = (props) => {
  return (
    <>
      <div className="searchengine">
        <div className="container px-2 brand">FilmFans</div>
        <div className="container px-2 tag">Discover any movie, TV show, or series for every feeling you love.</div>
        <form
          className="text-center container my-5"
          onSubmit={props.submitHandler}
        >
          <div>
            <input
              className="form-control searchbar"
              type="text"
              placeholder="Search Movies, Series and Shows"
              aria-label="default input example"
              value={props.findmovie}
              onChange={props.searchChangehandler}
            />
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="btn btn-primary px-5 mx-2 my-2 submitbtn"
            >
              Search
            </button>
            <button
              type="button"
              onClick={props.clearIt}
              className="btn btn-outline-info px-5 mx-2 my-2"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
