import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  obtenerRecetas,
  obtenerunaReceta,
} from "../controllers/recetas.controllers";

import { validarReceta } from "../helpers/validarReceta";

const router = Router();

router.route("/recetas").get(obtenerRecetas).post(validarReceta, crearReceta);
router
  .route("/recetas/:id")
  .delete(borrarReceta)
  .put(validarReceta, editarReceta)
  .get(obtenerunaReceta);

export default router;
