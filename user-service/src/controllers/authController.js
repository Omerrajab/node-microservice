// controllers/userController.js
const userService = require('../services/userService');

// User Registration Handler
const registerUser = async (req, res) => {
  try {
    const user = await userService.registerUser( req.body); 
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// User Login Handler
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { user, token } = await userService.authenticateUser(email, password);
    res.json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = { registerUser, loginUser };