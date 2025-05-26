import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-[4%]">
      <h1 className="text-white mb-3 text-xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              imagePath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
