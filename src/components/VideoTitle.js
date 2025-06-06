import Info from "../icons/Info";
import Play from "../icons/Play";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 w-screen aspect-video bg-gradient-to-r from-black">
      <div className="absolute bottom-[35%] left-[4%] w-[36%] flex flex-col justify-end">
        <h1 className="text-[3.5vw] md:text-[2.5vw] font-bold my-[1vw] text-white">
          {title}
        </h1>
        <p className="text-[1.5vw] md:text-[1.2vw] text-white">{overview}</p>
        <div className="flex items-center gap-2 mt-[1.5vw]">
          <button className="py-1 px-4 md:py-2 md:px-7 bg-white text-black text-[2vw] md:text-[1.2vw] font-medium rounded hover:bg-opacity-80">
            <div className="flex items-center gap-1">
              <Play className="size-4" />
              <span>Play</span>
            </div>
          </button>
          <button className="py-1 px-4 md:py-2 md:px-7 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-50 text-[2vw] md:text-[1.2vw] font-medium rounded">
            <div className="flex items-center gap-1">
              <Info className="size-4" />
              <span className="whitespace-nowrap">More Info</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
