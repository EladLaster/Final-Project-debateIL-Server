const ArgumentModel = require('../models2/argumentModel');

async function createArgument(req, res, next) {
  try {
    const debateId = req.params.id;
    const userId = req.user.id;
    const { text } = req.body;

    const newArgument = await ArgumentModel.createArgument(debateId, userId, { text });

    if (!newArgument)
      return res.status(404).json({ success: false, message: 'Debate not found' });

    res.status(201).json({ success: true, argument: newArgument });
  } catch (err) {
    next(err);
  }
}

async function getArguments(req, res, next) {
  try {
    const debateId = req.params.id;

    const argumentsList = await ArgumentModel.getArgumentsByDebate(debateId);

    if (argumentsList === null)
      return res.status(404).json({ success: false, message: 'Debate not found' });

    res.status(200).json({ success: true, arguments: argumentsList });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createArgument,
  getArguments
};
