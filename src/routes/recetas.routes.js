import { Router } from "express";
import { borrarReceta, crearReceta,editarReceta,obtenerRecetas } from "../controllers/recetas.controllers";

const router = Router();

router.route("/recetas").get(obtenerRecetas).post(crearReceta);
router.route("/recetas/:id").delete(borrarReceta).put(editarReceta);

export default router;
