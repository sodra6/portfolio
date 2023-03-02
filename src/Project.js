import React from "react";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="project">
      <div className="imgBox">
        <img src="" alt={project.projectNm} title={project.projectNm} />
      </div>
      <h1>{project.projectNm}</h1>
      <div>
        <Link to={project.url} target="_blink">
          Live Demo
        </Link>
      </div>
      <div>
        <Link to="" target="_blink">
          Source Code
        </Link>
      </div>
    </div>
  );
}

export default Project;
