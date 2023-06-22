import express from 'express';
import { createOrder, getOrders } from '../controllers/orderContoller';
import { verifyToken } from '../middleware/jwt';

const router = express.Router();

router.route('/:gigId').post(verifyToken, createOrder);
router.route('/').get(verifyToken, getOrders);

export default router;
