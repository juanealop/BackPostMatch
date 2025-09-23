import { Partido } from "../model/Partido.js"

export const getPartidos = async (req,res) => {
  const partidos = await Partido.findAll();
  return res.json(partidos);
}

export const createPartido = async (req,res) => {
  const newPartido = await Partido.create(req.body);
  return res.json(newPartido);
}

export const updatePartido = async (req,res) => {
  const id = req.params.id;
  const partido = await Partido.findByPk(id);

  try {
    await partido.update(req.body);
  } catch(error) {
    console.error("Error:",error);
  }
  return res.json(partido);
}

export const deletePartido = async (req,res) => {
  const id = req.params.id;
  const partido = await Partido.findByPk(id);
  await partido.destroy();
  return res.sendStatus(204); // delete ok
}
