import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

function Card2({
  serialno = "01",
  heading = "Project Title",
  subheading = "",
  skill = "Web Dev",
  height = 420,
  width = "100%",
  url = "/images-3.jpeg",
  contentHeight,
  headingSize = 18,
  subheadingSize = 13,
  buttonHeight = 40,
  buttonWidth = 130,
  buttonText = 13,
  projectlink = "#",
}) {
  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        minHeight: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {/* Background Accent Glow on Hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Top Header: Serial No & Skill Tag */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-semibold text-blue-400 tracking-wider">
          #{serialno}
        </span>
        {skill && (
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            {skill}
          </span>
        )}
      </div>

      {/* Project Banner / Preview Image */}
      <div className="relative my-4 overflow-hidden rounded-xl bg-slate-800/80 border border-white/5">
        <img
          src={url}
          alt={heading}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback preview if image fails to load
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Content Area */}
      <div
        className="flex flex-col justify-between space-y-3"
        style={{ height: contentHeight ? `${contentHeight}px` : "auto" }}
      >
        <div>
          <h3
            className="font-bold text-white tracking-tight"
            style={{ fontSize: `${headingSize}px` }}
          >
            {heading}
          </h3>

          <p
            className="mt-2 text-slate-300 leading-relaxed line-clamp-4"
            style={{ fontSize: `${subheadingSize}px` }}
          >
            {subheading}
          </p>
        </div>

        {/* Dynamic Link Button */}
        <a
          href={projectlink || "#"}
          target={projectlink ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-500 active:scale-95"
          style={{
            height: buttonHeight ? `${buttonHeight}px` : "auto",
            width: buttonWidth ? `${buttonWidth}px` : "auto",
            fontSize: `${buttonText}px`,
          }}
        >
          <span>Explore</span>
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={16}
            color="#ffffff"
            strokeWidth={2}
          />
        </a>
      </div>
    </div>
  );
}

export default Card2;
