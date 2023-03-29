import stickerImg from "../assets/images/sticker_21.png";
import { BsDownload } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
function HeroSection() {
  return (
    <div className="relative aspect-video w-full md:aspect-auto md:pb-16">
      {/* background */}
      <div className="absolute w-full h-full bg-gradient-to-br from-red-300 to-indigo-300 dark:from-indigo-800 dark:to-red-800 blur-sm -z-10"></div>
      <div className="z-10 max-w-6xl m-auto p-5 sm:pl-16 space-y-2 sm:pt-16 md:space-y-8 md:p-24 lg:pt-[15%] text-white">
        <p className="text-xl flex items-center gap-2 sm:text-3xl lg:text-5xl">
          Selam <MdWavingHand className="text-yellow-400" />
        </p>
        <h1 className="text-white text-2xl sm:text-5xl lg:text-7xl">
          I'm Sisay <span className="text-red-500"> Driba</span>
        </h1>
        <p className="w-3/4 italic sm:text-lg lg:text-2xl">
          A passionate web developer with years of experience.
        </p>
        <br />
        <a
          href="#"
          className="w-fit flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg sm:text-xl sm:px-7 sm:py-3 lg:text-3xl"
        >
          Resume
          <BsDownload />
        </a>
      </div>
      <img
        className="absolute right-1 top-5 w-32 sm:w-1/4 md:top-10 md:right-16"
        src={stickerImg}
        alt=""
      />
    </div>
  );
}

export default HeroSection;
