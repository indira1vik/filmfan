import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import { SearchBar } from "./MyComponents/SearchBar";
import { useState, useEffect } from "react";
import { MovieList } from "./MyComponents/MovieList.js";
import { Trending } from "./MyComponents/Trending";
import { WatchList } from "./MyComponents/WatchList";
import { Genre } from "./MyComponents/Genre";
import { Bolly } from "./MyComponents/Bolly";
import trend from "./Trend.json";

function App() {
  const [findmovie, setFindmovie] = useState("");
  const [onlysubmit, setOnlysubmit] = useState("");
  const [movieslist, setMovieslist] = useState([]);
  const [favlist, setFavlist] = useState([{}]);

  const getMovieRequest = async (findmovie) => {
    const url = `https://www.omdbapi.com/?s=${findmovie}&apikey=73d3e819`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovieslist(responseJson.Search);
      setFindmovie("");
    }
  };

  useEffect(() => {
    getMovieRequest(onlysubmit);
  }, [onlysubmit]);

  useEffect(() => {
    const movFav = JSON.parse(localStorage.getItem("FilmFans-Fav"));
    setFavlist(movFav);
  }, []);

  const saveTolocal = (items) => {
    localStorage.setItem("FilmFans-Fav", JSON.stringify(items));
  };

  const searchChangehandler = (e) => {
    setFindmovie(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setOnlysubmit(findmovie);
  };

  const addFav = (movie) => {
    const newlist = { ...favlist, movie };
    console.log(favlist);
    setFavlist(newlist);
    saveTolocal(newlist);
  };

  //error here

  const clearList = () => {
    setMovieslist([]);
  };

  const removeFav = (movie) => {
    const newList = favlist.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavlist(newList);
    saveTolocal(newList);
  };

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Header />

      <SearchBar
        findmovie={findmovie}
        searchChangehandler={searchChangehandler}
        submitHandler={submitHandler}
        clearIt={clearList}
      />

      <MovieList movies={movieslist} handleFavclick={addFav} />
      <Trending />
      <div className="text-center mb-5">
        <button
          type="button"
          id="myBtn"
          className="btn btn-dark px-4"
          onClick={topFunction}
        >
          Top
        </button>
      </div>
      {/* <WatchList favlist={favlist} removeIt={removeFav} /> */}
      <Genre />
      <Bolly />
      <Footer />
    </>
  );
}

export default App;
