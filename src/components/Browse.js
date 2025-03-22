import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
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
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
