import { NextFunction, Request, Response } from 'express';

import User from '../mongodb/models/User';
import { createError } from '../utils/createError';

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findById(req.params.id);

  if (req.params.userId !== user?._id.toString()) {
    return next(
      createError(403, 'You do not have permission to delete this user!')
    );
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send('User deleted successfully!');
};
