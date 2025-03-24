import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./app/navigation/NavBar"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <NavBar/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
