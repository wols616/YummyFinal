import db from "../database/db.js";
import { DataTypes } from "sequelize";

const IngredienteModel = db.define('ingrediente', {
    nombre: { type: DataTypes.STRING, allowNull: false },
}, {
    tableName: 'ingrediente' // Especifica el nombre exacto de la tabla porque por alguna razón estaba agarrando ingredientes
});

export default IngredienteModel;
