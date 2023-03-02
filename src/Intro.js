import React from "react";
import { FaJava } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiJavascript, SiReact, SiOracle, SiPostgresql, SiSubversion, SiGit, SiNodedotjs, SiPython, SiTensorflow } from "react-icons/si";
function Intro(props) {
  return (
    <div className="intro">
      <div>
        <h1>안녕하세요, 웹 개발자 조용규입니다.</h1>
        <h3>Fullstack Engineer | Yong Gyu Cho</h3>
        <hr />
        <div style={{ backgroundColor: "#f0f0f0" }}>
          저는 개발을 즐기며 성장하고 있는 웹개발자 조용규입니다.
          <br />
          배우는 것을 즐기고 새로운 경험을 즐기며 직접 도전해 성취하는 것을 좋아합니다.
          <br />
          백앤드, 프론트앤드 등 다양한 개발을 배우고 싶습니다.
        </div>
      </div>
      <br />

      <div>
        <h1>Skill</h1>
        <hr />
        <div style={{ display: "flex", textAlign: "left" }}>
          <div style={{ width: "250px", padding: "10px" }}>
            <div style={{ backgroundColor: "rgba(35, 131, 226, 0.28)" }}>
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
          <div style={{ width: "250px", padding: "10px" }}>
            <div style={{ backgroundColor: "#fbdd80" }}>
              <h3>어느정도 사용할줄 알아요</h3>
            </div>
            <ul>
              <li>
                <SiNodedotjs />
                &nbsp;&nbsp;node.js
              </li>
            </ul>
          </div>
          <div style={{ width: "250px", padding: "10px" }}>
            <div style={{ backgroundColor: "#d3d1cb" }}>
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
      <br />

      <div>
        <h1>Experience</h1>
        <hr />
      </div>
    </div>
  );
}

export default Intro;
