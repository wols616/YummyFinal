import express from "express";
import {
    getAllPasos,
    //getPaso,
    createPaso,
    updatePaso,
    deletePaso,
    deleteAllPasos
} from "../controllers/RecetaController.js";

const router = express.Router();

// Rutas para usuarios
router.get("/:id", getAllPasos);
//router.get("/:id", getPaso);
router.post("/", createPaso);
router.put("/:id", updatePaso);
router.delete("/:receta_id", deleteAllPasos);
router.delete("/:id", deletePaso);

export default router;
