import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addTopRatedMovies } from "../store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS,
    );
    const res = await data.json();
    dispatch(addTopRatedMovies(res.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useTopRatedMovies;
