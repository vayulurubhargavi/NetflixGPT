import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  // fetch the data from the TMDB API and store it in the redux store
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results, "popular movies");
    // add the moviedata to the store
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
