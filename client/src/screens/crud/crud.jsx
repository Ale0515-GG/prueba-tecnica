import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { format } from 'date-fns';
import NavbarAdministrador from '../NarbarAdministrador/NarbarAdministrador';

const Crud = () => {
  const userData = JSON.parse(sessionStorage.getItem('usuario'));

  const [nuevaPublicacion, setNuevaPublicacion] = useState({
    autor: userData ? userData.usuario : '',
    texto: '',
    imagen: '',
  });

  const [publicaciones, setPublicaciones] = useState([]);
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/publicaciones/autor/${userData.usuario}`);
        setPublicaciones(response.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };
    obtenerPublicaciones();
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaPublicacion({
      ...nuevaPublicacion,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (publicacionSeleccionada) {
        await axios.put(`http://localhost:3001/publicaciones/${publicacionSeleccionada}`, nuevaPublicacion);
        setPublicacionSeleccionada(null);
      } else {
        await axios.post('http://localhost:3001/publicaciones', nuevaPublicacion);
      }
      setNuevaPublicacion({
        autor: userData ? userData.nombreUsuario : '',
        texto: '',
        imagen: '',
      });
      const response = await axios.get(`http://localhost:3001/publicaciones/autor/${userData.usuario}`);
      setPublicaciones(response.data);
    } catch (error) {
      console.error('Error al crear/actualizar la publicación:', error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/publicaciones/${id}`);
      const response = await axios.get(`http://localhost:3001/publicaciones/autor/${userData.usuario}`);
      setPublicaciones(response.data);
    } catch (error) {
      console.error('Error al eliminar la publicación:', error);
    }
  };

  const handleModificar = (id) => {
    const publicacion = publicaciones.find((pub) => pub._id === id);
    if (publicacion) {
      setPublicacionSeleccionada(publicacion._id);
      setNuevaPublicacion({
        autor: publicacion.autor,
        texto: publicacion.texto,
        imagen: publicacion.imagen,
      });
    }
  };

  return (
    <>
      <NavbarAdministrador />
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '20px', backgroundColor: '#FFC0CB' }}>
              <Typography variant="h6" gutterBottom style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                {publicacionSeleccionada ? 'Modificar publicación' : 'Crear nueva publicación'}
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      name="autor"
                      placeholder="Autor"
                      value={nuevaPublicacion.autor}
                      onChange={handleInputChange}
                      required
                      disabled
                      style={{ width: '100%', padding: '10px', borderRadius: '10px' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <textarea
                      name="texto"
                      placeholder="Texto de la publicación"
                      value={nuevaPublicacion.texto}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', padding: '10px', borderRadius: '10px', textAlign: 'center', fontSize: '1.2em' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="url"
                      name="imagen"
                      placeholder="URL de la imagen"
                      value={nuevaPublicacion.imagen}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', padding: '10px', borderRadius: '10px', textAlign: 'center', fontSize: '1.2em' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#BA55D3', color: 'black', border: 'none', borderRadius: '10px' }}>
                      {publicacionSeleccionada ? 'Modificar Publicación' : 'Crear Publicación'}
                    </button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {publicaciones.map((publicacion) => (
            <Grid item xs={12} key={publicacion._id}>
              <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', borderRadius: '20px', backgroundColor: '#FFC0CB' }}>
                <Typography variant="h6" gutterBottom style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                  {publicacion.autor}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {format(new Date(publicacion.fecha), 'dd/MM/yyyy HH:mm')}
                </Typography>
                <Typography variant="body1" paragraph>
                  {publicacion.texto}
                </Typography>
                <button style={{ padding: '8px 16px', backgroundColor: '#BA55D3', color: 'black', border: 'none', borderRadius: '10px', marginRight: '10px' }} onClick={() => handleEliminar(publicacion._id)}>Eliminar</button>
                <button style={{ padding: '8px 16px', backgroundColor: '#BA55D3', color: 'black', border: 'none', borderRadius: '10px' }} onClick={() => handleModificar(publicacion._id)}>Modificar</button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Crud;
