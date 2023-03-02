import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./Main";
import ProjectList from "./ProjectList";
import "./style.scss";
import Intro from "./Intro";
const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Intro />} />
          <Route path="/projectList" element={<ProjectList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
