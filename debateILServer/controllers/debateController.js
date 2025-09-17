const Debate = require('../models2/debateModel');


async function getDebates(req, res, next) {
  try {
    //send a prop: req.query,req.user.id
    const debates = await Debate.getAllDebates();
    
    if (!debates.length)
      return res.status(404).json({ success: false, message: 'No debates found' });
    res.status(200).json({ success: true, debates });
  } catch (err) {
    next(err);
  }
}

async function getDebate(req, res, next) {
  try {

    const debate = await Debate.getDebateById(req.params.id);
    if (!debate)
      return res.status(404).json({ success: false, message: 'debate not found' });
    res.status(200).json({ success: true, debate });
  } catch (err) {
    next(err);
  }
}

async function createDebate(req, res, next) {
  try {
    //send a prop : ,req.user.id
    const newDebate = await Debate.createDebate(req.body);
    res.status(201).json({ success: true, newDebate });
  } catch (err) {
    next(err);
  }
}

async function updateRecipe(req, res, next) {
  try {
    const updated = await Recipe.updateRecipe(req.params.id, req.body,req.user.id);
    if (!updated) return res.status(404).json({ success: false, message: 'Recipe not found' });
    res.status(200).json({ success: true, recipe: updated });
  } catch (err) {
    next(err);
  }
}

async function deleteRecipe(req, res, next) {
  try {
    const deleted = await Recipe.deleteRecipe(req.params.id,req.user.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Recipe not found' });
    res.status(200).json({ success: true, message: 'Recipe deleted' });
  } catch (err) {
    next(err);
  }
}

async function getStats(req, res, next) {
  try {
    const stats = await Recipe.getStats();
    res.status(200).json({ success: true, ...stats });
  } catch (err) {
    next(err);
  }
}

module.exports = { getDebates, getDebate, createDebate, updateRecipe, deleteRecipe, getStats };
