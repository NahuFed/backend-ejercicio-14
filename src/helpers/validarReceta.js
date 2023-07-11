import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

export const  validarReceta =     [
    check("nombreReceta")
      .notEmpty()
      .withMessage("El nombre de la receta es obligatorio")
      .isLength({min:2,max:100})
      .withMessage("El nombre la receta debe contener entre 2 y 100 caracteres"),
    check("complejidad")
    .notEmpty()
    .withMessage("La complejidad  es obligatoria "),
    check("imagen")
    .notEmpty()
    .withMessage("La imagen  es obligatoria ")
    .matches(/\.(jpe?g|png|gif)$/i)
    .withMessage("la URL de la imagen debe terminar en .jpeg,jpg, png o gif"),
    check("categoria")
    .notEmpty()
    .withMessage("La categoria  es obligatoria ")
    .isIn(["Sándwiches y wraps","Ensaladas rápidas","Platos de pasta rápidos","Salteados","Tacos y burritos","Omelettes y tortillas","Recetas de una olla","Pizzas caseras rápidas","Platos de arroz rápidos","Recetas de microondas","Postres de frutas y crema","Pasteles caseros","Postres helados","Postres con chocolate","Tartas de frutas"])
    .withMessage(" la categoria debe ser una de las siguientes opciones [Sándwiches y wraps, Ensaladas rápidas, Platos de pasta rápidos, Salteados, Tacos y burritos, Omelettes y tortillas, Recetas de una olla, Pizzas caseras rápidas, Platos de arroz rápidos, Recetas de microondas, Postres de frutas y crema, Pasteles caseros, Postres helados, Postres con chocolate, Tartas de frutas]"),
    (req,res,next)=>{resultadoValidacion(req,res,next)}
  ]
