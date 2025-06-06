import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  const renderEmpty = () => (
    <div>
      <h1>Please enter a Search Text to get the movies suggestions.</h1>
    </div>
  );

  const renderSuggestedMovies = () => {
    if (!movieNames?.length) return null;
    return (
      <div className="flex flex-col gap-[3vw]">
        {movieNames?.map((name, index) => {
          if (!movieResults[index]) return null;
          return (
            <MovieList
              key={name}
              title={name}
              movies={movieResults[index]}
              className="pl-0"
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-5 bg-black bg-opacity-85 text-white w-full md:w-[90%] h-[calc(100vh-13.62rem)] md:h-[calc(100vh-11.62rem)] overflow-scroll m-auto rounded-md">
      {!movieNames?.length ? renderEmpty() : renderSuggestedMovies()}
    </div>
  );
};

export default GPTMovieSuggestions;
