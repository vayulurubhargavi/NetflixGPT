import React from "react";
import { useSelector } from "react-redux";
import useFetchingMovieTrailerVideo from "../hooks/useFetchingMovieTrailerVideo";

const VideoBackground = ({ movieId }) => {
  // const [trailer, setTrailer] = useState(null);--we are saving the trailer in the redux store
  // setTrailer(trailer.key);
  useFetchingMovieTrailerVideo(movieId); //fetching the trailer of the movie
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo); //getting the trailer from the store

  return (
    <div className="w-screen">
      <iframe
        // width="560"
        // height="315"
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
