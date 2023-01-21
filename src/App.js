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

function App() {
  const [findmovie, setFindmovie] = useState("");
  const [onlysubmit, setOnlysubmit] = useState("");
  const [movieslist, setMovieslist] = useState([]);
  const [fav, setFav] = useState([]);

  const getMovieRequest = async (findmovie) => {
    const url = `https://www.omdbapi.com/?s=${findmovie}&apikey=73d3e819`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      console.log(responseJson.Search);
      setMovieslist(responseJson.Search);
      setFindmovie("");
    }
  };

  useEffect(() => {
    getMovieRequest(onlysubmit);
  }, [onlysubmit]);

  useEffect(() => {
    const movFav = JSON.parse(localStorage.getItem("FilmFans-Fav"));
    setFav(movFav);
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
    const newlist = ([...fav, movie]);
    setFav(newlist);
    saveTolocal(newlist);
  };

  const clearList = () => {
    setMovieslist([]);
  };

  const removeFav = (movie) => {
    const newList = fav.filter((favorite) => favorite.imdbID !== movie.imdbID);
    setFav(newList);
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
      <button type="button" id="myBtn" className="btn btn-dark px-4" onClick={topFunction}>
        Top
      </button>
      </div>
      <WatchList fav={fav} removeIt={removeFav} />
      <Genre />
      <Bolly />
      <Footer />
    </>
  );
}

export default App;
