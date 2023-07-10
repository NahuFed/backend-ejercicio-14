import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  obtenerRecetas,
  obtenerunaReceta,
} from "../controllers/recetas.controllers";

const router = Router();

router.route("/recetas").get(obtenerRecetas).post(crearReceta);
router
  .route("/recetas/:id")
  .delete(borrarReceta)
  .put(editarReceta)
  .get(obtenerunaReceta);

export default router;
