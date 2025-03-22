import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-base py-6 w-1/2">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-lg  p-4 px-10 border rounded bg-opacity-80 hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white text-lg  p-4 px-10 border rounded bg-opacity-50 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
