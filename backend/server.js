import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import connectDB from './config/db.js';
import { requireAuth } from './middleware/auth.middleware.js';
import webhookRoutes from './routes/webhooks.routes.js';
import chatRoutes from './routes/chat.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Global Middleware Configuration
app.use(cors({ origin: 'https://groqui-rust.vercel.app/', credentials: true })); 
app.use('/api/webhooks', webhookRoutes);
app.use(express.json());
// Global Clerk Interceptor (Exposes authorization states across all endpoints)
app.use(clerkMiddleware());
// app.use((req, res, next) => {
//     console.log(req.method, req.originalUrl);
//     next();
// });

app.use('/api/chat', chatRoutes);

// Public Route (Accessible by anyone)
app.get('/api/health', (req, res) => {
  res.json({ status: 'active' });
});

app.listen(PORT, () => {
  console.log(`Backend server online on port ${PORT}`);
});