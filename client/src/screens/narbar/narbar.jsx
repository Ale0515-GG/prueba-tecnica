import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#BA55D3' }}>
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1, fontWeight: 'bold', borderRadius: '10px', padding: '5px', color: 'white' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Blog</Link>
        </Typography>
        <IconButton
          aria-label="account of current user"
          aria-controls="user-menu"
          aria-haspopup="true"
          color="inherit"
          component={Link}
          to="/login"
        >
          <LockOpenIcon style={{ fontSize: '32px', color: 'white' }} />
          <span style={{ marginLeft: '5px' }}>Iniciar Sesión</span>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
