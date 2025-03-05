import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Home from './Pages/home.jsx';
// import { Navbar } from './components/Layout/Navbar.jsx';
// import { HeroSection } from './Pages/HeroSection.jsx';
// import { FeaturesSection } from './Pages/FeaturesSection.jsx';
// // import { TrustedSection } from './Pages/TrustedSection.jsx';
// import { Landing } from "./Pages/Landing.jsx"
// import { HowItWorks } from './Pages/HowItWorks.jsx';
// import { Testimonials} from "./Pages/Testimonials.jsx"
// import  GetStarted from "./Pages/GetStarted.jsx"
// import Footer from './components/Layout/Footer.jsx';
import Admin from './Pages/Dashboard/Admin/Admin';



function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<Admin />} />
          {/* <Route path="/about" element={<About />} /> */}
     
          
        </Routes>
      
    </Router>
  );
}


export default App;