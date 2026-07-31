// import { useState } from "react";
import "./App.css";
import Header from "../Components/Header.js";
import Section1 from "../Components/Section1.js";
import Card from "../Components/Card.js";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="relative w-screen h-screen overflow-hidden z-50">

        <img
          src="/Background.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

   
        <img
          src="../public/Charactercopy.png"
          alt="Character"
          className="absolute left-1/2 -translate-x-1/2  top-3 h-[80vh] object-contain z-50"
        />
        <div className="absolute inset-0   bg-white/10 z-10" />
      </div> */}
      <div className="relative w-screen h-screen overflow-hidden z-50">
        <img
          src="../public/WholeBackground.png"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        ></img>
        <div className="absolute inset-0 z-45">
          <Header />
          <div className="flex items-center gap-6 overflow-x-auto overflow-y-visible py-8 px-4">
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
              height={320}
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
        </div>
      </div>
    </>
  );
}

export default App;
