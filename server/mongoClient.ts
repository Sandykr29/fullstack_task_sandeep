import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://assignment_user:HCgEj5zv8Hxwa4xO@test-cluster.6f94f5o.mongodb.net/assignment');

const taskSchema = new mongoose.Schema({
  task: String
});
const Task = mongoose.model('assignment_sandeep', taskSchema);

export default Task;
