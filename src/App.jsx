import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import { HashRouter, Routes, Route } from 'react-router-dom';

export default function App()
{
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
