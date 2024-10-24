import db from "../database/db.js";
import { DataTypes } from "sequelize";
import IngredienteModel from "./IngredienteModel.js";

const RecetaIngredienteModel = db.define('receta_ingrediente', {
    receta_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'receta',
            key: 'id',
        },
    },
    ingrediente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: IngredienteModel,
            key: 'id',
        },
    },
    
}, {
    tableName: 'receta_ingrediente'
});

// Aquí defines la asociación
RecetaIngredienteModel.belongsTo(IngredienteModel, {
    foreignKey: 'ingrediente_id',  // Clave foránea que referencia al ingrediente
    targetKey: 'id',               // La clave primaria en IngredienteModel
});

export default RecetaIngredienteModel;
