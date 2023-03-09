import React, { useEffect, useState } from "react";
import mainImg from "../img/mian.jpg";

function Main(props) {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "I'm Web Developer";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle(prevTitleValue => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle("");
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="main">
      <img src={mainImg} alt="Main" />
      <h1 className="mainTitle">
        Hello, I'm Yong Gyu
        <br />
        {blogTitle}
      </h1>
    </div>
  );
}

export default Main;
