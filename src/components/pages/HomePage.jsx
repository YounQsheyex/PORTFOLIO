import React from "react";
import NavBar from "../../components/homeSection/NavBar";
import AboutMe from "../../components/homeSection/AboutMe";
import Work from "../../components/homeSection/Work";
import AboutDown from "../../components/homeSection/AboutDown";
import Contact from "../../components/homeSection/Contact";

const HomePage = () => {
  return (
    <div className="w-full bg-black p-4 mx-auto">
      <NavBar />
      <AboutMe />
      <Work />
      <AboutDown />
      <Contact />
    </div>
  );
};

export default HomePage;
