import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownDoubleIcon, PlayIcon } from "@hugeicons/core-free-icons";

function Section1() {
  return (
    <div className="font-[Orbitron]  text-white relative inline-block ml-6 mt-30 ">
      <div>
        <p className="ttext-[#C084FC] font-bold tracking-wider skew-x-10  mb-5">
          Welcome To My Universe
        </p>
        <p className="text-[60px] w-110 font-bold relative skew-x-[-5deg] text-7xl  bg-linear-to-r from-white via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Crafting Digital Experiences
        </p>
      </div>
      <div>
        <p className="text-[12px] w-100 text-[#bbc6c8] font-semibold mb-8  bg-transparent  drop-shadow-[0_0_8px_#d946ef]">
          I'm Asmit,a passionate Full Stack MERN Developer and UI/UX Enthusiast
          crafting immersive digital Experiences that blend creativity and
          technology
        </p>
      </div>
      <div className="flex gap-4 items-center skew-x-[-15deg]">
        <button
          className="flex h-15 w-65   rounded-3xl items-center justify-around 
          border border-cyan-400/80
    
        font-[Orbitron] font-semibold

      shadow-[0_0_10px_#22D3EE,0_0_25px_rgba(34,211,238,0.5),inset_0_0_15px_rgba(34,211,238,0.15)]

      hover:shadow-[0_0_15px_#22D3EE,0_0_40px_rgba(34,211,238,0.7),inset_0_0_20px_rgba(34,211,238,0.25)]

    transition-all duration-300"
        >
          <div className="flex gap-2">
            <p className="text-[#39D9FF]">EXPLORE </p>
            <p>MY WORK</p>
          </div>
          <HugeiconsIcon
            icon={ArrowDownDoubleIcon}
            size={10}
            color="#ffffff"
            strokeWidth={1.5}
            className=" w-7 h-7 p-2 rounded-xl  bg-[#050816]/60 backdrop-blur-md border border-[#4c3cff]/30 shadow-[0_0_15px_rgba(76,60,255,0.25)]"
          />
        </button>
        <button
          className="flex h-11 w-55  rounded-3xl items-center justify-around  font-semibold
           shadow-[0_0_10px_#22D3EE,0_0_25px_rgba(34,211,238,0.5),inset_0_0_15px_rgba(34,211,238,0.15)]
        hover:shadow-[0_0_15px_#22D3EE,0_0_40px_rgba(34,211,238,0.7),inset_0_0_20px_rgba(34,211,238,0.25)]"
        >
          <HugeiconsIcon
            icon={PlayIcon}
            size={10}
            color="#ffffff"
            strokeWidth={1.5}
            className=" w-7 h-7 p-2 rounded-xl  bg-[#050816]/60 backdrop-blur-md border border-[#4c3cff]/30 shadow-[0_0_15px_rgba(76,60,255,0.25)]
            "
          />
          <div className="flex gap-2">
            <p className="text-[#39D9FF]">Watch </p>
            <p>ShowReel</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Section1;
