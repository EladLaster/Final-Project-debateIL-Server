const db = require('../models');
const { Recipe, User, UserFavorites } = db;

async function addFavorite(userId, recipeId) {
  return await UserFavorites.create({ userId, recipeId });
}

async function removeFavorite(userId, recipeId) {
  const fav = await UserFavorites.findOne({ where: { userId, recipeId } });
  if (!fav) return null;
  await fav.destroy(); 
  return true;
}

async function getFavorites(userId) {
  const user = await User.findByPk(userId, {
    include: {
      model: Recipe,
      as: 'favorites',
      through: { attributes: [] }
    }
  });
  return user?.favorites || [];
}



module.exports = { addFavorite, removeFavorite, getFavorites };
