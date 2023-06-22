import Gig from '../mongodb/models/Gig';
import { createError } from '../utils/createError';
import { NextFunction, Request, Response } from 'express';

export const getGig = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) next(createError(404, 'Gig not found!'));

    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query: any = req.query;

  const filters = {
    ...(query.userId && { userId: query.userId }),
    ...(query.category && { category: query.category }),
    ...(query.description && { description: query.description }),
    ...((query.min || query.max) && {
      price: {
        ...(query.min && { $gte: query.min }),
        ...(query.max && { $lte: query.max }),
      },
    }),

    ...(query.search && {
      description: { $regex: query.search, $options: 'i' },
    }),
  };

  try {
    const gigs = await Gig.find(filters).sort({ [query.sort]: -1 });
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};

export const createGig = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.isSeller)
    return next(createError(403, 'Only Sellers are allowed to create a gig!'));

  const newGig = new Gig({
    userId: req.params.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig?.userId !== req.params.userId) {
      return next(createError(403, 'You can only delete your own gig!'));
    }

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send('Gig has been deleted successfully!');
  } catch (err) {
    next(err);
  }
};
