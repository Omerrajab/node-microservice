// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: This endpoint registers a new user with username, email, password, and additional user details like name, phone number, and address.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Unique username for the user
 *               email:
 *                 type: string
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 description: The password for the user
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *               phoneNumber:
 *                 type: string
 *                 description: User's phone number (10-digit)
 *               address:
 *                 type: array
 *                 description: User's address array, can contain multiple addresses
 *                 items:
 *                   type: object
 *                   properties:
 *                     label:
 *                       type: string
 *                       description: Label for the address (e.g., Home, Office)
 *                     street:
 *                       type: string
 *                       description: Street address
 *                     city:
 *                       type: string
 *                       description: City of the address
 *                     state:
 *                       type: string
 *                       description: State of the address
 *                     country:
 *                       type: string
 *                       description: Country of the address
 *                     postalCode:
 *                       type: string
 *                       description: Postal code of the address
 *               role:
 *                 type: string
 *                 description: Role of the user (customer, admin, vendor)
 *                 enum:
 *                   - customer
 *                   - admin
 *                   - vendor
 *               wishlist:
 *                 type: array
 *                 description: List of products the user wishes to purchase
 *                 items:
 *                   type: string
 *                   description: Product ID for the wishlist
 *               cart:
 *                 type: array
 *                 description: List of products the user has added to their cart
 *                 items:
 *                   type: object
 *                   properties:
 *                     product:
 *                       type: string
 *                       description: Product ID for the item in the cart
 *                     quantity:
 *                       type: integer
 *                       description: Quantity of the product in the cart
 *               isVerified:
 *                 type: boolean
 *                 description: Whether the user has verified their account
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique ID of the newly created user
 *                 username:
 *                   type: string
 *                   description: The user's username
 *                 email:
 *                   type: string
 *                   description: The user's email address
 *                 firstName:
 *                   type: string
 *                   description: The user's first name
 *                 lastName:
 *                   type: string
 *                   description: The user's last name
 *                 phoneNumber:
 *                   type: string
 *                   description: The user's phone number
 *                 role:
 *                   type: string
 *                   description: The user's role (e.g., customer, admin)
 *       400:
 *         description: Invalid request, missing or incorrect fields
 *       409:
 *         description: User with the provided username or email already exists
 *       500:
 *         description: Internal server error
 */

router.post('/register', authController.registerUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     description: This endpoint logs in a user by email and password and returns a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful with a JWT token
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', authController.loginUser);


module.exports = router;
// "email": "john.doe@example.com",
//"password": "Password123!",