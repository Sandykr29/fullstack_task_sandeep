import { Request, Response } from 'express';
import Todo from '../models/todoModel';

export const createTodo = async (req: Request, res: Response): Promise<void> => {
  const { task } = req.body;

  if (!task) {
    res.status(400).json({ message: 'Task is required' });
    return;
  }

  try {
    const newTodo = new Todo({
      task,
    });

    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
