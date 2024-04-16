import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navegar = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/user/login', {
        correo: correo,
        contrasena: contrasena,
      });
      const { success, message, usuario } = response.data;
      if (success) {
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
        navegar('/ver');
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFC0CB',
            borderRadius: '20px',
            padding: '20px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#BA55D3', width: 80, height: 80 }}>
            <PersonIcon style={{ fontSize: 60 }} />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ borderRadius: '10px', padding: '5px' }}>
            Iniciar Sesión
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="correo"
            label="Correo Electrónico"
            name="correo"
            autoComplete="correo"
            autoFocus
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            InputProps={{
              style: { borderRadius: '10px' },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="contrasena"
            label="Contraseña"
            type="password"
            id="contrasena"
            autoComplete="current-password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            InputProps={{
              style: { borderRadius: '10px' },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#BA55D3', '&:hover': { backgroundColor: '#9C27B0' } }}
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>

        </Box>
        <Link to="/Registrate" style={{ display: 'block', marginTop: '10px', textAlign: 'center', color: '#007bff' }}>Registrarse</Link>

      </Container>
    </>
  );
}

export default Login;
