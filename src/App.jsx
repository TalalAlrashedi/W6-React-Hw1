import React from "react";
import Navbar from "./components/Navbar";
import Zones from "./components/Zones";
import RecapSection from "./components/RecapSession";
import RiyadhSection from "./components/RiyadhSection";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
// import './style.css';
function App() {
  return (
    <div>
      <Navbar/>
      <Zones/>
      <RecapSection/>
      <RiyadhSection></RiyadhSection>
      <Logos/>
      <Footer/>
    </div>
  );
}

export default App;
