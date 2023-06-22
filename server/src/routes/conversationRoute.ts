import express from 'express';
import {
  createConversation,
  getConversation,
  getConversations,
  updateConversation,
} from '../controllers/conversationContoller';
import { verifyToken } from '../middleware/jwt';

const router = express.Router();

router.route('/').post(verifyToken, createConversation);
router.route('/coms/:id').get(verifyToken, getConversation);
router.route('/').get(verifyToken, getConversations);
router.route('/:id').put(verifyToken, updateConversation);

export default router;
