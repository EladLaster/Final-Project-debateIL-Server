const express = require('express');
const userFavoriteRoute = express.Router();
const authMiddleware = require('../middlewares/authentication');
const userFavoriteController = require('../controllers/userFavoriteController');

userFavoriteRoute.post('/:recipeId', authMiddleware, userFavoriteController.add);
userFavoriteRoute.delete('/:recipeId', authMiddleware, userFavoriteController.remove);
userFavoriteRoute.get('/', authMiddleware, userFavoriteController.get);

module.exports = userFavoriteRoute;
