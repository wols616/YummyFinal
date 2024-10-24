import express from "express";
import {
  getAllFavoritos,
  getFavoritos,
  createFavorito,
  deleteFavorito
} from "../controllers/UsuarioController.js";

const router = express.Router();

// Rutas para usuarios
router.get("/", getAllFavoritos)
router.get("/:id", getFavoritos);
router.post("/", createFavorito);
router.delete("/:id", deleteFavorito);

export default router;
