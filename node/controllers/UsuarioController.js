import { where } from "sequelize";
import UsuarioModel from "../models/UsuarioModel.js";
import FavoritoModel from "../models/FavoritoModel.js";
import RecetaUsuarioModel from "../models/RecetaUsuarioModel.js";

//Métodos CRUD

//Obtener todos los registros
export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.findAll();
    res.json(usuarios);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Obtener un registro
export const getUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioModel.findAll({
      where: {
        id:req.params.id
      }
    })
    res.json(usuario[0])
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Crear un registro
export const createUsuario = async (req, res) => {
  try {
    await UsuarioModel.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateUsuario = async (req, res) => {
  try {
    await UsuarioModel.update(req.body, {
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
export const deleteUsuario = async (req, res) => {
  try {
    await UsuarioModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Obtener todos los favoritos
export const getAllFavoritos = async (req, res) => {
  try {
    const favoritos = await FavoritoModel.findAll()
    res.json(favoritos)
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Obtener los favoritos
export const getFavoritos = async (req, res) => {
  try {
    const favoritos = await FavoritoModel.findAll({
      where: {
        usuario_id:req.params.id
      }
    })
    res.json(favoritos)
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Agregar favorito
export const createFavorito = async (req, res) => {
  try {
    await FavoritoModel.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar Favorito
export const deleteFavorito = async (req, res) => {
  try {
    await FavoritoModel.destroy({
      where: { receta_id: req.params.id },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Obtener todas las recetas de un usuario
export const getAllRecetasUsuarios = async (req, res) => {
  try {
    const recetasUsuarios = await RecetaUsuarioModel.findAll({
      where: {
        usuario_id: req.params.id
      }
    })
    res.json(recetasUsuarios)
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Agregar una receta a un usuario
export const createRecetaUsuario = async (req, res) => {
  try {
    await RecetaUsuarioModel.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};


//Eliminar Receta de usuario
export const deleteRecetaUsuario = async (req, res) => {
  try {
    await RecetaUsuarioModel.destroy({
      where: { receta_id: req.params.id },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};