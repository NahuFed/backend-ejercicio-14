import { Schema, model } from "mongoose";

const ingredientesSchema = new Schema({
  ingrediente: {
    type: String,
    required: true,
  },
});

const pasosSchema = new Schema({
  paso: {
    type: String,
    required: true,
  },
});

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    unique: true,
  },
  complejidad: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  ingredientes: [ingredientesSchema],
  pasos: [pasosSchema],
});

const Receta = model("receta", recetaSchema);

export default Receta;
