import { Review } from "../model/Review.js";
import { Partido } from "../model/Partido.js";
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

export const getReviews = async (req,res) => {
  try {
    const reviews = await Review.findAll({
      includes: {
        model: Usuario,
        as: "usuario",
        attribute: ["nombre","email","fotoPerfilUrl"]
      }
    });
    return res.json(reviews);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const getReviewById = async (req,res) => {
  const { id } = req.params;
  if(!id || isNaN(Number(id)) || id <= 0) return res.status(400).json({"mensaje":`Error: id=${id} invalido`});

  try {
    const review = await Review.findByPk(id,{
      includes: {
        model: Usuario,
        as: "usuario",
        attribute: ["nombre","email","fotoPerfilUrl"]
      }
    });
    if(!review) return res.status(404).json({"mensaje": `Error: la review con id=${id} no existe`});

    return res.json(review);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}


export const createReview = async (req,res) => {
  const { idUsuario, idPartido } = req.body; // se valida que los ids esten en un formato valido no letras, no negativos o 0, no falsys
  if(!idUsuario || isNaN(Number(idUsuario)) || idUsuario <= 0) return res.status(400).json({"mensaje":`Error: idUsuario=${idUsuario} invalido`});
  if(!idPartido || isNaN(Number(idPartido)) || idPartido <= 0) return res.status(400).json({"mensaje":`Error: idPartido=${idPartido} invalido`});

  try {
    const usuario = await Usuario.findByPk(idUsuario);
    const partido = await Partido.findByPk(idPartido);
    if(!usuario) return res.status(404).json({"mensaje": `Error: usuario con id=${idUsuario} no existe`});
    if(!partido) return res.status(404).json({"mensaje": `Error: partido con id=${idPartido} no existe`});

    const newReview = await Review.create(req.body);
    return res.status(201).json(newReview);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const updateReview = async (req,res) => {
  const { idUsuario, idPartido } = req.body;
  const { id } = req.params;
  if(!id || isNaN(Number(id)) || id <= 0) return res.status(400).json({"mensaje":`Error: id=${id} invalido`});
  if(!idUsuario || isNaN(Number(idUsuario)) || idUsuario <= 0) return res.status(400).json({"mensaje":`Error: idUsuario=${idUsuario} invalido`});
  if(!idPartido || isNaN(Number(idPartido)) || idPartido <= 0) return res.status(400).json({"mensaje":`Error: idPartido=${idPartido} invalido`});

  try {
    const review = await Review.findByPk(id);
    const usuario = await Usuario.findByPk(idUsuario);
    const partido = await Partido.findByPk(idPartido);
    if(!review) return res.status(404).json({"mensaje": `Error: review con id=${id} no existe`});
    if(!usuario) return res.status(404).json({"mensaje": `Error: usuario con idUsuario=${idUsuario} no existe`});
    if(!partido) return res.status(404).json({"mensaje": `Error: partido con idPartido=${idPartido} no existe`});

    await review.update(req.body);
    return res.json(review);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}

export const deleteReview = async (req,res) => {
  const { id } = req.params;
  if(!id || isNaN(Number(id)) || id <= 0) return res.status(400).json({"mensaje":`Error: id=${id} invalido`});

  try {
    const review = await Review.findByPk(id);
    if(!review) return res.status(404).json({"mensaje": `Error: review con id=${id} no existe`});

    await review.destroy();
    return res.sendStatus(204);
  } catch(error) {
    console.error("Error:",error);
    return res.status(500).json({"mensaje": "Error: mal funcionamiento de la base de datos"});
  }
}
