// models/index.js
import db from "../database/db.js";
import RecetaModel from './RecetaModel.js';
import IngredienteModel from './IngredienteModel.js';
import PasoModel from './PasoModel.js';
import RecetaIngredienteModel from './RecetaIngredienteModel.js';

// Definir relaciones
RecetaModel.hasMany(PasoModel, { foreignKey: 'receta_id' });
PasoModel.belongsTo(RecetaModel, { foreignKey: 'receta_id' });

RecetaModel.belongsToMany(IngredienteModel, { through: RecetaIngredienteModel, foreignKey: 'receta_id' });
IngredienteModel.belongsToMany(RecetaModel, { through: RecetaIngredienteModel, foreignKey: 'ingrediente_id' });

// Exportar todos los modelos
export {
    RecetaModel,
    IngredienteModel,
    PasoModel,
    RecetaIngredienteModel,
    db // Exportar la conexión a la base de datos
};

