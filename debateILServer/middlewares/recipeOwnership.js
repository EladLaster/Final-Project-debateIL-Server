const { Recipe } = require('../models');

async function checkRecipeOwnership(req, res, next) {
  try {
    const recipeId = req.params.id;
    const userId = req.user.id;

    const recipe = await Recipe.findByPk(recipeId);
    if (!recipe) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }

    if (recipe.userId !== userId) {
      return res.status(403).json({ success: false, message: 'You do not have permission to modify this recipe' });
    }

    req.recipe = recipe;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = checkRecipeOwnership;
