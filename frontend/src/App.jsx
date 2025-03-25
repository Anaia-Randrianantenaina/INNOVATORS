import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./app/navigation/NavBar"
import User from "./app/utilisateur/User"
import Dashboard from "./app/dashboard/Dashboard"

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={ <Dashboard/> } />
          <Route path="/user" element={ <User/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
