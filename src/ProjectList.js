import React, { useEffect, useState } from "react";
import Project from "./Project";
import axios from "axios";

function ProjectList(props) {
  const [projectList, setProjectList] = useState([]);

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
      {projectList.map(project => {
        return <Project key={project.prjct_id} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
