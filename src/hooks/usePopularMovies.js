import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addPopularMovies } from "../store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const res = await data.json();
    dispatch(addPopularMovies(res.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default usePopularMovies;
