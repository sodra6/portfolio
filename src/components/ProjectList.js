import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";
import axios from "axios";
import "../portfolio.scss";

function ProjectList(props) {
  const [projectList, setProjectList] = useState([]);
  const [active, setActive] = useState("");
  const [language, setLanguage] = useState(",");
  const onClickLang = value => {
    setActive(value);
    setLanguage(value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/projectList`, { params: { language: language } })
      .then(res => {
        setProjectList(res.data);
      })
      .catch(err => console.log(err));
  }, [language]);

  return (
    <div className="contents">
      <div className="comboBox">
        <ul>
          <li className={active === "," ? "active" : ""} onClick={() => onClickLang(",")}>
            ALL
          </li>
          <li className={active === "java" ? "active" : ""} onClick={() => onClickLang("java")}>
            Java
          </li>
          <li className={active === "node" ? "active" : ""} onClick={() => onClickLang("node")}>
            Node
          </li>
          <li className={active === "jsp" ? "active" : ""} onClick={() => onClickLang("jsp")}>
            Jsp
          </li>
          <li className={active === "react" ? "active" : ""} onClick={() => onClickLang("react")}>
            React
          </li>
        </ul>
      </div>
      {projectList.map(project => {
        return <Project key={project.prjct_id} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
