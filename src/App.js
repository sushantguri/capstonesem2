// import React from "react";
// import FitnessDashboard from "./components/FitnessDashboard";
// import Footer from "./components/Footer";

// function App() {
//   return ( <FitnessDashboard />);
        

// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Water from './pages/Water';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: '#00796B', padding: '10px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <Link to='/' style={{position:'absolute',left:'20px',fontSize:'20px',textDecoration:'none',color:'white',fontWeight:'bolder'}}>FitBee</Link>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/workouts" style={{ color: 'white', textDecoration: 'none' }}>Workouts</Link>
          <Link to="/water" style={{ color: 'white', textDecoration: 'none' }}>Water</Link>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/water" element={<Water />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
