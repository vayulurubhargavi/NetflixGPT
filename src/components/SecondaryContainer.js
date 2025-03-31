import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black" >
      <div className="-mt-28 pl-8 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList
          title={"Top-Rated Movies"}
          movies={movies?.topRatedMovies}
        />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
      {/* 
      movieList-popular movies
      moviecard*n
      movielist-top rated movies
      movielist-upcoming movies
      movielist-now playing movies
      movielist-trending movies
      --------------
      
      */}
      {/* <MovieList /> */}
    </div>
  );
};

export default SecondaryContainer;
