import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../../typings';
import { createError } from '../utils/createError';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.cookies.accessToken;
  if (!token) return next(createError(401, 'You are not authenticated!'));

  const { id, isSeller } = jwt.decode(token) as TokenPayload;
  jwt.verify(token, process.env.JWT_SECRET_KEY!, async (err) => {
    if (err) {
      return next(createError(401, 'Token is not valid!'));
    }
    req.params.userId = id;
    req.body.isSeller = isSeller;
    next();
  });
};
