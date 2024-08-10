import { Router } from 'express';
import { createPost, getPosts } from '../controllers/postController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

router.post('/new', authenticateToken, createPost);
router.get('/all', getPosts);

export default router;
