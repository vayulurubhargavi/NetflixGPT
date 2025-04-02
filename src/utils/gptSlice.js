import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
    gptMovies: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, payload) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addGPTMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;
