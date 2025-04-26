import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors())

app.use(express.json());
app.use('/api', todoRoutes);

export default app;
