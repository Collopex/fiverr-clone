import express from 'express';
import { verifyToken } from '../middleware/jwt';
import {
  getGig,
  getGigs,
  createGig,
  deleteGig,
} from '../controllers/gigController';

const router = express.Router();

router.route('/gig/:id').get(getGig);
router.route('/').get(getGigs);
router.route('/').post(verifyToken, createGig);
router.route('/:id').delete(verifyToken, deleteGig);

export default router;
