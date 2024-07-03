
import React from "react";
import Watch from "./Watch";
import bgimmage from "./video/bgimmage.mp4";



export default function App() {
  return (
    <div>
      
      <Watch />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
          opacity: 0.5 
        }}
      >
        <source src={bgimmage} type="video/mp4" />
      </video>
  
    </div>
  );
}
