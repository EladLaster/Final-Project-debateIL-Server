const ArgumentModel = require("../models2/argumentModel");

async function createArgument(req, res, next) {
  try {
    const debateId = req.params.id;
    const userId = req.user.id;
    const { text } = req.body;

    // Check if user is a participant in this debate
    const newArgument = await ArgumentModel.createArgument(debateId, userId, {
      text,
    });

    if (!newArgument)
      return res
        .status(404)
        .json({ success: false, message: "Debate not found" });

    if (newArgument === "unauthorized")
      return res
        .status(403)
        .json({
          success: false,
          message: "Only debate participants can add arguments",
        });

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
      return res
        .status(404)
        .json({ success: false, message: "Debate not found" });

    res.status(200).json({ success: true, arguments: argumentsList });
  } catch (err) {
    next(err);
  }
}

async function getAllArguments(req, res, next) {
  try {
    const argumentsList = await ArgumentModel.getAllArguments();
    res.status(200).json({ success: true, arguments: argumentsList });
  } catch (err) {
    next(err);
  }
}

async function deleteArgument(req, res, next) {
  try {
    const argumentId = req.params.argumentId;
    const userId = req.user.id;

    const result = await ArgumentModel.deleteArgument(argumentId, userId);

    if (result === "not_found")
      return res
        .status(404)
        .json({ success: false, message: "Argument not found" });

    if (result === "unauthorized")
      return res
        .status(403)
        .json({ success: false, message: "You can only delete your own arguments" });

    res.status(200).json({ success: true, message: "Argument deleted successfully" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createArgument,
  getArguments,
  getAllArguments,
  deleteArgument,
};
