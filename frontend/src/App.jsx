import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./navigation/Navbar";
function App(){
  <Router>
    <Routes>
      <Route path="/" element={Navbar}/>
    </Routes>
  </Router>
}

export default App;