// import { useState } from "react";
import "./App.css";
import Header from "../Components/Header.js";

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
          className="absolute inset-0 w-full h-full object-cover brightness-80"
        ></img>
        <div className="absolute inset-0 z-45">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
