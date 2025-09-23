import { Usuario } from "../model/Usuario.js";

export const getUsuarios = async (req,res) => {
  const usuarios = await Usuario.findAll();
  return res.json(usuarios);
}

export const createUsuario = async (req,res) => {
  const newUsuario = await Usuario.create(req.body);
  return res.json(newUsuario);
}

export const updateUsuario = async (req,res) => {
  const id = req.params.id;
  const usuario = Usuario.findByPk(id);
  
  try {
    await usuario.update(req.body);
  } catch(error) {
    console.error("Error:",error);
  }
  return res.json(usuario);
}

export const deleteUsuario = async (req,res) => {
  const id = req.params.id;
  const usuario = await Usuario.findByPk(id);
  await usuario.destroy();
  return res.sendStatus(204); // delete ok
}

