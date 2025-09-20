const db = require("../models");
const { Argument, Debate } = db;

async function createArgument(debateId, userId, data) {
  const debate = await Debate.findByPk(debateId);
  if (!debate) return null;

  // Check if user is a participant in this debate
  if (debate.user1_id !== userId && debate.user2_id !== userId) {
    return "unauthorized";
  }

  const argument = await Argument.create({
    ...data,
    debate_id: debateId,
    user_id: userId,
  });

  // Reload with user data
  const argumentWithUser = await Argument.findByPk(argument.id, {
    include: [
      {
        model: db.User,
        as: "author",
        attributes: ["id", "firstName", "lastName", "email"],
      },
    ],
  });

  return argumentWithUser.toJSON();
}

async function getArgumentsByDebate(debateId) {
  const debate = await Debate.findByPk(debateId);
  if (!debate) return null;

  const argumentsList = await Argument.findAll({
    where: { debate_id: debateId },
    include: [
      {
        model: db.User,
        as: "author",
        attributes: ["id", "firstName", "lastName", "email"],
      },
    ],
    order: [["createdAt", "ASC"]],
  });

  return argumentsList.map((arg) => arg.toJSON());
}

async function getAllArguments() {
  const argumentsList = await Argument.findAll({
    include: [
      {
        model: db.User,
        as: "author",
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: db.Debate,
        as: "debate",
        attributes: ["id", "topic", "status"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });

  return argumentsList.map((arg) => arg.toJSON());
}

async function deleteArgument(argumentId, userId) {
  const argument = await Argument.findByPk(argumentId);
  if (!argument) return "not_found";

  // Check if user is the author of the argument
  if (argument.user_id !== userId) {
    return "unauthorized";
  }

  await argument.destroy();
  return "success";
}

module.exports = {
  createArgument,
  getArgumentsByDebate,
  getAllArguments,
  deleteArgument,
};
