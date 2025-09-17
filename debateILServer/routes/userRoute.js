const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authentication');

userRoute.get('/users',userController.getUsers);
userRoute.post('/register', userController.register);
userRoute.post('/login', userController.login);
userRoute.get('/profile', authMiddleware, userController.profile);

module.exports = userRoute;
