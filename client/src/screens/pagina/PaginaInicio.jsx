import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import NavbarAdministrador from '../NarbarAdministrador/NarbarAdministrador';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { format } from 'date-fns';

const PaginaInicio = () => {
  const publicaciones = [
    {
      id: 1,
      autor: 'Usuario 1',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere...',
      imagen: 'https://via.placeholder.com/300',
      fecha: new Date(),
      meGusta: 10
    },
    {
      id: 2,
      autor: 'Usuario 2',
      texto: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imagen: 'https://via.placeholder.com/300',
      fecha: new Date(),
      meGusta: 20
    },
  ];

  return (
    <>
    <NavbarAdministrador/>
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {publicaciones.map((publicacion) => (
          <Grid item xs={12} key={publicacion.id}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6" gutterBottom>
                {publicacion.autor}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {format(publicacion.fecha, 'dd/MM/yyyy HH:mm')}
              </Typography>
              <Typography variant="body1" paragraph>
                {publicacion.texto}
              </Typography>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={publicacion.imagen}
                  alt="Imagen de la publicación"
                />
                <CardContent>
                  {/* Contenido adicional de la publicación */}
                </CardContent>
                <CardActions>
                  <IconButton aria-label="Me gusta">
                    <ThumbUpAltIcon />
                  </IconButton>
                  <Typography variant="body2" color="textSecondary">
                    {publicacion.meGusta} Me gusta
                  </Typography>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default PaginaInicio;
