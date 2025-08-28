import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { ScrollToTop } from "./components/Scroll";
import { Suspense, lazy } from "react";
import SusLoader from "./components/SusLoader";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<SusLoader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
