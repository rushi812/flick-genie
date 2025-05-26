import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addUpcomingMovies(res.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useUpcomingMovies;
