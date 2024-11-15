import express from 'express';
import { verifyToken, verifyRole } from '../middleware/authMiddleware.js';
import { viewEvents, bookEvent } from '../controllers/customerController.js';

const router = express.Router();

router.get('/events', verifyToken, verifyRole('customer'), viewEvents);
router.post('/book-event/:id', verifyToken, verifyRole('customer'), bookEvent);

export default router;
