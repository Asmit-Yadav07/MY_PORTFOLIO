import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownDoubleIcon } from "@hugeicons/core-free-icons";

export type CardProps = {
  serialno?: string;
  heading: string;
  subheading: string;
  skill?: string;
  height?: number | string;
  width?: number | string;
  url: string;
  contentHeight?: number | string;
  contentWidth?: number | string;
  headingSize?: number | string;
  subheadingSize?: number | string;
  buttonHeight?: number | string;
  buttonWidth?: number | string;
  buttonText?: number | string;
  buttonTextSize?: number | string;
};

function Card({
  serialno,
  heading,
  subheading,
  skill,
  height,
  width,
  url,
  contentHeight,
  contentWidth,
  headingSize,
  subheadingSize,
  buttonHeight,
  buttonWidth,
  buttonText,
}: CardProps) {
  const formatDimension = (val?: number | string) =>
    typeof val === "number" ? `${val}px` : val;

  // Resolves button text font size from either buttonText or buttonTextSize

  return (
    <div
      style={{
        height: formatDimension(height),
        width: formatDimension(width),
      }}
      className="relative shrink-0 font-['Orbitron',sans-serif] -skew-x-12 border border-purple-500/40 shadow-[0_10px_25px_rgba(76,60,255,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(192,132,252,0.4)] rounded-3xl overflow-hidden flex flex-col justify-between p-4 sm:p-5 group"
    >
      <img
        src={url}
        alt={heading}
        className="absolute inset-0 w-full h-full object-cover brightness-65 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#050816]/95 via-[#050816]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between text-white skew-x-12">
        <span className="font-bold tracking-widest text-[#39D9FF] text-lg drop-shadow-[0_0_8px_#39D9FF]">
          {serialno}
        </span>
        <div className="p-1.5 rounded-xl bg-[#050816]/80 backdrop-blur-md border border-[#4c3cff]/40 shadow-[0_0_15px_rgba(76,60,255,0.3)]">
          <HugeiconsIcon
            icon={ArrowDownDoubleIcon}
            size={18}
            color="#ffffff"
            strokeWidth={2}
          />
        </div>
      </div>

      <div className="relative z-10 skew-x-12">
        <div
          style={{
            height: contentHeight ? formatDimension(contentHeight) : "auto",
            width: contentWidth ? formatDimension(contentWidth) : "100%",
          }}
          className="text-white flex flex-col justify-center bg-[#050816]/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(5,8,22,0.8)]"
        >
          <h3
            style={{ fontSize: formatDimension(headingSize) }}
            className="font-bold tracking-wide text-white leading-tight truncate"
          >
            {heading}
          </h3>

          <p
            style={{ fontSize: formatDimension(subheadingSize) }}
            className="text-gray-300 mt-1 leading-snug truncate"
          >
            {subheading}
          </p>

          {skill && (
            <button
              type="button"
              style={{
                height: formatDimension(buttonHeight),
                width: formatDimension(buttonWidth),
                fontSize: formatDimension(buttonText),
              }}
              className="mt-3 max-w-full flex items-center justify-center rounded-full border border-purple-500/50 bg-purple-900/30 backdrop-blur-md
                font-semibold tracking-wider text-purple-200
                shadow-[0_0_10px_rgba(192,132,252,0.3),inset_0_0_15px_rgba(192,132,252,0.1)]
                hover:shadow-[0_0_20px_rgba(192,132,252,0.6),inset_0_0_20px_rgba(192,132,252,0.25)]
                hover:border-purple-400 hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
