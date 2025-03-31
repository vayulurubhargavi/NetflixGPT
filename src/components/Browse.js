import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearchBarView = useSelector(
    (store) => store.gpt.showGptSearchView
  );
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  // const {nowPlayingMovies}  = useNowPlayingMovies();
  // console.log(nowPlayingMovies, "--nowPlayingMovies");

  return (
    <div>
      <Header />

      {/* 
     maincontainer
      -video background
      -video title
    secondary container
      -movielist*n
      -moviecards*n     
     */}
      {showGptSearchBarView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
