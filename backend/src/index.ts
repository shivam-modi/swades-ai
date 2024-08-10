import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';
import sequelize from './config/db';
import env from './config/env';
import { notFoundHandler } from './middleware/notFoundHandler';
import { errorHandler } from './middleware/errorHandler';
import morgan from 'morgan';

const app = express();
const PORT = parseInt(env.PORT, 10);

// Middleware
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000'; 

// CORS configuration
app.use(cors({
  origin: corsOrigin, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'x-device-id'], 
  credentials: true, // Allow credentials (cookies, authorization headers)
}));
app.use(morgan('combined')); 
app.use(bodyParser.json({ limit: '50mb' }));  // Handles JSON payloads
app.use(bodyParser.urlencoded({ extended: true }));  // Handles URL-encoded form data
app.use(cookieParser());

// Routes
app.use('/v1/auth', authRoutes);
app.use('/v1/posts', postRoutes);
app.use("/health", (req, res) => {
  return res.status(200).send("healthy");
});
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
