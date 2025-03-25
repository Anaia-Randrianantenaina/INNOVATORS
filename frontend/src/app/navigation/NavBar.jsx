import { BiAnalyse } from "react-icons/bi"; 
import { BsFillInfoCircleFill } from "react-icons/bs"; 
import { GrValidate } from "react-icons/gr"; 
import { MdDeliveryDining } from "react-icons/md"; 
import { FaHistory } from "react-icons/fa"; 
import { RiChatFollowUpFill } from "react-icons/ri"; 
import { BsFillChatSquareQuoteFill } from "react-icons/bs"; 
import { FaTools } from "react-icons/fa"; 
import { MdSpaceDashboard } from "react-icons/md"; 
import React from 'react'
import { NavLink } from "react-router-dom";
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

const NavBar = () => {
  //données a affiché dans la barre de navigation 
  const navigation = [
    {name: "Dashboard", path: "dashboard", icon:<MdSpaceDashboard /> },
    {name: "Matériel", path: "materiel", icon: <FaTools />  },
    {name: "Demande", path: "demande", icon:<BsFillChatSquareQuoteFill />  },
    {name: "Suivi", path: "suivi", icon: <RiChatFollowUpFill /> },
    {name: "Historique", path: "historique", icon: <FaHistory /> },
    {name: "Utilisateur", path: "user", icon: <RiChatFollowUpFill /> },
    {name: "Livraison", path: "livraison", icon: <MdDeliveryDining /> },
    {name: "Validation", path: "validation", icon: <GrValidate /> },
    {name: "Information", path: "info", icon: <BsFillInfoCircleFill /> },
    {name: "Analyse", path: "analyse", icon: <BiAnalyse /> }
  ]

  return (
    // Barre de navigation
    <Box className="w-[250px] h-[100vh] shadow-lg hidden sm:hidden md:hidden lg:block xl:block">
      {/* ----------------------------------Contenu qui contient le logo------------------------------ */}
      <Box className="mt-2">
        <div className="flex justify-center me-10">
          <img src="./logo.jpg" alt="logo" className="w-[50px]" />
          <p className="font-bold text-blue-900 mt-1.5">Accèss banque</p>
        </div>
      </Box>
      {
        // Affichage des données dans le tableau navigation
        navigation.map((nav, id) => (
          <ListItem key={id} sx={{ p: 0 }}>
            <NavLink to={nav.path} activeClassName="active" className="w-full">
              <ListItemButton sx={{ '&:hover': { borderRadius: "5px" } }}>
                <ListItemIcon>
                  {nav.icon}
                </ListItemIcon>
                <ListItemText primary={ nav.name } />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))
      }
    </Box>
  )
}

export default NavBar
