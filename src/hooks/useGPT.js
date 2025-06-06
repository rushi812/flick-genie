import { useDispatch } from "react-redux";

import { addGPTMoviesResult } from "../store/gptSlice";
import { API_OPTIONS } from "../utils/constants";
import { generateContent } from "../utils/gemini";

const useGPT = (searchText) => {
  const dispatch = useDispatch();

  const searchMovies = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery = `Act as a Movie Recommendation system and suggest movies for the query: ${searchText.current.value}. Only give me names of 10 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Hum Sath Sath Hain`;

    const response = await generateContent(gptQuery);
    const moviesList = JSON.parse(response.text)?.[0]?.movies;
    const promiseArray = moviesList?.map((movie) => searchMovies(movie));
    const tmdbResults = await Promise.all(promiseArray);

    if (tmdbResults?.length) {
      dispatch(
        addGPTMoviesResult({
          movieNames: moviesList,
          movieResults: tmdbResults,
        }),
      );
    }
  };

  return { handleGPTSearchClick };
};

export default useGPT;
