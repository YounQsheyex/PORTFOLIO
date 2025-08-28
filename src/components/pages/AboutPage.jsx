import React from "react";
import NavBar from "../../components/homeSection/NavBar";
import AboutHero from "../aboutSection/AboutHero";
import Capabilities from "../aboutSection/Capabilities";
import Experience from "../aboutSection/Experience";
import Contact from "../homeSection/Contact";
const AboutPage = () => {
  return (
    <div className="w-full bg-black p-3 mx-auto">
      <NavBar />
      <AboutHero />
      <Capabilities />
      <Experience />
      <Contact />
    </div>
  );
};

export default AboutPage;
