import express from "express";
import {
    getAllIngredientes,
    getIngrediente,
    createIngrediente,
    updateIngrediente,
    deleteIngrediente,
} from "../controllers/RecetaController.js";

const router = express.Router();

// Rutas para ingredientes
router.get("/", getAllIngredientes);
router.get("/:id", getIngrediente);
router.post("/", createIngrediente);
router.put("/:id", updateIngrediente);
router.delete("/:id", deleteIngrediente);



export default router;
