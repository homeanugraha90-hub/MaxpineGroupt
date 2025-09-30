import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScroll from "./pages/SmoothScroll";
import About from "./pages/About";
import UpArrow from "./components/UpArrow";
import News from "./pages/News";
import Contact from "./pages/Contact";
import SiteVisit from "./pages/SiteVisit";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      {/* <SmoothScroll> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/site-visit" element={<SiteVisit />} />
        <Route path="/projects" element={<Projects />} />


      </Routes>
      <Footer />
      <UpArrow/>
      {/* </SmoothScroll> */}
    </Router>
  );
}

export default App;
