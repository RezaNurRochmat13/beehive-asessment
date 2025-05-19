import { Router } from 'express';
import * as bookController from '../controllers/book.controller';

const router = Router();

router.post('/', bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.put('/:id/borrow', bookController.borrowedBook);

export default router;
