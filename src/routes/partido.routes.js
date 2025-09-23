import { Router } from "express";
import { getPartidos, createPartido, updatePartido, deletePartido } from "../controller/partido.controller.js";

const router = Router();

// get
router.get("/partidos", getPartidos);

// post
router.post("/partidos", createPartido);

// put
router.put("/partidos/:id", updatePartido);

// delete
router.delete("/partidos/:id", deletePartido);

export default router;
