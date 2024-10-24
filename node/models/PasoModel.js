import db from "../database/db.js";
import { DataTypes } from "sequelize";

const PasoModel = db.define('paso', {
    receta_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'receta', // Se puede cambiar a 'receta' si estás utilizando la cadena en lugar de la referencia al modelo
            key: 'id',
        },
    },
    descripcion: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'paso' // Especifica el nombre exacto de la tabla porque por alguna razón estaba agarrando pasos
});

export default PasoModel;
