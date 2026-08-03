import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Linkedin01Icon, GithubIcon } from "@hugeicons/core-free-icons";

function Header() {
  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex flex-col items-center justify-center drop-shadow-[0_0_10px_#39D9FF]"
        >
          <span className="font-['Orbitron',sans-serif] text-xl font-extrabold tracking-wider text-white group-hover:text-[#39D9FF] transition-colors">
            ASMIT
          </span>
          <span className="font-['Orbitron',sans-serif] text-[10px] tracking-widest text-[#39D9FF]">
            PORTFOLIO
          </span>
        </a>

        {/* Central Pill Navigation */}
        <nav className="hidden md:flex items-center justify-center font-['Orbitron',sans-serif] text-white text-xs font-bold bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-[#4c3cff]/30 shadow-[0_0_20px_rgba(76,60,255,0.15)]">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative py-1 text-gray-300 hover:text-[#39D9FF] transition-all duration-300 hover:scale-105 inline-block origin-center tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#39D9FF] after:shadow-[0_0_8px_#39D9FF] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons Links */}
        <div className="flex gap-3 items-center">
          <a
            href="https://www.linkedin.com/in/asmit-yadav-9432b2319/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-[#050816]/70 backdrop-blur-md border border-[#4c3cff]/40 shadow-[0_0_15px_rgba(76,60,255,0.25)] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <HugeiconsIcon
              icon={Linkedin01Icon}
              size={20}
              color="#ffffff"
              strokeWidth={1.5}
            />
          </a>

          <a
            href="https://github.com/Asmit-Yadav07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-[#050816]/70 backdrop-blur-md border border-[#4c3cff]/40 shadow-[0_0_15px_rgba(76,60,255,0.25)] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <HugeiconsIcon
              icon={GithubIcon}
              size={20}
              color="#ffffff"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
