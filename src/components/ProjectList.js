import React, { useEffect, useState } from "react";
import Project from "./Project";
import axios from "axios";
import "../portfolio.scss";

function ProjectList(props) {
  const [projectList, setProjectList] = useState([]);
  const [language, setLanguage] = useState();

  const onClickLang = e => {
    setLanguage(e.target.value);
    console.log(e);
  };
  useEffect(() => {
    axios
      .get("https://port-0-node-server-study-r8xoo2mleme9svb.sel3.cloudtype.app/api/projectList")
      .then(res => {
        console.log(res.data);
        setProjectList(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="contents">
      <div className="comboBox">
        <ul>
          <li onClick={onClickLang}>ALL</li>
          <li onClick={onClickLang}>Java</li>
          <li onClick={onClickLang}>Node</li>
          <li onClick={onClickLang}>Jsp</li>
          <li onClick={onClickLang}>React</li>
        </ul>
      </div>
      {projectList.map(project => {
        return <Project key={project.prjct_id} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
