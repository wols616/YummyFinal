import express from "express";
import {
    getAllRecetaIngredientes,
    createRecetaIngrediente,
    deleteRecetaIngrediente,
} from "../controllers/RecetaController.js";

const router = express.Router();

// Rutas para usuarios
router.get("/:id", getAllRecetaIngredientes);
router.post("/", createRecetaIngrediente);
//router.put("/:id", updateUsuario);
router.delete("/recetas/:receta_id/ingredientes/:ingrediente_id", deleteRecetaIngrediente);

export default router;
