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

async function updateDebate(req, res, next) {
  try {
    //send a prop : ,req.user.id
    const updated = await Debate.updateDebate(req.params.id, req.body);
    if (!updated) 
      return res.status(404).json({ success: false, message: 'debate not found' });
    res.status(200).json({ success: true, updated });
  } catch (err) {
    next(err);
  }
}

async function deleteDebate(req, res, next) {
  try {
    //send a prop : ,req.user.id
    const deleted = await Debate.deleteDebate(req.params.id);
    if (!deleted) 
      return res.status(404).json({ success: false, message: 'debate not found' });
    res.status(200).json({ success: true, message: 'debate deleted' });
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

module.exports = { getDebates, getDebate, createDebate, updateDebate, deleteDebate, getStats };
