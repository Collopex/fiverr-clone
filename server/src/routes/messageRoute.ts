import express from 'express';
import { createMessage, getMessage } from '../controllers/messageContoller';
import { verifyToken } from '../middleware/jwt';

const router = express.Router();

router.route('/').post(verifyToken, createMessage);
router.route('/:id').get(verifyToken, getMessage);

export default router;
