import React from "react";
import Project from "./Project";

function ProjectList(props) {
  const projectList = [
    {
      projectId: 1,
      projectNm: "AI 상수관망 관리 구축 시스템",
      url: "https://www.kwater.or.kr/waternet/login.do",
      code: "https://github.com/sodra6/waternet",
      frontEnd: "Javascript",
      backEnd: "Java, Spring",
      database: "Tibero",
    },
    {
      projectId: 2,
      projectNm: "상수도 자산관리 구축 시스템",
      url: "test2",
      code: "https://github.com/sodra6/wams",
      frontEnd: "Javascript",
      backEnd: "Java, Spring-boot",
      database: "PostgreSQL",
    },
    {
      projectId: 3,
      projectNm: "보령 해저터널 관망감시 시스템",
      url: "test2",
      code: "https://github.com/sodra6/boryeong",
      backEnd: "Java, Spring-boot",
      frontEnd: "React",
      database: "Oracle",
    },
    {
      projectId: 4,
      projectNm: "포트폴리오",
      url: "test3",
      code: "https://github.com/sodra6/portfolio",
      backEnd: "Node.js Node Express",
      frontEnd: "React",
      database: "PostgreSQL",
    },
    {
      projectId: 5,
      projectNm: "하수도 자산관리",
      url: "test4",
      code: "https://github.com/sodra6/sams",
      backEnd: "java, Spring-boot",
      frontEnd: "React",
      database: "PostgreSQL",
    },
  ];
  return (
    <div className="contents">
      {projectList.map(project => {
        return <Project key={project.projectId} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
