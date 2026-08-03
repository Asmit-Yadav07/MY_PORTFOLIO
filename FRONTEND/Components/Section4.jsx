import React from "react";

function Section4() {
  const infoItems = [
    { logo: "/ReactLogo.svg", name: "React.js" },
    { logo: "/NextJSLogo.svg", name: "Next.js" },
    { logo: "/NodeLogo.png", name: "Node.js" },
    { logo: "/MongoDBLogo.svg", name: "MongoDB" },
    { logo: "/TailwindcssLogo.svg", name: "Tailwind CSS" },
    { logo: "/JSLogo.png", name: "JavaScript" },
    { logo: "/TSLogo.svg", name: "TypeScript" },
    { logo: "/JavaLogo.svg", name: "Java" },
    { logo: "/FigmaLogo.avif", name: "Figma" },
    { logo: "/GithubLogo.webp", name: "Git & GitHub" },
  ];

  return (
    <div className="w-[60vw] p-8 ml-[20vw] mt-8 text-white bg-[#0B071E]/60 backdrop-blur-md border border-[#2E1E54] rounded-[32px] shadow-[0_0_25px_rgba(11,7,30,0.8)] hover:-translate-y-2 hover:scale-[1.02] hover:border-[#9B51E0]/60 hover:shadow-[0_0_35px_rgba(155,81,224,0.3)] transition-all duration-300 ease-out">
      {/* Title */}
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
        TECHNOLOGIES I WORK WITH
      </h2>

      {/* Grid of Tech Cards */}
      <div className="grid grid-cols-5 gap-4">
        {infoItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-4 bg-[#05030E]/80 border border-[#2E1E54] rounded-2xl hover:border-[#D896FF] hover:shadow-[0_0_15px_rgba(216,150,255,0.3)] transition-all cursor-default group"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="h-10 w-10 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4;
