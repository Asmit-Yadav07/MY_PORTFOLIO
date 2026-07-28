import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownDoubleIcon, PlayIcon } from "@hugeicons/core-free-icons";

function Section1() {
  return (
    <section className="relative font-['Orbitron',sans-serif] text-white min-h-[80vh] flex flex-col justify-center px-6 lg:px-16 overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-3xl space-y-6">
        {/* Subtitle / Greeting */}
        <div>
          <p className="text-[#C084FC] font-bold tracking-widest uppercase text-sm md:text-base skew-x-12 mb-3 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
            Welcome To My Universe
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold -skew-x-6 tracking-tight bg-gradient-to-r from-white via-purple-300 to-cyan-400 bg-clip-text text-transparent leading-[1.1] mb-4">
            Crafting Digital Experiences
          </h1>
        </div>

        {/* Bio / Description */}
        <div>
          <p className="text-sm md:text-base max-w-lg text-[#bbc6c8] font-semibold leading-relaxed drop-shadow-[0_0_8px_rgba(217,70,239,0.3)]">
            I'm Asmit, a passionate Full Stack MERN Developer and UI/UX
            Enthusiast crafting immersive digital experiences that blend
            creativity and technology.
          </p>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center -skew-x-6 pt-4">
          {/* Primary CTA - Explore Work */}
          <button
            type="button"
            className="group flex h-14 w-64 rounded-3xl items-center justify-between px-5
              border border-cyan-400/80 bg-[#050816]/70 backdrop-blur-md
              font-semibold text-sm tracking-wider
              shadow-[0_0_10px_#22D3EE,0_0_25px_rgba(34,211,238,0.4),inset_0_0_15px_rgba(34,211,238,0.15)]
              hover:shadow-[0_0_20px_#22D3EE,0_0_40px_rgba(34,211,238,0.7),inset_0_0_20px_rgba(34,211,238,0.3)]
              hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <div className="flex gap-1.5 font-bold">
              <span className="text-[#39D9FF]">EXPLORE</span>
              <span>MY WORK</span>
            </div>
            <div className="flex items-center justify-center p-2 rounded-xl bg-[#050816]/80 border border-[#4c3cff]/40 shadow-[0_0_15px_rgba(76,60,255,0.3)] group-hover:border-cyan-400/60 transition-colors">
              <HugeiconsIcon
                icon={ArrowDownDoubleIcon}
                size={18}
                color="#ffffff"
                strokeWidth={2}
              />
            </div>
          </button>

          {/* Secondary CTA - Watch Showreel */}
          <button
            type="button"
            className="group flex h-14 w-56 rounded-3xl items-center justify-between px-5
              border border-purple-500/50 bg-[#050816]/70 backdrop-blur-md
              font-semibold text-sm tracking-wider
              shadow-[0_0_10px_rgba(192,132,252,0.3),inset_0_0_15px_rgba(192,132,252,0.1)]
              hover:shadow-[0_0_20px_rgba(192,132,252,0.6),inset_0_0_20px_rgba(192,132,252,0.25)]
              hover:border-purple-400 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center p-2 rounded-xl bg-[#050816]/80 border border-[#4c3cff]/40 shadow-[0_0_15px_rgba(76,60,255,0.3)] group-hover:border-purple-400/60 transition-colors">
              <HugeiconsIcon
                icon={PlayIcon}
                size={18}
                color="#ffffff"
                strokeWidth={2}
              />
            </div>
            <div className="flex gap-1.5 font-bold">
              <span className="text-[#39D9FF]">Watch</span>
              <span>ShowReel</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
