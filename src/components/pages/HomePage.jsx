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
      <section id="work">
        <Work />
      </section>
      <section id="about">
        <AboutDown />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
