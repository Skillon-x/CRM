// import React from 'react';
// import Login from "./Pages/Login.jsx";
// import Signup from "./Pages/SignUp.jsx";
// import TechDashboard from './Pages/Dashboard/TechDashboard.jsx';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Tech from './components/dashboard/techdashboard/Tech.jsx';
// import Hero from './Pages/Hero.jsx';
// import Overview from './Pages/Overview.jsx';
// import Home from './Pages/home.jsx';


import Home from './Pages/home.jsx';
import { Navbar } from './components/Layout/Navbar.jsx';
import { HeroSection } from './Pages/HeroSection.jsx';
import { FeaturesSection } from './Pages/FeaturesSection.jsx';
// import { TrustedSection } from './Pages/TrustedSection.jsx';
import { Landing } from "./Pages/Landing.jsx"
import { HowItWorks } from './Pages/HowItWorks.jsx';
import { Testimonials} from "./Pages/Testimonials.jsx"
import  GetStarted from "./Pages/GetStarted.jsx"
import Footer from './components/Layout/Footer.jsx';



const App = () => {
  return (
    <Home>
      <Navbar />
      <Landing />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <GetStarted/>
      {/* <TrustedSection /> */}
      <Footer />
    </Home>
  );
};

export default App;