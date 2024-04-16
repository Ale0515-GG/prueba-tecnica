import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SearchIcon from '@mui/icons-material/Search';
import { format } from 'date-fns';
import NavbarAdministrador from '../NarbarAdministrador/NarbarAdministrador';

const InicioAdmin = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [filtroUsuario, setFiltroUsuario] = useState('');

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const response = await axios.get('http://localhost:3001/publicaciones');
        setPublicaciones(response.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };
    obtenerPublicaciones();
  }, []);

  const handleMeGusta = async (id) => {
    try {
      const updatedPublicaciones = publicaciones.map((publicacion) => {
        if (publicacion._id === id) {
          return { ...publicacion, meGusta: publicacion.meGusta + 1 };
        }
        return publicacion;
      });
      setPublicaciones(updatedPublicaciones);
      await axios.put(`http://localhost:3001/publicaciones/${id}/like`);
    } catch (error) {
      console.error('Error al dar Me gusta:', error);
    }
  };

  const filtrarPublicaciones = (publicacion) => {
    const filtroNombreUsuario = filtroUsuario.trim().toLowerCase();

    return !filtroNombreUsuario || publicacion.autor.toLowerCase().includes(filtroNombreUsuario);
  };

  return (
    <>
      <NavbarAdministrador />
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ marginBottom: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '20px', backgroundColor: '#FFC0CB' }}>
              <Typography variant="h5" gutterBottom style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>
                Filtros de Búsqueda
              </Typography>
              <form>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <IconButton disabled>
                      <SearchIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <input
                      type="text"
                      placeholder="Buscar por nombre de usuario"
                      value={filtroUsuario}
                      onChange={(e) => setFiltroUsuario(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '10px',
                        fontSize: '16px',
                        textAlign: 'center',
                      }}
                    />
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          {publicaciones.filter(filtrarPublicaciones).map((publicacion) => (
            <Grid item xs={12} key={publicacion._id}>
              <Paper elevation={3} style={{ padding: '20px', borderRadius: '20px', backgroundColor: '#FFC0CB' }}>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>
                  {publicacion.autor}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>
                  {format(new Date(publicacion.fecha), 'dd/MM/yyyy HH:mm')}
                </Typography>
                <Typography variant="body1" paragraph style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>
                  {publicacion.texto}
                </Typography>
                <IconButton aria-label="Me gusta" onClick={() => handleMeGusta(publicacion._id)} style={{ display: 'block', margin: '0 auto' }}>
                  <ThumbUpAltIcon />
                </IconButton>
                <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>
                  {publicacion.meGusta} Me gusta
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default InicioAdmin;
