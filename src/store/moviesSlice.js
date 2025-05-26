import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    featuredMovie: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      state.featuredMovie = action.payload[0];
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
