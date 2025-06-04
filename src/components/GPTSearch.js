import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div className="h-full w-full">
      <div className="absolute h-full w-full -z-10">
        <img
          src={BG_URL}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
