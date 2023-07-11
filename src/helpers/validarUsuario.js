import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

export const  validarUsuario =     [
    check("nombreUsuario")
      .notEmpty()
      .withMessage("El nombre del usuario es obligatorio")
      .isLength({min:2,max:100})
      .withMessage("El nombre del usuario debe contener entre 2 y 100 caracteres"),
    check("password")
    .notEmpty()
    .withMessage("La contraseña  es obligatoria ")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,16}$/)
    .withMessage("La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un dígito,un carácter especial y debe tener una longitud de entre 8 y 16 caracteres"),
    check("email")
    .notEmpty()
    .withMessage("El email  es obligatorio ")
    .matches(/\S+@\S+\.\S+/)
    .withMessage("El formato de email es inválido"),
    (req,res,next)=>{resultadoValidacion(req,res,next)}
  ]
