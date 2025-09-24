import { UniqueConstraintError } from "sequelize"; // excepcion para email duplicado en funcion createUsuario
import { Usuario } from "../model/Usuario.js";

/** Code errors
* SUCCESSFUL RESPONSES
  * 201 created
  * 204 no content

* CLIENT ERRORS
  * 400 bad request
  * 404 not found

* SERVER ERRORS
  * 500 internal server error
*/

export const getUsuarios = async (req,res) => {
  try {
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const getUsuarioById = async (req,res) => {
  const { id } = req.params;
  if(!id || isNaN(Number(id)) || id <= 0) return res.status(400).json({"mensaje":`Error: id=${id} invalido`});

  try {
    const usuario = await Usuario.findByPk(id);
    if(!usuario) return res.status(404).json({"mensaje": `Error: usuario con id=${id} no encontrado`});

    return res.json(usuario);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const createUsuario = async (req,res) => {
  try {
    const newUsuario = await Usuario.create(req.body);
    return res.status(201).json(newUsuario);
  } catch(error) {
    console.error("Error:",error);
    if(error instanceof UniqueConstraintError) return res.status(400).json({"mensaje": `Error: el email=${req.body.email} ya esta registrado`});
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const updateUsuario = async (req,res) => {
  const id = req.params.id;
  
  try {
    const usuario = await Usuario.findByPk(id);
    if(!usuario) return res.status(404).json({"mensaje": `Error: usuario con id=${id} no existe`});

    await usuario.update(req.body);
    return res.json(usuario);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const deleteUsuario = async (req,res) => {
  const id = req.params.id;
  try {
    const usuario = await Usuario.findByPk(id);
    if(!usuario) return res.status(404).json({"mensaje": `Error: usuario con id=${id} no existe`});

    await usuario.destroy();
    return res.sendStatus(204);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

