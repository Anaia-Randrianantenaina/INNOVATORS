import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import { NavProvider } from './app/navigation/NavContext';
import Login from './app/login/Login';

const Application = ({ children }) => {
  // Fonction pour récupèrer l'URL actuelle
  const location = useLocation(); 

  // Vérification si on est sur la page de connexion
  const isLoginPage = location.pathname === "/";

  return (
    <div className="flex h-screen relative bg-gray-100">
      {/* Afficher Navigation et Menu seulement si ce n'est PAS la page de login */}
      {!isLoginPage && <Navigation />}
      {!isLoginPage && <Menu />}

      <div className={`flex-1 p-4 ${isLoginPage ? "flex justify-center items-center" : ""}`}>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <NavProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={
            <Application> 
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
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Application>} />
          </Routes>
        </NavProvider>
      </Router>
  );
}

export default App;
