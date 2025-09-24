import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  getReviewsByIdUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario
} from "../controller/usuario.controller.js";

const router = Router();


// get
router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuarioById);
router.get("/usuarios/:idUsuario/reviews", getReviewsByIdUsuario);

// post
router.post("/usuarios", createUsuario);

// put
router.put("/usuarios/:id", updateUsuario);

// delete
router.delete("/usuarios/:id", deleteUsuario);

export default router;
