import React from "react";
import { useSelector } from "react-redux";
import lang_constants from "../utils/languageConstants";

const GptSearchBar = () => {
  const configStore = useSelector((store) => store.config);
  const languageSelected = configStore?.lang;

  return (
    <div className="flex justify-center pt-[10%]">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          // placeholder="What would you like to watch today?"
          placeholder={lang_constants[languageSelected]?.gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          type="submit"
          className="bg-red-700 m-4 px-4 py-2 text-white rounded-lg col-span-3"
        >
          {lang_constants[languageSelected]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
