import express from "express";
import {
  getAllRecetas,
  getReceta,
  createReceta,
  updateReceta,
  //deleteReceta,
  deleteRecetaCascade,
  getAllRecetasBuscadas,
  deleteAllIngredientes
} from "../controllers/RecetaController.js";

const router = express.Router();

// Rutas para recetas
router.get("/", getAllRecetas);
router.get("/:id", getReceta);
router.post("/", createReceta);
router.put("/:id", updateReceta);
//router.delete("/:id", deleteReceta);
router.delete("/:receta_id", deleteRecetaCascade)
router.delete("/ingrediente/:receta_id", deleteAllIngredientes)
router.get("/busqueda/:nombre", getAllRecetasBuscadas)

export default router;
