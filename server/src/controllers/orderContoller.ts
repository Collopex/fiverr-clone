import { NextFunction, Request, Response } from 'express';
import Gig from '../mongodb/models/Gig';
import Order from '../mongodb/models/Order';

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const gig = await Gig.findById(req.params.gigId);
    const newOrder = new Order({
      gigId: gig?._id,
      img: gig?.coverImg,
      title: gig?.title,
      buyerId: req.params.userId,
      sellerId: gig?.userId,
      price: gig?.price,
      payment_intent: 'Temp',
    });
    await newOrder.save();
    res.status(201).send('Successfully created order');
  } catch (err) {
    next(err);
  }
};
export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await Order.find({
      ...(req.body.isSeller
        ? { sellerId: req.params.userId }
        : { buyerId: req.params.userId }),
      isCompleted: true,
    });
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};
