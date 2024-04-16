import PublicacionModel from '../models/publicacionesModels.js';
// Obtener todas las publicaciones
export const getPublicaciones = async (req, res) => {
  try {
    const publicaciones = await PublicacionModel.find();
    res.json(publicaciones);
  } catch (error) {
    console.error('Error al obtener publicaciones:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Obtener una publicación por su ID
export const getPublicacionById = async (req, res) => {
  const id = req.params.id;
  try {
    const publicacion = await PublicacionModel.findById(id);
    if (!publicacion) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    }
    res.json(publicacion);
  } catch (error) {
    console.error('Error al obtener publicación:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Crear una nueva publicación
export const createPublicacion = async (req, res) => {
  try {
    const { autor, texto, imagen, fecha, meGusta } = req.body;
    const nuevaPublicacion = new PublicacionModel({
      autor,
      texto,
      imagen,
      fecha,
      meGusta
    });
    await nuevaPublicacion.save();
    res.status(201).json({ message: 'Publicación creada correctamente' });
  } catch (error) {
    console.error('Error al crear publicación:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Actualizar una publicación por su ID
export const updatePublicacion = async (req, res) => {
  const id = req.params.id;
  try {
    await PublicacionModel.findByIdAndUpdate(id, req.body);
    res.json({ message: 'Publicación actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar publicación:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Eliminar una publicación por su ID
export const deletePublicacion = async (req, res) => {
  const id = req.params.id;
  try {
    await PublicacionModel.findByIdAndDelete(id);
    res.json({ message: 'Publicación eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar publicación:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};


// Obtener publicaciones por autor
export const getPublicacionesByAutor = async (req, res) => {
  const autor = req.params.autor;
  try {
    const publicaciones = await PublicacionModel.find({ autor });
    res.json(publicaciones);
  } catch (error) {
    console.error('Error al obtener publicaciones por autor:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
