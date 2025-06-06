import { useRef } from "react";
import { useSelector } from "react-redux";

import useGPT from "../hooks/useGPT";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const searchTextRef = useRef(null);
  const language = useSelector((store) => store.config.language);
  const { handleGPTSearchClick } = useGPT(searchTextRef);

  return (
    <div className="flex justify-center">
      <form
        className="w-full md:w-1/2 p-3 bg-black rounded-md grid grid-cols-12 gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTextRef}
          type="text"
          className="p-3 col-span-9 rounded-sm"
          placeholder={lang[language].inputPlaceHolder}
        />
        <div className="col-span-3">
          <button
            className="w-full p-3 text-center bg-red-600 hover:bg-red-700 text-white rounded-sm"
            onClick={handleGPTSearchClick}
          >
            {lang[language].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;
