const db = require('../models');
const { Debate } = db;

async function voteUser1(req, res, next) {
  try {
    const debateId = req.params.id;

    const debate = await Debate.findByPk(debateId);
    if (!debate) return res.status(404).json({ success: false, message: 'Debate not found' });

    await debate.increment('score_user1');
    
    // Reload the debate to get updated values
    const updatedDebate = await Debate.findByPk(debateId);

    res.status(200).json({ success: true, debate: updatedDebate });
  } catch (err) {
    next(err);
  }
}

async function voteUser2(req, res, next) {
  try {
    const debateId = req.params.id;

    const debate = await Debate.findByPk(debateId);
    if (!debate) return res.status(404).json({ success: false, message: 'Debate not found' });

    await debate.increment('score_user2');
    
    // Reload the debate to get updated values
    const updatedDebate = await Debate.findByPk(debateId);

    res.status(200).json({ success: true, debate: updatedDebate });
  } catch (err) {
    next(err);
  }
}

async function getVotes(req, res, next) {
  try {
    const debateId = req.params.id;

    const debate = await Debate.findByPk(debateId, {
      attributes: ['id', 'topic', 'score_user1', 'score_user2']
    });
    if (!debate) return res.status(404).json({ success: false, message: 'Debate not found' });

    res.status(200).json({ success: true, scores: debate });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  voteUser1,
  voteUser2,
  getVotes
};
