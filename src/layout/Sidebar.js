import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillMail, AiOutlineMail, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
import { ImBlogger, ImBlogger2, ImHome } from "react-icons/im";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import defaultProfile from "../img/profile.png";
import profile from "../img/제목 없음.jpg";
import "../sidebar.scss";
function Header(props) {
  const [menuList, setMenuList] = useState([]);
  const [myName, setMyName] = useState(false);
  const mnuIcon = {
    0: <ImHome />,
    1: <AiOutlineUser />,
    2: <AiOutlineProject />,
  };
  useEffect(() => {
    axios
      .get("https://port-0-node-server-study-r8xoo2mleme9svb.sel3.cloudtype.app/api/mnuList")
      .then(res => {
        setMenuList(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="sidebar">
      <div className="profileBox">
        <img src={myName ? defaultProfile : profile} alt="profileImg" title="프로필 사진" />
        <h2>Yong Gyu Cho</h2>
      </div>
      <div className="socialLink">
        <ul>
          <li>
            <Link to="https://github.com/sodra6" target="_blink">
              {false ? <VscGithub /> : <VscGithubInverted />}
            </Link>
          </li>
          <li>
            <Link to="https://sodra6.tistory.com/" target="_blink">
              {false ? <ImBlogger /> : <ImBlogger2 />}
            </Link>
          </li>
          <li>
            <Link to="https://www.mind-one.co.kr/">{false ? <HiOutlineOfficeBuilding /> : <HiOfficeBuilding />}</Link>
          </li>
          <li>
            <Link to="mailto:sodra6@naver.com">{false ? <AiOutlineMail /> : <AiFillMail />}</Link>
          </li>
          <li>
            <Link to="https://www.gwanak.go.kr/site/gwanak/main.do">{false ? <BsHouseDoor /> : <BsHouseDoorFill />}</Link>
          </li>
        </ul>
      </div>
      <div className="mnuList">
        <ul>
          {menuList.map((menu, idx) => {
            return (
              <li key={idx}>
                <NavLink to={menu.url}>
                  {mnuIcon[idx]}&nbsp; {menu.mnu_nm}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="footer">
          <div>© 2023. ygcho.</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
