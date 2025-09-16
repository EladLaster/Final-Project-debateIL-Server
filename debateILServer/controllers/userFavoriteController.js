const {  addFavorite, removeFavorite, getFavorites  } = require('../models2/userFavoriteModel');

async function add(req, res, next) {
  try {
    const favorite = await addFavorite(req.user.id, req.params.recipeId);
    res.status(201).json({ success: true, favorite });
  } catch (err) { next(err); }
}

async function remove(req, res, next) {
  try {
    const deleted = await removeFavorite(req.user.id, req.params.recipeId);
    if (!deleted) return res.status(404).json({ success: false, message: 'Favorite not found' });
    res.status(200).json({ success: true });
  } catch (err) { next(err); }
}

async function get(req, res, next) {
  try {
    const favorites = await getFavorites(req.user.id);
    res.status(200).json({ success: true, favorites });
  } catch (err) { next(err); }
}

module.exports = { add, remove, get };
