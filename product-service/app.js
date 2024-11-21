// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config(); // Load environment variables
connectDB(); // Connect to the database

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Use product routes
app.use('/api/products', productRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
