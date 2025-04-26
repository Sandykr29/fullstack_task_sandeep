import { Router } from 'express';
import { createTodo, getTodos } from '../controllers/todoController';

const router = Router();

router.post('/todos', createTodo);
router.get('/todos', getTodos);

export default router;
