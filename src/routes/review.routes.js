import { Router } from "express";
import {
  getReviews,
  getReviewsByIdPartido,
  getReviewsByIdUsuario,
  createReview,
  updateReview,
  deleteReview
} from "../controller/review.controller.js";

const router = Router();

// get
router.get("/reviews", getReviews);
router.get("/reviews/partido/:idPartido", getReviewsByIdPartido);
router.get("/reviews/usuario/:idUsuario", getReviewsByIdUsuario);

// post
router.post("/reviews", createReview);

// put
router.put("/reviews/:id", updateReview);

// delete
router.delete("/reviews/:id", deleteReview);

export default router;
