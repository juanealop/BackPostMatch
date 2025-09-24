import { Router } from "express";
import {
  getPartidos,
  getPartidoById,
  getReviewsByIdPartido,
  createPartido,
  updatePartido,
  deletePartido
} from "../controller/partido.controller.js";

const router = Router();

// get
router.get("/partidos", getPartidos);
router.get("/partidos/:id", getPartidoById);
router.get("/partidos/:idPartido/reviews", getReviewsByIdPartido);

// post
router.post("/partidos", createPartido);

// put
router.put("/partidos/:id", updatePartido);

// delete
router.delete("/partidos/:id", deletePartido);

export default router;
