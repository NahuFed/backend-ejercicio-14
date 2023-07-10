import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    rol: {
      type: String,
      required: true
    }
  });
  
  const Usuario = model('Usuario', usuarioSchema);
  
export default Usuario