import React from "react";
import { FaJava } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiJavascript, SiReact, SiOracle, SiPostgresql, SiSubversion, SiGit, SiNodedotjs, SiPython, SiTensorflow } from "react-icons/si";
import "../about.scss";

function Skills(props) {
  return (
    <div className="subContents">
      <h1 className="subTitle">Skill</h1>
      <div className="skillBoxs">
        <div className="sklilBox">
          <div style={{ height: "30px", lineHeight: "30px", backgroundColor: "rgba(35, 131, 226, 0.28)" }}>
            <h3>업무에도 활용해요</h3>
          </div>
          <ul>
            <li>
              <FaJava />
              &nbsp;&nbsp;Java
            </li>
            <li>
              <SiSpring /> &nbsp;&nbsp;Spring Framework
            </li>
            <li>
              <SiSpringboot />
              &nbsp;&nbsp;Spring Boot
            </li>
            <li>
              <SiJavascript />
              &nbsp;&nbsp;Javascript
            </li>
            <li>
              <SiReact />
              &nbsp;&nbsp;React
            </li>
            <li>
              <SiOracle />
              &nbsp;&nbsp;Oracle
            </li>
            <li>
              <SiPostgresql />
              &nbsp;&nbsp;PstgreSQL
            </li>
            <li>
              <SiSubversion />
              &nbsp;&nbsp;SVN
            </li>
            <li>
              <SiGit />
              &nbsp;&nbsp;Git
            </li>
          </ul>
        </div>
        <div className="sklilBox">
          <div style={{ height: "30px", lineHeight: "30px", backgroundColor: "#fbdd80" }}>
            <h3>어느정도 사용할줄 알아요</h3>
          </div>
          <ul>
            <li>
              <SiNodedotjs />
              &nbsp;&nbsp;node.js
            </li>
          </ul>
        </div>
        <div className="sklilBox">
          <div style={{ height: "30px", lineHeight: "30px", backgroundColor: "#d3d1cb" }}>
            <h3>보고 이해할 수는 있어요</h3>
          </div>
          <ul>
            <li>
              <SiPython />
              &nbsp;&nbsp;Python
            </li>
            <li>
              <SiTensorflow />
              &nbsp;&nbsp;Tensorflow
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
