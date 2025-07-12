import React from "react";
import bannerimg from "../../assets/bg-shadow.png";
import cricimg from "../../assets/banner-main.png";
// import { banner } from '../../assets/bg-shadow.png';
const Banner = ({ handleAddBalance }) => {
  return (
    <>
      <div className="bannerContainer relative bg-black">
        <img src={bannerimg} alt="" />
        <div className="flex flex-col items-center absolute inset-0 justify-center ">
          <img className="h-60 w-52" src={cricimg} alt="" />
          <p className="font-bold inter-f text-[40px] text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </p>
          <p className="tagname text-2xl text-white opacity-70 sora-f">
            Beyond Boundaries Beyond Limits
          </p>

          <button
            type="button"
            className="text-gray-900 
            bg-gradient-to-r 
                from-teal-200 
                to-lime-200 
            hover:bg-gradient-to-l 
                hover:from-teal-200 
                hover:to-lime-200 
            focus:ring-4 
                focus:outline-none 
                focus:ring-lime-300 
                dark:focus:ring-teal-700 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleAddBalance}
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
