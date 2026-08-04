import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import Card2 from "../Components/Card2"; // Adjust import path if needed

function Section5() {
  return (
    <section className="relative min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Featured Projects
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Things I Have Crafted
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              A selection of my recent work. Each project was crafted with
              passion, precision, and purpose.
            </p>
          </div>

          {/* Header CTA Button */}
          <button className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-400 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/20 hover:text-blue-300">
            <span>View All My Projects</span>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={20}
              color="#4a90e2"
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card2
            serialno="01"
            heading="LinkSwift"
            subheading="LinkSwift is a complete backend for a URL Shortener & Analytics Platform inspired by modern enterprise link management systems. It provides REST APIs for secure user authentication, automatic developer API key provisioning, collision-resistant short URL generation, dynamic redirection, and multi-layered analytics powered by MongoDB aggregation pipelines. The project focuses on building clean, modular, and scalable backend architecture while following professional software engineering practices and design principles."
            skill="Backend / Node.js"
            height={520}
            width="100%"
            url="/images-3.jpeg"
            contentHeight={240}
            headingSize={20}
            subheadingSize={13}
            buttonHeight={42}
            buttonWidth={130}
            buttonText={13}
          />
          <Card2
            serialno="02"
            heading="E-Commerce Backend"
            subheading="This project is a complete backend solution for an e-commerce platform, developed using Node.js, Express.js, and MongoDB.

It provides secure authentication, product management, cart operations, order processing, and role-based authorization while following a clean and scalable architecture.."
            skill="Backend / Node.js"
            height={520}
            width="100%"
            url="/images-5.jpeg"
            contentHeight={240}
            headingSize={20}
            subheadingSize={13}
            buttonHeight={42}
            buttonWidth={130}
            buttonText={13}
          />
          <Card2
            serialno="03"
            heading="Video-PLayer"
            subheading="This project is a complete backend for a Video Streaming Platform inspired by YouTube.

It provides REST APIs for user authentication, video uploading, playlist management, subscriptions, tweets/community posts, likes, comments, watch history, and many other core functionalities required in a modern video platform.

The project focuses on writing clean, modular and scalable backend architecture following industry practices."
            skill="Backend / Node.js"
            height={520}
            width="100%"
            url="/images-3.jpeg"
            contentHeight={240}
            headingSize={20}
            subheadingSize={13}
            buttonHeight={42}
            buttonWidth={130}
            buttonText={13}
          />
          <Card2
            serialno="04"
            heading="Spotify"
            subheading="This project is a Spotify-inspired music player built using HTML, Tailwind CSS, and Vanilla JavaScript.

The application provides a sleek and responsive interface similar to Spotify, allowing users to browse and play songs with an intuitive music player experience.."
            skill="Frontend / Vanilla"
            height={520}
            width="100%"
            url="/images-3.jpeg"
            contentHeight={240}
            headingSize={20}
            subheadingSize={13}
            buttonHeight={42}
            buttonWidth={130}
            buttonText={13}
          />
        </div>
      </div>
    </section>
  );
}

export default Section5;
