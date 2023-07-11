import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  obtenerRecetas,
  obtenerunaReceta,
} from "../controllers/recetas.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/recetas")
  .get(obtenerRecetas)
  .post([check("nombreReceta").notEmpty().withMessage('El nombre del producto es obligatorio')], crearReceta);
router
  .route("/recetas/:id")
  .delete(borrarReceta)
  .put(editarReceta)
  .get(obtenerunaReceta);

export default router;
