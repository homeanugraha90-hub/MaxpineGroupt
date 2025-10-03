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
import KeyPlayBV from "./pages/Navbar/KeyPlayBV";
import LayOut from "./pages/Navbar/LayOut";
import Development from "./pages/Navbar/Development";
import KeyPlanCF from "./pages/Navbar/KeyPlanCF";
import SkyLine from "./pages/Navbar/SkyLine";
import LayOutCF from "./pages/Navbar/LayOutCF";
import UpcomingPJ from "./pages/Navbar/UpcomingPJ";
import NoidaInternational from "./pages/Navbar/NoidaInternational";
import InternationalFilmCity from "./pages/Navbar/InternationalFilmCity";
import MedicalDevicePark from "./pages/Navbar/MedicalDevicePark";
import LogisticsPark from "./pages/Navbar/LogisticsPark";
import PersonalRapidTransit from "./pages/Navbar/PersonalRapidTransit";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FloatingChatbot from "./components/FloatingChatbot";
import UsePageTitle from "./components/UsePageTitle";
import AmritGrah from "./pages/Navbar/AmritGrah";
import AnugrahHome from "./pages/AnugrahHome";
import BrijVrinda from "./pages/BrijVrinda";
import ClubFarm from "./pages/ClubFarm";

function App() {
  return (
    <Router>
      {/* <SmoothScroll> */}
      <UsePageTitle/>
      <Navbar />
      <FloatingChatbot/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/site-visit" element={<SiteVisit />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/KeyPlan" element={<KeyPlayBV />} />
         <Route path="/layout" element={<LayOut/>} />
         <Route path="/development" element={<Development/>} />
         <Route path="/keyplanCF" element={<KeyPlanCF/>} />
         <Route path="/skyline" element={<SkyLine/>} />
         <Route path="/layoutCF" element={<LayOutCF/>} />
         <Route path="/upcomingPJ" element={<UpcomingPJ/>} />
         <Route path="/noida-international" element={<NoidaInternational/>} />
          <Route path="/international-film-city" element={<InternationalFilmCity/>} />
           <Route path="/medical-device-Park" element={<MedicalDevicePark/>} />
           <Route path="/logistics-park" element={<LogisticsPark/>} />
           <Route path="/personal-rapid-transit" element={<PersonalRapidTransit/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
             <Route path="/amrit-grah" element={<AmritGrah />} />
              <Route path="/anugrahhomes" element={<AnugrahHome />} />
               <Route path="/brij-vrinda" element={<BrijVrinda/>} />
               <Route path="/club-farm" element={<ClubFarm/>} />






      </Routes>
      <Footer />
      <UpArrow/>
      {/* </SmoothScroll> */}
    </Router>
  );
}

export default App;
