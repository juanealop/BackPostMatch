import { Router } from "express";
import { getUsuarios, createUsuario, updateUsuario, deleteUsuario} from "../controller/usuario.controller.js";

const router = Router();


// get
router.get("/usuarios", getUsuarios);

// post
router.post("/usuarios", createUsuario);

// put
router.put("/usuarios/:id", updateUsuario);

// delete
router.delete("/usuarios/:id", deleteUsuario);

export default router;
