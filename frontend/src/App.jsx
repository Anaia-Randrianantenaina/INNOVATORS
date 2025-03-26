import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './app/page/dashboard/Dashboard';
import Materiel from './app/page/materiel/Materiel';
import Demande from './app/page/demande/Demande';
import Suivi from './app/page/suivi/Suivi';
import Historique from './app/page/historique/Historique';
import User from './app/page/utilisateur/User';
import Livraison from './app/page/livraison/Livraison';
import Validation from './app/page/validation/Validation';
import Info from './app/page/information/Info';
import Analyse from './app/page/analyse/Analyse';
import Menu from "./app/menu/Menu"
import Navigation from "./app/navigation/Navigation"

const App = () => {
  return (
    <Router>
      <div className="flex h-screen relative bg-gray-100">
        <Navigation />
        <Menu />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="article" element={<Materiel />} />
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
