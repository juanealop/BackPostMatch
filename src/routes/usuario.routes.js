import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
} from "../controller/usuario.controller.js";

const router = Router();


// get
router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuarioById);

// post
router.post("/usuarios", createUsuario);

// put
router.put("/usuarios/:id", updateUsuario);

// delete
router.delete("/usuarios/:id", deleteUsuario);

export default router;
