import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  editarUsuario,
  obtenerUsuarios,
  obtenerunUsuario,
  login,
} from "../controllers/usuarios.controllers";
import { validarUsuario } from "../helpers/validarUsuario";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(validarUsuario, crearUsuario);
router
  .route("/usuarios/:id")
  .delete(borrarUsuario)
  .put(validarUsuario,editarUsuario)
  .get(obtenerunUsuario)
router.post("/",login);
export default router;
