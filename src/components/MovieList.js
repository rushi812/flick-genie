import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, className }) => {
  return (
    <div className={className}>
      <h1 className="text-white mb-3 text-lg md:text-2xl font-medium">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies?.map((movie) => {
            if (!movie.poster_path) return null;
            return (
              <MovieCard
                key={movie.id}
                title={movie.original_title}
                imagePath={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
