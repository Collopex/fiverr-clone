import { NextFunction, Request, Response } from 'express';
import Conversation from '../mongodb/models/Conversation';
import Message from '../mongodb/models/Message';

export const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.params.userId,
    message: req.body.message,
  });
  try {
    const savedMessage = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.body.isSeller,
          readByBuyer: !req.body.isSeller,
          lastMessage: req.body.message,
        },
      },
      { new: true }
    );
    res.status(201).send(savedMessage);
  } catch (err) {
    next(err);
  }
};

export const getMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};
