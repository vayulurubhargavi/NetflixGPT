import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchingMovieTrailerVideo = (movieId) => {
  const dispatch = useDispatch(); //disptaching an action to the store to save the trailer

  // fetch the trailer of the movie using movie id with the videoAPIfrom TMDB
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results, "video data");

    // filter the trailer from the video data
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    ); //there are 3 trailers
    const trailer = filteredData.length ? filteredData[1] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    // console.log(trailer, "trailer");
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useFetchingMovieTrailerVideo;
