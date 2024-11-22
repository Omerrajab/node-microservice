const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const verifyToken = require('./utils/authMiddleware');
const setupSwagger = require('./config/swaggerSetup');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
//setupswagger

// Start the server
const PORT = process.env.PORT || 3000;
const swaggerSpec = setupSwagger(PORT);
// Serve Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// Middleware
//app.use(bodyParser.json());
app.use(express.json()); // Parses JSON payloads
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users',verifyToken, userRoutes);

// Example of protected route
app.get('/api/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});
// Database connection
connectDB(); // Connect to the database

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
