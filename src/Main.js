import React, { useState } from "react";
import { BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { AiFillMail, AiOutlineMail } from "react-icons/ai";
import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
import { ImBlogger, ImBlogger2 } from "react-icons/im";
import { Link } from "react-router-dom";
import defaultProfile from "./img/profile.png";
import profile from "./img/제목 없음.jpg";

function Main(props) {
  const [myName, setMyName] = useState(false);
  (() => {
    //if (confirm("asdf 입니까?")) setMyName(false);
  })();
  return (
    <>
      <div className="contents">
        <div className="profileBox">
          <img src={myName ? defaultProfile : profile} alt="profileImg" title="프로필 사진" />
        </div>
        <div className="introBox">
          <h1>안녕하세요</h1>
          <h2>저는 풀스택 개발자 조용규입니다.</h2>
          <ul>
            <li>
              <Link to="https://github.com/sodra6" target="_blink">
                {false ? <VscGithub /> : <VscGithubInverted />}
                &nbsp;&nbsp; Java & Javascript 풀스택 개발
              </Link>
            </li>
            <li>
              <Link to="https://sodra6.tistory.com/" target="_blink">
                {false ? <ImBlogger /> : <ImBlogger2 />}
                &nbsp;&nbsp; sodra6의 개발 블로그
              </Link>
            </li>
            <li>
              <Link to="https://www.mind-one.co.kr/">
                {false ? <HiOutlineOfficeBuilding /> : <HiOfficeBuilding />}
                &nbsp;&nbsp;웹 개발자로 마인드원 재직 중
              </Link>
            </li>
            <li>
              <Link to="mailto:sodra6@naver.com">
                {false ? <AiOutlineMail /> : <AiFillMail />}
                &nbsp;&nbsp;sodra6@naver.com
              </Link>
            </li>
            <li>
              <Link to="https://www.gwanak.go.kr/site/gwanak/main.do">
                {false ? <BsHouseDoor /> : <BsHouseDoorFill />}
                &nbsp;&nbsp;서울 관악구 거주 중
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
