import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/homeSection/NavBar";
import AboutMe from "./components/homeSection/AboutMe";
import Work from "./components/homeSection/Work";
import AboutDown from "./components/homeSection/AboutDown";
import Contact from "./components/homeSection/Contact";
function App() {
  return (
    <>
      <div className="w-full bg-black">
        <NavBar />
        <AboutMe />
        <Work />
        <AboutDown/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
