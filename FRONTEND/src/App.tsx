// import { useState } from "react";
import "./App.css";
import Header from "../Components/Header";
import Section1 from "../Components/Section1";
import Card from "../Components/Card";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";

function App() {
  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Fixed background image behind scrolling content */}
      <img
        src="/WholeBackground.png"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover brightness-50 -z-10"
      />

      <Header />

      {/* Hero / Projects Section */}
      <div className="relative flex items-center gap-6 py-8 px-4 overflow-hidden">
        <Section1 />

        <p className="text-[#C770FF] drop-shadow-[0_0_18px_#C770FF] font-bold absolute mb-[60vh] ml-[58vw] font-['Orbitron',sans-serif] text-[1.5vw]">
          Featured Projects
        </p>

        <Card
          serialno="01"
          heading="ASMIT PORTFOLIO"
          subheading="PERSONAL PORTFOLIO WEBSITE"
          skill="MERN"
          height={400}
          width={240}
          url="/images-3.jpeg"
          contentHeight={200}
          headingSize={18}
          subheadingSize={12}
          buttonHeight={40}
          buttonWidth={120}
          buttonText={12}
        />

        <Card
          serialno="02"
          heading="PNEUMO AI"
          subheading="PNEUMONIA XRAY DETECTOR"
          skill="REACT"
          height={350}
          width={200}
          url="/images-4.jpeg"
          contentHeight={160}
          headingSize={16}
          subheadingSize={10}
          buttonHeight={32}
          buttonWidth={100}
          buttonText={10}
        />

        <Card
          serialno="03"
          heading="URL SHORTNER"
          subheading="REDIRECTING URLs"
          skill="EXPRESS"
          height={250}
          width={160}
          url="/images-5.jpeg"
          contentHeight={130}
          headingSize={14}
          subheadingSize={9}
          buttonHeight={28}
          buttonWidth={85}
          buttonText={9}
        />
      </div>

      {/* Quote */}
      <div className="relative bottom-12 ml-[70vw] my-6">
        <p className="text-gray-300 font-serif text-[1vw] w-[25vw]">
          Design is not just what it looks like and feels like. Design is how it
          works.
        </p>
        <p className="font-['Orbitron',sans-serif] text-[#39D9FF] mt-2 text-sm ml-[15vw]">
          ~ Steve Jobs
        </p>
      </div>

      {/* Next Sections */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;
