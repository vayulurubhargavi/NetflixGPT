import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  // fetch the data from the TMDB API and store it in the redux store
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results, "popular movies");
    // add the moviedata to the store
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
