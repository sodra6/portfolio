import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsMoonFill, BsMoon } from "react-icons/bs";

function Header(props) {
  const [darkMode, setDarkMode] = useState(false);
  const onClickDM = () => setDarkMode(!darkMode);
  return (
    <div className="menuList">
      <ul>
        <li className="menu">
          <Link to="/">home</Link>
        </li>
        <li className="menu">
          <Link to="/profile">about me</Link>
        </li>
        <li className="menu">
          <Link to="/projectList"> portfolio</Link>
        </li>
        <li onClick={onClickDM}>{darkMode ? <BsMoon /> : <BsMoonFill />}</li>
      </ul>
    </div>
  );
}

export default Header;
