const express = require('express');
const debateRoute = express.Router();
const { validation, validationPut } = require('../middlewares/validation');
const debateController = require('../controllers/debateController');
const authMiddleware = require('../middlewares/authentication');
const checkRecipeOwnership = require('../middlewares/recipeOwnership');

// send in prep: authMiddleware for all of the functions
//send a prop : checkRecipeOwnership for put and delete

debateRoute.get('/', debateController.getDebates);
// recipeRoute.get('/stats', recipeController.getStats);
debateRoute.get('/:id', debateController.getDebate);

debateRoute.post('/',validation, debateController.createDebate);
debateRoute.put('/:id', debateController.updateDebate);
debateRoute.delete('/:id', debateController.deleteDebate);

module.exports = debateRoute;
