import React from "react";
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import defaultImg from "./img/defaultPrjct.jpg";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";

function Project({ project }) {
  const prgtImg = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
  };
  return (
    <div className="project">
      <div className="imgBox">
        <img src={prgtImg[project.prjct_id]} alt={project.projectNm} title={project.projectNm} />
      </div>
      <h1>{project.prjct_nm}</h1>
      <div>
        <Link to={project.demo} target="_blink">
          <MdLiveTv /> &nbsp;&nbsp;Live Demo
        </Link>
      </div>
      <div>
        <Link to={project.code} target="_blink">
          &lt;Source Code/&gt;
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Project;
