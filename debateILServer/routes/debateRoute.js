const express = require('express');
const debateRoute = express.Router();
const { validation, validationPut } = require('../middlewares/validation');
const debateController = require('../controllers/debateController');
const authMiddleware = require('../middlewares/authentication');
const checkRecipeOwnership = require('../middlewares/recipeOwnership');

// send in prep: authMiddleware,
debateRoute.get('/', debateController.getDebates);
// recipeRoute.get('/stats', recipeController.getStats);
debateRoute.get('/:id', debateController.getDebate);

// recipeRoute.post('/',authMiddleware,validation, recipeController.createRecipe);
// recipeRoute.put('/:id',authMiddleware,checkRecipeOwnership, recipeController.updateRecipe);
// recipeRoute.delete('/:id',authMiddleware,checkRecipeOwnership, recipeController.deleteRecipe);

module.exports = debateRoute;
