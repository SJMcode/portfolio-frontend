import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";

import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
