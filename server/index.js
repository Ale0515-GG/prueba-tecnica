import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { routerUsuarios } from "./routes/usuarioRouters.js";
import { routerPublicaciones } from "./routes/Publicaciones.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/pruebaTecnica", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));

app.use('/user', routerUsuarios);
app.use('/publicaciones', routerPublicaciones);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
