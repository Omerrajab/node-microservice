// services/userService.js
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

// Register new user
const registerUser = async (userDetails) => {
    try {
        const { username, email, password } = userDetails;
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const user = new User(userDetails);
        await user.save();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Authenticate and login user
const authenticateUser = async (email, password) => {
    try {

        console.log()
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Invalid email or password');
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return { user, token };
    } catch (error) {
        throw new Error(error.message);
    }
};

const userList = async () => {
    const users = await User.find();
    return users;
}

module.exports = { registerUser, authenticateUser, userList };
