import React from "react";
import { Link } from "react-router-dom";
import defaultPrjct from "./img/defaultPrjct.jpg";
import { MdLiveTv } from "react-icons/md";
function Project({ project }) {
  return (
    <div className="project">
      <div className="imgBox">
        <img src={project.img !== "" ? project.img : defaultPrjct} alt={project.projectNm} title={project.projectNm} />
      </div>
      <h1>{project.projectNm}</h1>
      <div>
        <Link to={project.url} target="_blink">
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
