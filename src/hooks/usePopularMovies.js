import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addPopularMovies(res.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default usePopularMovies;
