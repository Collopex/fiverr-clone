import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../mongodb/models/User';
import { createError } from '../utils/createError';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 8);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send('User has been created successfully');
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, 'User not found'));

    const passwordCheck = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordCheck)
      return next(createError(401, 'Wrong username or password!'));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_SECRET_KEY!
    );

    const { password, ...info } = user._doc;
    res
      .cookie('accessToken', token, {
        httpOnly: true,
        maxAge: 4050240560250,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .clearCookie('accessToken', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .send('User has been logged out');
};
