import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import profile from "./profile.png";

function Main(props) {
  return (
    <>
      <div className="contents">
        <div className="profileBox">
          <img src={profile} alt="profileImg" title="프로필 사진" />
        </div>
        <div className="introBox">
          <h1>안녕하세요</h1>
          <h2>저는 풀스택 개발자 조용규입니다.</h2>
          <ul>
            <li>
              <Link to="https://github.com/sodra6" target="_blink">
                <BsGithub />
                Java & Javascript 풀스택 개발
              </Link>
            </li>
            <li>서울 관악구 거주 중</li>
            <li>웹개발자 마인드원 재직 중</li>
            <li>sodra6@naver.com</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
