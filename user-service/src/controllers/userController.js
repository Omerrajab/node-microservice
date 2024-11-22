// controllers/userController.js
const userService = require('../services/userService');


const userList = async (req, res) => {
    const { email, password } = req.body;
    try {
        const users = await userService.userList();
        res.send(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { userList };
