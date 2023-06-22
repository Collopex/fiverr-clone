import express from 'express';
import {
  createReview,
  deleteReview,
  getReviews,
} from '../controllers/reviewContoller';
import { verifyToken } from '../middleware/jwt';

const router = express.Router();

router.route('/').post(verifyToken, createReview);
router.route('/:id').get(getReviews);
router.route('/:id').delete(deleteReview);

export default router;
