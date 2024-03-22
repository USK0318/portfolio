import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom';
import logo from '../media/logo.png';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'About', path: '/About', icon: <InfoIcon /> },
  { label: 'Projects', path: '/Projects', icon: <DeveloperModeIcon /> },
  { label: 'Contact', path: '/Contact', icon: <ContactsIcon /> },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, margin: '10px', position: 'relative' }}>
        <img src={logo} alt="Logo" style={{ height: '60px', width: '120px' }} />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{ position: 'absolute', right: '-16px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <MenuIcon />
        </IconButton>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: 'center',
                textTransform: 'capitalize', // Capitalize the text in mobile mode
              }}
            >
              {item.icon}
              <ListItemText primary={item.label.toLowerCase()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: '#FDFDFD' }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: '#3D4152',
              margin: '15px',
            }}
          >
            <img src={logo} alt="Logo" style={{ height: '80px', width: '180px' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{ color: '#3D4152', margin: '10px', textTransform: 'capitalize' }}
              >
                {item.label.toLowerCase()}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, marginTop: '20px' }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
