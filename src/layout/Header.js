import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsMoonFill, BsMoon } from "react-icons/bs";

function Header(props) {
  const [darkMode, setDarkMode] = useState(false);
  const onClickDM = () => setDarkMode(() => !darkMode);

  return (
    <div className="menuList">
      <ul>
        <li className="menu">
          <NavLink to="/">home</NavLink>
        </li>
        <li className="menu">
          <NavLink to="/profile">about me</NavLink>
        </li>
        <li className="menu">
          <NavLink to="/projectList"> portfolio</NavLink>
        </li>
        <li onClick={onClickDM}>{darkMode ? <BsMoon /> : <BsMoonFill />}</li>
      </ul>
    </div>
  );
}

export default Header;
