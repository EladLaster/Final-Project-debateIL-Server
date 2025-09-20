const db = require('../models');
const { Argument, Debate } = db;

async function createArgument(debateId, userId, data) {
  const debate = await Debate.findByPk(debateId);
  if (!debate) 
    return null;

  // Check if user is a participant in this debate
  if (debate.user1_id !== userId && debate.user2_id !== userId) {
    return 'unauthorized';
  }

  const argument = await Argument.create({
    ...data,
    debate_id: debateId,
    user_id: userId
  });

  // Reload with user data
  const argumentWithUser = await Argument.findByPk(argument.id, {
    include: [{
      model: db.User,
      as: 'author',
      attributes: ['id', 'firstName', 'lastName', 'email']
    }]
  });

  return argumentWithUser.toJSON();
}

async function getArgumentsByDebate(debateId) {
  const debate = await Debate.findByPk(debateId);
  if (!debate) return null;

  const argumentsList = await Argument.findAll({
    where: { debate_id: debateId },
    include: [{
      model: db.User,
      as: 'author',
      attributes: ['id', 'firstName', 'lastName', 'email']
    }],
    order: [['createdAt', 'ASC']]
  });

  return argumentsList.map(arg => arg.toJSON());
}

module.exports = {
  createArgument,
  getArgumentsByDebate
};
