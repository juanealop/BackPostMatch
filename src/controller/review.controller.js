import { Review } from "../model/Review.js";
import { Partido } from "../model/Partido.js";
import { Usuario } from "../model/Usuario.js";

export const getReviews = async (req,res) => {
  try {
    const reviews = await Review.findAll();
    return res.json(reviews);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const getReviewsByIdPartido = async (req,res) => {
  const idPartido = req.params.idPartido;
  try {
    const partido = await Partido.findByPk(idPartido);
    if(!partido) return res.status(404).json({"mensaje": `Error: el partido con id=${idPartido} no existe`});
    
    const reviews = await Review.findAll({where: { idPartido: idPartido}}); // busca en la tabla Review todas las reviews de un partido
    return res.json(reviews);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const getReviewsByIdUsuario = async (req,res) => {
  const idUsuario = req.params.idUsuario;
  try {
    const usuario = await Usuario.findByPk(idUsuario);
    if(!usuario) return res.status(404).json({"mensaje": `Error: el usuario con id=${idUsuario} no existe`});

    const reviews = await Review.findAll({where: { idUsuario: idUsuario}}); // busca en la tabla Review todas las reviews de un usuario
    return res.json(reviews);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const createReview = async (req,res) => {
  const idUsuario = req.body.idUsuario;
  const idPartido = req.body.idPartido;
  try {
    const usuario = await Usuario.findByPk(idUsuario);
    const partido = await Partido.findByPk(idPartido);
    if(!usuario) return res.status(404).json({"mensaje": `Error: usuario con id=${idUsuario} no existe`});
    if(!partido) return res.status(404).json({"mensaje": `Error: partido con id=${idPartido} no existe`});

    const newReview = await Review.create(req.body);
    return res.status(201).json(newReview); // 201 codigo create exitoso
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const updateReview = async (req,res) => {
  const id = req.params.id;

  try {
    const review = await Review.findByPk(id);
    if(!review) return res.status(404).json({"mensaje": `Error: review con id=${id} no existe`});

    await review.update(req.body);
    return res.json(review);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const deleteReview = async (req,res) => {
  const id = req.params.id
  try {
    const review = await Review.findByPk(id);
    if(!review) return res.status(404).json({"mensaje": `Error: review con id=${id} no existe`});

    await review.destroy();
    return res.sendStatus(204); // delete ok
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}
