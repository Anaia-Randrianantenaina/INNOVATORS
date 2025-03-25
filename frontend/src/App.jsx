import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./app/navigation/NavBar"
import User from "./app/utilisateur/User"
import Dashboard from "./app/dashboard/Dashboard"
import Demande from "./app/demande/Demande"
import Validation from "./app/validation/Validation"
import Livraison from "./app/livraison/Livraison"
import Suivi from "./app/suivi/Suivi"
import Historique from "./app/historique/Historique"
import Analyse from "./app/analyse/Analyse"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="demande" element={<Demande />} />
            <Route path="validation" element={<Validation />} />
            <Route path="livraison" element={<Livraison />} />
            <Route path="suivi" element={<Suivi />} />
            <Route path="historique" element={<Historique />} />
            <Route path="analyse" element={<Analyse />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
