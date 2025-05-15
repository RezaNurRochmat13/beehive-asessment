import { Router } from 'express';
import { createAuthor, getAuthors } from '../controllers/author.controller';

const router = Router();

router.post('/', createAuthor);
router.get('/', getAuthors);

export default router;
