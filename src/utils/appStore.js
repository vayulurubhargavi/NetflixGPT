import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

// Create a Redux store holding the state of your app
// Its API is { subscribe, dispatch, getState }.
// You can use the Redux DevTools extension to view the state of your app
// and track changes to it in the Redux DevTools.
// The store is created with the configureStore function from Redux Toolkit.
// The configureStore function takes a configuration object as an argument.
// The configuration object should have a reducer key that holds the root reducer.
// The root reducer is a function that combines all the reducers in your app.
const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
