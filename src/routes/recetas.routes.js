import { Router } from "express";
import { borrarProducto, crearReceta,obtenerRecetas } from "../controllers/recetas.controllers";

const router = Router();

router.route("/recetas").get(obtenerRecetas).post(crearReceta);
router.route("/recetas/:id").delete(borrarProducto);

export default router;
