import { MdDashboard } from "react-icons/md"; 
import { CiSquareQuestion } from "react-icons/ci"; 
import { AiOutlineUser } from "react-icons/ai"; 
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
import { ListItem, ListItemButton, ListItemIcon, ListItemText, responsiveFontSizes } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const navigation = [
    { path: "dashboard", name: "Dashboard", icon: <MdDashboard className="text-2xl" />  },
    { path: "demande", name: "Demande", icon:<CiSquareQuestion className="text-2xl" />  },
    { path: "user", name: "Utilisateur", icon:<AiOutlineUser className="text-xl" /> }
  ]

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <h1 className="flex justify-center p-5 text-blue-900 font-bold">Accèss Banque</h1>
      <List>
        {
          navigation.map((url, id) =>(
            <ListItem key={id} disablePadding>
              <Link to={url.path} className="w-[500px]">
                <ListItemButton onClick={ handleDrawerClose }>
                  <ListItemIcon>
                    {url.icon}
                  </ListItemIcon>
                  <ListItemText primary={url.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))
        }
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, boxShadow: "none", borderBottom: "1px solid #e0e0d1" }}
      >
        <Toolbar sx={{ background: "white", color: "black" }}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer container={container} variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose} sx={{ display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, boxShadow: 'none' }, // <-- Pas d'ombre
          }}
          open
        >
          {drawer}
        </Drawer>

      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

responsiveFontSizes.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
