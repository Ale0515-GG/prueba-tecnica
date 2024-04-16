import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PublicacionSchema = new Schema({
  autor: String,
  texto: String,
  imagen: String,
  fecha: { type: Date, default: Date.now },
  meGusta: { type: Number, default: 0 }
});

const PublicacionModel = mongoose.model('Publicacion', PublicacionSchema);

export default PublicacionModel;
