import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, imagePath }) => {
  return (
    <div className="w-44 rounded overflow-hidden">
      <img src={`${IMG_CDN_URL}/${imagePath}`} alt={title} />
    </div>
  );
};

export default MovieCard;
