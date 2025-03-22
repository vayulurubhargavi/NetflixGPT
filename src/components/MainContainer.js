import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  //we need to display only one movie in the background
  const movieStore = useSelector((store) => store.movies);
  const { nowPlayingMovies } = movieStore;
  // console.log(nowPlayingMovies, "nowPlayingMovies");

  if (!nowPlayingMovies) return;

  const mainMovie = nowPlayingMovies[0];
  // console.log(mainMovie, "movie");

  const { title, overview ,id} = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground  movieId={id} />
    </div>
  );
};

export default MainContainer;
