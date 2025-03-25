import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './app/navigation/Navigation';
import Dashboard from './app/dashboard/Dashboard';

const App = () => {
  return (
   <Router>
    <Navigation/>
    <Routes>
      <Route path="dashboard" element={<Dashboard/>}/>
    </Routes>
   </Router>
  )
}

export default App
