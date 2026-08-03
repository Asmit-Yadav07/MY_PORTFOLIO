import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Download01Icon,
  CoPresentIcon,
  Location04Icon,
  WorkIcon,
  CheckmarkBadge03Icon,
  AiMail02Icon,
  ArrowExpandDiagonal01Icon,
} from "@hugeicons/core-free-icons";

function Section2() {
  const infoItems = [
    { icon: CoPresentIcon, label: "Name", value: "Asmit" },
    { icon: Location04Icon, label: "Location", value: "India" },
    { icon: WorkIcon, label: "Experience", value: "1.5+ yr of Coding" },
    {
      icon: CheckmarkBadge03Icon,
      label: "Availability",
      value: "Open To Work",
    },
    { icon: AiMail02Icon, label: "Email", value: "asmityadav2410@gmail.com" },
    { icon: ArrowExpandDiagonal01Icon, label: "Freelance", value: "Available" },
  ];

  return (
    <div className="min-h-[50vh] px-8 lg:px-20 py-12 flex flex-col xl:flex-row items-center justify-between gap-10">
      {/* LEFT COLUMN: Header, Story Card & Download Button */}
      <div className="flex-1 max-w-full xl:max-w-[55vw]">
        <div className="text-[#E0F2FE] font-serif drop-shadow-[0_0_10px_rgba(224,242,254,0.7)]">
          <p className="text-[2vw] font-bold text-[#39D9FF]">01</p>
          <p className="text-[3vw] font-bold tracking-tight bg-gradient-to-r from-white via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </p>
          <p className="font-['Orbitron',sans-serif] text-[18px] lg:text-[20px] font-bold tracking-widest text-[#39D9FF] mt-1">
            Full Stack MERN Developer | UI/UX Enthusiast
          </p>

          {/* Story Card */}
          <div className="border border-[#4c3cff]/40 bg-[#050816]/60 backdrop-blur-md p-6 rounded-3xl my-6 shadow-[0_0_25px_rgba(76,60,255,0.2)] space-y-4">
            <p className="text-slate-100 leading-relaxed font-sans text-base">
              I'm Asmit Yadav, a Full Stack MERN Developer who treats backend
              architecture like an engineering discipline, not an afterthought.
              Currently pursuing my B.Tech in CSE at VIT Bhopal (CGPA: 9.28/10),
              I build scalable systems — from JWT-secured RESTful APIs to
              modular MVC architectures using Node.js, Express.js, MongoDB, and
              React.js. At Cosmic365, I cut page load times by 30% and boosted
              server response speed by 40%, and I've since applied that same
              rigor to independent builds like a streaming platform, a
              URL-analytics API, and an e-commerce backend. I design for
              security, optimize for scale, and build things meant to last.
            </p>
            <p className="text-[16px] lg:text-[18px] text-[#39D9FF] font-sans font-semibold">
              Currently open to opportunities where I can build systems that
              matter.
            </p>
          </div>
        </div>

        {/* Download Resume Button */}
        <button
          type="button"
          className="flex h-14 w-60 rounded-3xl items-center justify-between px-5
              border border-purple-500/50 bg-[#050816]/70 backdrop-blur-md
              font-semibold text-sm tracking-wider
              shadow-[0_0_10px_rgba(192,132,252,0.3),inset_0_0_15px_rgba(192,132,252,0.1)]
              hover:shadow-[0_0_20px_rgba(192,132,252,0.6),inset_0_0_20px_rgba(192,132,252,0.25)]
              hover:border-purple-400 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <div className="flex gap-1.5 font-bold">
            <span className="text-[#39D9FF]">Download Resume</span>
          </div>
          <div className="flex items-center justify-center p-2 rounded-xl bg-[#050816]/80 border border-[#4c3cff]/40 shadow-[0_0_15px_rgba(76,60,255,0.3)] group-hover:border-purple-400/60 transition-colors">
            <HugeiconsIcon
              icon={Download01Icon}
              size={18}
              color="#ffffff"
              strokeWidth={2}
            />
          </div>
        </button>
      </div>

      {/* RIGHT COLUMN: Glassmorphic Quick Info Grid */}
      <div className="w-full xl:w-auto border border-[#4c3cff]/40 bg-[#050816]/70 backdrop-blur-md p-6 rounded-3xl shadow-[0_0_30px_rgba(76,60,255,0.2)] mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {infoItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center p-2.5 rounded-xl bg-[#050816]/90 border border-[#4c3cff]/50 shadow-[0_0_15px_rgba(76,60,255,0.3)] shrink-0">
                <HugeiconsIcon
                  icon={item.icon}
                  size={20}
                  color="#39D9FF"
                  strokeWidth={1.8}
                />
              </div>
              <div className="text-white min-w-0">
                <p className="text-gray-400 text-xs font-sans tracking-wide uppercase">
                  {item.label}
                </p>
                <p className="font-bold text-sm font-sans text-slate-100 truncate">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
