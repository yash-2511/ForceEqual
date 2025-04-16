import express from 'express';
import { getAccounts, updateStatus } from '../controller/accountController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/accounts', verifyToken, getAccounts);
router.post('/accounts/:id/status', verifyToken, updateStatus);

export default router;
