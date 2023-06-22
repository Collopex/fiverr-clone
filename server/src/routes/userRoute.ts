import express from 'express';

import { getUser, deleteUser } from '../controllers/userContoller';
import { verifyToken } from '../middleware/jwt';

const router = express.Router();

router.get('/:id', getUser);
router.delete('/:id', verifyToken, deleteUser);

export default router;
