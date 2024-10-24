import express from "express";
import {
  getAllRecetasUsuarios,
  createRecetaUsuario,
  deleteRecetaUsuario
} from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/:id", getAllRecetasUsuarios)
router.post("/", createRecetaUsuario);
router.delete("/:id", deleteRecetaUsuario);

export default router;
