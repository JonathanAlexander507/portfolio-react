import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/Skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import useFadeInEffect from "./utils/scroll";
import BackgroundX from "./components/backgroundX";


function App() {
  useFadeInEffect()
  return (
    <>
    <BackgroundX />
    <Header />
    <main>
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="skills"><Skills /></section>
    <section id="project"><Projects /></section>
    <section id="contact"><Contact /></section>
    </main>
    <Footer />
    </>
  );
}

export default App;
