const mongoose = require('mongoose');

// MongoDB Atlas connection URI
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB Atlas database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for database connection
db.on('connected', () => {
  console.log('Connected to MongoDB Atlas database');
});

db.on('error', (err) => {
  console.error(`MongoDB Atlas connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB Atlas database');
});

// Function to gracefully close the database connection
const gracefulShutdown = () => {
  mongoose.connection.close(() => {
    console.log('MongoDB Atlas connection closed');
    process.exit(0);
  });
};

// Gracefully close the database connection on application termination
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

// Export the database connection
module.exports = db;
