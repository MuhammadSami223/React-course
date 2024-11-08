import React, { useState } from "react";

const App = () => {
  const [color,setColor] = useState("olive")
  return (
    <div className="w-full h-screen "style={{backgroundColor:color}}>
      {/* // idher hum ne background color me hi state pass kerdi he color or phir default color olive de dia he ab is se faida ye he hum onlick laga sakte he or setColor me "" value de sakte he kuch is tarah setCounter(() => "red") */}
      
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }} 
          onClick={()=> setColor("red")}
          // idher hum ne setcolor me red de dia he 
          >
          Red
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
          onClick={()=> setColor("green")}
        >
          green
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
          onClick={()=> setColor("blue")}
          >
          blue
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "yellow" }}
          onClick={()=> setColor("yellow")}
          >
          yellow
        </button>
      </div>
    </div>
          </div>
  );
};

export default App;
