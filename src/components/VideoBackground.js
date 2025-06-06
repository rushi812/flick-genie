import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoTitle from "./VideoTitle";

const VideoBackground = ({ movie }) => {
  useMovieTrailer(movie?.id);
  const trailer = useSelector((store) => store?.movies?.trailer);

  return (
    <div className="relative w-screen aspect-video">
      <VideoTitle title={movie.original_title} overview={movie.overview} />
      {trailer && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}?si=bknTPjM5UvpBXBEG&autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1`}
          title={`${movie.original_title} Trailer`}
          allow="autoplay; encrypted-media;"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  );
};

export default VideoBackground;
