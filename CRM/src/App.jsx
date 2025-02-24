import React from 'react';
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/SignUp.jsx";
import TechDashboard from './Pages/Dashboard/TechDashboard.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tech from './components/dashboard/techdashboard/Tech.jsx';
import Hero from './Pages/Hero.jsx';
import Overview from './Pages/Overview.jsx';
import Home from './Pages/home.jsx';
// import three from "../src/Pages/Dashboard/three.jsx"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/techdashboard" element={<TechDashboard />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/home" element={<Home/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;