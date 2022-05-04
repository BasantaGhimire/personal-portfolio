import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";
import Experience from "./Component/Experience/Experience";
import Works from "./Component/Works/Works.jsx";
import Feature from "./Component/Feature/Feature";
import Portfolio from "./Component/Portfolio/Portfolio";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
    
     <Experience/>
     <Works/>
     <Feature/>
     <Portfolio/>  
     <Services/>
    </div>
  );
}

export default App;