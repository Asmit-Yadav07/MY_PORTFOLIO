import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  School01Icon,
  DiscountTag01Icon,
  GraduationCapIcon, // Fixed missing comma
  Rocket01Icon,
} from "@hugeicons/core-free-icons";

function Section6() {
  const journey = [
    {
      year: "2024",
      title: "Computer Science",
      description:
        "Enrolled in B.Tech in Computer Science and Engineering at VIT Bhopal University.",
      icon: School01Icon,
      badge: "Education",
    },
    {
      year: "2024 - 2025",
      title: "Frontend Development",
      description:
        "Started my journey in web development, mastering HTML, CSS, JavaScript, and building interactive UI projects.",
      icon: DiscountTag01Icon,
      badge: "Frontend",
    },
    {
      year: "2025 - 2026",
      title: "Full Stack MERN Developer",
      description:
        "Evolved into a Full Stack MERN Developer. Built scalable backend architectures, REST APIs, and integrated AI models.",
      icon: GraduationCapIcon,
      badge: "Full Stack",
    },
    {
      year: "2026 ~",
      title: "Open For Work",
      description:
        "Available for freelance projects, contract work, and ready to join an innovative tech team full-time.",
      icon: Rocket01Icon,
      badge: "Status",
    },
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 px-6 py-20 text-white overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Experience
          </span>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            My Journey
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            A path of learning, building, and growing through challenges and
            opportunities.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {journey.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-4.75 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-slate-900 text-blue-400 shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:text-white">
                <HugeiconsIcon icon={item.icon} size={20} strokeWidth={1.8} />
              </div>

              <div className="md:absolute md:-left-36 md:top-2.5 md:w-28 md:text-right">
                <span className="font-mono text-sm font-bold text-blue-400 tracking-wider">
                  {item.year}
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-500/40 group-hover:shadow-xl group-hover:shadow-blue-500/10">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-300">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section6;
