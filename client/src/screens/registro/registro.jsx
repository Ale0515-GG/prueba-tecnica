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

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState(''); 
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();
    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/user/create', {
        nombreUsuario: nombre,
        correo: correo,
        usuario: usuario, 
        contrasena: contrasena,
      });

      if (response.data.message) {
        alert('Usuario registrado correctamente');
        navigate('/login');
      } else {
        alert('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
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
          Registro
        </Typography>
        <Box component="form" onSubmit={handleRegistro} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            autoComplete="nombre"
            autoFocus
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            InputProps={{
              style: { borderRadius: '10px' },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="correo"
            label="Correo Electrónico"
            name="correo"
            autoComplete="email"
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
            id="usuario"
            label="Usuario"
            name="usuario"
            autoComplete="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
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
            autoComplete="new-password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            InputProps={{
              style: { borderRadius: '10px' },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmarContrasena"
            label="Confirmar Contraseña"
            type="password"
            id="confirmarContrasena"
            autoComplete="new-password"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            InputProps={{
              style: { borderRadius: '10px' },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#BA55D3', '&:hover': { backgroundColor: '#9C27B0' } }}
          >
            Registrar
          </Button>
          <Typography variant="body2" align="center">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Registro;
