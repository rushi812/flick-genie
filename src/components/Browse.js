import { useSelector } from "react-redux";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/0e916f82-036f-468a-a098-52592391d3a8/null/IN-en-20240902-POP_SIGNUP_TWO_WEEKS-perspective_a8d5d4ae-15d5-4414-b272-b12d2fce75cd_medium.jpg')] bg-cover bg-center">
      <Header />
      {showGPTSearch ? (
        <div className="mt-3">
          <GPTSearch />
        </div>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
