import { IoIosNotificationsOutline } from "react-icons/io"; 
import { IoIosNotifications } from "react-icons/io"; 
import { BsFillChatSquareQuoteFill } from "react-icons/bs"; 
import { FaUserAlt } from "react-icons/fa"; 
import { BiAnalyse } from "react-icons/bi"; 
import { MdHistory } from "react-icons/md"; 
import { RiChatFollowUpFill } from "react-icons/ri"; 
import { MdOutlineDeliveryDining } from "react-icons/md"; 
import { GrValidate } from "react-icons/gr"; 
import { MdDashboard } from "react-icons/md"; 
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Badge, Chip, ListItem, ListItemButton, ListItemIcon, ListItemText, responsiveFontSizes } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 240;
const drawerMarginTop = 9;
function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  // Donnée pour l'affichage dans le sidebar
  const navigation = [
    { path: "dashboard", name: "Dashboard", icon: <MdDashboard className="text-2xl" />  },
    { path: "demande", name: "Demande", icon: <BsFillChatSquareQuoteFill className="text-2xl" />  },
    { path: "validation", name: "Validation", icon:<GrValidate className="text-2xl"/>  },
    { path: "livraison", name: "Livraison", icon: <MdOutlineDeliveryDining className="text-2xl" />   },
    { path: "suivi", name: "Suivi", icon:<RiChatFollowUpFill className="text-2xl" />  },
    { path: "historique", name: "Historique", icon: <MdHistory className="text-2xl" />  },
    { path: "analyse", name: "Analyse", icon: <BiAnalyse className="text-2xl" />   },
    { path: "user", name: "Utilisateur", icon:<FaUserAlt />  }
  ]

  // Fonction pour fermer le sidebar quand la taille de l'écran est de version mobile
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  // Fonction pour ouvrir le sidebar quand la taille de l'écran est de version mobile
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // Fonction pour recupérer les données affiché dans le sidebar
  const drawer = (
    <div>
      <List>
        {
          navigation.map((url, id) =>(
            <ListItem key={id} disablePadding>
              <NavLink to={url.path} className="w-[220px]" activeClassName="active">
                <ListItemButton sx={{ '&:hover' : {borderTopRightRadius: "10px", borderBottomRightRadius: "10px" } }} onClick={ handleDrawerClose }>
                  <ListItemIcon>
                    {url.icon}
                  </ListItemIcon>
                  <ListItemText primary={url.name} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))
        }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* ---------------------------------Appbar qui contient le logo/notification-------------------------------- */}
      <AppBar position="fixed"
        sx={{ borderBottom: "1px solid #e0e0d1" }}
      >
        <Toolbar sx={{ background: "white", color: "black" }}>
          {/* ---------------------------------Bouton menuIcon--------------------------------- */}
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          {/* ---------------------------------contenu qui contient le logo--------------------------------- */}
          <Box className="flex">
            <Box>
              <img src="./logo.jpg" alt="logo" className="w-[40px]" />
            </Box>
            <Box>
              <p className="mt-1 text-blue-900 font-bold">Accèss banque</p>
            </Box>
          </Box>
          {/*  ---------------------------------Contenu qui contient le notification et nom utilisateur --------------------------------- */}
          <Box className="ml-auto flex">
            <p className="text-3xl flex me-3">
              <Badge badgeContent={2} max={10} color="error" className="mt-1 me-5">
                <IoIosNotificationsOutline className="cursor-pointer"/>
              </Badge> <span className="text-gray-300">|</span>  
            </p>
            
              <Avatar className="w-[100px] h-[100px] cursor-pointer" />
              <Chip label="anarana" className="mt-1 ml-1" />
          </Box>
        </Toolbar>
      </AppBar>
      {/*  ---------------------------------Contenu du sidebar --------------------------------------- */}
      <Box component="nav" sx={{ width: { sm: drawerMarginTop }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      {/*  ---------------------------------sidebar version mobile --------------------------------------- */}
        <Drawer  container={container} variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose} sx={{ display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
            borderTop: "1px solid #e0e0d1", borderTopRightRadius: "10px", boxShadow: 5
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {/*  ---------------------------------données qui sont affiché dans le sidebar --------------------------------- */}
          {drawer}
        </Drawer >
        {/*  ---------------------------------sidebar écran large --------------------------------------- */}
        <Drawer variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: drawerMarginTop, borderTop: "1px solid #e0e0d1", borderTopRightRadius: "10px", boxShadow: 5 }
          }}
          open
        >
          {/*  ---------------------------------données qui sont affiché dans le sidebar --------------------------------- */}
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { xs: "100%", sm: "80%", md: "75%", lg: "70%" } }}>
        <Toolbar/>
        {/*  ---------------------------------élément affiché dans le corps de l'application --------------------------------- */}
        <Outlet />
      </Box>
    </Box>
  );
}

responsiveFontSizes.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
