import express from "express";
import {
  getAllRecetas,
  getReceta,
  createReceta,
  updateReceta,
  //deleteReceta,
  deleteRecetaCascade,
  getAllRecetasBuscadas
} from "../controllers/RecetaController.js";

const router = express.Router();

// Rutas para recetas
router.get("/", getAllRecetas);
router.get("/:id", getReceta);
router.post("/", createReceta);
router.put("/:id", updateReceta);
//router.delete("/:id", deleteReceta);
router.delete("/:receta_id", deleteRecetaCascade)
router.get("/busqueda/:nombre", getAllRecetasBuscadas)

export default router;
