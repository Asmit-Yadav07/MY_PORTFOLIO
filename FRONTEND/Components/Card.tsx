import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownDoubleIcon } from "@hugeicons/core-free-icons";

type card = {
  serialno: number;
  heading: string;
  subheading: string;
  skill: string;
};
function Card({ serialno, heading, subheading, skill }: card) {
  return (
    <>
      <div className="h-100 w-70 font-['Orbitron'] ">
        <img
          src="../public/images-3.jpeg"
          alt="images-404"
          className="absolute h-100 w-70 brightness-75"
        ></img>
        <div className="relative text-white text-3xl flex items-center justify-between">
          <p>{serialno}</p>
          <HugeiconsIcon
            icon={ArrowDownDoubleIcon}
            size={30}
            color="#ffffff"
            strokeWidth={2}
            className="p-2 rounded-xl bg-[#050816]/80 border border-[#4c3cff]/40 shadow-[0_0_15px_rgba(76,60,255,0.3)]"
          />
        </div>
        <div className="text-white relative mt-[25vh] flex flex-col items-center justify-center">
          <p className="text-[18px]">{heading}</p>
          <p className="text-[12px]">{subheading}</p>
          <button
            type="button"
            className="group flex h-10 w-30 rounded-3xl items-center justify-between px-5 justify-center
              border border-purple-500/50 bg-[#050816]/70 backdrop-blur-md
              font-semibold text-sm tracking-wider
              shadow-[0_0_10px_rgba(192,132,252,0.3),inset_0_0_15px_rgba(192,132,252,0.1)]
              hover:shadow-[0_0_20px_rgba(192,132,252,0.6),inset_0_0_20px_rgba(192,132,252,0.25)]
              hover:border-purple-400 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {skill}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
