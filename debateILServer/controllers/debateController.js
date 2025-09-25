const Debate = require("../models2/debateModel");

async function getDebates(req, res, next) {
  try {
    //send a prop: req.query,req.user.id
    const debates = await Debate.getAllDebates();

    if (!debates.length)
      return res
        .status(404)
        .json({ success: false, message: "No debates found" });
    res.status(200).json({ success: true, debates });
  } catch (err) {
    next(err);
  }
}

async function getPublicDebates(req, res, next) {
  try {
    // Get all debates without authentication
    const debates = await Debate.getAllDebates();

    if (!debates.length)
      return res
        .status(404)
        .json({ success: false, message: "No debates found" });
    res.status(200).json({ success: true, debates });
  } catch (err) {
    next(err);
  }
}

async function getPublicDebate(req, res, next) {
  try {
    const debate = await Debate.getDebateById(req.params.id);
    if (!debate)
      return res
        .status(404)
        .json({ success: false, message: "debate not found" });
    res.status(200).json({ success: true, debate });
  } catch (err) {
    next(err);
  }
}

async function getDebate(req, res, next) {
  try {
    const debate = await Debate.getDebateById(req.params.id);
    if (!debate)
      return res
        .status(404)
        .json({ success: false, message: "debate not found" });
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
      return res
        .status(404)
        .json({ success: false, message: "debate not found" });
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
      return res
        .status(404)
        .json({ success: false, message: "debate not found" });
    res.status(200).json({ success: true, message: "debate deleted" });
  } catch (err) {
    next(err);
  }
}

async function registerUserToDebate(req, res, next) {
  try {
    const { id } = req.params;
    // Use userId from request body if provided, otherwise fallback to JWT user
    const userId = req.body.userId || req.user.id;

    console.log("Register User to Debate Debug:");
    console.log("- Debate ID:", id);
    console.log("- Request body userId:", req.body.userId);
    console.log("- JWT user id:", req.user.id);
    console.log("- Final userId used:", userId);

    // Validate that the userId from request matches the authenticated user
    if (req.body.userId && req.body.userId !== req.user.id) {
      console.log("❌ Security violation: userId mismatch");
      return res.status(403).json({
        success: false,
        message: "You can only register yourself for debates",
      });
    }

    const result = await Debate.registerUserToDebate(id, userId);

    if (!result.success) {
      return res.status(400).json(result);
    }

    console.log("✅ User registered successfully:", userId);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

async function finishDebate(req, res, next) {
  try {
    const { id } = req.params;
    const { score_user1, score_user2 } = req.body;

    const result = await Debate.finishDebate(id, {
      score_user1,
      score_user2,
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

async function getStats(req, res, next) {
  try {
    const stats = await Debate.getStats();
    res.status(200).json({ success: true, ...stats });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getDebates,
  getPublicDebates,
  getPublicDebate,
  getDebate,
  createDebate,
  updateDebate,
  deleteDebate,
  registerUserToDebate,
  finishDebate,
  getStats,
};
