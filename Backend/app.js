require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const db = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const folderRoutes = require('./routes/folderRoutes');
const authRoutes = require('./routes/authRoutes')

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());  // Enable all CORS requests
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', folderRoutes);
app.use('/api', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
