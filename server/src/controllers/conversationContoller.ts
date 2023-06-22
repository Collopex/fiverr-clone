import { NextFunction, Request, Response } from 'express';
import Conversation from '../mongodb/models/Conversation';
import { createError } from '../utils/createError';

export const createConversation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newConversation = new Conversation({
    id: req.body.isSeller
      ? req.params.userId + req.body.to
      : req.body.to + req.params.userId,

    sellerId: req.body.isSeller ? req.params.userId : req.body.to,
    buyerId: req.body.isSeller ? req.body.to : req.params.userId,
    readBySeller: req.body.isSeller,
    readByBuyer: !req.body.isSeller,
  });

  try {
    const savedConversataion = await newConversation.save();

    res.status(201).send(savedConversataion);
  } catch (err) {
    next(err);
  }
};
export const updateConversation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateConversation = await Conversation.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: {
          ...(req.body.isSeller
            ? { readBySeller: true }
            : { readByBuyer: true }),
        },
      },
      { new: true }
    );
    res.status(200).send(updateConversation);
  } catch (err) {
    next(err);
  }
};
export const getConversation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) return next(createError(404, 'No conversation found!'));

    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};
export const getConversations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const conversations = await Conversation.find(
      req.body.isSeller
        ? { sellerId: req.params.userId }
        : {
            buyerId: req.params.userId,
          }
    ).sort({ updatedAt: -1 });
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
