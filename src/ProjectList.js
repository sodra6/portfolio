import React, { useEffect, useState } from "react";
import Project from "./Project";
import axios from "axios";

function ProjectList(props) {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get("/getProjectList")
      .then(res => {
        setProjectList(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="contents">
      {projectList.map(project => {
        return <Project key={project.prjct_id} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
