import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang_constants from "../utils/languageConstants";
import client from "../utils/geminiAI";
import model from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const configStore = useSelector((store) => store.config),
    languageSelected = configStore?.lang,
    searchText = useRef(null),
    dispatch = useDispatch();

  const handleFormSubmit = (e) => {
      e.preventDefault();
    },
    searchMovieTMBD = async (movie) => {
      const movieData = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await movieData.json();
      // console.log(json.results);
      return json.results;
    },
    handleSearchGPT = async () => {
      // console.log(searchText.current.value);
      const prompt =
        "act as a movie recommendation system and suggest some movies for the query:" +
        searchText.current.value +
        ". Give me names of 15 movies comma separated .like this example given ahead :  Gadar ,Sholay,Koi Mil Gaya,Sanam Re,Aashiqui 2.No unnecessary spaces, and unnecessary text rather than the movie names.";
      const GPTResults = await model.generateContent(prompt);
      const GPTResultsArray = GPTResults.response.text().split(",");
      console.log(GPTResultsArray); //ARRAY OF MOVIE NAMES

      // for each movie in the array, call the TMDB movie details API to get the movie details
      const movieResults = GPTResultsArray.map((movie) =>
        searchMovieTMBD(movie)
      );
      // (15) [Promise, Promise, Promise]--promises are returned
      // console.log(movieResults);
      const TMDBResults = await Promise.all(movieResults);
      console.log(TMDBResults); //ARRAY OF each  MOVIE DETAILS
      dispatch(
        addGPTMovies({ movieNames: GPTResultsArray, movieResults: TMDBResults })
      );
    };

  return (
    <div className="flex justify-center pt-[10%]">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          ref={searchText}
          // placeholder="What would you like to watch today?"
          placeholder={lang_constants[languageSelected]?.gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          type="submit"
          className="bg-red-700 m-4 px-4 py-2 text-white rounded-lg col-span-3"
          onClick={handleSearchGPT}
        >
          {lang_constants[languageSelected]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
