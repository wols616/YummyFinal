import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UsuarioModel = db.define('usuarios', {
    nombre: { type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    correo: {type: DataTypes.STRING},
    contrasena: {type: DataTypes.STRING}
})

export default UsuarioModel