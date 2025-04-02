import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-36  pr-4 h-48 ">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movie-card"
        className="w-full h-full object-fit"
      />
    </div>
  );
};

export default MovieCard;
