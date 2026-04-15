import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { createUser, getUsers } from '../controllers/authController.js';

const router = express.Router();

// Example routes
router.post('/', authMiddleware, createUser);
router.get('/', authMiddleware, getUsers);

export default router;