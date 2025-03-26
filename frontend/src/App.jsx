import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Menu from './app/menu/Menu';
import NavBar from './app/navigation/NavBar';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
    </Routes>
   </Router>
  )
}

export default App
