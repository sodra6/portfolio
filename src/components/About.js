import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
function Intro(props) {
  return (
    <div className="contents">
      <div className="about">
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default Intro;
