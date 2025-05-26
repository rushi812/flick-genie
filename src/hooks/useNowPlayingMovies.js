import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useNowPlayingMovies;
