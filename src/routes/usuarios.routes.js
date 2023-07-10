import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  editarUsuario,
  obtenerUsuarios,
  obtenerunUsuario,
} from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(crearUsuario);
router
  .route("/usuarios/:id")
  .delete(borrarUsuario)
  .put(editarUsuario)
  .get(obtenerunUsuario);

export default router;
