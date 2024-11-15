import express from 'express';
import { verifyToken, verifyRole } from '../middleware/authMiddleware.js';
import { getEventProviders, getCustomers, blockUser } from '../controllers/adminController.js';

const router = express.Router();

router.get('/event-providers', verifyToken, verifyRole('admin'), getEventProviders);
router.get('/customers', verifyToken, verifyRole('admin'), getCustomers);
router.put('/block-user/:id', verifyToken, verifyRole('admin'), blockUser);

export default router;
