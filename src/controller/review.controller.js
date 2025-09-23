import { Review } from "../model/Review.js";

export const getReviews = async (req,res) => {
  const reviews = await Review.findAll();
  return res.json(reviews);
}

export const createReview = async (req,res) => {
  const newReview = await Review.create(req.body);
  return res.json(newReview);
}

export const updateReview = async (req,res) => {
  const id = req.params.id;
  const review = await Review.findByPk(id);

  try {
    await review.update(req.body);
  } catch(error) {
    console.error("Error:",error);
  }
  return res.json(review);
}

export const deleteReview = async (req,res) => {
  const id = req.params.id
  const review = await Review.findByPk(id);
  await review.destroy();
  return res.sendStatus(204); // delete ok
}
