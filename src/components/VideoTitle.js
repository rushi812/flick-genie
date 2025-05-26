const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 w-screen aspect-video bg-gradient-to-r from-black">
      <div className="absolute bottom-[35%] left-[4%] w-[36%] flex flex-col justify-end">
        <h1 className="text-[2.5vw] font-bold my-[1vw] text-white">{title}</h1>
        <p className="text-[1.2vw] text-white">{overview}</p>
        <div className="flex items-center gap-2 mt-[1.5vw]">
          <button className="py-2 px-7 bg-white text-black text-[1.2vw] font-medium rounded hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="py-2 px-7 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-50 text-[1.2vw] font-medium rounded">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
