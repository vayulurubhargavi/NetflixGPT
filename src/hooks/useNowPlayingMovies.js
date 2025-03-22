import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

 export const useNowPlayingMovies = () => {
    
      const dispatch = useDispatch();
      // fetch the data from the TMDB API and store it in the redux store
      const nowPlayingMovieList = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results, "data");
        // add the moviedata to the store
        dispatch(addNowPlayingMovies(json.results));
        
      };
    
      useEffect(() => {
        nowPlayingMovieList();
      }, []);
}

// export default useNowPlayingMovies;