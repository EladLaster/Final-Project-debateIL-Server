const db = require('../models');
const { Argument, Debate } = db;

async function createArgument(debateId, userId, data) {
  const debate = await Debate.findByPk(debateId);
  if (!debate) 
    return null;

  const argument = await Argument.create({
    ...data,
    debate_id: debateId,
    user_id: userId
  });

  return argument.toJSON();
}

async function getArgumentsByDebate(debateId) {
  const debate = await Debate.findByPk(debateId);
  if (!debate) return null;

  const argumentsList = await Argument.findAll({
    where: { debate_id: debateId },
    order: [['createdAt', 'ASC']]
  });

  return argumentsList.map(arg => arg.toJSON());
}

module.exports = {
  createArgument,
  getArgumentsByDebate
};
