import db from "../database/db.js";
import { DataTypes } from "sequelize";

// Definir el modelo Favorito
const RecetaUsuarioModel = db.define('recetas_usuarios', {
    
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // Nombre de la tabla de usuarios
            key: 'id'          // Clave primaria de la tabla de usuarios
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    receta_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'recetas',   // Nombre de la tabla de recetas
            key: 'id'           // Clave primaria de la tabla de recetas
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'recetas_usuarios',
    timestamps: false
});

export default RecetaUsuarioModel;
