import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  // fetch the data from the TMDB API and store it in the redux store
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results, "popular movies");
    // add the moviedata to the store
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
