import bcrypt from 'bcrypt';
import User from '../models/usuarioModels.js';

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Obtener un usuario por su ID
export const getUsuariosUno = async (req, res) => {
  const id = req.params.id;
  try {
    const usuario = await User.findById(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Crear un nuevo usuario
export const postUsuarios = async (req, res) => {
  try {
    const { nombreUsuario, usuario, tipoUsuario, contrasena, apellidoP, apellidoM, correo } = req.body;
    const usuarioExistente = await User.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const nuevoUsuario = new User({
      nombreUsuario,
      usuario,
      tipoUsuario,
      contrasena: hashedPassword,
      apellidoP,
      apellidoM,
      correo
    });
    await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Actualizar un usuario por su ID
export const putUsuarios = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndUpdate(id, req.body);
    res.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Eliminar un usuario por su ID
export const deleteUsuarios = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

//login
export const login = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await User.findOne({ correo });
    if (usuario) {
      const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);
      if (passwordMatch) {

        res.json({ 
          success: true, 
          message: "Inicio de sesión exitoso", 
          usuario: usuario 
        });
      } else {
        res.status(401).json({ success: false, message: "Contraseña incorrecta" });
      }
    } else {
      res.status(401).json({ success: false, message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ success: false, message: "Error del servidor" });
  }
};
