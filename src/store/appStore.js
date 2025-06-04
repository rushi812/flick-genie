import gptReducer from "./gptSlice";
import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
