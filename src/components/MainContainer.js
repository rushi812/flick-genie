import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.featuredMovie);
  if (!movie) return null;

  return <VideoBackground movie={movie} />;
};

export default MainContainer;
