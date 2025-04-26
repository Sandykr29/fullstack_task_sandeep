import app from './app';
import { connectDB } from './config/db';
import { connectRedis } from './config/redisClient';

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  await connectDB();
  await connectRedis();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
