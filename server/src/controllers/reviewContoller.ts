import { NextFunction, Request, Response } from 'express';
import Gig from '../mongodb/models/Gig';
import Review from '../mongodb/models/Review';
import { createError } from '../utils/createError';

export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.isSeller)
    return next(createError(403, 'Sellers cannot  create a review!'));

  const newReview = new Review({
    userId: req.params.userId,
    gigId: req.body.gigId,
    description: req.body.description,
    star: req.body.star,
  });
  try {
    const review = await Review.findOne({
      userId: req.params.userId,
      gigId: req.body.gigId,
    });
    if (review)
      return next(
        createError(403, 'You have already created a review for this gig!')
      );

    const savedReview = await newReview.save();

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });

    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};
export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.find({ gigId: req.params.id });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};
export const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
