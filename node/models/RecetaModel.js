import db from "../database/db.js";
import { DataTypes } from "sequelize";
import RecetaIngredienteModel from "./RecetaIngredienteModel.js"; 
import IngredienteModel from "./IngredienteModel.js"; 

const RecetaModel = db.define('receta', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    categoria: { type: DataTypes.STRING },
    dificultad: { type: DataTypes.STRING },
    tiempo_preparacion: { type: DataTypes.INTEGER },
    porciones: { type: DataTypes.INTEGER },
    notas: { type: DataTypes.TEXT },
    tipo: { type: DataTypes.STRING },
});

// Relaciones
RecetaModel.belongsToMany(IngredienteModel, { through: RecetaIngredienteModel, foreignKey: 'receta_id' });
IngredienteModel.belongsToMany(RecetaModel, { through: RecetaIngredienteModel, foreignKey: 'ingrediente_id' });

export default RecetaModel;
