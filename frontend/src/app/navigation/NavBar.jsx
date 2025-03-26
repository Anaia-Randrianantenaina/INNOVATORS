import { FaUserAlt } from "react-icons/fa"; 
import { AiFillCheckCircle } from "react-icons/ai"; 
import { MdDeliveryDining } from "react-icons/md"; 
import { FaHistory } from "react-icons/fa"; 
import { RiChatFollowUpFill } from "react-icons/ri"; 
import { BsFillChatSquareQuoteFill } from "react-icons/bs"; 
import { FaTools } from "react-icons/fa"; 
import { MdSpaceDashboard } from "react-icons/md"; 
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({children}) => {
  // État pour gérer l'ouverture du Drawer
  const [open, setOpen] = useState(false);

  // Fonction pour ouvrir/fermer le Drawer
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  // Données à afficher dans la barre de navigation 
  const navigation = [
    {name: "Dashboard", path: "/dashboard", icon:<MdSpaceDashboard /> },
    {name: "Article", path: "/article", icon: <FaTools />  },
    {name: "Demande", path: "/demande", icon:<BsFillChatSquareQuoteFill />  },
    {name: "Validation", path: "/validation", icon: <AiFillCheckCircle /> },
    {name: "Livraison", path: "/livraison", icon: <MdDeliveryDining /> },
    {name: "Suivi", path: "/suivi", icon: <RiChatFollowUpFill /> },
    {name: "Historique", path: "/historique", icon: <FaHistory /> },
    {name: "Utilisateur", path: "/user", icon: <FaUserAlt /> },
  ];

  // Contenu du menu de navigation (Drawer et Sidebar)
  const NavContent = (
    <Box className="w-[250px] h-full bg-white">
      {/* ----------------------------------Contenu qui contient le logo------------------------------ */}
      <Box className="mt-4">
        <div className="flex justify-center me-10">
          <img src="./logo.jpg" alt="logo" className="w-[50px]" />
          <p className="font-bold text-blue-900 mt-1.5">Accèss banque</p>
        </div>
      </Box>
      <Box className="mt-6">
        {navigation.map((nav, id) => (
          <ListItem key={id} sx={{ p: 0 }}>
            <NavLink to={nav.path} activeClassName="active" className="w-full">
              <ListItemButton onClick={toggleDrawer(false)} sx={{ '&:hover': { borderRadius: "5px" } }}>
                <ListItemIcon className="ml-4">
                  {nav.icon}
                </ListItemIcon>
                <ListItemText primary={ nav.name } />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box className="flex h-screen">
      {/* ----------------------------------Bouton pour ouvrir le Drawer en mode mobile (sm & md)---------------------------------- */}
      <Box className="absolute top-4 left-4 sm:block md:block lg:hidden xl:hidden">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* ----------------------------------Drawer pour sm & md---------------------------------- */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        className="sm:block md:block lg:hidden xl:hidden"
        sx={{ width: '250px' }}
      >
        {NavContent}
      </Drawer>

      {/* ----------------------------------Sidebar en mode desktop (lg & xl)---------------------------------- */}
      <Box className="w-[250px] h-screen fixed left-0 top-0 shadow-lg hidden sm:hidden md:hidden lg:block xl:block bg-white">
        {NavContent}
      </Box>

      {/* ----------------------------------Contenu principal---------------------------------- */}
      <Box className="flex-1 ml-[250px] overflow-hidden">
        <main className="h-full p-4">{children}</main>
      </Box>
    </Box>
  );
}

export default NavBar;
