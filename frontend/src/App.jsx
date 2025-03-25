import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './app/navigation/Navigation';
import Dashboard from './app/dashboard/Dashboard';
import Menu from './app/menu/Menu';
import Materiel from './app/materiel/Materiel';
import Demande from "./app/demande/Demande"
import Suivi from "./app/suivi/Suivi"
import User from "./app/utilisateur/User"
import Livraison from "./app/livraison/Livraison"
import Validation from "./app/validation/Validation"
import Info from "./app/information/Info"
import Analyse from "./app/analyse/Analyse"
import Historique from './app/historique/Historique';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen relative">
        <Navigation />
        <Menu />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="materiel" element={<Materiel />} />
            <Route path="demande" element={<Demande />} />
            <Route path="suivi" element={<Suivi />} />
            <Route path="historique" element={<Historique />} />
            <Route path="user" element={<User />} />
            <Route path="livraison" element={<Livraison />} />
            <Route path="validation" element={<Validation />} />
            <Route path="info" element={<Info />} />
            <Route path="analyse" element={<Analyse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
