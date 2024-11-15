import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/DatabaseConfig.js';


import authRoutes from './routes/authRoutes.js'
import adminRoutes from './routes/adminRoutes.js';
import eventProviderRoutes from './routes/eventProviderRoutes.js';
import customerRoutes from './routes/customerRoutes.js';

// Configure dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Default Route
app.get('/', (req, res) => {
  res.send('Hello, From event management');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/event', eventProviderRoutes);
app.use('/api/customer', customerRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
