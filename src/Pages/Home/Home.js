import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Hero from "./Hero";
import MyProjects from "./MyProjects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Contact />
    </>
  );
};

export default Home;
