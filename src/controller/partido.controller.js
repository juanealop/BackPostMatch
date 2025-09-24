import { Partido } from "../model/Partido.js"

export const getPartidos = async (req,res) => {
  try {
    const partidos = await Partido.findAll();
    return res.json(partidos);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const getPartidoById = async (req,res) => {
  const id = req.params.id;
  try {
    const partido = await Partido.findByPk(id);
    if(!partido)
      return res.status(404).json({"mensaje": `Error: partido con id=${id} no encontrado`});
    return res.json(partido);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const createPartido = async (req,res) => {
  try {
    const newPartido = await Partido.create(req.body);
    return res.json(newPartido);
  } catch(error) {
    return res.status(500).json({mensaje: "Error creando el partido"});
  }
}

export const updatePartido = async (req,res) => {
  const id = req.params.id;
  try {
    const partido = await Partido.findByPk(id);
    if(!partido)
      return res.status(404).json({mensaje: `Error partido con id=${id} no existe`});
    await partido.update(req.body);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({mensaje: "Error al actualizar el partido"});
  }
  return res.json(partido);
}

export const deletePartido = async (req,res) => {
  const id = req.params.id;
  const partido = await Partido.findByPk(id);
  await partido.destroy();
  return res.sendStatus(204); // delete ok
}
