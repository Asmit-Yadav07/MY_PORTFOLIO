import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ReactIcon,
  Typescript03Icon,
  BiscuitIcon,
  DatabaseIcon,
  TailwindcssIcon,
} from "@hugeicons/core-free-icons";

function Section3() {
  const infoItems = [
    { icon: ReactIcon, skillName: "React", value: 90 },
    { icon: ReactIcon, skillName: "Node.js / Express", value: 85 },
    { icon: Typescript03Icon, skillName: "TypeScript / JavaScript", value: 90 },
    { icon: BiscuitIcon, skillName: "UI/UX Design", value: 80 },
    { icon: DatabaseIcon, skillName: "MongoDB / SQL", value: 90 },
    { icon: TailwindcssIcon, skillName: "Tailwind CSS", value: 90 },
  ];

  const skillBadges = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind",
    "Git",
    "Figma",
  ];

  return (
    <div className="w-[60vw] min-h-[60vh] p-6 text-white">
      {/* Gradient Heading */}
      <h2
        className="text-2xl font-bold font-['Orbitron',sans-serif] uppercase mb-6"
        style={{
          background:
            "linear-gradient(90deg, #00F5D4 0%, #00B8D4 35%, #9B51E0 70%, #E8A2FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 10px rgba(0, 245, 212, 0.35))",
          letterSpacing: "0.18em",
        }}
      >
        MY SKILLS
      </h2>

      {/* Progress Bars */}
      <div className="space-y-4 mb-8">
        {infoItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <HugeiconsIcon
              icon={item.icon}
              size={24}
              color="#00E5FF"
              strokeWidth={1.5}
            />
            <p className="w-52 font-medium">{item.skillName}</p>

            {/* Outer Track */}
            <div className="h-4 w-60 bg-[#0B071E] border border-[#2E1E54] rounded-full p-[2px] shadow-inner">
              {/* Inner Fill with Glow */}
              <div
                className="h-full bg-gradient-to-r from-[#6B2FD6] to-[#D896FF] rounded-full shadow-[0_0_12px_rgba(216,150,255,0.7)] transition-all duration-500 ease-out"
                style={{ width: `${item.value}%` }}
              />
            </div>

            <p className="font-semibold text-[#D896FF] w-12">{item.value}%</p>
          </div>
        ))}
      </div>

      {/* Skill Pills Badges */}
      <div className="flex flex-wrap gap-3 mt-6">
        {skillBadges.map((badge, index) => (
          <div
            key={index}
            className="px-4 py-1.5 border border-[#2E1E54] bg-[#0B071E]/80 rounded-full text-white text-sm font-medium text-center hover:border-[#D896FF] hover:shadow-[0_0_10px_rgba(216,150,255,0.4)] transition-all cursor-default"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
