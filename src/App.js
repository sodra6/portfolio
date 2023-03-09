import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Main from "./components/Main";
import ProjectList from "./components/ProjectList";
import "./style.scss";
import About from "./components/About";
const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<About />} />
          <Route path="/projectList" element={<ProjectList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
