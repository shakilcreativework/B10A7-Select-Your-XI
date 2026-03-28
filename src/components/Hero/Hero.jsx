import React from "react";

const Hero = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center gap-3 px-4 py-10 rounded-2xl mt-10 mb-20 relative overflow-hidden">
      <img
        className="absolute bottom-0 left-0 object-cover select-none pointer-events-none"
        src="https://i.ibb.co.com/CsXz0fCW/blur1.png"
        alt=""
      />
      <img
        className="absolute top-0 right-0 object-cover select-none pointer-events-none"
        src="https://i.ibb.co.com/XZyVD9sM/blur2.png"
        alt=""
      />
      <img src="https://i.ibb.co.com/FLn9PVxQ/banner-main.png" alt="" />
      <h1 className="font-bold text-[30px] md:text-[32px] lg:text-[40px] text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-white/70 text-base md:text-2xl mb-2">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="border border-[#E7FE29] size-fit p-2 rounded-xl">
        <button
          className={`py-2 px-5 rounded-xl transition-all bg-[#E7FE29] font-semibold `}
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Hero;
