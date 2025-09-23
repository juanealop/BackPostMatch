import { Router } from "express";
import { getReviews, createReview, updateReview, deleteReview } from "../controller/review.controller.js";

const router = Router();

// get
router.get("/reviews", getReviews);

// post
router.post("/reviews", createReview);

// put
router.put("/reviews/:id", updateReview);

// delete
router.delete("/reviews/:id", deleteReview);

export default router;
