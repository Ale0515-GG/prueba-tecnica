import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const NavbarAdministrador = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState(null);

  const cerrarSesion = () => {
    sessionStorage.removeItem('usuario');
    window.location.href = '/'; 
  };

  useEffect(() => {
    const userDataFromSession = JSON.parse(sessionStorage.getItem('usuario'));
    setUserData(userDataFromSession);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#BA55D3' }}>
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1, fontWeight: 'bold', borderRadius: '10px', padding: '5px', color: 'white' }}>
          <Link to="/ver" style={{ textDecoration: 'none', color: 'white' }}>Blog</Link>
        </Typography>
        <IconButton
          aria-label="crear nuevo blog"
          color="inherit"
          component={Link}
          to="/crud"
        >
          <AddCircleIcon style={{ fontSize: '32px', color: 'white' }} />
        </IconButton>
        <IconButton
          aria-label="account of current user"
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <AccountCircle style={{ fontSize: '32px', color: 'white' }} />
        </IconButton>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {userData && (
            <>
              <MenuItem disabled>Nombre: {userData.nombreUsuario}</MenuItem>
              <MenuItem disabled>Usuario: {userData.usuario}</MenuItem>
              <MenuItem disabled>Correo Electrónico: {userData.correo}</MenuItem>
              <MenuItem onClick={cerrarSesion}>Cerrar Sesión</MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarAdministrador;
