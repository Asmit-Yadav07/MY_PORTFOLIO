import { HugeiconsIcon } from "@hugeicons/react";
import { Linkedin01Icon, GithubIcon } from "@hugeicons/core-free-icons";

function Header() {
  return (
    <>
      <div className="flex justify-around items-center pt-5  gap-15 ">
        <div className="h-14 w-20 text-center drop-shadow-[0_0_10px_#39D9FF]">
          <p className="font-[Orbitron] text-[20px] text-white">ASMIT </p>
          <p className="font-[Orbitron] text-[10px] text-[#39D9FF] ">
            PORTFOLIO
          </p>
        </div>
        <div className="flex font-[Orbitron] text-white gap-7 text-[12px] font-bold  bg-white/10  backdrop-blur-xs w-[45vw] h-[8vh]  rounded-4xl  items-center justify-center border border-[#4c3cff]/30 ">
          <ul className="hover:border-b hover:shadow-cyan-800 hover:shadow-2xs  hover:text-[#39D9FF] cursor-pointer hover:hover:scale-120 transition-transform duration-300 origin-top">
            HOME
          </ul>
          <ul className="hover:border-b hover:shadow-cyan-800 hover:shadow-2xs  hover:text-[#39D9FF] cursor-pointer hover:hover:scale-120 transition-transform duration-300 origin-top">
            ABOUT
          </ul>
          <ul className="hover:border-b hover:shadow-cyan-800 hover:shadow-2xs  hover:text-[#39D9FF] cursor-pointer hover:hover:scale-120 transition-transform duration-300 origin-top">
            PROJECTS
          </ul>
          <ul className="hover:border-b hover:shadow-cyan-800 hover:shadow-2xs  hover:text-[#39D9FF] cursor-pointer hover:hover:scale-120 transition-transform duration-300 origin-top">
            SKILLS
          </ul>
          <ul className="hover:border-b hover:shadow-cyan-800 hover:shadow-2xs  hover:text-[#39D9FF] cursor-pointer hover:hover:scale-120 transition-transform duration-300 origin-top">
            EXPERIENCE
          </ul>
          <ul className="hover:border-b hover:shadow-cyan-800 hover:shadow-2xs  hover:text-[#39D9FF] cursor-pointer hover:hover:scale-120 transition-transform duration-300 origin-top">
            CONTACT
          </ul>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <HugeiconsIcon
            icon={Linkedin01Icon}
            size={30}
            color="#ffffff"
            strokeWidth={1.5}
            className=" w-12 h-12 p-2 rounded-xl  bg-[#050816]/60 backdrop-blur-md border border-[#4c3cff]/30 shadow-[0_0_15px_rgba(76,60,255,0.25)]"
          />
          <HugeiconsIcon
            icon={GithubIcon}
            size={30}
            color="#ffffff"
            strokeWidth={1.5}
            className=" w-12 h-12 p-2 rounded-xl  bg-[#050816]/60 backdrop-blur-md border border-[#4c3cff]/30 shadow-[0_0_15px_rgba(76,60,255,0.25)]"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
