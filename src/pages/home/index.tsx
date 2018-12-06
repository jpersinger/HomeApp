import React, { useState } from "react";
import MessageBoard from "./messageBoard";

const colors = ["#38D15A", "#030F3D", "#F46A41", "#41DFF4", "#3BC8DB"];

const Home = () => {
  const [colorIndex, setColorIndex] = useState(0);

  setInterval(() => {
    if (colorIndex === colors.length - 1) {
      setColorIndex(0);
    } else {
      setColorIndex(colorIndex + 1);
    }
  }, 1000);

  return (
    <React.Fragment>
      <div
        style={{
          fontFamily: "Quicksand",
          fontSize: "2em",
          paddingTop: "1em",
          textAlign: "center",
          color: colors[colorIndex],
          transition: "color 300ms ease"
        }}
      >
        Welcome Home!
      </div>
      <MessageBoard />
    </React.Fragment>
  );
};

export default Home;
