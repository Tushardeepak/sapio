import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home";
import LikePage from "./components/LikePage";
import NavBar from "./components/NavBar";
import DataContext from "./components/context/DataContext";
import svg1 from "./assest/wave.svg";
import svg2 from "./assest/wave1.svg";

function App() {
  return (
    <div className="App">
      <img src={svg1} className="wave" />
      <img src={svg2} className="wave2" />
      <NavBar />
      <DataContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<LikePage />} />
        </Routes>
      </DataContext>
    </div>
  );
}

export default App;
