import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  task: string;
  completed: boolean;
  createdAt?: Date;
}

const todoSchema: Schema<ITodo> = new Schema(
  {
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = mongoose.model<ITodo>('assignment_sandeep', todoSchema);

export default Todo;
