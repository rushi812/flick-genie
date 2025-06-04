import { useSelector } from "react-redux";

import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="flex justify-center pt-[8%]">
      <form className="w-1/2 p-3 bg-black rounded-md grid grid-cols-12 gap-3">
        <input
          type="text"
          className="p-3 col-span-9 rounded-sm"
          placeholder={lang[language].inputPlaceHolder}
        />
        <div className="col-span-3">
          <button
            className="w-full p-3 text-center bg-red-600 hover:bg-red-700 text-white rounded-sm"
            onClick={() => {}}
          >
            {lang[language].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;
