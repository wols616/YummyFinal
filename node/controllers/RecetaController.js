import { where } from "sequelize";
import db from "../database/db.js";
import { Op } from 'sequelize';
import RecetaModel from "../models/RecetaModel.js";
import IngredienteModel from "../models/IngredienteModel.js";
import PasoModel from "../models/PasoModel.js";
import RecetaIngredienteModel from "../models/RecetaIngredienteModel.js";
import FavoritoModel from "../models/FavoritoModel.js";
import RecetaUsuarioModel from "../models/RecetaUsuarioModel.js";


//Obtener todos los registros
export const getAllRecetas = async (req, res) => {
  try {
    const recetas = await RecetaModel.findAll();
    res.json(recetas)
  } catch (error) {
    res.json({message: error.message})
  }
}

//Obtener un registro
export const getReceta = async (req, res) => {
  try {
    const receta = await RecetaModel.findAll({
      where: {
        id:req.params.id
      }
    })
    res.json(receta[0])
  } catch (error) {
    res.json({ message: error.message });
  }
}

//Crear un registro
export const createReceta = async (req, res) => {
  try {
    const nuevaReceta = await RecetaModel.create(req.body);
    res.status(201).json(nuevaReceta)
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateReceta = async (req, res) => {
  try {
    await RecetaModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Eliminar un usuario
export const deleteReceta = async (req, res) => {
  try {
    await RecetaModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//INGREDIENTES

//Obtener todos los ingredientes
export const getAllIngredientes = async (req, res) => {
  try {
    const ingredientes = await IngredienteModel.findAll();
    res.json(ingredientes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Obtener un ingrediente
export const getIngrediente = async (req, res) => {
  try {
    const ingrediente = await IngredienteModel.findOne({
      where: { id: req.params.id }
    });
    res.json(ingrediente);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Agregar un nuevo ingrediente
export const createIngrediente = async (req, res) => {
  try {
    const nuevoIngrediente = await IngredienteModel.create(req.body);
    res.status(201).json(nuevoIngrediente)
  } catch (error) {
    res.status(500).json({ message: error.message }); // Cambié a 500 para errores del servidor
  }
};

//Actualizar un ingrediente
export const updateIngrediente = async (req, res) => {
  try {
    await IngredienteModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Ingrediente actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un ingrediente
export const deleteIngrediente = async (req, res) => {
  try {
    await IngredienteModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Ingrediente eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar todos los ingredientes
export const deleteAllIngredientes = async (req, res) => {
  try {
    await RecetaIngredienteModel.destroy({
      where: { receta_id: req.params.receta_id },
    });
    res.json({
      message: "Ingredientes eliminados correctamente",
    });
  } catch (error) {
    res.json({ message: "a" + error.message });
  }
};

//CRUD PASOS

//Obtener todos los pasos de una receta
export const getAllPasos = async (req, res) => {
  try {
    const pasos = await PasoModel.findAll({
      where: {
        receta_id:req.params.id
      }
    });
    res.json(pasos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Obtener un paso
// export const getPaso = async (req, res) => {
//   try {
//     const paso = await PasoModel.findAll({
//       where: {
//         id:req.params.id
//       }
//     })
//     res.json(usuario[0])
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

//Crear un paso
export const createPaso = async (req, res) => {
  try {
    await PasoModel.create(req.body);
    res.json({
      message: "Paso creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un paso
export const updatePaso = async (req, res) => {
  try {
    await PasoModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Paso actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un paso
export const deletePaso = async (req, res) => {
  try {
    await PasoModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Paso eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar todos los pasos
export const deleteAllPasos = async (req, res) => {
  try {
    await PasoModel.destroy({
      where: {receta_id: req.params.receta_id}
    });
    res.json({
      message: "Pasos eliminados correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//CRUD para RecetaIngrediente

// Obtener todos los ingredientes de una receta
export const getAllRecetaIngredientes = async (req, res) => {
  try {
    const recetaIngredientes = await RecetaIngredienteModel.findAll({
      where: { receta_id: req.params.id },
      include: [{
        model: IngredienteModel,
        attributes: ['id', 'nombre'], // Especifica los atributos que deseas devolver del modelo Ingrediente
      }],
    });
    res.json(recetaIngredientes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createRecetaIngrediente = async (req, res) => {
  try {
    const nuevaRecetaIngrediente = await RecetaIngredienteModel.create(req.body);
    res.json({
      message: "Relación Receta-Ingrediente creada correctamente",
      recetaIngrediente: nuevaRecetaIngrediente
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteRecetaIngrediente = async (req, res) => {
  try {
    await RecetaIngredienteModel.destroy({
      where: {
        receta_id: req.params.receta_id,
        ingrediente_id: req.params.ingrediente_id
      }
    });
    res.json({
      message: "Relación Receta-Ingrediente eliminada correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteRecetaCascade = async (req, res) => {
  const t = await db.transaction(); // Inicia la transacción
  try {
    // Elimina los ingredientes relacionados
    await RecetaIngredienteModel.destroy({
      where: { receta_id: req.params.receta_id },
      transaction: t
    });

    // Elimina los pasos relacionados
    await PasoModel.destroy({
      where: { receta_id: req.params.receta_id },
      transaction: t
    });

    // Elimina los favoritos relacionados
    await FavoritoModel.destroy({
      where: { receta_id: req.params.receta_id },
      transaction: t
    });

    // Elimina los registros de receta_usuario relacionados
    await RecetaUsuarioModel.destroy({
      where: { receta_id: req.params.receta_id },
      transaction: t
    });

    // Finalmente, elimina la receta
    await RecetaModel.destroy({
      where: { id: req.params.receta_id },
      transaction: t
    });

    // Si todas las eliminaciones tuvieron éxito, confirma la transacción
    await t.commit();

    // Envía una única respuesta
    res.json({
      message: "Receta y todos los registros relacionados eliminados correctamente",
    });
  } catch (error) {
    // Si ocurre un error, revierte la transacción
    await t.rollback();
    res.status(500).json({ message: error.message });
  }
}

// Obtener todas las recetas buscadas
export const getAllRecetasBuscadas = async (req, res) => {
  try {
    const busqueda = req.params.nombre
    const recetasBuscadas = await RecetaModel.findAll({
      where: { 
        nombre: {
          [Op.like]: `${busqueda}%`
        }
      }
    });
    //console.log("RECETAS BUSCADAS: ", recetasBuscadas)
    res.json(recetasBuscadas);
  } catch (error) {
    res.json({ message: error.message });
  }
};
