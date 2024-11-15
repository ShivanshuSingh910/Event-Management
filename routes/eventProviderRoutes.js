import express from 'express';
import { verifyToken, verifyRole } from '../middleware/authMiddleware.js';
import { createEvent, getEvents } from '../controllers/eventProviderController.js';

const router = express.Router();

router.post('/create-event', verifyToken, verifyRole('eventProvider'), createEvent);
router.get('/events', verifyToken, verifyRole('eventProvider'), getEvents);

export default router;
