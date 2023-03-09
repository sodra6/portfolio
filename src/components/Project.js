import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import Modal from "./Modal";

function Project({ project }) {
  const prgtImg = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  console.log(project.demo !== null);
  return (
    <div className="subContents">
      <h1>{project.prjct_nm}</h1>
      <br />
      <div className="project">
        <div className="imgBox" onClick={openModal}>
          <img src={prgtImg[project.prjct_id]} alt={project.projectNm} title={project.projectNm} />
        </div>
        <div className="projectInfo">
          <div className="prjctExplain">
            <p>&nbsp;{project.discription}</p>
          </div>
          <div>
            <div>
              <MdLiveTv />
              {project.demo !== null && (
                <Link to={project.demo} target="_blink">
                  &nbsp;&nbsp; Live Demo
                </Link>
              )}
            </div>
          </div>
          <div>
            <BsGithub />
            &nbsp;&nbsp; Github : <Link to={project.code}>{project.code}</Link>
          </div>
          <div>
            <CiMonitor />
            &nbsp;&nbsp; FrontEnd : {project.front_end}
          </div>
          <div>
            <GrLanguage />
            &nbsp;&nbsp; BackEnd : {project.back_end}
          </div>
          <div>
            <FaDatabase />
            &nbsp;&nbsp; Database : {project.db}
          </div>
        </div>
        <Modal open={modalOpen} close={closeModal} title={project.projectNm} imgSrc={prgtImg[project.prjct_id]} />
      </div>
    </div>
  );
}

export default Project;
